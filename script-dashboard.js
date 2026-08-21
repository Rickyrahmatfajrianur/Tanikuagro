// ===== Konfigurasi Google Sheets =====
// Isi PUBLISHED_CSV_URL dengan link "Publish to web" (format CSV) dari sheet "DAFTAR BARANG" kamu.
const PUBLISHED_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFAW59sO9oG4SuLeQJFe2i9zsSZXxOZ_tT5aXkhkQekJ4dlHrpSyqvm5CLf-AsgHhYzC1hW7n7xFH1/pub?gid=1024901898&single=true&output=csv";

// Ambang batas "stok menipis" bawaan (mengikuti aturan yang sudah dipakai di file kios kamu: < 5)
const DEFAULT_STOK_MIN = 5;

// Kamus kata kunci nama produk -> kategori, dipakai untuk menebak kategori otomatis
// karena sheet "DAFTAR BARANG" tidak punya kolom kategori sendiri.
const CATEGORY_MAP = {"prima-laris":"herbisida","gisentro":"herbisida","atradex":"herbisida","cornelia":"herbisida","tandem":"fungisida","abacel":"insektisida","emacel":"insektisida","score":"fungisida","prevathon":"insektisida","amistartop":"fungisida","stadium":"insektisida","curacron":"insektisida","decis":"insektisida","demolish":"insektisida","glufo":"herbisida","roundup":"herbisida","bentop":"herbisida","gempur":"herbisida","gramoxone":"herbisida","dosdet":"zpt","ultradap":"pupuk","dangke":"insektisida","regent":"insektisida","marshal":"insektisida","antracol":"fungisida","matador":"insektisida","topsin":"fungisida","mipcinta":"insektisida","toxedown":"insektisida","starlon":"herbisida","garlon":"herbisida","kresna":"herbisida","gibas":"herbisida","grasso":"herbisida","jump":"herbisida","em4":"lainnya","vampyr":"insektisida","rumpas":"herbisida","kayabas":"herbisida","santrel":"zpt","supremo":"herbisida","ok":"herbisida","bio":"herbisida","mkp":"pupuk","vikar":"zpt","agus":"insektisida","macan":"herbisida","basis":"herbisida","wp":"zpt","meurtieur":"insektisida","tigatop":"herbisida","sofia":"herbisida","ulate":"insektisida","rambo":"herbisida","power":"pupuk","primazeb":"fungisida","bion":"fungisida"};

const CATEGORY_LABELS = {
  herbisida:"Herbisida", fungisida:"Fungisida", insektisida:"Insektisida", akarisida:"Akarisida",
  nematisida:"Nematisida", moluskisida:"Moluskisida", rodentisida:"Rodentisida", bakterisida:"Bakterisida",
  zpt:"ZPT", perekat:"Perekat & Surfaktan", pupuk:"Pupuk", benih:"Benih", biopestisida:"Biopestisida",
  alat:"Alat Pertanian", sparepart:"Spare Part", lainnya:"Lainnya",
};

function guessCategory(namaBarang){
  const firstWord = (namaBarang || "").trim().split(/\s+/)[0].toLowerCase();
  const cat = CATEGORY_MAP[firstWord];
  return cat ? CATEGORY_LABELS[cat] : "-";
}

let stockData = [];

function computeStatus(stok, stokMin){
  const s = parseFloat(stok);
  const min = parseFloat(stokMin) || DEFAULT_STOK_MIN;
  if(isNaN(s) || s <= 0) return "habis";
  if(s <= min) return "menipis";
  return "aman";
}

function statusLabel(status){
  if(status === "aman") return "✓ Aman";
  if(status === "menipis") return "⚠ Menipis";
  return "✕ Habis";
}

// Cari baris header di dalam data mentah CSV (mengatasi baris judul/kosong di atas tabel asli)
function findHeaderRow(rows){
  for(let i = 0; i < rows.length; i++){
    const row = rows[i].map(c => (c || "").toString().trim().toLowerCase());
    if(row.includes("kode barang") && row.includes("nama barang")){
      return i;
    }
  }
  return -1;
}

async function loadStockData(){
  const tbody = document.getElementById("stockTableBody");
  const lastSync = document.getElementById("lastSync");
  const setupBanner = document.getElementById("setupBanner");

  if(!PUBLISHED_CSV_URL){
    setupBanner.style.display = "flex";
    tbody.innerHTML = '<tr><td colspan="6" class="empty-row">Belum terhubung ke spreadsheet. Ikuti panduan setup untuk mulai memantau stok.</td></tr>';
    lastSync.textContent = "Belum terkonfigurasi";
    updateStats([]);
    return;
  }

  setupBanner.style.display = "none";
  tbody.innerHTML = '<tr><td colspan="6" class="loading-row">Memuat data stok...</td></tr>';

  try{
    const res = await fetch(PUBLISHED_CSV_URL);
    if(!res.ok) throw new Error("Gagal mengambil data, status " + res.status);
    const text = await res.text();
    const result = Papa.parse(text, { header: false, skipEmptyLines: false });
    const rows = result.data || [];

    const headerIdx = findHeaderRow(rows);
    if(headerIdx === -1){
      throw new Error("Kolom 'Kode Barang' / 'Nama Barang' tidak ditemukan di sheet ini.");
    }

    const headerRow = rows[headerIdx].map(c => (c || "").toString().trim().toLowerCase());
    const idxKode = headerRow.indexOf("kode barang");
    const idxNama = headerRow.indexOf("nama barang");
    const idxSatuan = headerRow.indexOf("satuan");
    const idxTotalAkhir = headerRow.indexOf("total akhir");

    const dataRows = rows.slice(headerIdx + 1);

    stockData = dataRows
      .map(r => {
        const nama = (r[idxNama] || "").toString().trim();
        const kode = (r[idxKode] || "").toString().trim();
        const satuan = (r[idxSatuan] || "").toString().trim();
        const stokRaw = idxTotalAkhir > -1 ? r[idxTotalAkhir] : "";
        const stok = (stokRaw === undefined || stokRaw === null || stokRaw === "") ? "0" : stokRaw.toString().trim();
        return {
          id: kode,
          nama: nama,
          kategori: guessCategory(nama),
          stok: stok,
          satuan: satuan,
          stokMin: DEFAULT_STOK_MIN,
          status: computeStatus(stok, DEFAULT_STOK_MIN),
        };
      })
      .filter(p => p.nama); // buang baris kosong

    if(stockData.length === 0){
      tbody.innerHTML = '<tr><td colspan="6" class="empty-row">Data barang tidak ditemukan. Periksa kembali sheet "DAFTAR BARANG" kamu.</td></tr>';
    }

    renderTable();
    updateStats(stockData);

    const now = new Date();
    lastSync.textContent = "Diperbarui: " + now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  } catch(err){
    tbody.innerHTML = '<tr><td colspan="6" class="empty-row">Gagal memuat data. Periksa kembali link spreadsheet kamu.</td></tr>';
    lastSync.textContent = "Gagal memuat";
    console.warn("Gagal memuat data stok:", err);
  }
}

function updateStats(data){
  document.getElementById("statTotal").textContent = data.length;
  document.getElementById("statAman").textContent = data.filter(p => p.status === "aman").length;
  document.getElementById("statMenipis").textContent = data.filter(p => p.status === "menipis").length;
  document.getElementById("statHabis").textContent = data.filter(p => p.status === "habis").length;
}

function renderTable(){
  const tbody = document.getElementById("stockTableBody");
  const searchTerm = document.getElementById("stockSearch").value.trim().toLowerCase();
  const statusFilter = document.getElementById("filterStatus").value;

  let filtered = stockData.filter(p => {
    const matchSearch = !searchTerm || p.nama.toLowerCase().includes(searchTerm);
    const matchStatus = statusFilter === "all" || p.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const order = { habis: 0, menipis: 1, aman: 2 };
  filtered.sort((a, b) => order[a.status] - order[b.status]);

  if(filtered.length === 0){
    tbody.innerHTML = '<tr><td colspan="6" class="empty-row">Tidak ada produk yang cocok.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(p => `
    <tr>
      <td class="prod-name">${p.nama}</td>
      <td>${p.kategori || "-"}</td>
      <td class="stok-val">${p.stok || "0"}</td>
      <td>${p.satuan || "-"}</td>
      <td class="stok-val">${p.stokMin}</td>
      <td><span class="status-badge status-${p.status}">${statusLabel(p.status)}</span></td>
    </tr>
  `).join("");
}

document.getElementById("stockSearch").addEventListener("input", renderTable);
document.getElementById("filterStatus").addEventListener("change", renderTable);

document.getElementById("refreshBtn").addEventListener("click", (e) => {
  const btn = e.currentTarget;
  btn.classList.add("spinning");
  loadStockData().finally(() => {
    setTimeout(() => btn.classList.remove("spinning"), 500);
  });
});

loadStockData();

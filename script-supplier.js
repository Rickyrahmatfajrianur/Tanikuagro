// ===== Konfigurasi Google Sheets =====
// Sama dengan sumber data Stok Masuk — sheet "RESTOK BARANG"
const PUBLISHED_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFAW59sO9oG4SuLeQJFe2i9zsSZXxOZ_tT5aXkhkQekJ4dlHrpSyqvm5CLf-AsgHhYzC1hW7n7xFH1/pub?gid=1530203111&single=true&output=csv";

let supplierData = [];

function findHeaderRow(rows){
  for(let i = 0; i < rows.length; i++){
    const row = rows[i].map(c => (c || "").toString().trim().toLowerCase());
    if(row.includes("tanggal") && row.includes("nama barang") && row.includes("distributor")){
      return i;
    }
  }
  return -1;
}

function formatRupiah(n){
  const num = parseFloat(n) || 0;
  return "Rp " + num.toLocaleString("id-ID");
}

function parseTanggalToDate(val){
  if(!val) return null;
  const num = parseFloat(val);
  if(!isNaN(num) && num > 20000 && num < 90000){
    return new Date((num - 25569) * 86400 * 1000);
  }
  const d = new Date(val);
  return isNaN(d.getTime()) ? null : d;
}

function formatTanggal(val){
  if(!val) return "-";
  const num = parseFloat(val);
  if(!isNaN(num) && num > 20000 && num < 90000){
    const date = new Date((num - 25569) * 86400 * 1000);
    return date.toLocaleDateString("id-ID", { day:"2-digit", month:"short", year:"numeric" });
  }
  return val;
}

async function loadSupplierData(){
  const tbody = document.getElementById("stockTableBody");
  const lastSync = document.getElementById("lastSync");
  const setupBanner = document.getElementById("setupBanner");

  if(!PUBLISHED_CSV_URL){
    setupBanner.style.display = "flex";
    tbody.innerHTML = '<tr><td colspan="5" class="empty-row">Belum terhubung ke spreadsheet.</td></tr>';
    lastSync.textContent = "Belum terkonfigurasi";
    updateStats([]);
    return;
  }

  setupBanner.style.display = "none";
  tbody.innerHTML = '<tr><td colspan="5" class="loading-row">Memuat data...</td></tr>';

  try{
    const res = await fetch(PUBLISHED_CSV_URL);
    if(!res.ok) throw new Error("Gagal mengambil data, status " + res.status);
    const text = await res.text();
    const result = Papa.parse(text, { header: false, skipEmptyLines: false });
    const rows = result.data || [];

    const headerIdx = findHeaderRow(rows);
    if(headerIdx === -1){
      throw new Error("Kolom yang dibutuhkan tidak ditemukan di sheet ini.");
    }

    const headerRow = rows[headerIdx].map(c => (c || "").toString().trim().toLowerCase());
    const idxTanggal = headerRow.indexOf("tanggal");
    const idxDistributor = headerRow.indexOf("distributor");
    const idxNama = headerRow.indexOf("nama barang");
    const idxBanyak = headerRow.indexOf("banyak barang");
    const idxTotal = headerRow.indexOf("total");

    const dataRows = rows.slice(headerIdx + 1);

    // Kumpulkan transaksi mentah dulu
    const transaksi = dataRows
      .map(r => ({
        tanggal: (r[idxTanggal] || "").toString().trim(),
        distributor: (r[idxDistributor] || "").toString().trim(),
        nama: (r[idxNama] || "").toString().trim(),
        banyak: parseFloat(r[idxBanyak]) || 0,
        total: parseFloat((r[idxTotal] || "").toString().replace(/[^0-9.-]/g, "")) || 0,
      }))
      .filter(p => p.nama && p.distributor);

    // Kelompokkan per distributor
    const grouped = {};
    transaksi.forEach(t => {
      if(!grouped[t.distributor]){
        grouped[t.distributor] = { nama: t.distributor, jumlahTransaksi: 0, totalBarang: 0, totalNilai: 0, terakhirRaw: null, terakhirDate: null };
      }
      const g = grouped[t.distributor];
      g.jumlahTransaksi += 1;
      g.totalBarang += t.banyak;
      g.totalNilai += t.total;
      const tgl = parseTanggalToDate(t.tanggal);
      if(tgl && (!g.terakhirDate || tgl > g.terakhirDate)){
        g.terakhirDate = tgl;
        g.terakhirRaw = t.tanggal;
      }
    });

    supplierData = Object.values(grouped);

    if(supplierData.length === 0){
      tbody.innerHTML = '<tr><td colspan="5" class="empty-row">Belum ada data supplier yang tercatat.</td></tr>';
    }

    renderTable();
    updateStats(transaksi);

    const now = new Date();
    lastSync.textContent = "Diperbarui: " + now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  } catch(err){
    tbody.innerHTML = '<tr><td colspan="5" class="empty-row">Gagal memuat data. Periksa kembali link spreadsheet kamu.</td></tr>';
    lastSync.textContent = "Gagal memuat";
    console.warn("Gagal memuat data supplier:", err);
  }
}

function updateStats(transaksi){
  document.getElementById("statTotal").textContent = supplierData.length;
  document.getElementById("statTransaksi").textContent = transaksi.length;
  const totalNilai = transaksi.reduce((sum, t) => sum + t.total, 0);
  document.getElementById("statNilai").textContent = formatRupiah(totalNilai);
}

function renderTable(){
  const tbody = document.getElementById("stockTableBody");
  const searchTerm = document.getElementById("stockSearch").value.trim().toLowerCase();

  let filtered = supplierData.filter(s => !searchTerm || s.nama.toLowerCase().includes(searchTerm));

  // Urutkan dari yang paling banyak transaksi
  filtered = filtered.slice().sort((a, b) => b.jumlahTransaksi - a.jumlahTransaksi);

  if(filtered.length === 0){
    tbody.innerHTML = '<tr><td colspan="5" class="empty-row">Tidak ada supplier yang cocok.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(s => `
    <tr>
      <td class="prod-name">${s.nama}</td>
      <td class="stok-val">${s.jumlahTransaksi}</td>
      <td class="stok-val">${s.totalBarang}</td>
      <td class="stok-val">${formatRupiah(s.totalNilai)}</td>
      <td>${formatTanggal(s.terakhirRaw)}</td>
    </tr>
  `).join("");
}

document.getElementById("stockSearch").addEventListener("input", renderTable);

document.getElementById("refreshBtn").addEventListener("click", (e) => {
  const btn = e.currentTarget;
  btn.classList.add("spinning");
  loadSupplierData().finally(() => {
    setTimeout(() => btn.classList.remove("spinning"), 500);
  });
});

loadSupplierData();

// ===== Toggle sidebar (mobile) =====
(function(){
  const sidebar = document.getElementById("dashSidebar");
  const toggleBtn = document.getElementById("sidebarToggle");
  const overlay = document.getElementById("sidebarOverlay");
  if(!sidebar || !toggleBtn || !overlay) return;

  function openSidebar(){
    sidebar.classList.add("open");
    overlay.classList.add("open");
  }
  function closeSidebar(){
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
  }

  toggleBtn.addEventListener("click", openSidebar);
  overlay.addEventListener("click", closeSidebar);

  window.addEventListener("resize", () => {
    if(window.innerWidth > 900) closeSidebar();
  });
})();

// ===== Menu sidebar "Segera Hadir" =====
(function(){
  const soonLinks = document.querySelectorAll(".soon-nav");
  soonLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const label = link.dataset.label || "Menu ini";
      let msg = document.getElementById("soonMsg");
      if(!msg){
        msg = document.createElement("div");
        msg.id = "soonMsg";
        msg.style.cssText = "position:fixed; top:16px; left:50%; transform:translateX(-50%); background:#0B2A44; color:#fff; padding:11px 18px; border-radius:11px; font-size:13px; font-weight:600; z-index:999; box-shadow:0 10px 26px rgba(0,0,0,0.22); opacity:0; transition:opacity .25s ease; pointer-events:none;";
        document.body.appendChild(msg);
      }
      msg.textContent = "🚧 " + label + " akan segera hadir";
      msg.style.opacity = "1";
      clearTimeout(window._soonMsgTimer);
      window._soonMsgTimer = setTimeout(() => { msg.style.opacity = "0"; }, 2200);
    });
  });
})();

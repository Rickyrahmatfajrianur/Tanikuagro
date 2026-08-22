// ===== Konfigurasi Google Sheets =====
// Isi PUBLISHED_CSV_URL dengan link "Publish to web" (format CSV) dari sheet "RESTOK BARANG" kamu.
const PUBLISHED_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFAW59sO9oG4SuLeQJFe2i9zsSZXxOZ_tT5aXkhkQekJ4dlHrpSyqvm5CLf-AsgHhYzC1hW7n7xFH1/pub?gid=1530203111&single=true&output=csv";

let restokData = [];

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

function formatTanggal(val){
  if(!val) return "-";
  // Bisa berupa serial number Excel/Sheets, atau string tanggal biasa
  const num = parseFloat(val);
  if(!isNaN(num) && num > 20000 && num < 90000){
    const date = new Date((num - 25569) * 86400 * 1000);
    return date.toLocaleDateString("id-ID", { day:"2-digit", month:"short", year:"numeric" });
  }
  return val;
}

async function loadRestokData(){
  const tbody = document.getElementById("stockTableBody");
  const lastSync = document.getElementById("lastSync");
  const setupBanner = document.getElementById("setupBanner");

  if(!PUBLISHED_CSV_URL){
    setupBanner.style.display = "flex";
    tbody.innerHTML = '<tr><td colspan="8" class="empty-row">Belum terhubung ke spreadsheet.</td></tr>';
    lastSync.textContent = "Belum terkonfigurasi";
    updateStats([]);
    return;
  }

  setupBanner.style.display = "none";
  tbody.innerHTML = '<tr><td colspan="8" class="loading-row">Memuat data...</td></tr>';

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
    const idxNoNota = headerRow.indexOf("no nota");
    const idxDistributor = headerRow.indexOf("distributor");
    const idxNama = headerRow.indexOf("nama barang");
    const idxBanyak = headerRow.indexOf("banyak barang");
    const idxHarga = headerRow.indexOf("harga beli/pcs");
    const idxTotal = headerRow.indexOf("total");
    const idxStatus = headerRow.indexOf("status");

    const dataRows = rows.slice(headerIdx + 1);

    restokData = dataRows
      .map(r => ({
        tanggal: (r[idxTanggal] || "").toString().trim(),
        noNota: (r[idxNoNota] || "").toString().trim(),
        distributor: (r[idxDistributor] || "").toString().trim(),
        nama: (r[idxNama] || "").toString().trim(),
        banyak: (r[idxBanyak] || "").toString().trim(),
        harga: (r[idxHarga] || "").toString().trim(),
        total: (r[idxTotal] || "").toString().trim(),
        status: (r[idxStatus] || "").toString().trim(),
      }))
      .filter(p => p.nama);

    if(restokData.length === 0){
      tbody.innerHTML = '<tr><td colspan="8" class="empty-row">Belum ada transaksi restok yang tercatat.</td></tr>';
    }

    renderTable();
    updateStats(restokData);

    const now = new Date();
    lastSync.textContent = "Diperbarui: " + now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  } catch(err){
    tbody.innerHTML = '<tr><td colspan="8" class="empty-row">Gagal memuat data. Periksa kembali link spreadsheet kamu.</td></tr>';
    lastSync.textContent = "Gagal memuat";
    console.warn("Gagal memuat data restok:", err);
  }
}

function updateStats(data){
  document.getElementById("statTotal").textContent = data.length;
  const totalBarang = data.reduce((sum, p) => sum + (parseFloat(p.banyak) || 0), 0);
  document.getElementById("statBarang").textContent = totalBarang;
  const totalNilai = data.reduce((sum, p) => sum + (parseFloat((p.total || "").replace(/[^0-9.-]/g, "")) || 0), 0);
  document.getElementById("statNilai").textContent = formatRupiah(totalNilai);
}

function renderTable(){
  const tbody = document.getElementById("stockTableBody");
  const searchTerm = document.getElementById("stockSearch").value.trim().toLowerCase();

  let filtered = restokData.filter(p => {
    return !searchTerm || p.nama.toLowerCase().includes(searchTerm) || p.distributor.toLowerCase().includes(searchTerm);
  });

  // Urutkan dari yang paling baru (asumsi baris terakhir = transaksi terbaru)
  filtered = filtered.slice().reverse();

  if(filtered.length === 0){
    tbody.innerHTML = '<tr><td colspan="8" class="empty-row">Tidak ada transaksi yang cocok.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(p => `
    <tr>
      <td>${formatTanggal(p.tanggal)}</td>
      <td>${p.noNota || "-"}</td>
      <td>${p.distributor || "-"}</td>
      <td class="prod-name">${p.nama}</td>
      <td class="stok-val">${p.banyak || "0"}</td>
      <td class="stok-val">${p.harga || "-"}</td>
      <td class="stok-val">${p.total || "-"}</td>
      <td>${p.status || "-"}</td>
    </tr>
  `).join("");
}

document.getElementById("stockSearch").addEventListener("input", renderTable);

document.getElementById("refreshBtn").addEventListener("click", (e) => {
  const btn = e.currentTarget;
  btn.classList.add("spinning");
  loadRestokData().finally(() => {
    setTimeout(() => btn.classList.remove("spinning"), 500);
  });
});

loadRestokData();

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


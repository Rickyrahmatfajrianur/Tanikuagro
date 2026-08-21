// ===== Konfigurasi Google Sheets =====
// Isi PUBLISHED_CSV_URL dengan link "Publish to web" (format CSV) dari sheet "DATA PENJUALAN" kamu.
const PUBLISHED_CSV_URL = "";

let penjualanData = [];

function findHeaderRow(rows){
  for(let i = 0; i < rows.length; i++){
    const row = rows[i].map(c => (c || "").toString().trim().toLowerCase());
    if(row.includes("tanggal") && row.includes("nama barang") && row.includes("gross profit")){
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
  const num = parseFloat(val);
  if(!isNaN(num) && num > 20000 && num < 90000){
    const date = new Date((num - 25569) * 86400 * 1000);
    return date.toLocaleDateString("id-ID", { day:"2-digit", month:"short", year:"numeric" });
  }
  return val;
}

async function loadPenjualanData(){
  const tbody = document.getElementById("stockTableBody");
  const lastSync = document.getElementById("lastSync");
  const setupBanner = document.getElementById("setupBanner");

  if(!PUBLISHED_CSV_URL){
    setupBanner.style.display = "flex";
    tbody.innerHTML = '<tr><td colspan="7" class="empty-row">Belum terhubung ke spreadsheet.</td></tr>';
    lastSync.textContent = "Belum terkonfigurasi";
    updateStats([]);
    return;
  }

  setupBanner.style.display = "none";
  tbody.innerHTML = '<tr><td colspan="7" class="loading-row">Memuat data...</td></tr>';

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
    const idxCustomer = headerRow.indexOf("nama customer");
    const idxNama = headerRow.indexOf("nama barang");
    const idxStatus = headerRow.indexOf("status");
    const idxBanyak = headerRow.indexOf("banyak barang");
    const idxProfit = headerRow.indexOf("gross profit");
    const idxHargaAkhir = headerRow.indexOf("harga akhir");

    const dataRows = rows.slice(headerIdx + 1);

    penjualanData = dataRows
      .map(r => ({
        tanggal: (r[idxTanggal] || "").toString().trim(),
        customer: (r[idxCustomer] || "").toString().trim(),
        nama: (r[idxNama] || "").toString().trim(),
        status: (r[idxStatus] || "").toString().trim(),
        banyak: (r[idxBanyak] || "").toString().trim(),
        profit: (r[idxProfit] || "").toString().trim(),
        hargaAkhir: (r[idxHargaAkhir] || "").toString().trim(),
      }))
      .filter(p => p.nama);

    if(penjualanData.length === 0){
      tbody.innerHTML = '<tr><td colspan="7" class="empty-row">Belum ada transaksi penjualan yang tercatat.</td></tr>';
    }

    renderTable();
    updateStats(penjualanData);

    const now = new Date();
    lastSync.textContent = "Diperbarui: " + now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  } catch(err){
    tbody.innerHTML = '<tr><td colspan="7" class="empty-row">Gagal memuat data. Periksa kembali link spreadsheet kamu.</td></tr>';
    lastSync.textContent = "Gagal memuat";
    console.warn("Gagal memuat data penjualan:", err);
  }
}

function updateStats(data){
  document.getElementById("statTotal").textContent = data.length;
  const totalNilai = data.reduce((sum, p) => sum + (parseFloat((p.hargaAkhir || "").replace(/[^0-9.-]/g, "")) || 0), 0);
  document.getElementById("statNilai").textContent = formatRupiah(totalNilai);
  const totalProfit = data.reduce((sum, p) => sum + (parseFloat((p.profit || "").replace(/[^0-9.-]/g, "")) || 0), 0);
  document.getElementById("statProfit").textContent = formatRupiah(totalProfit);
}

function renderTable(){
  const tbody = document.getElementById("stockTableBody");
  const searchTerm = document.getElementById("stockSearch").value.trim().toLowerCase();

  let filtered = penjualanData.filter(p => {
    return !searchTerm || p.nama.toLowerCase().includes(searchTerm) || p.customer.toLowerCase().includes(searchTerm);
  });

  filtered = filtered.slice().reverse();

  if(filtered.length === 0){
    tbody.innerHTML = '<tr><td colspan="7" class="empty-row">Tidak ada transaksi yang cocok.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(p => `
    <tr>
      <td>${formatTanggal(p.tanggal)}</td>
      <td class="prod-name">${p.nama}</td>
      <td>${p.customer || "-"}</td>
      <td class="stok-val">${p.banyak || "0"}</td>
      <td class="stok-val">${p.hargaAkhir || "-"}</td>
      <td class="stok-val">${p.profit || "-"}</td>
      <td>${p.status || "-"}</td>
    </tr>
  `).join("");
}

document.getElementById("stockSearch").addEventListener("input", renderTable);

document.getElementById("refreshBtn").addEventListener("click", (e) => {
  const btn = e.currentTarget;
  btn.classList.add("spinning");
  loadPenjualanData().finally(() => {
    setTimeout(() => btn.classList.remove("spinning"), 500);
  });
});

loadPenjualanData();

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


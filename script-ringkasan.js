// ===== Konfigurasi Google Sheets — 3 sumber sekaligus =====
const CSV_STOK = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFAW59sO9oG4SuLeQJFe2i9zsSZXxOZ_tT5aXkhkQekJ4dlHrpSyqvm5CLf-AsgHhYzC1hW7n7xFH1/pub?gid=1024901898&single=true&output=csv";
const CSV_RESTOK = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFAW59sO9oG4SuLeQJFe2i9zsSZXxOZ_tT5aXkhkQekJ4dlHrpSyqvm5CLf-AsgHhYzC1hW7n7xFH1/pub?gid=1530203111&single=true&output=csv";
const CSV_PENJUALAN = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQFAW59sO9oG4SuLeQJFe2i9zsSZXxOZ_tT5aXkhkQekJ4dlHrpSyqvm5CLf-AsgHhYzC1hW7n7xFH1/pub?gid=1935134078&single=true&output=csv";

const DEFAULT_STOK_MIN = 5;

function formatRupiah(n){
  const num = parseFloat(n) || 0;
  return "Rp " + num.toLocaleString("id-ID");
}
function formatRupiahShort(n){
  const num = parseFloat(n) || 0;
  if(num >= 1000000) return "Rp " + (num/1000000).toFixed(1) + "jt";
  if(num >= 1000) return "Rp " + (num/1000).toFixed(0) + "rb";
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
function formatTanggalSingkat(val){
  const d = parseTanggalToDate(val);
  if(!d) return "-";
  return d.toLocaleDateString("id-ID", { day:"2-digit", month:"short" });
}

function findHeaderRow(rows, requiredCols){
  for(let i = 0; i < rows.length; i++){
    const row = rows[i].map(c => (c || "").toString().trim().toLowerCase());
    if(requiredCols.every(col => row.includes(col))){
      return i;
    }
  }
  return -1;
}

async function fetchCsvRows(url){
  const res = await fetch(url);
  if(!res.ok) throw new Error("status " + res.status);
  const text = await res.text();
  const result = Papa.parse(text, { header: false, skipEmptyLines: false });
  return result.data || [];
}

function computeStatus(stok, stokMin){
  const s = parseFloat(stok);
  const min = parseFloat(stokMin) || DEFAULT_STOK_MIN;
  if(isNaN(s) || s <= 0) return "habis";
  if(s <= min) return "menipis";
  return "aman";
}

async function loadRingkasan(){
  const lastSync = document.getElementById("lastSync");
  const setupBanner = document.getElementById("setupBanner");
  setupBanner.style.display = "none";

  try{
    const [stokRows, restokRows, penjualanRows] = await Promise.all([
      fetchCsvRows(CSV_STOK),
      fetchCsvRows(CSV_RESTOK),
      fetchCsvRows(CSV_PENJUALAN),
    ]);

    // ===== 1. Olah data STOK (DAFTAR BARANG) =====
    const stokHeaderIdx = findHeaderRow(stokRows, ["kode barang", "nama barang"]);
    let produkList = [];
    if(stokHeaderIdx > -1){
      const h = stokRows[stokHeaderIdx].map(c => (c||"").toString().trim().toLowerCase());
      const idxNama = h.indexOf("nama barang");
      const idxTotal = h.indexOf("total akhir");
      produkList = stokRows.slice(stokHeaderIdx+1)
        .map(r => ({ nama: (r[idxNama]||"").toString().trim(), stok: idxTotal>-1 ? (r[idxTotal]||"0").toString().trim() : "0" }))
        .filter(p => p.nama)
        .map(p => ({ ...p, status: computeStatus(p.stok, DEFAULT_STOK_MIN) }));
    }
    const totalProduk = produkList.length;
    const aman = produkList.filter(p => p.status === "aman").length;
    const menipis = produkList.filter(p => p.status === "menipis").length;
    const habis = produkList.filter(p => p.status === "habis").length;

    document.getElementById("statProduk").textContent = totalProduk;
    document.getElementById("statPerhatian").textContent = menipis + habis;
    document.getElementById("donutTotal").textContent = totalProduk;
    document.getElementById("legendAman").textContent = aman;
    document.getElementById("legendMenipis").textContent = menipis;
    document.getElementById("legendHabis").textContent = habis;
    drawDonut(aman, menipis, habis);

    // ===== 2. Olah data RESTOK =====
    const restokHeaderIdx = findHeaderRow(restokRows, ["tanggal", "nama barang", "distributor"]);
    let restokList = [];
    if(restokHeaderIdx > -1){
      const h = restokRows[restokHeaderIdx].map(c => (c||"").toString().trim().toLowerCase());
      const idxTgl = h.indexOf("tanggal");
      const idxDist = h.indexOf("distributor");
      const idxNama = h.indexOf("nama barang");
      const idxTotal = h.indexOf("total");
      restokList = restokRows.slice(restokHeaderIdx+1)
        .map(r => ({
          tanggal: (r[idxTgl]||"").toString().trim(),
          distributor: (r[idxDist]||"").toString().trim(),
          nama: (r[idxNama]||"").toString().trim(),
          total: parseFloat((r[idxTotal]||"").toString().replace(/[^0-9.-]/g,"")) || 0,
        }))
        .filter(p => p.nama);
    }
    document.getElementById("statRestok").textContent = restokList.length;
    const totalNilaiBeli = restokList.reduce((s,p) => s + p.total, 0);
    document.getElementById("statNilaiBeli").textContent = formatRupiahShort(totalNilaiBeli);

    const restokTerbaru = restokList.slice(-5).reverse();
    const restokListEl = document.getElementById("restokTerbaruList");
    if(restokTerbaru.length === 0){
      restokListEl.innerHTML = '<div class="empty-row">Belum ada transaksi restok.</div>';
    } else {
      restokListEl.innerHTML = restokTerbaru.map(r => `
        <div class="mini-item">
          <div class="mi-main">
            <div class="mi-name">${r.nama}</div>
            <div class="mi-sub">${r.distributor || "-"} · ${formatTanggalSingkat(r.tanggal)}</div>
          </div>
          <div class="mi-val">${formatRupiahShort(r.total)}</div>
        </div>
      `).join("");
    }

    // ===== 3. Olah data PENJUALAN =====
    const penjualanHeaderIdx = findHeaderRow(penjualanRows, ["tanggal", "nama barang", "gross profit"]);
    let penjualanList = [];
    if(penjualanHeaderIdx > -1){
      const h = penjualanRows[penjualanHeaderIdx].map(c => (c||"").toString().trim().toLowerCase());
      const idxTgl = h.indexOf("tanggal");
      const idxCustomer = h.indexOf("nama customer");
      const idxNama = h.indexOf("nama barang");
      const idxHargaAkhir = h.indexOf("harga akhir");
      penjualanList = penjualanRows.slice(penjualanHeaderIdx+1)
        .map(r => ({
          tanggal: (r[idxTgl]||"").toString().trim(),
          customer: (r[idxCustomer]||"").toString().trim(),
          nama: (r[idxNama]||"").toString().trim(),
          hargaAkhir: parseFloat((r[idxHargaAkhir]||"").toString().replace(/[^0-9.-]/g,"")) || 0,
        }))
        .filter(p => p.nama);
    }
    document.getElementById("statPenjualan").textContent = penjualanList.length;
    const totalNilaiJual = penjualanList.reduce((s,p) => s + p.hargaAkhir, 0);
    document.getElementById("statNilaiJual").textContent = formatRupiahShort(totalNilaiJual);

    const penjualanTerbaru = penjualanList.slice(-5).reverse();
    const penjualanListEl = document.getElementById("penjualanTerbaruList");
    if(penjualanTerbaru.length === 0){
      penjualanListEl.innerHTML = '<div class="empty-row">Belum ada transaksi penjualan.</div>';
    } else {
      penjualanListEl.innerHTML = penjualanTerbaru.map(p => `
        <div class="mini-item">
          <div class="mi-main">
            <div class="mi-name">${p.nama}</div>
            <div class="mi-sub">${p.customer || "-"} · ${formatTanggalSingkat(p.tanggal)}</div>
          </div>
          <div class="mi-val">${formatRupiahShort(p.hargaAkhir)}</div>
        </div>
      `).join("");
    }

    const now = new Date();
    lastSync.textContent = "Diperbarui: " + now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  } catch(err){
    lastSync.textContent = "Gagal memuat";
    console.warn("Gagal memuat ringkasan dashboard:", err);
  }
}

function drawDonut(aman, menipis, habis){
  const svg = document.getElementById("donutSvg");
  const total = aman + menipis + habis;
  const existing = svg.querySelectorAll(".donut-seg");
  existing.forEach(el => el.remove());
  if(total === 0) return;

  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const segments = [
    { value: aman, color: "#1F8A4C" },
    { value: menipis, color: "#C88719" },
    { value: habis, color: "#C53030" },
  ];

  let offset = 0;
  segments.forEach(seg => {
    if(seg.value === 0) return;
    const fraction = seg.value / total;
    const dash = fraction * circumference;
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "70");
    circle.setAttribute("cy", "70");
    circle.setAttribute("r", radius);
    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke", seg.color);
    circle.setAttribute("stroke-width", "16");
    circle.setAttribute("stroke-dasharray", `${dash} ${circumference - dash}`);
    circle.setAttribute("stroke-dashoffset", -offset);
    circle.setAttribute("stroke-linecap", total > 1 && seg.value < total ? "butt" : "round");
    circle.classList.add("donut-seg");
    svg.appendChild(circle);
    offset += dash;
  });
}

document.getElementById("refreshBtn").addEventListener("click", (e) => {
  const btn = e.currentTarget;
  btn.classList.add("spinning");
  loadRingkasan().finally(() => {
    setTimeout(() => btn.classList.remove("spinning"), 500);
  });
});

loadRingkasan();

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

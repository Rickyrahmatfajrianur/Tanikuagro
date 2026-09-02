// ===== Data & helper yang sama dipakai di Beranda (script-index.js) dan halaman Produk (script-produk.js) =====
// Butuh icons.js dimuat duluan (pakai CATEGORY_ICONS).

const CATEGORIES = [
  { id:"herbisida", label:"Herbisida", icon:CATEGORY_ICONS.herbisida },
  { id:"fungisida", label:"Fungisida", icon:CATEGORY_ICONS.fungisida },
  { id:"insektisida", label:"Insektisida", icon:CATEGORY_ICONS.insektisida },
  { id:"akarisida", label:"Akarisida", icon:CATEGORY_ICONS.akarisida },
  { id:"nematisida", label:"Nematisida", icon:CATEGORY_ICONS.nematisida },
  { id:"moluskisida", label:"Moluskisida", icon:CATEGORY_ICONS.moluskisida },
  { id:"rodentisida", label:"Rodentisida", icon:CATEGORY_ICONS.rodentisida },
  { id:"bakterisida", label:"Bakterisida", icon:CATEGORY_ICONS.bakterisida },
  { id:"zpt", label:"ZPT", icon:CATEGORY_ICONS.zpt },
  { id:"perekat", label:"Perekat & Surfaktan", icon:CATEGORY_ICONS.perekat },
  { id:"pupuk", label:"Pupuk", icon:CATEGORY_ICONS.pupuk },
  { id:"benih", label:"Benih", icon:CATEGORY_ICONS.benih },
  { id:"biopestisida", label:"Biopestisida", icon:CATEGORY_ICONS.biopestisida },
  { id:"alat", label:"Alat Pertanian", icon:CATEGORY_ICONS.alat },
  { id:"sparepart", label:"Spare Part", icon:CATEGORY_ICONS.sparepart },
  { id:"lainnya", label:"Lainnya", icon:CATEGORY_ICONS.lainnya },
];
function catLabel(id){ const c = CATEGORIES.find(c => c.id === id); return c ? c.label : id; }

const WA_NUMBER_DEFAULT = "6285157215526";
// Dibaca ulang tiap kali dipakai (bukan sekali di awal), supaya kalau shop-info.js
// sudah selesai ambil nomor WA terbaru dari Pengaturan, link WA di halaman ini ikut update
// walau file ini sempat jalan duluan sebelum fetch-nya selesai.
function currentWaNumber(){ return window.SHOP_WHATSAPP_NUMBER || WA_NUMBER_DEFAULT; }
function waGeneralLink(){ return `https://wa.me/${currentWaNumber()}?text=${encodeURIComponent("Halo Taniku Agro, saya mau tanya produk")}`; }
function waSingleLink(name){ return `https://wa.me/${currentWaNumber()}?text=${encodeURIComponent(`Halo Taniku Agro, saya mau tanya stok & harga ${name}`)}`; }

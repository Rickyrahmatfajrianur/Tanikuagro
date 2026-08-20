const brands = [
  { name:"Syngenta", logo:"images/brand/syngenta.webp" },
  { name:"Bayer", logo:"images/brand/bayer.webp" },
  { name:"FMC", logo:"images/brand/fmc.webp" },
  { name:"Corteva", logo:"images/brand/corteva.webp" },
  { name:"Nufarm", logo:"images/brand/nufarm.webp" },
  { name:"BASF", logo:"images/brand/basf.webp" },
  { name:"Advansia", logo:"images/brand/advansia.webp" },
  { name:"Biotis Agrindo", logo:"images/brand/biotis-agrindo.webp" },
  { name:"CBA", logo:"images/brand/cba.webp" },
  { name:"Mahakam", logo:"images/brand/mahakam.webp" },
  { name:"Asiana Chemicalindo", logo:"images/brand/asiana-chemicalindo.webp" },
  { name:"Prima Karya", logo:"images/brand/prima-karya.webp" },
  { name:"Sari Kresna Kimia", logo:"images/brand/sari-kresna-kimia.webp" },
  { name:"Excel Meg Indo", logo:"images/brand/excel-meg-indo.webp" },
  { name:"Adil Makmur Fajar", logo:"images/brand/adil-makmur-fajar.webp" },
  { name:"Meroke Tetap Jaya", logo:"images/brand/meroke-tetap-jaya.webp" },
  { name:"Maxxi Agri", logo:"images/brand/maxxi-agri.webp" },
  { name:"Delta Chemical", logo:"images/brand/delta-chemical.webp" },
  { name:"DGW", logo:"images/brand/dgw.webp" },
  { name:"Agricon", logo:"images/brand/agricon.webp" },
  { name:"Tiara Buana Mandiri", logo:"images/brand/tiara-buana-mandiri.webp" },
  { name:"Saprotan Utama", logo:"images/brand/saprotan-utama.webp" },
  { name:"Cap Panah Merah", logo:"images/brand/cap-panah-merah.webp" },
  { name:"Benih Pertiwi", logo:"images/brand/benih-pertiwi.webp" },
  { name:"Santani Agro", logo:"images/brand/santani-agro.webp" },
  { name:"Mahkota", logo:"images/brand/mahkota.webp" },
  { name:"Petrokimia Kayaku", logo:"images/brand/petrokimia-kayaku.webp" },
  { name:"MTA Jaya", logo:"images/brand/mta-jaya.webp" },
  { name:"Petrosida Gresik", logo:"images/brand/petrosida-gresik.webp" },
  { name:"Cap Kapal Terbang", logo:"images/brand/cap-kapal-terbang.webp" },
];

function renderBrandMarquee(){
  const track = document.getElementById('brandTrack');
  if(!track) return;
  const chip = b => {
    const inner = b.logo
      ? `<img src="${b.logo}" alt="${b.name}">`
      : `<span class="bc-fallback">${b.name.charAt(0)}</span><span class="bc-name">${b.name}</span>`;
    return `<div class="brand-chip">${inner}</div>`;
  };
  // duplicated twice for seamless infinite loop
  track.innerHTML = brands.map(chip).join('') + brands.map(chip).join('');
}

const products = [
  { id:"prima-laris", name:"Prima-Laris 240 OD", cat:"herbisida", size:"500 ml", img:"images/produk/prima-laris.webp", desc:"Herbisida sistemik purna tumbuh untuk mengendalikan gulma pada tanaman jagung.", activeIngredient:"Atrazin 180 g/L, Mesotrion 40 g/L, Nikosulfuron 20 g/L", target:"Gulma berdaun lebar dan rumput pada tanaman jagung", long:"Herbisida sistemik purna tumbuh berbentuk pekatan berwarna putih susu. Bekerja setelah gulma tumbuh, diserap melalui daun dan disebarkan ke seluruh bagian gulma sehingga mati sampai ke akar. Cocok digunakan pada budidaya tanaman jagung." },
  { id:"gisentro", name:"Gisentro 560 SC + Surfaktan", cat:"herbisida", size:"400 ml + 250 ml", img:"images/produk/gisentro.webp", desc:"Herbisida sistemik pra & purna tumbuh, kendalikan gulma daun lebar dan rumput di jagung.", activeIngredient:"Atrazin 500 g/L + Mesotrion 60 g/L", target:"Gulma berdaun lebar dan rumput pada tanaman jagung", long:"Herbisida sistemik selektif pra tumbuh dan purna tumbuh berbentuk pekatan suspensi yang dapat larut dalam air. Dilengkapi Surfaktan sebagai bahan perata yang membantu meratakan semprotan herbisida di permukaan daun gulma sasaran, sehingga daya kerjanya lebih efektif." },
  { id:"atradex", name:"Atradex 550 SC + Surfaktan", cat:"herbisida", size:"500 ml + 200 ml", img:"images/produk/atradex.webp", desc:"Herbisida sistemik pra & purna tumbuh untuk gulma daun lebar dan berdaun sempit pada jagung.", activeIngredient:"Mesotrion 50 g/L + Atrazin 500 g/L", target:"Gulma berdaun lebar dan berdaun sempit pada tanaman jagung", long:"Herbisida sistemik selektif pra tumbuh dan purna tumbuh berbentuk pekatan suspensi berwarna putih. Paket sudah termasuk Surfaktan untuk mendapatkan kualitas penyemprotan maksimal serta perhatian penuh pada petunjuk penggunaan di label." },
  { id:"cornelia", name:"Cornelia 265/35 OD + Surfaktan", cat:"herbisida", size:"500 ml", img:"images/produk/cornelia.webp", desc:"Paket herbisida sistemik pratumbuh & purna tumbuh, larut dalam minyak, untuk tanaman jagung.", activeIngredient:"Atrazin 265 g/L + Nikosulfuron 35 g/L", target:"Gulma berdaun lebar dan golongan rumput pada tanaman jagung", long:"Herbisida sistemik selektif pratumbuh dan purna tumbuh berbentuk larutan dalam minyak. Satu paket dengan Santer sebagai bahan perekat, perata, penembus, dan emulgator untuk membantu daya kerja herbisida lebih maksimal pada gulma sasaran." },
  { id:"tandem", name:"Tandem 325 SC", cat:"fungisida", size:"100–250 ml", img:"images/produk/tandem.webp", desc:"Fungisida sistemik protektif-kuratif untuk mengendalikan penyakit pada padi, kakao & jagung.", activeIngredient:"Azoksistrobin 200 g/L + Difenokonazol 125 g/L", target:"Penyakit pada tanaman padi, kakao, dan jagung", long:"Fungisida sistemik, protektif, dan kuratif berbentuk pekatan suspensi yang larut dalam air. Bekerja mencegah sekaligus mengobati serangan penyakit pada tanaman, cocok digunakan sebagai bagian dari program perlindungan tanaman padi, kakao, maupun jagung." },
  { id:"abacel-100", name:"Abacel 18 EC 100ml", cat:"insektisida", size:"100 ml", img:null, desc:"Insektisida racun kontak & lambung untuk mengendalikan thrips dan ulat grayak.", activeIngredient:"Abamektin 18 g/L", target:"Thrips dan ulat grayak pada cabai, bawang merah, tomat, dan padi", long:"Insektisida berbahan aktif abamektin yang bekerja sebagai racun kontak, lambung, dan translaminar (meresap ke jaringan tanaman). Efektif mengendalikan hama thrips dan ulat grayak pada tanaman cabai, bawang merah, tomat, dan padi." },
  { id:"abacel-250", name:"Abacel 18 EC 250ml", cat:"insektisida", size:"250 ml", img:null, desc:"Insektisida racun kontak & lambung untuk mengendalikan thrips dan ulat grayak.", activeIngredient:"Abamektin 18 g/L", target:"Thrips dan ulat grayak pada cabai, bawang merah, tomat, dan padi", long:"Insektisida berbahan aktif abamektin yang bekerja sebagai racun kontak, lambung, dan translaminar (meresap ke jaringan tanaman). Efektif mengendalikan hama thrips dan ulat grayak pada tanaman cabai, bawang merah, tomat, dan padi." },
  { id:"abacel-500", name:"Abacel 18 EC 500ml", cat:"insektisida", size:"500 ml", img:null, desc:"Insektisida racun kontak & lambung untuk mengendalikan thrips dan ulat grayak.", activeIngredient:"Abamektin 18 g/L", target:"Thrips dan ulat grayak pada cabai, bawang merah, tomat, dan padi", long:"Insektisida berbahan aktif abamektin yang bekerja sebagai racun kontak, lambung, dan translaminar (meresap ke jaringan tanaman). Efektif mengendalikan hama thrips dan ulat grayak pada tanaman cabai, bawang merah, tomat, dan padi." },
  { id:"emacel-100", name:"Emacel 30 EC 100ml", cat:"insektisida", size:"100 ml", img:null, desc:"Insektisida racun kontak & lambung untuk mengendalikan ulat grayak dan pengorok daun.", activeIngredient:"Emamektin Benzoat 30 g/L", target:"Ulat grayak dan pengorok daun pada bawang merah, padi, jagung, cabai, dan kubis", long:"Insektisida berbahan aktif emamektin benzoat, bekerja sebagai racun kontak dan lambung berbentuk pekatan yang dapat diemulsikan. Efektif mengendalikan hama ulat grayak dan pengorok daun pada tanaman bawang merah, padi, jagung, cabai, dan kubis." },
  { id:"emacel-250", name:"Emacel 30 EC 250ml", cat:"insektisida", size:"250 ml", img:null, desc:"Insektisida racun kontak & lambung untuk mengendalikan ulat grayak dan pengorok daun.", activeIngredient:"Emamektin Benzoat 30 g/L", target:"Ulat grayak dan pengorok daun pada bawang merah, padi, jagung, cabai, dan kubis", long:"Insektisida berbahan aktif emamektin benzoat, bekerja sebagai racun kontak dan lambung berbentuk pekatan yang dapat diemulsikan. Efektif mengendalikan hama ulat grayak dan pengorok daun pada tanaman bawang merah, padi, jagung, cabai, dan kubis." },
  { id:"emacel-500", name:"Emacel 30 EC 500ml", cat:"insektisida", size:"500 ml", img:null, desc:"Insektisida racun kontak & lambung untuk mengendalikan ulat grayak dan pengorok daun.", activeIngredient:"Emamektin Benzoat 30 g/L", target:"Ulat grayak dan pengorok daun pada bawang merah, padi, jagung, cabai, dan kubis", long:"Insektisida berbahan aktif emamektin benzoat, bekerja sebagai racun kontak dan lambung berbentuk pekatan yang dapat diemulsikan. Efektif mengendalikan hama ulat grayak dan pengorok daun pada tanaman bawang merah, padi, jagung, cabai, dan kubis." },
  { id:"score-80", name:"Score 250 EC 80ml", cat:"fungisida", size:"80 ml", img:"images/produk/score-80.webp", desc:"Fungisida sistemik untuk mengendalikan penyakit bercak daun dan busuk phytophthora.", activeIngredient:"Difenokonazol 250 g/L", target:"Bercak daun dan busuk phytophthora pada padi, cabai, dan tanaman hortikultura lainnya", long:"Fungisida sistemik produksi Syngenta dengan bahan aktif difenokonazol yang juga berperan sebagai zat pengatur tumbuh (ZPT). Bekerja masuk ke jaringan tanaman untuk mengendalikan penyakit akibat jamur, terutama bercak daun dan busuk phytophthora, pada padi, cabai, dan berbagai tanaman hortikultura lainnya." },
  { id:"score-250", name:"Score 250 EC 250ml", cat:"fungisida", size:"250 ml", img:null, desc:"Fungisida sistemik untuk mengendalikan penyakit bercak daun dan busuk phytophthora.", activeIngredient:"Difenokonazol 250 g/L", target:"Bercak daun dan busuk phytophthora pada padi, cabai, dan tanaman hortikultura lainnya", long:"Fungisida sistemik produksi Syngenta dengan bahan aktif difenokonazol yang juga berperan sebagai zat pengatur tumbuh (ZPT). Bekerja masuk ke jaringan tanaman untuk mengendalikan penyakit akibat jamur, terutama bercak daun dan busuk phytophthora, pada padi, cabai, dan berbagai tanaman hortikultura lainnya." },
  { id:"prevathon-100", name:"Prevathon 50 SC 100ml", cat:"insektisida", size:"100 ml", img:"images/produk/prevathon-100.webp", desc:"Insektisida sistemik translaminar untuk mengendalikan penggerek batang padi dan ulat grayak.", activeIngredient:"Klorantraniliprol 50 g/L", target:"Penggerek batang padi (sundep), ulat grayak, dan hama perusak daun", long:"Insektisida sistemik racun kontak, lambung, dan syaraf yang bekerja secara translaminar (meresap ke jaringan tanaman). Sangat efektif mengendalikan hama penggerek batang padi (sundep), ulat grayak, dan berbagai hama perusak daun pada padi, cabai, jagung, dan tanaman lainnya." },
  { id:"prevathon-250", name:"Prevathon 50 SC 250ml", cat:"insektisida", size:"250 ml", img:"images/produk/prevathon-250.webp", desc:"Insektisida sistemik translaminar untuk mengendalikan penggerek batang padi dan ulat grayak.", activeIngredient:"Klorantraniliprol 50 g/L", target:"Penggerek batang padi (sundep), ulat grayak, dan hama perusak daun", long:"Insektisida sistemik racun kontak, lambung, dan syaraf yang bekerja secara translaminar (meresap ke jaringan tanaman). Sangat efektif mengendalikan hama penggerek batang padi (sundep), ulat grayak, dan berbagai hama perusak daun pada padi, cabai, jagung, dan tanaman lainnya." },
  { id:"prevathon-500", name:"Prevathon 50 SC 500ml", cat:"insektisida", size:"500 ml", img:null, desc:"Insektisida sistemik translaminar untuk mengendalikan penggerek batang padi dan ulat grayak.", activeIngredient:"Klorantraniliprol 50 g/L", target:"Penggerek batang padi (sundep), ulat grayak, dan hama perusak daun", long:"Insektisida sistemik racun kontak, lambung, dan syaraf yang bekerja secara translaminar (meresap ke jaringan tanaman). Sangat efektif mengendalikan hama penggerek batang padi (sundep), ulat grayak, dan berbagai hama perusak daun pada padi, cabai, jagung, dan tanaman lainnya." },
  { id:"amistartop-100", name:"Amistartop 325 SC 100ml", cat:"fungisida", size:"100 ml", img:null, desc:"Fungisida sistemik untuk mengendalikan berbagai penyakit jamur pada tanaman.", activeIngredient:"Azoksistrobin 200 g/L + Difenokonazol 125 g/L", target:"Bercak daun, karat, dan berbagai penyakit jamur pada padi, jagung, cabai, kopi, kakao, dan tanaman lain", long:"Fungisida sistemik produksi Syngenta dengan kombinasi dua bahan aktif (azoksistrobin dan difenokonazol) yang saling melengkapi cara kerjanya, sehingga lebih efektif mengendalikan jamur patogen. Digunakan luas pada padi, jagung, cabai, kopi, kakao, dan berbagai tanaman hortikultura maupun perkebunan lainnya." },
  { id:"amistartop-250", name:"Amistartop 325 SC 250ml", cat:"fungisida", size:"250 ml", img:null, desc:"Fungisida sistemik untuk mengendalikan berbagai penyakit jamur pada tanaman.", activeIngredient:"Azoksistrobin 200 g/L + Difenokonazol 125 g/L", target:"Bercak daun, karat, dan berbagai penyakit jamur pada padi, jagung, cabai, kopi, kakao, dan tanaman lain", long:"Fungisida sistemik produksi Syngenta dengan kombinasi dua bahan aktif (azoksistrobin dan difenokonazol) yang saling melengkapi cara kerjanya, sehingga lebih efektif mengendalikan jamur patogen. Digunakan luas pada padi, jagung, cabai, kopi, kakao, dan berbagai tanaman hortikultura maupun perkebunan lainnya." },
  { id:"stadium-100", name:"Stadium 18 EC 100ml", cat:"insektisida", size:"100 ml", img:null, desc:"Insektisida & akarisida untuk penggerek batang padi, wereng coklat, dan tungau.", activeIngredient:"Abamektin 18 g/L", target:"Penggerek batang padi (sundep/beluk), wereng coklat, tungau, dan pengorok daun", long:"Insektisida yang bekerja secara kontak, lambung, dan sistemik translaminar, sekaligus bersifat akarisida (pembasmi tungau). Efektif mengendalikan hama tersembunyi seperti penggerek batang padi, wereng coklat, hama putih palsu, tungau, dan pengorok daun." },
  { id:"stadium-200", name:"Stadium 18 EC 200ml", cat:"insektisida", size:"200 ml", img:null, desc:"Insektisida & akarisida untuk penggerek batang padi, wereng coklat, dan tungau.", activeIngredient:"Abamektin 18 g/L", target:"Penggerek batang padi (sundep/beluk), wereng coklat, tungau, dan pengorok daun", long:"Insektisida yang bekerja secara kontak, lambung, dan sistemik translaminar, sekaligus bersifat akarisida (pembasmi tungau). Efektif mengendalikan hama tersembunyi seperti penggerek batang padi, wereng coklat, hama putih palsu, tungau, dan pengorok daun." },
  { id:"stadium-500", name:"Stadium 18 EC 500ml", cat:"insektisida", size:"500 ml", img:null, desc:"Insektisida & akarisida untuk penggerek batang padi, wereng coklat, dan tungau.", activeIngredient:"Abamektin 18 g/L", target:"Penggerek batang padi (sundep/beluk), wereng coklat, tungau, dan pengorok daun", long:"Insektisida yang bekerja secara kontak, lambung, dan sistemik translaminar, sekaligus bersifat akarisida (pembasmi tungau). Efektif mengendalikan hama tersembunyi seperti penggerek batang padi, wereng coklat, hama putih palsu, tungau, dan pengorok daun." },
  { id:"curacron-100", name:"Curacron 500 EC 100ml", cat:"insektisida", size:"100 ml", img:null, desc:"Insektisida & akarisida multifungsi untuk kutu daun, ulat grayak, dan thrips.", activeIngredient:"Profenofos 500 g/L", target:"Kutu daun, ulat grayak, ulat tanah, lalat buah, penggerek daun/batang/buah, dan thrips", long:"Insektisida produksi Syngenta yang bekerja sebagai racun kontak dan lambung dengan efek translaminar, sehingga mampu menjangkau hama yang bersembunyi di balik daun. Mengendalikan berbagai hama pada tanaman cabai, bawang merah, tomat, semangka, kubis, dan tanaman lainnya." },
  { id:"curacron-250", name:"Curacron 500 EC 250ml", cat:"insektisida", size:"250 ml", img:null, desc:"Insektisida & akarisida multifungsi untuk kutu daun, ulat grayak, dan thrips.", activeIngredient:"Profenofos 500 g/L", target:"Kutu daun, ulat grayak, ulat tanah, lalat buah, penggerek daun/batang/buah, dan thrips", long:"Insektisida produksi Syngenta yang bekerja sebagai racun kontak dan lambung dengan efek translaminar, sehingga mampu menjangkau hama yang bersembunyi di balik daun. Mengendalikan berbagai hama pada tanaman cabai, bawang merah, tomat, semangka, kubis, dan tanaman lainnya." },
  { id:"decis-50", name:"Decis 25 EC 50ml", cat:"insektisida", size:"50 ml", img:null, desc:"Insektisida racun kontak & lambung untuk ulat grayak, belalang, kutu, dan thrips.", activeIngredient:"Deltametrin 25 g/L", target:"Ulat grayak, belalang, kutu, thrips, dan lalat pada berbagai tanaman", long:"Insektisida produksi Bayer yang bekerja sebagai racun kontak dan lambung dengan efek knock-down cepat serta efek anti-feeding (membuat hama berhenti makan). Digunakan luas pada bawang merah, cabai, jagung, kacang panjang, padi, dan banyak tanaman lainnya." },
  { id:"decis-100", name:"Decis 25 EC 100ml", cat:"insektisida", size:"100 ml", img:null, desc:"Insektisida racun kontak & lambung untuk ulat grayak, belalang, kutu, dan thrips.", activeIngredient:"Deltametrin 25 g/L", target:"Ulat grayak, belalang, kutu, thrips, dan lalat pada berbagai tanaman", long:"Insektisida produksi Bayer yang bekerja sebagai racun kontak dan lambung dengan efek knock-down cepat serta efek anti-feeding (membuat hama berhenti makan). Digunakan luas pada bawang merah, cabai, jagung, kacang panjang, padi, dan banyak tanaman lainnya." },
  { id:"decis-250", name:"Decis 25 EC 250ml", cat:"insektisida", size:"250 ml", img:null, desc:"Insektisida racun kontak & lambung untuk ulat grayak, belalang, kutu, dan thrips.", activeIngredient:"Deltametrin 25 g/L", target:"Ulat grayak, belalang, kutu, thrips, dan lalat pada berbagai tanaman", long:"Insektisida produksi Bayer yang bekerja sebagai racun kontak dan lambung dengan efek knock-down cepat serta efek anti-feeding (membuat hama berhenti makan). Digunakan luas pada bawang merah, cabai, jagung, kacang panjang, padi, dan banyak tanaman lainnya." },
  { id:"demolish-200", name:"Demolish 18 EC 200ml", cat:"insektisida", size:"200 ml", img:null, desc:"Insektisida racun kontak & lambung untuk berbagai hama sayuran dan perkebunan.", activeIngredient:"Abamektin 18 g/L", target:"Hama pada cabai, bawang merah, kubis, padi, kentang, dan kelapa sawit", long:"Insektisida racun kontak dan lambung berwarna coklat kehitaman, berbentuk pekatan yang dapat diemulsikan. Digunakan untuk mengendalikan hama pada tanaman cabai, bawang merah, kubis, padi, kentang, dan kelapa sawit." },
  { id:"glufo-1l", name:"Glufo 150 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik purna tumbuh non-selektif untuk gulma di perkebunan sawit & kakao.", activeIngredient:"Amonium Glufosinat 150 g/L", target:"Gulma berdaun lebar dan berdaun sempit pada kelapa sawit (TBM) dan kakao (TBM)", long:"Herbisida sistemik purna tumbuh non-selektif berbentuk pekatan berwarna biru kehijauan yang dapat larut dalam air. Digunakan untuk mengendalikan gulma berdaun lebar maupun berdaun sempit pada areal perkebunan kelapa sawit dan kakao yang belum menghasilkan (TBM)." },
  { id:"roundup-4l", name:"Roundup 486 SL 4 Liter", cat:"herbisida", size:"4 liter", img:null, desc:"Herbisida sistemik purna tumbuh untuk gulma umum di berbagai perkebunan.", activeIngredient:"IPA Glifosat 486 g/L (setara Glifosat 360 g/L)", target:"Gulma umum pada akasia, cengkih, kakao, karet, kedelai, kelapa, kelapa sawit, kopi, jagung, dan teh", long:"Herbisida sistemik purna tumbuh dengan teknologi Biosorb, berbentuk larutan dalam air. Digunakan luas untuk mengendalikan gulma umum pada berbagai tanaman perkebunan seperti akasia, cengkih, kakao, karet, kelapa sawit, kopi, dan teh. Catatan: tidak untuk digunakan pada tanaman padi." },
  { id:"bentop-5l", name:"Bentop 276 SL 5 Liter", cat:"herbisida", size:"5 liter", img:null, desc:"Herbisida kontak purna tumbuh untuk gulma umum pada kelapa sawit dan jagung.", activeIngredient:"Parakuat Diklorida 276 g/L (setara ion parakuat 200 g/L)", target:"Gulma umum pada kelapa sawit (TM) dan jagung (tanpa olah tanah)", long:"Herbisida terbatas golongan Bipyridylium yang bekerja secara kontak purna tumbuh, berbentuk larutan dalam air. Digunakan untuk mengendalikan gulma umum pada tanaman kelapa sawit menghasilkan (TM) dan jagung sistem tanpa olah tanah (TOT). Produk ini hanya boleh digunakan oleh pengguna bersertifikat." },
  { id:"gempur-5l", name:"Gempur 480 SL 5 Liter", cat:"herbisida", size:"5 liter", img:null, desc:"Herbisida sistemik purna tumbuh untuk gulma di lahan perkebunan & persiapan lahan.", activeIngredient:"Isopropil Amina Glifosat 480 g/L (setara Glifosat 356 g/L)", target:"Gulma pada hutan tanaman industri, kakao, karet, kelapa sawit, kopi, teh, dan persiapan lahan jagung (TOT)", long:"Herbisida sistemik purna tumbuh berbentuk larutan yang dapat larut dalam air, berwarna kuning kecoklatan. Digunakan untuk mengendalikan gulma pada hutan tanaman industri (Acacia mangium), perkebunan kakao, karet, kelapa sawit, kopi, teh, serta persiapan lahan budidaya jagung tanpa olah tanah." },
  { id:"gramoxone-5l", name:"Gramoxone 276 SL 5 Liter", cat:"herbisida", size:"5 liter", img:null, desc:"Herbisida kontak purna tumbuh spektrum luas untuk berbagai jenis tanaman.", activeIngredient:"Parakuat Diklorida 276 g/L (setara ion parakuat 200 g/L)", target:"Anakan sawit liar, gulma berdaun lebar, sempit, dan teki pada berbagai tanaman", long:"Herbisida produksi Syngenta yang bekerja secara kontak purna tumbuh, berbentuk larutan dalam air berwarna hijau tua. Mengendalikan anakan sawit liar serta gulma berdaun lebar, sempit, dan teki di lahan tanpa tanaman maupun di sela tanaman perkebunan (karet, kelapa sawit, kopi, tebu, teh) dan tanaman pangan (jagung, padi gogo, kedelai, kentang, kubis, tomat) serta tanaman buah. Hanya digunakan oleh pengguna bersertifikat." },
  { id:"dosdet-500", name:"Dosdet 500 gram", cat:"zpt", size:"500 gram", img:null, desc:"Pupuk daun / ZPT untuk menyuburkan tanaman dan mencegah kerontokan bunga & buah.", activeIngredient:"Formula pupuk daun / zat pengatur tumbuh (komposisi lengkap tertera pada label kemasan)", target:"Tanaman buah, sayur, dan perkebunan seperti mangga, kopi, tomat, melon, kubis, dan sawit", long:"Produk penyubur tanaman yang bekerja menyuburkan daun, bunga, dan buah, mencegah daun keriting/layu/kuning, merangsang pertumbuhan tunas baru, serta mencegah kerontokan bunga dan buah agar hasil panen lebih optimal. Cocok digunakan pada berbagai tanaman buah, sayur, dan perkebunan." },
  { id:"ultradap-1kg", name:"Ultradap 1 Kg", cat:"pupuk", size:"1 kg", img:null, desc:"Pupuk untuk mendukung pertumbuhan dan hasil panen berbagai tanaman hortikultura.", activeIngredient:"Formula pupuk (komposisi lengkap tertera pada label kemasan)", target:"Tanaman hortikultura seperti cabai, tomat, semangka, melon, dan buah-buahan", long:"Pupuk produksi merek Pak Tani yang digunakan untuk mendukung pertumbuhan dan hasil panen berbagai tanaman hortikultura seperti cabai, tomat, semangka, melon, dan tanaman buah lainnya. Cek label kemasan untuk dosis dan cara aplikasi yang dianjurkan." },
  { id:"dangke-100", name:"Dangke 40 WP 100gr", cat:"insektisida", size:"100 gram", img:null, desc:"Insektisida tepung racun kontak & lambung untuk hama ulat pada berbagai tanaman.", activeIngredient:"Metomil 40%", target:"Hama ulat pada bawang merah, kedelai, cabai, kacang panjang, kakao, tomat, kubis, dan kelapa sawit", long:"Insektisida sistemik racun kontak dan lambung berbentuk tepung yang dapat disuspensikan (wettable powder) berwarna putih. Digunakan untuk mengendalikan hama ulat pada tanaman bawang merah, kedelai, cabai, kacang panjang, kakao, tomat, kacang hijau, kubis, dan kelapa sawit." },
  { id:"regent-50", name:"Regent 50 SC 50ml", cat:"insektisida", size:"50 ml", img:null, desc:"Insektisida & ZPT sistemik untuk ulat gantung, thrips, wereng, dan kutu daun.", activeIngredient:"Fipronil 50 g/L", target:"Ulat gantung, thrips, kutu daun, wereng coklat, walang sangit, belalang pada cabai, jagung, jeruk, kacang panjang, kelapa sawit, kentang, kubis, kedelai, dan padi", long:"Insektisida sistemik produksi BASF berbentuk pekatan suspensi berwarna putih, bekerja sebagai racun kontak dan lambung. Selain mengendalikan hama, Regent 50 SC juga berfungsi sebagai Zat Pengatur Tumbuh (ZPT) yang merangsang pertumbuhan akar dan membuat daun lebih hijau. Efektif untuk berbagai hama pada tanaman cabai, jagung, jeruk, kacang panjang, kelapa sawit, kentang, kubis, semangka, kedelai, tebu, dan padi." },
  { id:"regent-100", name:"Regent 50 SC 100ml", cat:"insektisida", size:"100 ml", img:null, desc:"Insektisida & ZPT sistemik untuk ulat gantung, thrips, wereng, dan kutu daun.", activeIngredient:"Fipronil 50 g/L", target:"Ulat gantung, thrips, kutu daun, wereng coklat, walang sangit, belalang pada cabai, jagung, jeruk, kacang panjang, kelapa sawit, kentang, kubis, kedelai, dan padi", long:"Insektisida sistemik produksi BASF berbentuk pekatan suspensi berwarna putih, bekerja sebagai racun kontak dan lambung. Selain mengendalikan hama, Regent 50 SC juga berfungsi sebagai Zat Pengatur Tumbuh (ZPT) yang merangsang pertumbuhan akar dan membuat daun lebih hijau. Efektif untuk berbagai hama pada tanaman cabai, jagung, jeruk, kacang panjang, kelapa sawit, kentang, kubis, semangka, kedelai, tebu, dan padi." },
  { id:"regent-250", name:"Regent 50 SC 250ml", cat:"insektisida", size:"250 ml", img:null, desc:"Insektisida & ZPT sistemik untuk ulat gantung, thrips, wereng, dan kutu daun.", activeIngredient:"Fipronil 50 g/L", target:"Ulat gantung, thrips, kutu daun, wereng coklat, walang sangit, belalang pada cabai, jagung, jeruk, kacang panjang, kelapa sawit, kentang, kubis, kedelai, dan padi", long:"Insektisida sistemik produksi BASF berbentuk pekatan suspensi berwarna putih, bekerja sebagai racun kontak dan lambung. Selain mengendalikan hama, Regent 50 SC juga berfungsi sebagai Zat Pengatur Tumbuh (ZPT) yang merangsang pertumbuhan akar dan membuat daun lebih hijau. Efektif untuk berbagai hama pada tanaman cabai, jagung, jeruk, kacang panjang, kelapa sawit, kentang, kubis, semangka, kedelai, tebu, dan padi." },
  { id:"marshal-100", name:"Marshal 200 EC 100ml", cat:"insektisida", size:"100 ml", img:null, desc:"Insektisida sistemik untuk ulat kantong, wereng, kutu daun, thrips, dan tungau.", activeIngredient:"Karbosulfan 200 g/L", target:"Ulat kantong, wereng, kutu daun, thrips, penggerek batang, dan tungau pada cabai, bawang merah, kedelai, kelapa sawit, jeruk, kakao, kapas, dan ketimun", long:"Insektisida sistemik produksi FMC berbentuk pekatan yang dapat diemulsikan berwarna coklat, bekerja sebagai racun kontak dan lambung. Cepat menghentikan aktivitas makan hama sehingga mengurangi kerusakan tanaman, dan kompatibel dicampur dengan sebagian besar fungisida dan insektisida lain." },
  { id:"marshal-500", name:"Marshal 200 EC 500ml", cat:"insektisida", size:"500 ml", img:null, desc:"Insektisida sistemik untuk ulat kantong, wereng, kutu daun, thrips, dan tungau.", activeIngredient:"Karbosulfan 200 g/L", target:"Ulat kantong, wereng, kutu daun, thrips, penggerek batang, dan tungau pada cabai, bawang merah, kedelai, kelapa sawit, jeruk, kakao, kapas, dan ketimun", long:"Insektisida sistemik produksi FMC berbentuk pekatan yang dapat diemulsikan berwarna coklat, bekerja sebagai racun kontak dan lambung. Cepat menghentikan aktivitas makan hama sehingga mengurangi kerusakan tanaman, dan kompatibel dicampur dengan sebagian besar fungisida dan insektisida lain." },
  { id:"antracol-250", name:"Antracol 70 WP 250gr", cat:"fungisida", size:"250 gram", img:"https://www.bayer.com/sites/default/files/2021-03/Antracol_ps-new-web480x480.png?imbypass=true", desc:"Fungisida kontak protektif untuk penyakit jamur pada berbagai tanaman.", activeIngredient:"Propineb 70%", target:"Bercak daun, busuk hitam, bercak ungu, antraknosa, bulai, dan embun tepung pada cabai, bawang merah, tomat, jagung, kentang, kedelai, kubis, dan padi", long:"Fungisida kontak protektif produksi Bayer berbentuk tepung berwarna krem yang dapat disuspensikan dalam air. Mengandung tambahan unsur zinc yang membantu tanaman lebih sehat. Bekerja mencegah spora jamur berkecambah dan menginfeksi jaringan tanaman, cocok digunakan untuk tanaman sayuran, buah, maupun perkebunan." },
  { id:"antracol-500", name:"Antracol 70 WP 500gr", cat:"fungisida", size:"500 gram", img:"https://www.bayer.com/sites/default/files/2021-03/Antracol_ps-new-web480x480.png?imbypass=true", desc:"Fungisida kontak protektif untuk penyakit jamur pada berbagai tanaman.", activeIngredient:"Propineb 70%", target:"Bercak daun, busuk hitam, bercak ungu, antraknosa, bulai, dan embun tepung pada cabai, bawang merah, tomat, jagung, kentang, kedelai, kubis, dan padi", long:"Fungisida kontak protektif produksi Bayer berbentuk tepung berwarna krem yang dapat disuspensikan dalam air. Mengandung tambahan unsur zinc yang membantu tanaman lebih sehat. Bekerja mencegah spora jamur berkecambah dan menginfeksi jaringan tanaman, cocok digunakan untuk tanaman sayuran, buah, maupun perkebunan." },
  { id:"antracol-1000", name:"Antracol 70 WP 1kg", cat:"fungisida", size:"1 kg", img:"https://www.bayer.com/sites/default/files/2021-03/Antracol_ps-new-web480x480.png?imbypass=true", desc:"Fungisida kontak protektif untuk penyakit jamur pada berbagai tanaman.", activeIngredient:"Propineb 70%", target:"Bercak daun, busuk hitam, bercak ungu, antraknosa, bulai, dan embun tepung pada cabai, bawang merah, tomat, jagung, kentang, kedelai, kubis, dan padi", long:"Fungisida kontak protektif produksi Bayer berbentuk tepung berwarna krem yang dapat disuspensikan dalam air. Mengandung tambahan unsur zinc yang membantu tanaman lebih sehat. Bekerja mencegah spora jamur berkecambah dan menginfeksi jaringan tanaman, cocok digunakan untuk tanaman sayuran, buah, maupun perkebunan." },
  { id:"matador-50", name:"Matador 25 EC 50ml", cat:"insektisida", size:"50 ml", img:null, desc:"Insektisida knockdown cepat untuk ulat grayak, wereng, dan walang sangit.", activeIngredient:"Lambda Sihalotrin 25 g/L", target:"Ulat grayak, wereng, walang sangit, gasir, orong-orong pada bawang merah, bawang putih, cabai, jagung, jeruk, dan kacang panjang", long:"Insektisida golongan piretroid produksi Syngenta, berbentuk pekatan berwarna kuning jerami jernih yang dapat diemulsikan. Bekerja sebagai racun kontak dan lambung dengan efek knockdown cepat, melumpuhkan hama dalam hitungan menit. Cocok untuk hama perusak daun pada berbagai tanaman sayuran dan pangan." },
  { id:"matador-80", name:"Matador 25 EC 80ml", cat:"insektisida", size:"80 ml", img:null, desc:"Insektisida knockdown cepat untuk ulat grayak, wereng, dan walang sangit.", activeIngredient:"Lambda Sihalotrin 25 g/L", target:"Ulat grayak, wereng, walang sangit, gasir, orong-orong pada bawang merah, bawang putih, cabai, jagung, jeruk, dan kacang panjang", long:"Insektisida golongan piretroid produksi Syngenta, berbentuk pekatan berwarna kuning jerami jernih yang dapat diemulsikan. Bekerja sebagai racun kontak dan lambung dengan efek knockdown cepat, melumpuhkan hama dalam hitungan menit. Cocok untuk hama perusak daun pada berbagai tanaman sayuran dan pangan." },
  { id:"matador-250", name:"Matador 25 EC 250ml", cat:"insektisida", size:"250 ml", img:null, desc:"Insektisida knockdown cepat untuk ulat grayak, wereng, dan walang sangit.", activeIngredient:"Lambda Sihalotrin 25 g/L", target:"Ulat grayak, wereng, walang sangit, gasir, orong-orong pada bawang merah, bawang putih, cabai, jagung, jeruk, dan kacang panjang", long:"Insektisida golongan piretroid produksi Syngenta, berbentuk pekatan berwarna kuning jerami jernih yang dapat diemulsikan. Bekerja sebagai racun kontak dan lambung dengan efek knockdown cepat, melumpuhkan hama dalam hitungan menit. Cocok untuk hama perusak daun pada berbagai tanaman sayuran dan pangan." },
  { id:"topsin-100", name:"Topsin M 70 WP 100gr", cat:"fungisida", size:"100 gram", img:null, desc:"Fungisida sistemik untuk penyakit jamur pada padi, cabai, dan bawang.", activeIngredient:"Metil Tiofanat 70%", target:"Blas padi, bercak ungu, antraknosa, dan bercak daun pada padi, bawang merah, bawang putih, cabai, kacang hijau, kacang tanah, dan tembakau", long:"Fungisida sistemik produksi Petrokimia Kayaku berbentuk tepung berwarna putih kecoklatan yang dapat disuspensikan. Mudah diserap dan disebarkan ke seluruh jaringan tanaman untuk menghambat pertumbuhan cendawan. Digunakan untuk mengendalikan berbagai penyakit jamur pada tanaman pangan, sayuran, dan perkebunan." },
  { id:"mipcin-100", name:"Mipcinta 50 WP 100gr", cat:"insektisida", size:"100 gram", img:null, desc:"Insektisida untuk wereng coklat, walang sangit, dan hama penting tanaman padi.", activeIngredient:"MIPC (Isoprocarb) 50%", target:"Wereng coklat, wereng hijau, walang sangit, kutu putih, dan penghisap daun pada padi, jagung, kedelai, kakao, kopi, lada, lamtoro, dan teh", long:"Insektisida produksi Petrokimia Kayaku berbentuk tepung putih susu yang dapat disuspensikan (wettable powder). Bekerja sebagai racun kontak dan lambung, efektif mengendalikan wereng dan hama penghisap pada tanaman padi serta berbagai tanaman perkebunan seperti kopi, lada, dan teh." },
  { id:"mipcin-500", name:"Mipcinta 50 WP 500gr", cat:"insektisida", size:"500 gram", img:null, desc:"Insektisida untuk wereng coklat, walang sangit, dan hama penting tanaman padi.", activeIngredient:"MIPC (Isoprocarb) 50%", target:"Wereng coklat, wereng hijau, walang sangit, kutu putih, dan penghisap daun pada padi, jagung, kedelai, kakao, kopi, lada, lamtoro, dan teh", long:"Insektisida produksi Petrokimia Kayaku berbentuk tepung putih susu yang dapat disuspensikan (wettable powder). Bekerja sebagai racun kontak dan lambung, efektif mengendalikan wereng dan hama penghisap pada tanaman padi serta berbagai tanaman perkebunan seperti kopi, lada, dan teh." },
  { id:"toxedown-100", name:"Toxedown 150 EC 100ml", cat:"insektisida", size:"100 ml", img:"images/produk/toxedown-100.webp", desc:"Insektisida dua bahan aktif untuk ulat krop, kutu daun, dan thrips.", activeIngredient:"Emamektin Benzoat 50 g/L + Lufenuron 100 g/L", target:"Ulat krop, kutu daun, thrips pada kubis, jeruk, kacang panjang, tomat, kentang, cabai, bawang merah", long:"Insektisida double action produksi CV Delta Chemica berbentuk pekatan berwarna kuning pucat yang dapat diemulsikan. Menggabungkan dua bahan aktif yang bekerja sinergis: Emamektin benzoat menyerang sistem saraf hama sehingga larva berhenti makan, sedangkan Lufenuron menghambat sintesis kitin sehingga menghentikan pertumbuhan dan siklus hidup hama." },
  { id:"toxedown-250", name:"Toxedown 150 EC 250ml", cat:"insektisida", size:"250 ml", img:"images/produk/toxedown-250.webp", desc:"Insektisida dua bahan aktif untuk ulat krop, kutu daun, dan thrips.", activeIngredient:"Emamektin Benzoat 50 g/L + Lufenuron 100 g/L", target:"Ulat krop, kutu daun, thrips pada kubis, jeruk, kacang panjang, tomat, kentang, cabai, bawang merah", long:"Insektisida double action produksi CV Delta Chemica berbentuk pekatan berwarna kuning pucat yang dapat diemulsikan. Menggabungkan dua bahan aktif yang bekerja sinergis: Emamektin benzoat menyerang sistem saraf hama sehingga larva berhenti makan, sedangkan Lufenuron menghambat sintesis kitin sehingga menghentikan pertumbuhan dan siklus hidup hama." },
  { id:"starlon-100", name:"Starlon 665 EC 100ml", cat:"herbisida", size:"100 ml", img:null, desc:"Herbisida sistemik spesialis gulma berkayu dan tunggul pohon.", activeIngredient:"Triklopir Butoksi Etil Ester 665 g/L", target:"Semak belukar, gulma berkayu, dan tunggul pohon pada kelapa sawit dan padi", long:"Herbisida sistemik purna tumbuh produksi Nufarm, sangat efektif mengendalikan semak belukar, tunggul kayu, dan gulma berkayu. Bekerja meresap ke dalam jaringan kayu hingga ke akar sehingga tunggul pohon tidak tumbuh kembali. Dapat dicampur dengan herbisida glifosat atau parakuat untuk memperluas spektrum pengendalian, dan dapat diaplikasikan dengan cara semprot maupun oles pada tunggul." },
  { id:"starlon-1l", name:"Starlon 665 EC 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik spesialis gulma berkayu dan tunggul pohon.", activeIngredient:"Triklopir Butoksi Etil Ester 665 g/L", target:"Semak belukar, gulma berkayu, dan tunggul pohon pada kelapa sawit dan padi", long:"Herbisida sistemik purna tumbuh produksi Nufarm, sangat efektif mengendalikan semak belukar, tunggul kayu, dan gulma berkayu. Bekerja meresap ke dalam jaringan kayu hingga ke akar sehingga tunggul pohon tidak tumbuh kembali. Dapat dicampur dengan herbisida glifosat atau parakuat untuk memperluas spektrum pengendalian, dan dapat diaplikasikan dengan cara semprot maupun oles pada tunggul." },
  { id:"garlon-100", name:"Garlon 670 EC 100ml", cat:"herbisida", size:"100 ml", img:null, desc:"Herbisida sistemik spesialis mematikan pohon dan gulma berkayu.", activeIngredient:"Triklopir Butoksi Etil Ester 670 g/L (setara asam triklopir 480 g/L)", target:"Semak belukar, gulma berkayu (anakan kayu), dan tunggul pohon pada karet dan kelapa sawit", long:"Herbisida sistemik dengan konsentrasi triklopir tertinggi di pasaran, efektif mengendalikan gulma berkayu dan semak belukar tanpa menyebabkan parthenocarpy pada kelapa sawit. Dapat diaplikasikan dengan penyemprotan volume tinggi maupun dioleskan pada tunggul pohon (dicampur solar) untuk mencegah tunas baru tumbuh kembali." },
  { id:"kresnaup-1l", name:"Kresna Up 520 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik purna tumbuh untuk gulma berdaun lebar dan sempit.", activeIngredient:"IPA Glifosat 520 g/L", target:"Gulma berdaun lebar dan sempit pada kelapa sawit belum menghasilkan (TBM)", long:"Herbisida sistemik purna tumbuh produksi Sari Kresna Kimia, berbentuk larutan dalam air berwarna cokelat keemasan. Diserap melalui daun dan bekerja sistemik hingga ke akar gulma. Cocok digunakan pada perkebunan kelapa sawit yang belum menghasilkan (TBM)." },
  { id:"gibas-1l", name:"Gibas 240 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik purna tumbuh untuk gulma pada tanaman jagung.", activeIngredient:"IPA Glifosat 240 g/L", target:"Gulma pada tanaman jagung (tanpa olah tanah/TOT)", long:"Herbisida sistemik purna tumbuh produksi Sari Kresna Kimia, berbentuk larutan dalam air berwarna cokelat keemasan. Digunakan untuk mengendalikan gulma pada persiapan lahan budidaya tanaman jagung dengan sistem tanpa olah tanah (TOT)." },
  { id:"grasso-1l", name:"Grasso 480 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik purna tumbuh untuk gulma berdaun lebar, sempit, dan alang-alang.", activeIngredient:"IPA Glifosat 480 g/L", target:"Gulma berdaun lebar, berdaun sempit, dan alang-alang (Imperata cylindrica) pada kelapa sawit menghasilkan (TM)", long:"Herbisida sistemik purna tumbuh produksi Sari Kresna Kimia, berbentuk larutan dalam air berwarna kuning keemasan. Efektif mengendalikan gulma berdaun lebar seperti Mikania micrantha dan Ageratum conyzoides, gulma berdaun sempit seperti Axonopus compressus, serta alang-alang pada perkebunan kelapa sawit yang sudah menghasilkan (TM)." },
  { id:"jumpup-1l", name:"Jump Up 555 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik purna tumbuh konsentrasi tinggi untuk gulma pada sawit dan kakao.", activeIngredient:"IPA Glifosat 555 g/L", target:"Gulma berdaun lebar dan berdaun sempit pada kelapa sawit dan kakao belum menghasilkan (TBM)", long:"Herbisida sistemik purna tumbuh produksi Sari Kresna Kimia dengan konsentrasi glifosat tinggi, berbentuk larutan dalam air berwarna kuning keemasan. Digunakan untuk mengendalikan gulma berdaun lebar dan sempit pada budidaya kelapa sawit dan kakao yang belum menghasilkan (TBM)." },
  { id:"em4-1l", name:"EM4 Pertanian 1 Liter", cat:"lainnya", size:"1 liter", img:null, desc:"Cairan mikroorganisme untuk menyuburkan tanah dan membuat pupuk organik.", activeIngredient:"Kultur mikroorganisme (bakteri fotosintetik, Lactobacillus, Actinomycetes, ragi/yeast)", target:"Perbaikan kualitas tanah dan fermentasi bahan organik pada cabai, padi, sayuran, bawang merah, jagung, jeruk, dan tanaman perkebunan", long:"Larutan konsentrat berisi campuran mikroorganisme hidup yang menguntungkan bagi kesuburan tanah dan pertumbuhan tanaman, ditemukan oleh Prof. Dr. Teruo Higa dari Jepang. EM4 mempercepat dekomposisi bahan organik menjadi pupuk (Bokashi), memperbaiki sifat fisik, kimia, dan biologi tanah, serta meningkatkan produksi tanaman secara alami dan ramah lingkungan. Sebelum digunakan, EM4 perlu diaktifkan dengan campuran molase/gula dan air." },
  { id:"vampyr-100", name:"Vampyr 700 EC 100ml", cat:"insektisida", size:"100 ml", img:null, desc:"Insektisida dua bahan aktif untuk ulat grayak, thrips, dan kutu daun.", activeIngredient:"Klorfenapir 200 g/L + Asefat 500 g/L", target:"Ulat grayak, thrips, kutu daun, dan lalat buah pada bawang merah, kubis, dan tanaman sayuran lainnya", long:"Insektisida produksi Golden Farm Indonesia berbentuk pekatan berwarna kuning kecoklatan yang dapat diemulsikan, mengombinasikan dua bahan aktif. Bekerja dengan tiga mekanisme sekaligus: racun kontak, racun lambung, dan sebagian sistemik, sehingga efektif mengendalikan hama yang sudah resisten terhadap insektisida tunggal." },
  { id:"vampyr-200", name:"Vampyr 700 EC 200ml", cat:"insektisida", size:"200 ml", img:null, desc:"Insektisida dua bahan aktif untuk ulat grayak, thrips, dan kutu daun.", activeIngredient:"Klorfenapir 200 g/L + Asefat 500 g/L", target:"Ulat grayak, thrips, kutu daun, dan lalat buah pada bawang merah, kubis, dan tanaman sayuran lainnya", long:"Insektisida produksi Golden Farm Indonesia berbentuk pekatan berwarna kuning kecoklatan yang dapat diemulsikan, mengombinasikan dua bahan aktif. Bekerja dengan tiga mekanisme sekaligus: racun kontak, racun lambung, dan sebagian sistemik, sehingga efektif mengendalikan hama yang sudah resisten terhadap insektisida tunggal." },
  { id:"rumpas-100", name:"Rumpas 120 EW 100ml", cat:"herbisida", size:"100 ml", img:null, desc:"Herbisida kontak & sistemik cepat untuk gulma rumput pada padi dan sayuran.", activeIngredient:"Fenoksaprop-p-etil 120 g/L", target:"Gulma rumput-rumputan (jawan, dengkulan, teki) pada padi sawah/gogo, bawang merah, cabai, kedelai, dan kacang-kacangan", long:"Herbisida kontak dan sistemik purna tumbuh produksi Bayer, berbentuk emulsi minyak dalam air berwarna putih. Daya kerja sangat cepat, gulma berhenti tumbuh 2-3 hari setelah aplikasi dan mati total dalam 1-2 minggu. Efektif untuk gulma golongan rumput seperti Echinochloa dan Leptochloa pada padi sawah maupun gogo." },
  { id:"kayabas-250", name:"Kayabas 555 SC 250ml", cat:"herbisida", size:"250 ml", img:null, desc:"Herbisida pra & purna tumbuh untuk gulma pada tanaman jagung.", activeIngredient:"Atrazin 500 g/L + Mesotrion 55 g/L", target:"Gulma berdaun sempit dan berdaun lebar pada tanaman jagung", long:"Herbisida sistemik selektif produksi Petrokimia Kayaku, berbentuk pekatan suspensi berwarna putih kecoklatan, digunakan sebagai herbisida pra tumbuh dan awal purna tumbuh. Satu paket terdiri dari botol Kayabas dan botol surfaktan pendamping. Efektif mengendalikan gulma berdaun sempit (Brachiaria, Digitaria) dan berdaun lebar (Euphorbia, Commelina, Synedrella) pada budidaya jagung, cukup satu kali semprot per musim tanam." },
  { id:"kayabas-500", name:"Kayabas 555 SC 500ml", cat:"herbisida", size:"500 ml", img:null, desc:"Herbisida pra & purna tumbuh untuk gulma pada tanaman jagung.", activeIngredient:"Atrazin 500 g/L + Mesotrion 55 g/L", target:"Gulma berdaun sempit dan berdaun lebar pada tanaman jagung", long:"Herbisida sistemik selektif produksi Petrokimia Kayaku, berbentuk pekatan suspensi berwarna putih kecoklatan, digunakan sebagai herbisida pra tumbuh dan awal purna tumbuh. Satu paket terdiri dari botol Kayabas dan botol surfaktan pendamping. Efektif mengendalikan gulma berdaun sempit (Brachiaria, Digitaria) dan berdaun lebar (Euphorbia, Commelina, Synedrella) pada budidaya jagung, cukup satu kali semprot per musim tanam." },
  { id:"santrel-500", name:"Santrel 500 SL", cat:"zpt", size:"500 ml", img:null, desc:"Zat pengatur tumbuh untuk rangsang getah karet & percepat pemasakan buah.", activeIngredient:"Etefon 500 g/L", target:"Getah/lateks pada tanaman karet; percepatan pemasakan buah pada nanas, apel, kopi, dan padi", long:"Zat Pengatur Tumbuh (ZPT) produksi Santani berbentuk larutan, memiliki fungsi ganda sebagai perangsang sekaligus vitamin tanaman. Pada tanaman karet digunakan dengan cara dioleskan pada bidang sadap untuk merangsang keluarnya getah/lateks. Pada tanaman buah dan padi berfungsi mempercepat pemasakan buah serta meningkatkan jumlah gabah isi per malai." },
  { id:"supremo-1l", name:"Supremo 480 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik purna tumbuh untuk gulma berdaun lebar dan sempit.", activeIngredient:"Isopropilamina Glifosat 480 g/L", target:"Gulma berdaun lebar dan berdaun sempit pada lahan tanpa tanaman, karet, kelapa sawit (TBM), kakao, teh, dan kopi (TBM)", long:"Herbisida sistemik purna tumbuh produksi PT Dharma Guna Wibawa, berbentuk larutan dalam air berwarna kekuningan. Mengendalikan gulma seperti Alternanthera sesilis, Commelina spp, Cleome asvera, Echinochloa colonum, dan Axonopus compressus pada lahan tanpa olah tanah maupun lahan bebas tanaman di perkebunan karet, sawit, kakao, teh, dan kopi." },
  { id:"okboss-1l", name:"Ok Boss 540 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik purna tumbuh konsentrasi tinggi untuk gulma berdaun lebar dan sempit.", activeIngredient:"Isopropil Amina Glifosat 540 g/L", target:"Gulma berdaun lebar dan berdaun sempit pada lahan perkebunan", long:"Herbisida sistemik purna tumbuh dengan konsentrasi glifosat tinggi, berbentuk larutan dalam air. Bekerja diserap melalui daun dan disebarkan hingga ke akar gulma, efektif untuk mengendalikan gulma berdaun lebar maupun sempit yang mengganggu lahan perkebunan." },
  { id:"bioup-1l", name:"Bio Up 490 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik purna tumbuh untuk gulma pada kelapa sawit.", activeIngredient:"IPA Glifosat 490 g/L", target:"Gulma berdaun lebar (Ageratum conyzoides, Clidemia hirta) dan berdaun sempit (Axonopus compressus, Ottochloa nodosa) pada kelapa sawit", long:"Herbisida sistemik purna tumbuh produksi Sari Kresna Kimia, berbentuk larutan dalam air berwarna kuning keemasan. Bekerja masuk ke jaringan gulma dan menghambat proses fotosintesis serta pertumbuhan sel, efektif mengendalikan gulma berdaun lebar dan sempit pada perkebunan kelapa sawit." },
  { id:"mkppaktani-1kg", name:"MKP Pak Tani 1kg", cat:"pupuk", size:"1 kg", img:null, desc:"Pupuk kristal fosfat & kalium tinggi untuk pembungaan dan pembuahan.", activeIngredient:"P2O5 (Fosfat) 52% + K2O (Kalium) 34%", target:"Merangsang pembungaan, pembentukan buah, dan mencegah kerontokan bunga/buah pada padi, jagung, cabai, tomat, melon, semangka, dan tanaman buah lainnya", long:"Pupuk Mono Kalium Fosfat (MKP) berbentuk kristal putih yang 100% larut dalam air, sehingga mudah diaplikasikan dengan cara ditabur, dikocor, disemprot, atau sistem hidroponik. Kandungan fosfor dan kalium yang tinggi sangat baik untuk fase generatif tanaman: merangsang pertumbuhan akar, mempercepat pembungaan, serta mencegah kerontokan bunga dan buah. Dapat juga dicampur dengan fungisida sistemik untuk meningkatkan efikasi pengendalian penyakit embun tepung (powdery mildew)." },
  { id:"mkppaktani-200g", name:"MKP Pak Tani 200gr", cat:"pupuk", size:"200 gram", img:null, desc:"Pupuk kristal fosfat & kalium tinggi untuk pembungaan dan pembuahan.", activeIngredient:"P2O5 (Fosfat) 52% + K2O (Kalium) 34%", target:"Merangsang pembungaan, pembentukan buah, dan mencegah kerontokan bunga/buah pada padi, jagung, cabai, tomat, melon, semangka, dan tanaman buah lainnya", long:"Pupuk Mono Kalium Fosfat (MKP) berbentuk kristal putih yang 100% larut dalam air, sehingga mudah diaplikasikan dengan cara ditabur, dikocor, disemprot, atau sistem hidroponik. Kandungan fosfor dan kalium yang tinggi sangat baik untuk fase generatif tanaman: merangsang pertumbuhan akar, mempercepat pembungaan, serta mencegah kerontokan bunga dan buah. Dapat juga dicampur dengan fungisida sistemik untuk meningkatkan efikasi pengendalian penyakit embun tepung (powdery mildew)." },
  { id:"vikar-250", name:"Vikar 10 SL 250ml", cat:"zpt", size:"250 ml", img:null, desc:"ZPT perangsang getah karet, memperlambat penyumbatan pembuluh lateks.", activeIngredient:"Etefon (golongan ZPT perangsang lateks)", target:"Merangsang produksi getah/lateks pada tanaman karet tua dan muda", long:"Zat Pengatur Tumbuh (ZPT) khusus tanaman karet berbentuk cairan berwarna hijau, dioleskan pada bidang sadap/toreh. Bekerja memperlambat penyumbatan pembuluh lateks sehingga getah mengalir lebih lama dan produksi karet meningkat. Juga membantu mencegah penyakit pada bidang sadap sehingga kesehatan bidang toreh tetap terjaga. Cocok digunakan pada pohon karet tua maupun muda." },
  { id:"agus-100", name:"Agus 500 SC 100ml", cat:"insektisida", size:"100 ml", img:null, desc:"Insektisida kontak & sistemik untuk kutu kebul dan tungau.", activeIngredient:"Diafentiuron 500 g/L", target:"Kutu kebul (Bemisia tabaci) dan tungau (Polyphagotarsonemus latus) pada cabai, tomat, kentang, kubis, apel, dan semangka", long:"Insektisida produksi PT Advansia Indotani, berbentuk pekatan suspensi (Suspension Concentrate). Bekerja dengan cara menghambat proses metabolisme hama sehingga hama tidak dapat melakukan aktivitas normal dan mati, baik lewat kontak langsung maupun sistemik dalam jaringan tanaman. Direkomendasikan dirotasi dengan insektisida bahan aktif lain untuk mencegah resistensi." },
  { id:"agus-250", name:"Agus 500 SC 250ml", cat:"insektisida", size:"250 ml", img:null, desc:"Insektisida kontak & sistemik untuk kutu kebul dan tungau.", activeIngredient:"Diafentiuron 500 g/L", target:"Kutu kebul (Bemisia tabaci) dan tungau (Polyphagotarsonemus latus) pada cabai, tomat, kentang, kubis, apel, dan semangka", long:"Insektisida produksi PT Advansia Indotani, berbentuk pekatan suspensi (Suspension Concentrate). Bekerja dengan cara menghambat proses metabolisme hama sehingga hama tidak dapat melakukan aktivitas normal dan mati, baik lewat kontak langsung maupun sistemik dalam jaringan tanaman. Direkomendasikan dirotasi dengan insektisida bahan aktif lain untuk mencegah resistensi." },
  { id:"macan-1l", name:"Macan 338 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida kontak untuk gulma berdaun lebar dan rumput pada sawit.", activeIngredient:"Parakuat Diklorida 338 g/L", target:"Gulma berdaun lebar dan gulma golongan rumput pada kelapa sawit (TBM)", long:"Herbisida kontak purna tumbuh produksi Mahakam, berbentuk larutan dalam air. Langsung mematikan jaringan gulma yang terkena semprot, bereaksi cepat untuk gulma yang masih hijau dan belum berakar dalam. Cocok untuk persiapan lahan pada perkebunan kelapa sawit belum menghasilkan (TBM)." },
  { id:"basis-1l", name:"Basis 150 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida non-selektif kontak & sistemik untuk gulma pada sawit.", activeIngredient:"Amonium Glufosinat 150 g/L", target:"Gulma berdaun lebar dan gulma golongan rumput pada kelapa sawit (TBM)", long:"Herbisida non-selektif produksi CBA, bekerja secara kontak sekaligus sebagian sistemik, berbentuk larutan dalam air. Bahan aktif glufosinat-amonium menghambat enzim glutamin sintetase pada gulma. Efektif untuk gulma yang sudah resisten terhadap glifosat maupun parakuat, dan relatif aman untuk tanaman muda karena tidak menyebabkan parthenocarpy." },
  { id:"wpgetah-250", name:"WP Getah 250ml", cat:"zpt", size:"250 ml", img:null, desc:"ZPT perangsang getah karet, sejenis dengan Vikar.", activeIngredient:"Etefon (golongan ZPT perangsang lateks)", target:"Merangsang produksi getah/lateks pada tanaman karet", long:"Zat Pengatur Tumbuh (ZPT) untuk tanaman karet, dioleskan pada bidang sadap/toreh untuk merangsang keluarnya getah/lateks. Sejenis dengan produk perangsang getah karet lain seperti Vikar, bekerja memperlambat penyumbatan pembuluh lateks agar getah mengalir lebih lama dan produksi karet meningkat." },
  { id:"meurtieur-100", name:"Meurtieur 30 EC 100ml", cat:"insektisida", size:"100 ml", img:null, desc:"Insektisida racun kontak & lambung, tuntaskan ulat & telurnya.", activeIngredient:"Emamektin Benzoat 30 g/L", target:"Ulat grayak beserta telurnya, hama pelipat daun, dan penggerek batang pada bawang merah, padi, dan jagung", long:"Insektisida produksi PT Biotis Agrindo berbentuk cairan kental berwarna coklat tua, bekerja sebagai racun kontak dan lambung yang kuat serta dapat bertindak sebagai racun telur. Efektif menuntaskan ulat-ulat yang bandel/kebal, menurunkan kemampuan ulat bertelur hingga 90%, dan bekerja sebagai racun sistemik lokal (translaminar) sehingga mampu menjangkau ulat yang tersembunyi." },
  { id:"meurtieur-250", name:"Meurtieur 30 EC 250ml", cat:"insektisida", size:"250 ml", img:"images/produk/meurtieur-250.webp", desc:"Insektisida racun kontak & lambung, tuntaskan ulat & telurnya.", activeIngredient:"Emamektin Benzoat 30 g/L", target:"Ulat grayak beserta telurnya, hama pelipat daun, dan penggerek batang pada bawang merah, padi, dan jagung", long:"Insektisida produksi PT Biotis Agrindo berbentuk cairan kental berwarna coklat tua, bekerja sebagai racun kontak dan lambung yang kuat serta dapat bertindak sebagai racun telur. Efektif menuntaskan ulat-ulat yang bandel/kebal, menurunkan kemampuan ulat bertelur hingga 90%, dan bekerja sebagai racun sistemik lokal (translaminar) sehingga mampu menjangkau ulat yang tersembunyi." },
  { id:"meurtieur-500", name:"Meurtieur 30 EC 500ml", cat:"insektisida", size:"500 ml", img:null, desc:"Insektisida racun kontak & lambung, tuntaskan ulat & telurnya.", activeIngredient:"Emamektin Benzoat 30 g/L", target:"Ulat grayak beserta telurnya, hama pelipat daun, dan penggerek batang pada bawang merah, padi, dan jagung", long:"Insektisida produksi PT Biotis Agrindo berbentuk cairan kental berwarna coklat tua, bekerja sebagai racun kontak dan lambung yang kuat serta dapat bertindak sebagai racun telur. Efektif menuntaskan ulat-ulat yang bandel/kebal, menurunkan kemampuan ulat bertelur hingga 90%, dan bekerja sebagai racun sistemik lokal (translaminar) sehingga mampu menjangkau ulat yang tersembunyi." },
  { id:"tigatop-500", name:"Tigatop 500ml", cat:"herbisida", size:"500 ml", img:null, desc:"Herbisida sistemik selektif 3 bahan aktif untuk gulma pada jagung.", activeIngredient:"Atrazine + Mesotrion + Nikosulfuron", target:"Gulma berdaun sempit dan berdaun lebar pada tanaman jagung", long:"Herbisida sistemik selektif produksi Mahakam dengan tiga bahan aktif sekaligus (Atrazine, Mesotrion, Nikosulfuron), dirancang khusus untuk tanaman jagung. Kombinasi tiga bahan aktif memperluas spektrum pengendalian gulma, termasuk gulma bandel golongan rumput dan berdaun lebar, tanpa merusak tanaman jagung itu sendiri." },
  { id:"tigatop-1l", name:"Tigatop 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik selektif 3 bahan aktif untuk gulma pada jagung.", activeIngredient:"Atrazine + Mesotrion + Nikosulfuron", target:"Gulma berdaun sempit dan berdaun lebar pada tanaman jagung", long:"Herbisida sistemik selektif produksi Mahakam dengan tiga bahan aktif sekaligus (Atrazine, Mesotrion, Nikosulfuron), dirancang khusus untuk tanaman jagung. Kombinasi tiga bahan aktif memperluas spektrum pengendalian gulma, termasuk gulma bandel golongan rumput dan berdaun lebar, tanpa merusak tanaman jagung itu sendiri." },
  { id:"sofia-500", name:"Sofia 500ml", cat:"herbisida", size:"500 ml", img:null, desc:"Herbisida sistemik selektif 3 bahan aktif untuk gulma pada jagung, sejenis Tigatop.", activeIngredient:"Atrazine + Mesotrion + Nikosulfuron", target:"Gulma berdaun sempit dan berdaun lebar pada tanaman jagung", long:"Herbisida sistemik selektif produksi PT Asiana Chemicalindo Lestari, sejenis dengan Tigatop dari segi kegunaan dan kombinasi tiga bahan aktif untuk tanaman jagung. Efektif mengendalikan gulma berdaun lebar dan berdaun sempit tanpa merusak tanaman jagung." },
  { id:"ulate-100", name:"Ulate 550 SL 100ml", cat:"insektisida", size:"100 ml", img:null, desc:"Insektisida translaminar dua bahan aktif untuk ulat grayak & penggulung daun.", activeIngredient:"Dimehypo 500 g/L + Emamektin Benzoat 50 g/L", target:"Ulat grayak (Spodoptera exigua) dan ulat penggulung daun (Plutella xylostella) pada berbagai tanaman sayuran dan buah", long:"Insektisida berbentuk pekatan berwarna kuning kecoklatan yang dapat diemulsikan, bekerja sebagai racun kontak dan lambung yang bersifat translaminar. Kombinasi dua bahan aktif membuatnya efektif mengendalikan hama ulat pada berbagai tanaman sayuran dan buah." },
  { id:"ulate-250", name:"Ulate 550 SL 250ml", cat:"insektisida", size:"250 ml", img:null, desc:"Insektisida translaminar dua bahan aktif untuk ulat grayak & penggulung daun.", activeIngredient:"Dimehypo 500 g/L + Emamektin Benzoat 50 g/L", target:"Ulat grayak (Spodoptera exigua) dan ulat penggulung daun (Plutella xylostella) pada berbagai tanaman sayuran dan buah", long:"Insektisida berbentuk pekatan berwarna kuning kecoklatan yang dapat diemulsikan, bekerja sebagai racun kontak dan lambung yang bersifat translaminar. Kombinasi dua bahan aktif membuatnya efektif mengendalikan hama ulat pada berbagai tanaman sayuran dan buah." },
  { id:"rambogold-1l", name:"Rambo Gold 480 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik purna tumbuh untuk gulma hingga ke akar.", activeIngredient:"Isopropilamina Glifosat 480 g/L", target:"Gulma berdaun lebar dan sempit pada jagung, kelapa sawit, karet, teh, dan lahan tanpa tanaman", long:"Herbisida sistemik purna tumbuh berbentuk cairan berwarna kekuningan. Bekerja masuk ke jaringan gulma dan ditranslokasikan ke seluruh bagian gulma, menghambat pembentukan asam amino dan enzim EPSP sehingga gulma mati hingga ke akarnya. Daya bunuhnya relatif cepat dengan waktu tumbuh kembali (regrowth) yang lebih lambat dibanding produk glifosat sejenis." },
  { id:"rambopeak-1l", name:"Rambo Peak 555 SL 1 Liter", cat:"herbisida", size:"1 liter", img:null, desc:"Herbisida sistemik purna tumbuh konsentrasi tinggi untuk gulma hingga ke akar.", activeIngredient:"Isopropilamina Glifosat 555 g/L", target:"Gulma berdaun lebar dan sempit pada jagung, kelapa sawit, karet, teh, dan lahan tanpa tanaman", long:"Versi konsentrasi lebih tinggi dari Rambo Gold, herbisida sistemik purna tumbuh berbentuk cairan. Bekerja masuk ke jaringan gulma dan ditranslokasikan ke seluruh bagian gulma, menghambat pembentukan asam amino dan enzim EPSP sehingga gulma mati hingga ke akarnya. Konsentrasi bahan aktif yang lebih tinggi cocok untuk pengendalian gulma yang lebih bandel." },
  { id:"powersoil-500", name:"Power Soil 500gr", cat:"pupuk", size:"500 gram", img:null, desc:"Pembenah tanah asam humat untuk memperbaiki struktur & kesuburan tanah.", activeIngredient:"Asam Humat 60%, C-organik 15%, N 1%, P2O5 5,46%, K2O 1,08%", target:"Memperbaiki struktur tanah dan meningkatkan efisiensi pemupukan pada padi, sayuran, buah-buahan, dan tanaman hias", long:"Pupuk organik berbahan dasar asam humat, berbentuk tepung hitam yang larut dalam air. Berfungsi sebagai pembenah tanah yang memperbaiki Kapasitas Tukar Kation (KTK), meningkatkan kapasitas ikat air tanah sehingga mengurangi risiko kekeringan, serta melepaskan ion hara N, P, K yang terikat partikel tanah agar lebih mudah diserap tanaman. Dapat dicampur dengan pupuk makro (NPK), kalsium, kompos, maupun pestisida aplikasi tanah." },
  { id:"powersoil-1kg", name:"Power Soil 1kg", cat:"pupuk", size:"1 kg", img:null, desc:"Pembenah tanah asam humat untuk memperbaiki struktur & kesuburan tanah.", activeIngredient:"Asam Humat 60%, C-organik 15%, N 1%, P2O5 5,46%, K2O 1,08%", target:"Memperbaiki struktur tanah dan meningkatkan efisiensi pemupukan pada padi, sayuran, buah-buahan, dan tanaman hias", long:"Pupuk organik berbahan dasar asam humat, berbentuk tepung hitam yang larut dalam air. Berfungsi sebagai pembenah tanah yang memperbaiki Kapasitas Tukar Kation (KTK), meningkatkan kapasitas ikat air tanah sehingga mengurangi risiko kekeringan, serta melepaskan ion hara N, P, K yang terikat partikel tanah agar lebih mudah diserap tanaman. Dapat dicampur dengan pupuk makro (NPK), kalsium, kompos, maupun pestisida aplikasi tanah." },
  { id:"primazeb-100", name:"Primazeb 80 WP 100gr", cat:"fungisida", size:"100 gram", img:null, desc:"Fungisida kontak Mankozeb biru untuk penyakit jamur berbagai tanaman.", activeIngredient:"Mankozeb 80%", target:"Busuk daun, bercak ungu, bercak daun, dan bercak kering pada padi, sayuran, buah-buahan, dan tanaman hortikultura", long:"Fungisida kontak produksi Prima Karya berbentuk tepung berwarna biru kehijauan, bekerja dengan cara menghalangi respirasi jamur sehingga jamur tidak dapat berkembang lebih lanjut. Dilengkapi teknologi Rain Shield yang membuatnya tidak mudah tercuci air hujan setelah aplikasi, sehingga tetap efektif tanpa perlu tambahan bahan perekat." },
  { id:"primazeb-800", name:"Primazeb 80 WP 800gr", cat:"fungisida", size:"800 gram", img:null, desc:"Fungisida kontak Mankozeb biru untuk penyakit jamur berbagai tanaman.", activeIngredient:"Mankozeb 80%", target:"Busuk daun, bercak ungu, bercak daun, dan bercak kering pada padi, sayuran, buah-buahan, dan tanaman hortikultura", long:"Fungisida kontak produksi Prima Karya berbentuk tepung berwarna biru kehijauan, bekerja dengan cara menghalangi respirasi jamur sehingga jamur tidak dapat berkembang lebih lanjut. Dilengkapi teknologi Rain Shield yang membuatnya tidak mudah tercuci air hujan setelah aplikasi, sehingga tetap efektif tanpa perlu tambahan bahan perekat." },
  { id:"bionm-500", name:"Bion M 1/48 WP 500gr", cat:"fungisida", size:"500 gram", img:"https://www.syngenta.co.id/sites/g/files/kgtney1281/files/styles/brand_logo/public/wysiwyg/image/sites/g/files/kgtney1281/files/styles/brand_logo/public/media/image/2023/03/14/bion_m_500g.jpg", desc:"Fungisida protektif ganda: kendalikan jamur & aktifkan daya tahan tanaman.", activeIngredient:"Asibenzolar-S-Metil 1% + Mankozeb 48%", target:"Antraknosa/patek, busuk buah, busuk kering, busuk basah, bercak daun, dan busuk Phytophthora pada cabai, kentang, kubis, dan tomat", long:"Fungisida protektif produksi Syngenta berbentuk tepung coklat kekuningan yang dapat disuspensikan, bekerja sistemik dan kontak sekaligus. Keunggulannya ada pada kombinasi dua bahan aktif: Mankozeb yang mengendalikan cendawan secara langsung, dan Asibenzolar-S-Metil yang bekerja mengaktifkan ketahanan alami tanaman terhadap penyakit (bukan membunuh patogen secara langsung), sehingga memberikan perlindungan ganda." },
];

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

const WA_NUMBER = "6285157215526";
const cart = {};
let activeCat = "all";
let searchTerm = "";
const PAGE_SIZE = 30;
let visibleCount = PAGE_SIZE;

function waGeneralLink(){ return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo Taniku Agro, saya mau tanya produk")}`; }
function waSingleLink(name){ return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Halo Taniku Agro, saya mau tanya stok & harga ${name}`)}`; }

const grid = document.getElementById('productGrid');

// Render sidebar kategori dengan jumlah produk per kategori
const catSidebar = document.getElementById('catSidebar');

function renderCatSidebar(){
  const catCounts = {};
  products.forEach(p => { catCounts[p.cat] = (catCounts[p.cat] || 0) + 1; });

  let html = `<div class="cat-sidebar-title"><span class="bar"></span>Kategori</div><div class="cat-list">`;
  html += `<div class="cat-item ${activeCat === 'all' ? 'active' : ''}" data-cat="all">
    <span class="label">Semua Produk</span><span class="count">${products.length}</span>
  </div>`;
  CATEGORIES.forEach(c => {
    const count = catCounts[c.id] || 0;
    html += `<div class="cat-item ${activeCat === c.id ? 'active' : ''}" data-cat="${c.id}">
      <span class="label">${c.icon} ${c.label}</span><span class="count">${count}</span>
    </div>`;
  });
  html += `</div>`;
  catSidebar.innerHTML = html;

  catSidebar.querySelectorAll('.cat-item').forEach(item => {
    item.addEventListener('click', () => {
      activeCat = item.dataset.cat;
      visibleCount = PAGE_SIZE;
      renderCatSidebar();
      renderProducts();
    });
  });
}
renderCatSidebar();

function filteredProducts(){
  return products.filter(p => {
    const matchCat = activeCat === "all" || p.cat === activeCat;
    const matchSearch = searchTerm === "" || p.name.toLowerCase().includes(searchTerm) || p.desc.toLowerCase().includes(searchTerm);
    return matchCat && matchSearch;
  });
}

function renderProducts(){
  grid.innerHTML = "";
  const list = filteredProducts();

  // Specific category selected but has zero products -> single placeholder, no product grid noise
  if(activeCat !== "all" && list.length === 0 && searchTerm === ""){
    const cat = CATEGORIES.find(c => c.id === activeCat);
    grid.innerHTML = "";
    const ph = document.createElement('div');
    ph.className = 'placeholder-card';
    ph.style.gridColumn = '1/-1';
    ph.innerHTML = `
      <div class="ic">${cat ? cat.icon : ICONS.package}</div>
      <h3>${cat ? cat.label : 'Produk'}</h3>
      <p>Tersedia di toko. Tanya ketersediaan & harga langsung via WhatsApp.</p>
      <a href="${waSingleLink(cat ? cat.label : 'produk ini')}" target="_blank" rel="noopener">${ICONS.whatsapp} Tanya Produk</a>
    `;
    grid.appendChild(ph);
    updateLoadMoreUI(0, 0);
    return;
  }

  if(list.length === 0){
    grid.innerHTML = `<div class="no-results" style="grid-column:1/-1;">Produk tidak ditemukan. Coba kata kunci lain atau <a href="${waGeneralLink()}" target="_blank" style="color:var(--b600);font-weight:700;">tanya via WhatsApp</a>.</div>`;
    updateLoadMoreUI(0, 0);
    return;
  }

  const visibleList = list.slice(0, visibleCount);
  updateLoadMoreUI(visibleList.length, list.length);

  visibleList.forEach(p => {
    const qty = cart[p.id] || 0;
    const card = document.createElement('div');
    card.className = 'card';
    const catMeta = CATEGORIES.find(c => c.id === p.cat);
    const imgHtml = p.img
      ? `<img src="${p.img}" alt="${p.name}" loading="lazy">`
      : `<div class="noimg-ic">${catMeta ? catMeta.icon : ICONS.package}</div><div class="noimg-txt">Foto menyusul</div>`;
    card.innerHTML = `
      <div class="imgwrap${p.img ? '' : ' noimg'}">${imgHtml}</div>
      <div class="body">
        <span class="chip ${p.cat}">${catLabel(p.cat)}</span>
        <h3>${p.name}</h3>
        <div class="mono">Kemasan ${p.size}</div>
        <p class="desc">${p.desc}</p>
        <div class="card-bottom">
          <div class="qty-stepper">
            <button class="qminus" data-id="${p.id}">−</button>
            <span class="qty-val" id="qty-${p.id}">${qty}</span>
            <button class="qplus" data-id="${p.id}">+</button>
          </div>
          <button class="btn-addcart" data-id="${p.id}">+ Keranjang</button>
        </div>
        <button class="btn-detail" data-id="${p.id}">Lihat Detail</button>
      </div>
    `;
    grid.appendChild(card);
  });

  attachProductEvents();
}

const loadMoreWrap = document.getElementById('loadMoreWrap');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const loadMoreCount = document.getElementById('loadMoreCount');

function updateLoadMoreUI(shown, total){
  if(total <= shown){
    loadMoreWrap.style.display = 'none';
  } else {
    loadMoreWrap.style.display = 'flex';
    loadMoreCount.textContent = `Menampilkan ${shown} dari ${total} produk`;
  }
}

loadMoreBtn.addEventListener('click', () => {
  visibleCount += PAGE_SIZE;
  renderProducts();
});

function attachProductEvents(){
  grid.querySelectorAll('.qplus').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    cart[id] = (cart[id] || 0) + 1;
    document.getElementById(`qty-${id}`).textContent = cart[id];
  }));
  grid.querySelectorAll('.qminus').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    cart[id] = Math.max(0, (cart[id] || 0) - 1);
    document.getElementById(`qty-${id}`).textContent = cart[id];
  }));
  grid.querySelectorAll('.btn-addcart').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    const qtyEl = document.getElementById(`qty-${id}`);
    let qty = parseInt(qtyEl.textContent, 10);
    if(qty < 1){ qty = 1; qtyEl.textContent = qty; }
    cart[id] = qty;
    btn.textContent = "✓ Ditambahkan";
    btn.classList.add('added');
    setTimeout(() => { btn.textContent = "+ Keranjang"; btn.classList.remove('added'); }, 1000);
    updateCartUI();
    const prod = products.find(p => p.id === id);
    if(prod) showToast(prod.name);
  }));
  grid.querySelectorAll('.btn-detail').forEach(btn => btn.addEventListener('click', () => {
    openDetail(btn.dataset.id);
  }));
}

function handleSearch(val){
  searchTerm = val.trim().toLowerCase();
  document.getElementById('searchInputDesktop').value = val;
  document.getElementById('searchInputMobile').value = val;
  visibleCount = PAGE_SIZE;
  renderProducts();
  renderSuggestions(val);
}
document.getElementById('searchInputDesktop').addEventListener('input', e => handleSearch(e.target.value));
document.getElementById('searchInputMobile').addEventListener('input', e => handleSearch(e.target.value));

// ===== Live search suggestions dropdown =====
const suggestDesktop = document.getElementById('searchSuggestDesktop');
const suggestMobile = document.getElementById('searchSuggestMobile');

function escapeHtml(s){
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function highlightMatch(name, query){
  const idx = name.toLowerCase().indexOf(query);
  if(idx === -1) return escapeHtml(name);
  return escapeHtml(name.slice(0, idx)) + "<mark>" + escapeHtml(name.slice(idx, idx + query.length)) + "</mark>" + escapeHtml(name.slice(idx + query.length));
}

function buildSuggestHtml(query){
  const q = query.trim().toLowerCase();
  if(q === "") return "";
  const matches = products.filter(p => p.name.toLowerCase().includes(q)).slice(0, 8);
  if(matches.length === 0){
    return `<div class="sg-empty">Tidak ada produk cocok "${escapeHtml(query)}". <a href="${waSingleLink(query)}" target="_blank" rel="noopener">Tanya via WhatsApp</a></div>`;
  }
  return matches.map(p => {
    const catMeta = CATEGORIES.find(c => c.id === p.cat);
    const thumb = p.img
      ? `<img src="${p.img}" alt="">`
      : `<div style="width:34px;height:34px;border-radius:7px;background:var(--slate50);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">${catMeta ? catMeta.icon : ICONS.package}</div>`;
    return `
    <div class="sg-item" data-id="${p.id}">
      ${thumb}
      <div>
        <div class="sg-name">${highlightMatch(p.name, q)}</div>
        <div class="sg-cat">${catLabel(p.cat)} · ${p.size}</div>
      </div>
    </div>
  `;
  }).join("");
}

function renderSuggestions(val){
  const html = buildSuggestHtml(val);
  [suggestDesktop, suggestMobile].forEach(box => {
    box.innerHTML = html;
    box.classList.toggle('open', val.trim() !== "" && document.activeElement && document.activeElement.closest('.search-wrap, .search-wrap-mobile'));
    box.querySelectorAll('.sg-item').forEach(item => {
      item.addEventListener('click', () => selectSuggestion(item.dataset.id));
    });
  });
}

function selectSuggestion(id){
  const p = products.find(pr => pr.id === id);
  if(!p) return;
  handleSearch(p.name);
  closeSuggestions();
  document.getElementById('produk').scrollIntoView({ behavior:'smooth', block:'start' });
  openDetail(id);
}

function closeSuggestions(){
  suggestDesktop.classList.remove('open');
  suggestMobile.classList.remove('open');
}

document.getElementById('searchInputDesktop').addEventListener('focus', () => {
  if(document.getElementById('searchInputDesktop').value.trim() !== "") suggestDesktop.classList.add('open');
});
document.getElementById('searchInputMobile').addEventListener('focus', () => {
  if(document.getElementById('searchInputMobile').value.trim() !== "") suggestMobile.classList.add('open');
});
document.addEventListener('click', e => {
  if(!e.target.closest('.search-wrap') && !e.target.closest('.search-wrap-mobile')){
    closeSuggestions();
  }
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closeSuggestions();
});

// ===== Cart drawer =====
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartItemsEl = document.getElementById('cartItems');
const cartTotalCountEl = document.getElementById('cartTotalCount');
const checkoutBtn = document.getElementById('checkoutBtn');
const stickyCartBar = document.getElementById('stickyCartBar');
const stickyCartCount = document.getElementById('stickyCartCount');

function openCart(){ cartOverlay.classList.add('open'); cartDrawer.classList.add('open'); }

let toastTimer = null;
function showToast(name){
  const toast = document.getElementById('toast');
  document.getElementById('toastProductName').textContent = name;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { toast.classList.remove('show'); }, 3000);
}
document.getElementById('toastCartBtn').addEventListener('click', () => {
  document.getElementById('toast').classList.remove('show');
  clearTimeout(toastTimer);
  openCart();
});
function closeCart(){ cartOverlay.classList.remove('open'); cartDrawer.classList.remove('open'); }
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartCloseBtn').addEventListener('click', closeCart);
document.getElementById('stickyCartViewBtn').addEventListener('click', openCart);
cartOverlay.addEventListener('click', closeCart);

function updateCartUI(){
  const entries = Object.entries(cart).filter(([id, qty]) => qty > 0);
  const totalItems = entries.reduce((sum, [, qty]) => sum + qty, 0);

  document.getElementById('cartBadge').textContent = totalItems;
  cartTotalCountEl.textContent = totalItems;
  checkoutBtn.disabled = totalItems === 0;
  stickyCartCount.textContent = totalItems;
  stickyCartBar.classList.toggle('show', totalItems > 0 && window.innerWidth <= 900);

  if(entries.length === 0){
    cartItemsEl.innerHTML = `<div class="cart-empty">Keranjang masih kosong.<br>Pilih produk dari katalog untuk mulai.</div>`;
    return;
  }

  cartItemsEl.innerHTML = entries.map(([id, qty]) => {
    const p = products.find(pr => pr.id === id);
    return `
      <div class="cart-line">
        <img src="${p.img}" alt="${p.name}">
        <div class="info">
          <b>${p.name}</b>
          <div class="mono" style="color:var(--slate400);">Kemasan ${p.size}</div>
          <button class="remove" data-id="${id}">Hapus</button>
        </div>
        <div class="qty-stepper">
          <button class="cqminus" data-id="${id}">−</button>
          <span class="qty-val">${qty}</span>
          <button class="cqplus" data-id="${id}">+</button>
        </div>
      </div>
    `;
  }).join("");

  cartItemsEl.querySelectorAll('.cqplus').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    cart[id] = (cart[id] || 0) + 1;
    const g = document.getElementById(`qty-${id}`); if(g) g.textContent = cart[id];
    updateCartUI();
  }));
  cartItemsEl.querySelectorAll('.cqminus').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    cart[id] = Math.max(0, (cart[id] || 0) - 1);
    const g = document.getElementById(`qty-${id}`); if(g) g.textContent = cart[id];
    updateCartUI();
  }));
  cartItemsEl.querySelectorAll('.remove').forEach(btn => btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    cart[id] = 0;
    const g = document.getElementById(`qty-${id}`); if(g) g.textContent = 0;
    updateCartUI();
  }));
}

checkoutBtn.addEventListener('click', () => {
  const entries = Object.entries(cart).filter(([id, qty]) => qty > 0);
  if(entries.length === 0) return;
  let msg = "Halo Taniku Agro, saya mau pesan:\n\n";
  entries.forEach(([id, qty], idx) => {
    const p = products.find(pr => pr.id === id);
    msg += `${idx + 1}. ${p.name} x${qty}\n`;
  });
  msg += "\nMohon info total & ketersediaan. Terima kasih.";
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
});

window.addEventListener('resize', updateCartUI);

// ===== Product detail modal =====
const detailOverlay = document.getElementById('detailOverlay');
const detailImg = document.getElementById('detailImg');
const detailChip = document.getElementById('detailChip');
const detailName = document.getElementById('detailName');
const detailSize = document.getElementById('detailSize');
const detailLong = document.getElementById('detailLong');
const detailIngredient = document.getElementById('detailIngredient');
const detailTarget = document.getElementById('detailTarget');
const detailQtyVal = document.getElementById('detailQtyVal');
const detailAddCart = document.getElementById('detailAddCart');
const detailWaLink = document.getElementById('detailWaLink');
let currentDetailId = null;

function openDetail(id, opts = {}){
  const p = products.find(pr => pr.id === id);
  if(!p) return;
  currentDetailId = id;

  const detailNoImg = document.getElementById('detailNoImg');
  const detailNoImgIcon = document.getElementById('detailNoImgIcon');
  if(p.img){
    detailImg.src = p.img;
    detailImg.alt = p.name;
    detailImg.style.display = '';
    detailNoImg.style.display = 'none';
  } else {
    const catMeta = CATEGORIES.find(c => c.id === p.cat);
    detailImg.style.display = 'none';
    detailNoImgIcon.innerHTML = catMeta ? catMeta.icon : ICONS.package;
    detailNoImg.style.display = 'flex';
  }
  detailChip.textContent = catLabel(p.cat);
  detailChip.className = `chip ${p.cat}`;
  detailName.textContent = p.name;
  detailSize.textContent = `Kemasan ${p.size}`;
  detailLong.textContent = p.long || p.desc;
  detailIngredient.textContent = p.activeIngredient || "-";
  detailTarget.textContent = p.target || "-";
  detailQtyVal.textContent = cart[id] || 0;
  detailWaLink.href = waSingleLink(p.name);

  detailOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  if(!opts.fromPopstate){
    const url = new URL(window.location);
    url.searchParams.set('p', id);
    history.pushState({ tanikuProdukId: id }, '', url);
    detailPushed = true;
  }
}

let detailPushed = false;

function closeDetailUI(){
  detailOverlay.classList.remove('open');
  document.body.style.overflow = '';
  currentDetailId = null;
}

function closeDetail(){
  if(detailPushed){
    detailPushed = false;
    history.back();
  } else {
    closeDetailUI();
    const url = new URL(window.location);
    if(url.searchParams.has('p')){
      url.searchParams.delete('p');
      history.replaceState({}, '', url);
    }
  }
}

document.getElementById('detailCloseBtn').addEventListener('click', closeDetail);
detailOverlay.addEventListener('click', e => { if(e.target === detailOverlay) closeDetail(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeDetail(); });

window.addEventListener('popstate', () => {
  const params = new URLSearchParams(window.location.search);
  const pid = params.get('p');
  if(pid){
    openDetail(pid, { fromPopstate: true });
  } else {
    closeDetailUI();
  }
});

// Kalau halaman dibuka langsung dari link yang sudah menyertakan ?p=id (link dibagikan), buka detailnya otomatis
(function checkInitialDetailParam(){
  const params = new URLSearchParams(window.location.search);
  const pid = params.get('p');
  if(pid){
    openDetail(pid, { fromPopstate: true });
  }
})();

document.getElementById('detailQPlus').addEventListener('click', () => {
  if(!currentDetailId) return;
  cart[currentDetailId] = (cart[currentDetailId] || 0) + 1;
  detailQtyVal.textContent = cart[currentDetailId];
  const g = document.getElementById(`qty-${currentDetailId}`); if(g) g.textContent = cart[currentDetailId];
});
document.getElementById('detailQMinus').addEventListener('click', () => {
  if(!currentDetailId) return;
  cart[currentDetailId] = Math.max(0, (cart[currentDetailId] || 0) - 1);
  detailQtyVal.textContent = cart[currentDetailId];
  const g = document.getElementById(`qty-${currentDetailId}`); if(g) g.textContent = cart[currentDetailId];
});
detailAddCart.addEventListener('click', () => {
  if(!currentDetailId) return;
  let qty = parseInt(detailQtyVal.textContent, 10);
  if(qty < 1){ qty = 1; detailQtyVal.textContent = qty; }
  cart[currentDetailId] = qty;
  const g = document.getElementById(`qty-${currentDetailId}`); if(g) g.textContent = qty;
  detailAddCart.textContent = "✓ Ditambahkan";
  detailAddCart.classList.add('added');
  setTimeout(() => { detailAddCart.textContent = "+ Tambahkan ke Keranjang"; detailAddCart.classList.remove('added'); }, 1000);
  updateCartUI();
  const prod = products.find(p => p.id === currentDetailId);
  if(prod) showToast(prod.name);
});

renderProducts();
renderBrandMarquee();
updateCartUI();

// ===== Header shadow saat scroll =====
(function(){
  const header = document.querySelector("header");
  if(!header) return;
  const toggleShadow = () => {
    if(window.scrollY > 8){ header.classList.add("scrolled"); }
    else { header.classList.remove("scrolled"); }
  };
  toggleShadow();
  window.addEventListener("scroll", toggleShadow, { passive: true });
})();


// ===== Menu hamburger (mobile) =====
(function(){
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinks = document.querySelector("nav.links");
  if(!hamburgerBtn || !navLinks) return;

  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks.classList.toggle("mobile-open");
  });

  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navLinks.classList.remove("mobile-open"));
  });

  document.addEventListener("click", (e) => {
    if(navLinks.classList.contains("mobile-open") && !navLinks.contains(e.target) && !hamburgerBtn.contains(e.target)){
      navLinks.classList.remove("mobile-open");
    }
  });

  window.addEventListener("resize", () => {
    if(window.innerWidth > 900) navLinks.classList.remove("mobile-open");
  });
})();


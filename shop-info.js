// ===== Info Toko (Profil Toko) — dipakai bareng di semua halaman =====
// Ambil data dari Supabase settings, update elemen yang ada ID-nya.
// Aman dipasang di halaman mana pun — kalau elemennya nggak ada, dilewati aja.
(async function(){
  const SHOP_SUPABASE_URL = "https://kbctbavayemjmglkwkil.supabase.co";
  const SHOP_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiY3RiYXZheWVtam1nbGt3a2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc0Mzc2MTcsImV4cCI6MjEwMzAxMzYxN30.4gJ14L0XRzvEJCgROyDO_Yr5J7qNhdvA6jL2WCCeMoI";

  try {
    const res = await fetch(`${SHOP_SUPABASE_URL}/rest/v1/settings?id=eq.1&select=whatsapp,alamat,jam_operasional,metode_pembayaran`, {
      headers: { apikey: SHOP_SUPABASE_ANON_KEY, Authorization: `Bearer ${SHOP_SUPABASE_ANON_KEY}` },
    });
    if(!res.ok) return;
    const rows = await res.json();
    if(!Array.isArray(rows) || rows.length === 0) return;
    const s = rows[0];

    // ===== Nomor WhatsApp (update href di SEMUA link WA di halaman, plus teks di footer) =====
    if(s.whatsapp){
      const digits = s.whatsapp.replace(/[^0-9]/g, "").replace(/^0/, "62");
      if(digits.length >= 8){
        window.SHOP_WHATSAPP_NUMBER = digits; // dipakai script-index.js/script-produk.js buat link checkout & tanya produk
        document.querySelectorAll('a[href*="wa.me/6285157215526"]').forEach(a => {
          a.href = a.href.replace("6285157215526", digits);
        });
        const waTextEl = document.getElementById("footerWaText");
        if(waTextEl) waTextEl.textContent = "WhatsApp: " + s.whatsapp;
      }
    }

    // ===== Jam Operasional =====
    if(s.jam_operasional){
      const heroHoursEl = document.getElementById("heroHoursB");
      if(heroHoursEl) heroHoursEl.textContent = s.jam_operasional;
      const footerHoursEl = document.getElementById("footerHours");
      if(footerHoursEl) footerHoursEl.textContent = s.jam_operasional;
    }

    // ===== Metode Pembayaran =====
    if(s.metode_pembayaran){
      const heroPaymentEl = document.getElementById("heroPayment");
      if(heroPaymentEl) heroPaymentEl.textContent = s.metode_pembayaran;
    }

    // ===== Alamat =====
    if(s.alamat){
      const heroAddressEl = document.getElementById("heroAddress");
      if(heroAddressEl) heroAddressEl.textContent = s.alamat;
    }
  } catch(err){
    console.warn("Gagal ambil info toko dari database, pakai data default:", err);
  }
})();

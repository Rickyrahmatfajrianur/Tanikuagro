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

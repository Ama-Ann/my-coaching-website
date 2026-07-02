(function () {
  window.i18nReadMoreText = {
    more: { en: "Read more", vi: "Đọc thêm" },
    less: { en: "Read less", vi: "Thu gọn" },
  };

  function applyLang(lang) {
    document.documentElement.classList.toggle("lang-vi", lang === "vi");
    document.documentElement.lang = lang === "vi" ? "vi" : "en";
    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    document.querySelectorAll("option[data-en]").forEach(function (opt) {
      opt.textContent = lang === "vi" ? opt.dataset.vi : opt.dataset.en;
    });
    document.querySelectorAll(".read-more-btn").forEach(function (btn) {
      var preview = btn.previousElementSibling;
      var expanded = preview && preview.classList.contains("expanded");
      btn.textContent = expanded ? window.i18nReadMoreText.less[lang] : window.i18nReadMoreText.more[lang];
    });
    localStorage.setItem("site-lang", lang);
  }

  window.currentLang = function () {
    return document.documentElement.classList.contains("lang-vi") ? "vi" : "en";
  };

  var savedLang = localStorage.getItem("site-lang") || "en";
  applyLang(savedLang);

  document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.dataset.lang);
    });
  });
})();

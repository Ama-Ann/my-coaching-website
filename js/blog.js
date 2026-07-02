document.querySelectorAll(".read-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const preview = btn.previousElementSibling;
    const expanded = preview.classList.toggle("expanded");
    const lang = typeof window.currentLang === "function" ? window.currentLang() : "en";
    const text = window.i18nReadMoreText || {
      more: { en: "Read more", vi: "Đọc thêm" },
      less: { en: "Read less", vi: "Thu gọn" },
    };
    btn.textContent = expanded ? text.less[lang] : text.more[lang];
  });
});

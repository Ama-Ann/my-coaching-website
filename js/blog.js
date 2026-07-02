document.querySelectorAll(".read-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const preview = btn.previousElementSibling;
    const expanded = preview.classList.toggle("expanded");
    btn.textContent = expanded ? "Read less" : "Read more";
  });
});

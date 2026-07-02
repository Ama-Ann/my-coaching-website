document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("form-status").textContent =
    "This form isn't connected to anything yet — wire it up to a form " +
    "service (e.g. Formspree) or your own backend before going live. " +
    "For now, please email directly.";
});

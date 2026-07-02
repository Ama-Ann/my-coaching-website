document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;
  const status = document.getElementById("form-status");
  const submitButton = form.querySelector("button[type=submit]");

  submitButton.disabled = true;
  status.textContent = "Sending...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new FormData(form),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        status.textContent = "Thanks! Your message has been sent — I'll get back to you within a couple of days.";
        form.reset();
      } else {
        status.textContent = "Something went wrong sending your message. Please email me directly instead.";
      }
    })
    .catch(() => {
      status.textContent = "Something went wrong sending your message. Please email me directly instead.";
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});

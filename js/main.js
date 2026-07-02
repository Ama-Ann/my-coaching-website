const contactStatusText = {
  sending: { en: "Sending...", vi: "Đang gửi..." },
  success: {
    en: "Thanks! Your message has been sent — I'll get back to you within a couple of days.",
    vi: "Cảm ơn bạn! Tin nhắn đã được gửi — tôi sẽ phản hồi trong vòng vài ngày.",
  },
  error: {
    en: "Something went wrong sending your message. Please email me directly instead.",
    vi: "Đã có lỗi xảy ra khi gửi tin nhắn. Vui lòng email trực tiếp cho tôi thay vào đó.",
  },
};

function contactStatus(key) {
  const lang = typeof window.currentLang === "function" ? window.currentLang() : "en";
  return contactStatusText[key][lang];
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;
  const status = document.getElementById("form-status");
  const submitButton = form.querySelector("button[type=submit]");

  submitButton.disabled = true;
  status.textContent = contactStatus("sending");

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { Accept: "application/json" },
    body: new FormData(form),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        status.textContent = contactStatus("success");
        form.reset();
      } else {
        status.textContent = contactStatus("error");
      }
    })
    .catch(() => {
      status.textContent = contactStatus("error");
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});

document.querySelectorAll(".calendar-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".calendar-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const target = tab.dataset.target;
    document.querySelectorAll(".calendly-inline-widget").forEach((widget) => {
      widget.style.display = widget.id === target ? "" : "none";
    });
  });
});

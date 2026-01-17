/* =========================
   Smooth Scroll Navigation
========================= */
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

/* =========================
   Slider Pause on Hover
========================= */
const slides = document.querySelector(".slides");

if (slides) {
  slides.addEventListener("mouseenter", () => {
    slides.style.animationPlayState = "paused";
  });

  slides.addEventListener("mouseleave", () => {
    slides.style.animationPlayState = "running";
  });
}

/* =========================
   Booking Form Validation
========================= */
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const phone = form.querySelector('input[type="tel"]').value.trim();
    const destination = form.querySelector("select").value;

    if (!name || !email || !phone || !destination) {
      alert("Please fill all required fields!");
      return;
    }

    alert(
      `Thank you ${name}! ✨\nYour trip to ${destination} has been booked successfully.`,
    );

    form.reset();
  });
}

/* =========================
   Click Logo → Scroll Top
========================= */
const logo = document.querySelector(".header h2");

if (logo) {
  logo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

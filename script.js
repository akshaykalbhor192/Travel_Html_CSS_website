

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


const logo = document.querySelector(".header h2");

if (logo) {
  logo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}


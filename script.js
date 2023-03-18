const ratings = document.querySelectorAll(".rate");
const span = document.getElementById("your-rating");
const submitBtn = document.getElementById("submit-btn");
const ratingBox = document.querySelector(".rating-box");
const thanksBox = document.querySelector(".thanks");

submitBtn.addEventListener("click", () => {
  thanksBox.classList.remove("hidden");
  ratingBox.classList.add("hidden");
});

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    span.innerText = rating.innerText;
  });
});

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});


var typed = new Typed(".text-type",{
    strings: ["Welcome to our Dress Website","Discover the latest fashion trends and shop our collection of dresses"],
    typeSpeed: 30,
    backSpeed: 20,
    loop : true
})



var typed = new Typed(".text-type",{
    strings: ["Welcome to our Dress Website","Discover the latest fashion trends and shop our collection of dresses"],
    typeSpeed: 20,
    backSpeed: 10,
    loop : true
})


let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  

}
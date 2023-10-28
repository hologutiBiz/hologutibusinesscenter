
// function for payment page //
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slider");

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
 
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex -1].style.display = "block";

    setTimeout(showSlides, 3000);
}




const light = document.getElementById('light');


function toggleLight() {
  light.classList.toggle('off'); // Toggle the 'off' class to control visibility
}

setInterval(toggleLight, 3000);






let images = document.querySelectorAll('.fading-image');
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].style.display = "none";
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].style.display = "block";
        }

        images[currentIndex].style.display = "block";
        setInterval(showNextImage, 4000);
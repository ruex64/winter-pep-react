const carouselImages = document.getElementById('carousel-images');
        const images = document.querySelectorAll('.carousel-images img');
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 300;
            carouselImages.style.transform = `translateX(${offset}px)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        }
        function toggleAccordion(header) {
            const content = header.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                const allContents = document.querySelectorAll(".accordion-content");
                allContents.forEach(item => item.style.display = "none"); 
                content.style.display = "block";
            }
        }
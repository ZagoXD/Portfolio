$(document).ready(function () {
    var modal = $("#modal");
    var currentProjectIndex = null;
    var imageContainers = [];
    var currentIndex = 0;
    var totalImages = 4; // Total de imagens por projeto

    $(".card").click(function () {
        currentProjectIndex = $(this).index();
        var images = [];
        for (var i = 1; i <= totalImages; i++) {
            images.push(`img/projects/project${currentProjectIndex + 1}-${i}.png`);
        }
        updateCarousel(images);
        modal.show();
    });

    $(".close").click(function () {
        modal.hide();
    });

    $(".next").click(function () {
        showNextImage();
    });

    $(".prev").click(function () {
        showPrevImage();
    });

    function updateCarousel(images) {
        var carouselImages = $(".carousel-images");
        carouselImages.empty();
        images.forEach(function (src, index) {
            carouselImages.append(`<img src="${src}" class="carousel-image" style="display: ${index === 0 ? 'block' : 'none'};">`);
        });
        imageContainers = carouselImages.find(".carousel-image");
        currentIndex = 0;
    }

    function showNextImage() {
        if (currentIndex < imageContainers.length - 1) {
            imageContainers.eq(currentIndex).hide();
            currentIndex++;
            imageContainers.eq(currentIndex).show();
        }
    }

    function showPrevImage() {
        if (currentIndex > 0) {
            imageContainers.eq(currentIndex).hide();
            currentIndex--;
            imageContainers.eq(currentIndex).show();
        }
    }
});

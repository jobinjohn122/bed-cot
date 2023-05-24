$(document).ready(function () {
    
    $(".slider-img").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false,

    })
    $(".brands").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,

                    infinite: true,
                }

            },
            {
                breakpoint: 967,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 624,
                settings: {
                    slidesToShow: 1,

                }
            },
        ]

    })



});

$(document).ready(function () {
    cloudTranslation({
        defaultLanguage: "en", // optional | The main language used.
        urlLanguageLocation: UrlLanguageLocation.none, // optional | To append language in the url (ex: www.website.com/en/).
        translatorProvider: TranslatorProvider.none, // optional | Translate text using a translator provider.
        translatorProviderKey: "", // optional | The translator provider key.
        logTranslationsFromProvider: false, // optional | Set to true to log the translation output in the console.
        languages: [
            {
                code: "en",
                displayName: "English"
            },
            {
                code: "ar",
                displayName: "العربية",
                direction: LanguageDirection.rtl
            }
        ]
    });

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });
           
    $("#more").click(function () {
        $(".parentslider").slideToggle( "slow" )
        $(".categories-slider").slideToggle( "slow" )
    });
    //image
    var slider_single_image = $('.image-slider');
    if (slider_single_image.length) {
        //select box
        slider_single_image.slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            autoplay: true,
            arrows: true,
            autoplaySpeed: 3000,
            adaptiveHeight: true,
            prevArrow: '<button class="slide-arrow imgarow prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="slide-arrow imgarow next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
        });

    }
    var categories_slider = $('.categories-slider');
    if (categories_slider.length) {
        //select box
        categories_slider.slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 7,
            slidesToScroll: 7,
            prevArrow: '<button class="slide-arrow imgarow cprev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="slide-arrow imgarow cnext-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        infinite: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: false,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]

        });

    }
})

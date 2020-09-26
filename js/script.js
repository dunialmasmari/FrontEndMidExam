
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
    $('#flagul li').click(function(){
        console.log($(this).children('img').attr('src'))
        var x=$(this).children('img').attr('src')
        console.log($('#flagbtn img').attr('src'))
        $('#flagbtn img').attr('src',x)
        var city;
        if( $('#flagbtn img').attr('src')=='./images/yf.png'){
            city = ["select","Aden", "Sana'a"];
        }
        if($('#flagbtn img').attr('src') =='./images/eflag.png'){
            city = ["select","Cairo", "Alexandria"];
        }
        if($('#flagbtn img').attr('src') =='./images/gflag.png'){
            city = ["select","Berlin", "Frankfurt"];
        }
        //cities
        $('.cities').children().remove().end()

        city.forEach(element => {
            var o = new Option("option text", "value");
/// jquerify the DOM object 'o' so we can use the html method
$(o).html(element);
$(".cities").append(o);
        });
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
            prevArrow: '<button class="slide-arrow imgarow prev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="slide-arrow imgarow next-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
        });

    }
    var categories_slider = $('.categories-slider');
    if (categories_slider.length) {
        //select box
        categories_slider.slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 7,
            slidesToScroll: 7,
            arrows: true,
            prevArrow: '<button class="slide-arrow imgarow cprev-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
            nextArrow: '<button class="slide-arrow imgarow cnext-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        dots: false
                    }
                },
                {
                    breakpoint: 510,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 340,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });

    }
})

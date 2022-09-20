$(function(){
    $('.fullslider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1300,
        infinite: true,
        dots: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        pauseOnHover: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false
              }
            }
          ]
      });
      $('.brands').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1300,
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        adaptiveHeight: true,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 8,
              }
            },
            {
                breakpoint: 992,
                settings: {
                  slidesToShow: 6,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 4,
                }
              }
          ]
      });
      $('.home-product-carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
		    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
        adaptiveHeight: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 2,
            }
          }
        ]
      });
});


(function($){
    "use strict"
    var ORIO = {};

    /*--------------------
      * Pre Load
    ----------------------*/
    ORIO.WebLoad = function(){
      document.getElementById("loading").style.display = "none"; 
    }

    /*--------------------
        * Header Class
    ----------------------*/
    ORIO.HeaderSticky = function(){
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), $(".header").addClass("fixed-header")
        });
    }

    /*--------------------
        * Menu Close
    ----------------------*/
    ORIO.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }

    /*--------------------
        * Smooth Scroll
    ----------------------*/
    ORIO.HeaderScroll = function(){
        $('.header a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 65,
                      }, 1000);
                      return false;
                  }
            }
        });
    }

    /*--------------------
        * Header Fixed
    ----------------------*/
    ORIO.HeaderFixed = function(){
        if ($(window).scrollTop() >= 60) {
           $('.header').addClass('fixed-header');
        }
        else {
           $('.header').removeClass('fixed-header');
        }
    }

     /* ---------------------------------------------- /*
      * accordion
    /* ---------------------------------------------- */
    ORIO.Accordion = function() {
      $('.accordion').each(function (i, elem) {
            var $elem = $(this),
               $acpanel = $elem.find(".orio-group > .orio-des"),
               $acsnav =  $elem.find(".orio-group > .orio-heading");
              $acpanel.hide().first().slideDown("easeOutExpo");
              $acsnav.first().parent().addClass("orio-active");
              $acsnav.on('click', function () {
                if(!$(this).parent().hasClass("orio-active")){
                  var $this = $(this).next(".orio-des");
                  $acsnav.parent().removeClass("orio-active");
                  $(this).parent().addClass("orio-active");
                  $acpanel.not($this).slideUp("easeInExpo");
                  $(this).next().slideDown("easeOutExpo");
                }else{
                   $(this).parent().removeClass("orio-active");
                   $(this).next().slideUp("easeInExpo");
                }
                return false;
            });
        });
    }

    /*--------------------
    * Counter JS
    ----------------------*/
    var a = 0;
    ORIO.Counter = function(){
      var oTop = $('.counter-box').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
          a = 1;
        }
    }

    /*--------------------
        * Owl
    ----------------------*/
    ORIO.ClientSlider = function(){
      var testimonials_slider = $('#client-slider-single');
        testimonials_slider.owlCarousel({
            auto:true,
            loop: true,
            margin: 0,
            nav:false,
            responsive: {
              0: {
                items: 1
              },
              768: {
                items: 2
              },
              991: {
                items: 3
              },
              1140: {
                items: 3
              }
            }
        });
    }

  
    
    // Window on Load
    $(window).on("load", function(){
      ORIO.WebLoad();
    });

    $(document).on("ready", function(){
        ORIO.HeaderFixed(),
        ORIO.Accordion(),
        ORIO.ClientSlider(),
        ORIO.MenuClose(),
        ORIO.Counter(),
        ORIO.HeaderScroll(),
        ORIO.HeaderSticky();
    });

    $(window).on("scroll", function(){
        ORIO.Counter(),
        ORIO.HeaderFixed();
    });

})(jQuery);



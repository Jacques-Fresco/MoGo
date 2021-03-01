$(function() {

    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();  

    //  Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop(); 

        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    //  Smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
        blockId = $this .data('scroll'),
        blockOffset = $(blockId).offset().top; 

        $("#nav a").removeClass("active");
        $this.addClass("active");



        if ($("#nav_toggle").hasClass('active')) {
            $(window).on("scroll", function() {
             $('#nav_toggle').removeClass("active");
             $("#nav").removeClass("active");
            });
        }
        $('.section__title').removeClass('bg-highlight')
        $(blockId + ' .section__title').addClass('bg-highlight')



        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    })

    // Menu nav toggle
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");

        if(scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });

    // Collapse
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
        blockId = $this.data('collapse');

        // $this.toggleClass("active");
        $(blockId).slideToggle();
    });

    // Slider
    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToscroll: 1
    });

});
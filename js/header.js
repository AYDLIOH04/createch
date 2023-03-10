$(function() {

    const header = $("#header")
    

    // Плавный скролл
    $("[data-scroll]").on("click", function(event){
        event.preventDefault()
        
        const $this = $(this),
              blockId = $this.data("scroll")
              blockOffSet = $(blockId).offset().top - header.height() - 30

        $("#nav a").removeClass("active")
        $this.addClass("active")

        $("html, body").animate({
            scrollTop: blockOffSet
        }, 500)

        // $("#nav_toggle").removeClass("active")
        // $("#nav").removeClass("active")
    })

    // Отслеживание элементов
    $(window).scroll(function() {
        var height = $(window).scrollTop()
        if (height === 0){
            $("#nav a").removeClass('active')
            $("#header").removeClass('fixed')
        } else {
            $("#header").addClass('fixed')
            ifScroll("#scroll__news", "#news", height)
            ifScroll("#scroll__about", "#about", height)
            ifScroll("#scroll__vend", "#venders", height)
            ifScroll("#scroll__work", "#work", height)
            ifScroll("#scroll__cont", "#contacts", height)
        }
    });

    function ifScroll(navItem, content, height) {
        if(height >= ($(content).offset().top - header.height() - 50)){
            $("#nav a").removeClass('active')
            $(navItem).addClass('active');
        } else {
            $(navItem).removeClass('active');
        }
    }





    
    // // Menu nav toogle
    // $("#nav_toggle").on("click", function(event){
    //     event.preventDefault()

    //     $(this).toggleClass("active")
    //     $("#nav").toggleClass("active")
    // })


    // // Collapse
    // $("[data-collapse]").on("click", function(event){
    //     event.preventDefault()

    //     const $this = $(this),
    //           blockId = $this.data("collapse")

    //     $this.toggleClass("active")
    //     $(blockId).slideToggle() // Встроенные анимации
        
    // })


    // // Slider
    // $("[data-slider]").slick({
    //     infinite: true,
    //     fade: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,

    // })

})

$(function(){
    $(".header").hover(function(){
        $(".header_wrap").show()
        $(".nav>li>a").css("color","black")
        $(".logo>li>a").css("color","black")
        $(".logo>li>i").css("color","black")
    },function(){
        $(".header_wrap").hide()
        $(".nav>li>a").css("color","white")
        $(".logo>li>a").css("color","white")
        $(".logo>li>i").css("color","white")
    })

    $(".nav01").hover(function(){
        $(".subnav01").show()
    }, function(){$(".subnav01").hide()})

    $(".nav02").hover(function(){
        $(".subnav02").show()
    }, function(){$(".subnav02").hide()})
    $(".nav03").hover(function(){
        $(".subnav03").show()
    }, function(){$(".subnav03").hide()})
    $(".nav04").hover(function(){
        $(".subnav04").show()
    }, function(){$(".subnav04").hide()})
    

    $(window).scroll(function(){
        $(".header_wrap").show()
        $(".nav>li>a").css("color","black")
        $(".logo>li>a").css("color","black")
        $(".logo>li>i").css("color","black")
    })

    $(".slider").slick({
        infinite: true,
        slidesToShow: 3, //How many for show
        slidesToScroll: 1, //How many for next
        arrows:true, //next,prev button
        autoplay:false,
        autoplaySpeed: 2000,
        dots: false, //pager
        centerMode: false,
        centerPadding: '0',
        prevArrow:".slick_prev",
        nextArrow:".slick_next",})

    $(".mbar").click(function(){
        $(".mbarx").fadeIn();
        $(this).hide();
        $(".mnav").stop().animate({left:0},300)
    })

    $(".mbarx").click(function(){
        $(".mbar").fadeIn();
        $(this).hide();
        $(".mnav").css("left","-100%")
    })

    $(".mnav01").click(function(){
        $(".mnav2").stop().animate({left:0},500)
        $(".mnav2").show();
    })

    $(".back").click(function(){
        $(".mnav2").hide()
    })
})
$(".closing").click(function () {
    $("#homePage").css("transform", "translateX(0px) scale(1)")
    $("#homePage").css("filter", "blur(0px)")
    $("#sideMenu").css("right", "-22%")
    $("#sideMenu").css("display", "none")

})
$("#menu").click(function () {
    $("#homePage").css("transform", "translateX(-100px) scale(0.7)")
    $("#homePage").css("filter", "blur(0.89px)")
    $("#sideMenu").css("right", "2%")
    $("#sideMenu").css("display", "block")



})


$(".outerDiv:nth-child(1)").mouseenter(
    function () {

        $(".outerDiv:nth-child(1) .opacityDiv").addClass("opac")
        $(".outerDiv:nth-child(1) .eventText").removeClass("textHide")


        $(".outerDiv:nth-child(1) .textDiv").addClass("show")

    })

$(".outerDiv:nth-child(1)").mouseleave(
    function () {

        $(".outerDiv:nth-child(1)>.imageDiv>.opacityDiv").removeClass("opac")
        $(".outerDiv:nth-child(1)>.imageDiv>.opacityDiv>.eventText").addClass("textHide")



        $(".outerDiv:nth-child(1) .textDiv").removeClass("show")

    })
$(".outerDiv:nth-child(2)").mouseenter(
    function () {

        $(".outerDiv:nth-child(2) .opacityDiv").addClass("opac")
        $(".outerDiv:nth-child(2) .eventText").removeClass("textHide")
        $(".outerDiv:nth-child(2) .textDiv").addClass("show")

    })

$(".outerDiv:nth-child(2)").mouseleave(
    function () {

        $(".outerDiv:nth-child(2) .opacityDiv").removeClass("opac")
        $(".outerDiv:nth-child(2) .eventText").addClass("textHide")
        $(".outerDiv:nth-child(2) .textDiv").removeClass("show")
    })
$(".outerDiv:nth-child(3)").mouseenter(
    function () {

        $(".outerDiv:nth-child(3) .opacityDiv").addClass("opac")
        $(".outerDiv:nth-child(3) .eventText").removeClass("textHide")
        $(".outerDiv:nth-child(3) .textDiv").addClass("show")

    })

$(".outerDiv:nth-child(3)").mouseleave(
    function () {

        $(".outerDiv:nth-child(3)>.imageDiv>.opacityDiv").removeClass("opac")
        $(".outerDiv:nth-child(3)>.imageDiv>.opacityDiv>.eventText").addClass("textHide")

        $(".outerDiv:nth-child(3) .textDiv").removeClass("show")
    })


    if ($(window).width() > 901 && $(window).width() < 1024) {
        $("#menu").click(function () {
            $("#homePage").css("transform", "translateX(0px) scale(0.7)")
            $("#homePage").css("filter", "blur(0.89px)")
            $("#sideMenu").css("right", "2%")
            $("#sideMenu").css("display", "block")
            
            $("#sideMenu").css("position", "absolute")
            
            $("#sideMenu").css("z-index", "9999")
            $("#sideMenu").css("background-color", "white")
            
            $("#sideMenu").css("height", "auto")
            $("#sidePart2 a:nth-child(5)").css("margin-bottom", "20px")
            
            $("#sideMenu").css("width", "auto")
            
            $("#sidePart1 h3").css("margin-right", "10px")
            $("#sidePart1").css("margin-top", "10px")
        
        })
        $(".closing").click(function () {
            // $("#homePage").css("transform", "translateX(0px) scale(1)")
            // $("#homePage").css("filter", "blur(0px)")
            // $("#sideMenu").css("display", "none")
        })


    }

    if ($(window).width() > 600 && $(window).width() < 900) {
        $("#menu").click(function () {
            $("#homePage").css("transform", "translateX(0px) scale(0.7)")
            $("#homePage").css("filter", "blur(0.89px)")
            $("#sideMenu").css("right", "2%")
            $("#sideMenu").css("display", "block")
            
            $("#sideMenu").css("position", "absolute")
            
            $("#sideMenu").css("z-index", "9999")
            $("#sideMenu").css("background-color", "white")
            
            $("#sideMenu").css("height", "auto")
            $("#sidePart2 a:nth-child(5)").css("margin-bottom", "20px")
            
            $("#sideMenu").css("width", "auto")
            // $("#sideMenu").addClass("sideep1")
            $("#sidePart1 h3").css("margin-right", "10px")
            $("#sidePart1").css("margin-top", "10px")
        
        })
        $(".closing").click(function () {
            // $("#homePage").css("transform", "translateX(0px) scale(1)")
            // $("#homePage").css("filter", "blur(0px)")
            // $("#sideMenu").css("display", "none")
        })


    }

if ($(window).width() < 600) {
    $("#menu").click(function () {
        $("#homePage").css("transform", "translateX(0px) scale(0.7)")
        $("#homePage").css("filter", "blur(0.89px)")
        $("#sideMenu").css("right", "2%")
        $("#sideMenu").css("display", "block")
        
        $("#sideMenu").css("position", "absolute")
        
        $("#sideMenu").css("z-index", "9999")
        $("#sideMenu").css("background-color", "white")
        
        $("#sideMenu").css("height", "auto")
        
        $("#sideMenu").css("width", "auto")
        // $("#sideMenu").addClass("sideep1")
        $("#sidePart1 h3").css("margin-right", "10px")
        $("#sidePart1").css("margin-top", "10px")
    
    })
    $(".closing").click(function () {
        // $("#homePage").css("transform", "translateX(0px) scale(1)")
        // $("#homePage").css("filter", "blur(0px)")
        // $("#sideMenu").css("display", "none")
    })
}
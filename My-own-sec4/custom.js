$(document).ready(function(){
    $("#burger").click(function(){
        console.log("clicked")
        var navContainer = $("#nav-container")
        if(navContainer.hasClass("hideMobile")){
            navContainer.removeClass("hideMobile")
            navContainer.addClass("openMobile")
        }
        else{
            navContainer.addClass("hideMobile")
            navContainer.removeClass("openMobile")

        }
    })

    $(".mobile-menu-icon").on("click",function(){
        $(".primary-nav").toggleClass("active");
        $(this).toggleClass("open")
    })
});
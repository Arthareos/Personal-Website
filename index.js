function openMenu() {
    document.getElementById("menu").classList.remove("menuClosed");
    document.getElementById("menu").classList.add("menuOpen");
    document.getElementById("menuShader").classList.remove("menuShaderClosed");
    document.getElementById("menuShader").classList.add("menuShaderOpen");
}

function closeMenu() {
    document.getElementById("menu").classList.remove("menuOpen");
    document.getElementById("menu").classList.add("menuClosed");
    document.getElementById("menuShader").classList.remove("menuShaderOpen");
    document.getElementById("menuShader").classList.add("menuShaderClosed");
}

// $(window).scroll(function() {
//     if (window.innerWidth <= 600)  {
//         var homeTop = $(window).scrollTop();
    
//         var height = $(".mainContent").height();
//         var offset = $(".mainContent").offset().top;
    
//         var opacity = ((height - homeTop + offset) / height) / 15 * 4;

//         $("#mainTitleContainer").css("opacity", opacity);
//     }
//     else {
//         $("#mainTitleContainer").css("opacity", 1);
//     }
// });

$(window).scroll(function() {
    if (window.innerWidth <= 600)  {
        var scrollQuantity = $(window).scrollTop();
        var contentPosition = $(".mainContent").top;
        var titlePosition = $(".mainTitleContainer").top;
    
        var opacity = ();

        $("#mainTitleContainer").css("opacity", opacity);
    }
    else {
        $("#mainTitleContainer").css("opacity", 1);
    }
});
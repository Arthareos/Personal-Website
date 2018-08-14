let action = 0;
let open = 0;

function tabSelector(page, id) {
    var iframe = $("#main-content");
    var link = document.getElementById(id);
    $("#mainimg").attr("src", "./style/img/logo.png");
    $("#brow").attr("src", "./style/img/logo.png");
    $("#rad").attr("src", "./style/img/logo.png");
    $("#lib").attr("src", "./style/img/up.png");
    if (id == "#mainimg") {
        $(link).attr("src", "./style/img/");
    }
    if (id == "#brow") {
        $(link).attr("src", "./style/img/");
    }
    if (id == "#rad") {
        $(link).attr("src", "./style/img/");
    }
    if (id == "#lib") {
        $(link).attr("src", "./style/img/");
    }
    iframe.attr("src", page);
}

function onLoad() {
    tabSelector('backup.html', 'mainimg');
}

function operateMenu() {
    if (open == 0) {
        document.getElementById("navBar").classList.remove("navClosed");
        document.getElementById("navBarShader").classList.remove("navClosed");
        document.getElementById("navBar").classList.add("navOpen");
        document.getElementById("navBarShader").classList.add("navOpen");
        document.getElementById("menu").src = "./style/img/down.png";
        open = 1;
    }
    else {
        document.getElementById("navBar").classList.remove("navOpen");
        document.getElementById("navBarShader").classList.remove("navOpen");
        document.getElementById("navBar").classList.add("navClosed");
        document.getElementById("navBarShader").classList.add("navClosed");
        document.getElementById("menu").src = "./style/img/up.png";
        open = 0;
    }
}
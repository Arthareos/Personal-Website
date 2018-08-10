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

function openMenu() {
    document.getElementById("navBar").style.WebkitAnimationPlayState = "paused";
    document.getElementById("navBarShader").style.WebkitAnimationPlayState = "paused";
    document.getElementById("menu").src = "./style/img/down.png";
    open = 1;
    action = 0;
}

function closeMenu() {
    document.getElementById("navBar").style.WebkitAnimationPlayState = "paused";
    document.getElementById("navBarShader").style.WebkitAnimationPlayState = "paused";
    document.getElementById("menu").src = "./style/img/up.png";
    open = 0;
    action = 0;
}

function operateMenu() {
    if (action == 0)
    {
        document.getElementById("navBar").style.WebkitAnimationPlayState = "running";
        document.getElementById("navBarShader").style.WebkitAnimationPlayState = "running";
        if (open == 0)
        {
            action = 1;
            setTimeout(openMenu, 1000);
        }
        else
        {
            action = 1;
            setTimeout(closeMenu, 1000);
        }
    }
}
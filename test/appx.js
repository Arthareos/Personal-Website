let searchBar = 0;  

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
const remote = require('electron').remote;
const $ = require('jquery');

let win = remote.getCurrentWindow();    

function minimize() {
    win.minimize();
};

function maximize() {
    if(!win.isMaximized()) {
        win.maximize();
    }
    else
    {
        win.unmaximize();
    }
};

function closed() {
    win.close();
};

function tabSelector(page, id) {
    var iframe = $("#main-content");
    var link = document.getElementById(id);
    $("#mainimg").attr("src", "./Style/Images/Navbar/logo.png");
    $("#brow").attr("src", "./Style/Images/Navbar/logo.png");
    $("#rad").attr("src", "./Style/Images/Navbar/logo.png");
    $("#lib").attr("src", "./Style/Images/Navbar/logo.png");
    if (id == "#mainimg") {
        $(link).attr("src", "./Style/Images/Close/2.png");
    }
    if (id == "#brow") {
        $(link).attr("src", "./Style/Images/Close/2.png");
    }
    if (id == "#rad") {
        $(link).attr("src", "./Style/Images/Close/2.png");
    }
    if (id == "#lib") {
        $(link).attr("src", "./Style/Images/Close/2.png");
    }
    iframe.attr("src", page);
}
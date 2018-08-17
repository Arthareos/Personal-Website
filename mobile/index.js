let open = 0;

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
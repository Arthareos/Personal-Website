let open = 0;

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

function operateMenu() {
    if (open == 0) {
        document.getElementById("menuButton").classList.remove("menuClosed");
        document.getElementById("menuButtonShader").classList.remove("menuClosed");
        document.getElementById("menuButton").classList.add("menuOpen");
        document.getElementById("menuButtonShader").classList.add("menuOpen");
        document.getElementById("menu").src = "./style/img/down.png";
        open = 1;
    }
    else {
        document.getElementById("menuButton").classList.remove("menuOpen");
        document.getElementById("menuButtonShader").classList.remove("menuOpen");
        document.getElementById("menuButton").classList.add("menuClosed");
        document.getElementById("menuButtonShader").classList.add("menuClosed");
        document.getElementById("menu").src = "./style/img/up.png";
        open = 0;
    }
}
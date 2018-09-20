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
function changeName() {
    let paragraph = document.getElementById("para");
    let name = prompt("¿Cuál es tu nombre?")
    paragraph.innerHTML = "Hola " + name;
}
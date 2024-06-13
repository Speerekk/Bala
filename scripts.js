const body = document.getElementsByTagName("body")[0]; // Haal het body element op

function changeColor(name) {
    body.style.backgroundColor = name; // Verander de achtergrondkleur van de body naar de opgegeven kleur
}

function randomColor() {
    const red = Math.floor(Math.random() * 255); // Genereer een willekeurige waarde voor rood (0-254)
    const green = Math.floor(Math.random() * 255); // Genereer een willekeurige waarde voor groen (0-254)
    const blue = Math.floor(Math.random() * 255); // Genereer een willekeurige waarde voor blauw (0-254)

    const color = `rgb(${red}, ${green}, ${blue})`; // Maak een rgb-kleurstring met de willekeurige waarden

    body.style.backgroundColor = color; // Verander de achtergrondkleur van de body naar de willekeurige kleur
}

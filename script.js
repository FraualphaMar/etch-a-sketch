function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
const container = document.querySelector(".container");
const gridSize = 16 * 16;
for (let i = 1; i <= gridSize; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = getRandomColor();
    });
    container.appendChild(div);
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    const input = prompt("how many squares per side for your new grid?(Max 100)")
    if (input === null) return;
    if (input < 1 || input > 100) {
        alert("Please enter a number between 1 and 100");
        return;
    }
    container.innerHTML = "";
    const gridSize = input * input;
    const squareSize = 480 / input;
    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement("div");
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = getRandomColor();
        })
        container.appendChild(div);
    }
})
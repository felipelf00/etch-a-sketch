
const container = document.querySelector(".container");


function createGrid(side, container) {
    for (let i = 0; i < side**2; i++ ) {
        let div = document.createElement('div');
        div.classList.add("pixel");
        container.appendChild(div);
    }

}

let side = 16;
createGrid (side, container);

const pixels = document.querySelectorAll(".pixel");

pixels.forEach( (pixel) => {
    pixel.addEventListener("mouseenter", (e) => {
        if (e.which === 1 && !pixel.classList.contains("painted")) {
           pixel.classList.toggle("painted");
        }
    });
});

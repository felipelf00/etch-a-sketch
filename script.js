
function createGrid(side, container) {
    let size = (container.offsetWidth - 2) / side;
    for (let i = 0; i < side**2; i++ ) {
        let div = document.createElement('div');
        div.classList.add("pixel");
        div.style.width = size+'px';
        div.style.height = size+'px';
        container.appendChild(div);
    }

}

function enablePaint () {
    const pixels = document.querySelectorAll(".pixel");
    //e.which returns which mouse button is pressed.
    pixels.forEach( (pixel) => {
        pixel.addEventListener("mouseenter", (e) => {
            if (e.which === 1 && !pixel.classList.contains("painted")) { 
            pixel.classList.toggle("painted");
            }
        });
    });
}

function clearGrid () {
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const container = document.querySelector(".container");
let side = 32;
createGrid (side, container);
enablePaint();

const btn = document.querySelector("#button");
btn.addEventListener('click', (side) => {
    side = document.getElementById("input").value;
    const container = document.querySelector(".container");
    clearGrid();
    createGrid(side, container);
    enablePaint();
})



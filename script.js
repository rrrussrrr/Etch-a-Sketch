function clearGrid() {
    const grid = document.getElementById("grid");
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function setGrid(sideSize) {

    const grid = document.getElementById("grid");
    document.documentElement.style.setProperty("--sideNum", sideSize);
    for (i = 0; i < sideSize * sideSize; i++) {
    const box = document.createElement('div');
    box.setAttribute("class", "box");
    box.setAttribute("id","box" + i);
    //box.textContent = "h";
    grid.appendChild(box);
    }
}

document.addEventListener('DOMContentLoaded', function (){
    clearGrid();
    setGrid(16);
});

document.addEventListener('mouseover', function(e){
    if (e.target.classList.contains("box")) {
        e.target.classList.add("boxblack");
    }


});

const sidebutton = document.getElementById("sidebutton");
sidebutton.addEventListener("click", function(){
    let sides = prompt("Enter number of sides: ", 16);
    clearGrid();
    setGrid(sides);


});



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

// Intialize default parameters for grid
document.addEventListener('DOMContentLoaded', function (){
    const grid = document.getElementById("grid");
    grid.setAttribute("class", "blackmode");
    clearGrid();
    setGrid(16);
});

document.addEventListener('mouseover', function(e){
    if (e.target.classList.contains("box")) {
        const grid = document.getElementById("grid");
        if (grid.classList.contains("blackmode")) {
           // e.target.classList.add("boxblack");  
             e.target.style.backgroundColor = 'black';
        } else if (grid.classList.contains("rainbowmode")) {
            e.target.style.backgroundColor = randomColor();   
        }
        
    }

function randomColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}



});

const sidebutton = document.getElementById("sidebutton");
sidebutton.addEventListener("click", function(){
    let sides = prompt("Enter number of sides (Max 100): ", 16);
    if (sides > 100 || isNaN(sides)) {
        sides = 16;
    }
    clearGrid();
    setGrid(sides);


});





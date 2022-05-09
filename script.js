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
    grid.classList.add("blackmode");
    //grid.setAttribute("class", "blackmode");
    clearGrid();
    setGrid(16);
});

document.addEventListener('mouseover', function(e){
    if (e.target.classList.contains("box")) {
        const grid = document.getElementById("grid");
        if (grid.classList.contains("brushon")){
         if (grid.classList.contains("blackmode")) {
            e.target.style.backgroundColor = 'black';
        }   else if (grid.classList.contains("rainbowmode")) {
             e.target.style.backgroundColor = randomColor();   
         }
        }
        
    }
});

// toggle brush by clicking on a box
document.addEventListener('click', function(e){
    if (e.target.classList.contains("box")) {
        const grid = document.getElementById("grid");
        if (grid.classList.contains("brushon")) {
            grid.classList.remove("brushon");
        } else {
            grid.classList.add("brushon");
        }
        
    }
});

function randomColor() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}





const sidebutton = document.getElementById("sidebutton");
sidebutton.addEventListener("click", function(){
    let sides = prompt("Enter number of sides (Max 100): ", 16);
    if (sides > 100 || isNaN(sides)) {
        sides = 16;
    }
    clearGrid();
    setGrid(sides);
});

const rainbowbutton = document.getElementById("rainbow");
rainbowbutton.addEventListener("click", function() {
    const grid = document.getElementById("grid");
    grid.classList.remove("blackmode")
    grid.classList.add("rainbowmode");

});

const blackbutton = document.getElementById("black");
blackbutton.addEventListener("click", function() {
    const grid = document.getElementById("grid");
    grid.classList.remove("rainbowmode")
    grid.classList.add("blackmode");

});

const resetbutton = document.getElementById("reset");
resetbutton.addEventListener("click", function() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = 'white';
    })


});

var sideSlider = document.getElementById("sideslider");
var sliderValueDisplay = document.getElementById("sideValue");
sliderValueDisplay.innerHTML = sideSlider.value;
sideSlider.oninput = function() {
    sliderValueDisplay.innerHTML = this.value;

}





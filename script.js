

document.addEventListener('DOMContentLoaded', function (){


    const grid = document.getElementById("grid");
    let sideNum = 20;
    document.documentElement.style.setProperty("--sideNum", sideNum);
    for (i = 0; i < sideNum * sideNum; i++) {
    const box = document.createElement('div');
    box.setAttribute("class", "box");
    box.setAttribute("id","box" + i);
    //box.textContent = "h";
    grid.appendChild(box);
    }


});

document.addEventListener('mouseover', function(e){
    if (e.target.classList.contains("box")) {
        //var currentBox = e.currentTarget.id;
        //currentBox.className += " " + "boxblack";
        e.target.classList.add("boxblack");
    }


});

//const boxes = document.querySelectorAll("box");
//boxes.forEach( cell => {
//    cell.addEventListener('click', function(e){
//        const currentBox = e.currentTarget.id;
//        currentBox.setAttribute("class", "boxblack");
//        });
//});


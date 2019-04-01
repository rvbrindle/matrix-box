let counter = 0;
const one = new Audio ('snds/one.mp3');
const two = new Audio ('snds/two.mp3');
const three = new Audio ('snds/three.mp3');
const four = new Audio ('snds/four.mp3');
const five = new Audio ('snds/five.mp3');
const six = new Audio ('snds/six.mp3');
const seven = new Audio ('snds/seven.mp3');
const eight = new Audio ('snds/eight.mp3');
const nine = new Audio ('snds/nine.mp3');
const ten = new Audio ('snds/ten.mp3')

function createGrid() {

    var grid = document.createElement('div');
    grid.className = 'gridContainer'
    document.body.appendChild(grid);

    for (var a = 0; a < 10; a++ ) { //creates the row blocks
        var gridRow = document.createElement('div');
        gridRow.className = 'gridRow';
        gridRow.id = a;
        grid.appendChild(gridRow);

        for (var x = 0; x < 10; x++ ) { //creates the individual block elements
            var gridBlock = document.createElement('div');
            gridBlock.className = 'gridBlock';
            gridBlock.id = x;
            gridRow.appendChild(gridBlock);
        }
    }
}

createGrid();

function toggleActive() { // turns the class of active on and off 

    if (this.classList.contains('active')){
        this.className = 'gridBlock' 
    } else {
    this.className += ' active';
    }
}

function activeChecker() {

    var currentBlock = document.getElementsByClassName('gridBlock');

        Array.from(currentBlock).forEach(function(element){
            var block = parseInt(element.id);

            if (block === counter) {
                if(element.classList.contains('active')){
                    fireSounds(element); //fires the element to the function. here is where i left it.
                }
            } 

        })

        if (counter >= 9) { //counter reset CBTT
            counter = 0;
        } else {
        counter++;
        }
}

function fireSounds(element) {
    var gridBlock = parseInt(element.parentNode.id)
    switch(gridBlock) {
        case 0:
            one.play();
            break;
        case 1:
            two.play();
            break;
        case 2:
            three.play();
            break;
        case 3:
            four.play();
            break;
        case 4:
            five.play();
            break;
        case 5:
            six.play();
            break;
        case 6:
            seven.play();
            break;
        case 7:
            eight.play();
            break;
        case 8:
            nine.play();
            break;
        case 9:
            ten.play();
            break;
    }
}

setInterval (function(){
    activeChecker();
}, 700);

window.onload = function() {
    var gridBlock = document.getElementsByClassName('gridBlock'); //add event listeners as getElemByClassName returns OBJ
        Array.from(gridBlock).forEach(function(element) {
        element.addEventListener('click', toggleActive);
      });
}


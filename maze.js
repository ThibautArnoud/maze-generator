var direction;
var currentDirection;

/* Constructor maze object */
function Maze(name, width, height){
    this.name = name;
    this.width = width;
    this.height = height;
    this.cells = [];
}

Maze.prototype.generate = function(ratio){
    var cssWidth = this.width*ratio;
    var cssHeight = this.height*ratio;
    var htmlMaze = "<div class='maze' id='"+this.name+"' style='width: "+cssWidth+"px;height: "+cssHeight+"px'></div>";

    direction = [-1, 1, -this.width, this.width];

    $('#mazeContainer').append(htmlMaze);

    for(var i = 0; i < this.width*this.height; i++){
        var cell = new Cell(true, true, i, this.name);
        cell.generate(ratio, i);
        this.cells.push(cell);
    }

    for(var z = 0; z < this.cells.length; z++) {
        this.fusionCells(mazeKruskal.selectCells());

    }
};

Maze.prototype.selectCells = function(){
    var selectedCells = [];
    var wrongDirection = true;
    currentDirection = direction[parseInt(getRandomArbitrary(0, 4))];
    var randomPosition = parseInt(getRandomArbitrary(0, this.cells.length));
    selectedCells['currentCell'] = this.cells[randomPosition];
    console.log((randomPosition - 1)%this.width);
    console.log(randomPosition%this.width);
    console.log(randomPosition);
    while(wrongDirection){
        if ((randomPosition < 5 && currentDirection == -5)
                || (randomPosition > this.cells.length - this.width && currentDirection == 5)
                || (randomPosition == this.cells.length - 1 && currentDirection == 1)
                || (randomPosition == 0 && currentDirection == -1)
                || (randomPosition%this.width == 0 && currentDirection == -1)
                || ((randomPosition + 1)%this.width == 0 && currentDirection == 1)
        ){
            wrongDirection = true;
            currentDirection = direction[parseInt(getRandomArbitrary(0, 4))];
        }else{
            wrongDirection = false;
        }
    }


    selectedCells['nextCell'] = this.cells[randomPosition + currentDirection];

    if(selectedCells.currentCell.value != selectedCells.nextCell.value){
        return selectedCells;
    }else{
        return false;
    }
};

Maze.prototype.fusionCells = function(selectedCells){
    var currentCellPostion = selectedCells.currentCell.value;
    var nextCellPostion = selectedCells.nextCell.value;

    this.cells[nextCellPostion].value = this.cells[currentCellPostion].value;

    var nextHtmlCell = $('.cells[data-value="'+nextCellPostion+'"]');
    var currentHtmlCell = $('.cells[data-value="'+currentCellPostion+'"]');

    switch (currentDirection){
        case -1:
            console.log('-1');
            //changedDirection = 'right';
            //changedCell = this.cells[nextCellPostion];
            this.cells[nextCellPostion].right = false;
            nextHtmlCell.attr('data-right','false');
            nextHtmlCell.attr('data-value', this.cells[nextCellPostion].value);
            nextHtmlCell.html(this.cells[nextCellPostion].value);
            break;
        case 1:
            console.log('1');
            //changedDirection = 'right';
            //changedCell = this.cells[currentCellPostion];
            this.cells[currentCellPostion].right = false;
            currentHtmlCell.attr('data-right','false');
            currentHtmlCell.attr('data-value', this.cells[currentCellPostion].value);
            currentHtmlCell.html(this.cells[currentCellPostion].value);
            break;
        case -5:
            console.log('-5');
            //changedDirection = 'down';
            //changedCell = this.cells[nextCellPostion];
            this.cells[nextCellPostion].down = false;
            nextHtmlCell.attr('data-down','false');
            nextHtmlCell.attr('data-value', this.cells[nextCellPostion].value);
            nextHtmlCell.html(this.cells[nextCellPostion].value);
            break;
        case 5:
            console.log('5');
            //changedDirection = 'down';
            //changedCell = this.cells[currentCellPostion];
            this.cells[nextCellPostion].down = false;
            currentHtmlCell.attr('data-down','false');
            currentHtmlCell.attr('data-value', this.cells[currentCellPostion].value);
            currentHtmlCell.html(this.cells[currentCellPostion].value);
            break;
    }
};

/* Constructor cell object */
function Cell(down, right, value, container){
    this.down = down;
    this.right = right;
    this.value = value;
    this.mazeContainer = container;
}

Cell.prototype.generate = function(ratio, i){
    $('#'+this.mazeContainer).append('<div class="cells" data-down="'+this.down+'" data-right="'+this.right+'" data-value="'+i+'">'+i+'</div>');
};


var mazeKruskal = new Maze('kruskal', 5, 5);
mazeKruskal.generate(100);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


angular.module("sub").factory("Game",function(){
    var bombedBoard = [];
    var shipsBoard = [];
    var size = 10;
    var bombingTries = 0;
    var ships = [2,2,1,3,3];

    function initializeBoards(){
        bombingTries = 0;
        for(var i = 0; i<size;i++){
            bombedBoard[i] = [];
            shipsBoard[i] = [];
            for(var j = 0; j<size;j++){
                bombedBoard[i][j] = false;
                shipsBoard[i][j] = false;
            }
        }
    }

    function bomb(x,y){
        bombingTries++;
        bombedBoard[x][y] = true;
        if(shipsBoard[x][y]){
            return true;
        }
        return false;
    }

    function checkIfLocationEmpty(startX,startY,endX,endY){
        var limitsArray = getLimit(startX,startY,endX,endY);
        for(var i = limitsArray.startX;i<limitsArray.endX ;i++){
            for(var j = limitsArray.startY;j<limitsArray.endY;j++){
                if(shipsBoard[i][j]){
                    return false;
                }
            }
        }
        return true;
    }

    function insertShip(startX,startY,endX,endY){
        if(CheckIfLocationEmpty(startX,startY,endX,endY)) {
            if(startX === endX){
                for(var i = startY; i<=endY;i++){
                    shipsBoard[startX][i] = true;
                }
            }
            else{
                for(var i = startX; i<=endX;i++){
                    shipsBoard[i][startY] = true;
                }
            }
            return true;
        }
        return false;
    }

    function getLimit(startX,startY,endX,endY){
        if(startX > 1){
            startX = startX - 1;
        }
        if(startY > 1){
            startY = startY - 1;
        }
        if(endX < size - 1){
            endX = endX + 1;
        }
        if(endY < size - 1){
            endY = endY + 1;
        }

        return {startX:startX,endX:endX,startY:startY,endY:endY};
    }

    function submarinesDescovered(){
        for(var i = 0; i<size;i++) {
            for (var j = 0; j < size; j++) {
                if(shipsBoard[i][j]){
                    if (!bombedBoard[i][j]){
                        return false;
                    }
                }
            }
        }
        return true;
    }
    initializeBoards();
    return {
        shipsBoard: shipsBoard,
        bombedBoard: bombedBoard,
        ships: ships,
        initializeBoards: initializeBoards,
        bomb: bomb,
        insertShip: insertShip,
        submarinesDescovered: submarinesDescovered
    }
});

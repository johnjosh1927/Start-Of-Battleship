angular.module('sub').directive('subGame', function() {
    return {
        restrict: 'E',
        templateUrl: 'game.html',
        controller: function($scope,Game){

            $scope.bombedBoard = Game.bombedBoard;
            $scope.shipsBoard = Game.shipsBoard;
            $scope.ships = Game.ships;

            $scope.initGame = function(){
                Game.initializeBoards();
            };

            $scope.bomb = function(x,y){
                Game.bomb(x,y);
            };

            $scope.insertShip = function(startX,startY,endX,endY){
                Game.insertShip(startX,startY,endX,endY);
            };

            $scope.submarinesDescovered = function(){
                Game.submarinesDescovered();
            };
        }
    }
});
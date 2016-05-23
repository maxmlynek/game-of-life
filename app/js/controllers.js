/**
 * Created by Max on 5/23/2016.
 */
angular.module('app',[]).controller('GameOfLifeController', GameOfLifeController);



function GameOfLifeController($scope){

    $scope.initializeGame = function (){
        $scope.field =  new Array(60).fill(new Array(100).fill());
    }
    $scope.initializeGame();
}



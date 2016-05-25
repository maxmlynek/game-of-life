/**
 * Created by Max on 5/23/2016.
 */
angular.module('app', []).controller('GameOfLifeController', GameOfLifeController);

var rowOfField = new Array(100).fill(0);
var field = new Array(60);
for (var i = 0; i < field.length; i++) {
    field[i] = rowOfField.slice();
}

var cleaner = function(){
    $('td').removeAttr('style');
}

//Controller


function GameOfLifeController($scope) {

    $scope.initializeGame = function () {
        $scope.field = field;
    };

    $scope.randomizeField = function () {
        cleaner();
        var i, j;
        for (i = 0; i < field.length; i++) {
            for (j = 0; j < field[0].length; j++) {
                if (Math.random() < 0.08) {
                    if (field[i][j] == 0) {
                        field[i][j] = 1;
                    }
                    else {
                        field[i][j] = 0;
                    }
                }
            }
        }
        $scope.initializeGame();
    };

    $scope.resetField = function() {
        cleaner();
        var i, j;
        for (i = 0; i < field.length; i++) {
            for (j = 0; j < field[0].length; j++) {
                field[i][j] = 0;
            }
        }

        $scope.initializeGame();
    }

    $scope.initializeGame();
}







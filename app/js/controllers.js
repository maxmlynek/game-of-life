/**
 * Created by Max on 5/23/2016.
 */
angular.module('app', []).controller('GameOfLifeController', GameOfLifeController);

var isStarted = false;

var rowOfField = new Array(100).fill(0);
var field = new Array(60);
for (var i = 0; i < field.length; i++) {
    field[i] = rowOfField.slice();
}

var countingArrayRow = new Array(rowOfField.length).fill(0);
var countingArray = new Array(field.length);
for (var i = 0; i < countingArray.length; i++) {
    countingArray[i] = countingArrayRow.slice();
}

var cleaner = function(){
    $('td').removeAttr('style');
}

var countNeighbours = function(row, col){
    //Michael Laszlo algorithm
    var count = 0;
    for (var i = row - 1; i <= row + 1; i++) {
        for (var j = col - 1; j <= col + 1; j++) {
            if (i == row && j == col) {
                continue;
            }
            count += field[(i + field.length) % field.length][(j + field[0].length) % field[0].length];
        }
    }
    return count;
}

var validateArrays = function(){ //validate if lifeArray and deathArray are distinct
    return true;
}



//Controller


function GameOfLifeController($scope, $interval) {

    $scope.isPaused =false;
    $scope.lifeArray = [ false, false, false,
                        true, false, false,
                        false, false, false];

    $scope.deathArray= [ true, true, false,
                     false, true, true,
                        true, true, true];

    $scope.timeSet = {
        time: 'c'
    }

    $scope.countTime = function(){
        if($scope.timeSet.time == 'a') return 200;
        if($scope.timeSet.time == 'b') return 400;
        if($scope.timeSet.time == 'c') return 600;
        if($scope.timeSet.time == 'd') return 800;
        if($scope.timeSet.time == 'e') return 1000;
    }

    $scope.startGame = function(){

        isStarted = true;
        $scope.isPaused = false;

        $interval( function() {

                if(!$scope.isPaused) {
                    validateArrays()//for every iteration!
                    var i, j;
                    for (i = 0; i < countingArray.length; i++) {
                        for (j = 0; j < countingArray[0].length; j++) {
                            countingArray[i][j] = countNeighbours(i, j);
                        }
                    }

                    for (i = 0; i < field.length; i++) {
                        for (j = 0; j < field[0].length; j++) {
                            if ($scope.lifeArray[countingArray[i][j]] == true) {
                                field[i][j] = 1;
                            } else if ($scope.deathArray[countingArray[i][j]] == true) {
                                field[i][j] = 0;
                            }

                        }
                    }
                    cleaner();
                    $scope.initializeGame();
                }
            },

            $scope.countTime()

        );


    };

    $scope.stopGame = function(){
        $scope.isPaused = true;
    };

    $scope.initializeGame = function () {

        $scope.field = field;
    };

    $scope.randomizeField = function () {
        if(!isStarted) {
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
        }
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
        isStarted = false;
        $scope.isPaused = true;
    }

    $scope.initializeGame();
}







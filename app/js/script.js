/**
 * Created by Max on 5/25/2016.
 */

var changeField = function(indexes){
    var indices = indexes.split(".");
    var i = parseInt(indices[0]);
    var j = parseInt(indices[1]);
    if(field[i][j] == 0) field[i][j] = 1;
    else field[i][j] = 0;
}



$(document).ready(function () {

    var down = false;
    $(document).mousedown(function () {
        down = true;
    }).mouseup(function () {
        down = false;
    });

    $('td').mousedown(function () {
        if($(this).css('background-color')=='rgb(140, 140, 140)'){
            $(this).css('background-color', 'darkgreen');
            changeField($(this).text());
        } else {
            $(this).css('background-color', '#8c8c8c');
            changeField($(this).text());
        }
    });

    $("td").mousemove(function () {
        if (down) {
            if($(this).css('background-color')=='rgb(140, 140, 140)'){
                $(this).css('background-color', 'darkgreen');
                changeField($(this).text());
            } else {
                $(this).css('background-color', '#8c8c8c');
                changeField($(this).text());
            }
        }

    });


});

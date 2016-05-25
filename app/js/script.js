/**
 * Created by Max on 5/25/2016.
 */
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
        } else {
            $(this).css('background-color', '#8c8c8c');
        }
    });

    $("td").mousemove(function () {
        if (down) {
            if($(this).css('background-color')=='rgb(140, 140, 140)'){
                $(this).css('background-color', 'darkgreen');
            } else {
                $(this).css('background-color', '#8c8c8c');
            }
        }

    });


});
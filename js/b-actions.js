$('#button').hover(function(){
    //on hover changes - change padding
    $(this).css('padding','10px 32px 10px 32px').css('letter-spacing','3px');

});


$('#button').mouseout(function(){
    //mouseout revert to deffault size
    $(this).css('padding','10px 25px 10px 25px').css('letter-spacing','1.5px');

});


$('#button').click(function(){
    //change bg color
    $('#bg').css('background-color','rgb(61, 61, 61)');
    //change button bg ,text color,let spacing
    $(this).css('color','#50B6C9').css('letter-spacing','3.4px');
    //Adding Class to input that include Keyframe Animation
    // that needed to make it visible
    $('#name').addClass("enable");


});








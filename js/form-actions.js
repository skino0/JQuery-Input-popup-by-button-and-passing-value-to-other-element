$('#name').click(function(){
    $(this).css('cursor','auto');
    $(this).attr('value','');
    //makes button type as submit bcz input already clicked once
    $('#button').attr('type','submit');
    //Change button value as "Submit"
    $('#button').attr('value','Submit');
    $('#button').css('background-color','rgba(0,0,0,.8)');
    
    
});

$('#name').hover(function(){
    //change border to right + width
    //change width height ++
    $(this).css('border-left','none').
    css('border-right','4px solid red').
    css('height','55px').css('width','265');



});

$('#name').mouseout(function(){
    //mouseout revert to default border
    $(this).css('border-right','none').
    css('border-left','2px solid red');

    //remove focus from input 
    $(this).blur();
    //change width height --
    $(this).css('height','40px').css('width','250px');


});

//Passing value from input to p element 
$(function(){
    $("#form").submit(function(e) { 
        var value = $("#name").val();
        $('#val').text(value); 
        e.preventDefault();
        //final elements enabled
        $('#bg2').addClass("bg2join");
        $('#endmsg').addClass("msgenable");
        $('#social').addClass("socialenable");
        //remove button - input permanent
        $('#name').addClass("remove");
        $('#button').addClass("remove");
    });
});
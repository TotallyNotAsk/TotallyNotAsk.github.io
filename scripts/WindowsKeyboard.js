$(document).keydown(function(e){
    //Top row for keyboard
    if(e.keyCode == 27){
        document.getElementById("key_Esc").style.color = "green";
        document.getElementById("key_Esc").style.border = "solid green";
    }

});
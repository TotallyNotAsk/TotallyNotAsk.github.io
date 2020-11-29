$(document).ready(function(){
    //alert("Stavanger Kommune sin Chromebook tastatur tester")
});

var x = event.keyCode;
console.log(x);

$(document).keydown(function(e){
    //Top row for keyboard
    if(e.keyCode == 27){
        document.getElementById("key_Esc").style.color = "green";
        document.getElementById("key_Esc").style.border = "solid green";
    }
    if(e.keyCode == 166){
        e.preventDefault();
        document.getElementById("key_BrowseBack").style.color = "green";
        document.getElementById("key_BrowseBack").style.border = "solid green";
        return false;
    }
    if(e.keyCode == 167){
        e.preventDefault();
        document.getElementById("key_BrowseForward").style.color = "green";
        document.getElementById("key_BrowseForward").style.border = "solid green";
        return false;
    }
    if(e.keyCode == 168){
        e.preventDefault();
        document.getElementById("key_Refresh").style.color = "green";
        document.getElementById("key_Refresh").style.border = "solid green";
        return false;
    }/*
    if(e.keyCode == ){
        e.preventDefault();
        document.getElementById("key_Fullscreen").style.color = "green";
        document.getElementById("key_Fullscreen").style.border = "solid green";
        return false;
    }
    if(e.keyCode == ){
        e.preventDefault();
        document.getElementById("key_Windows").style.color = "green";
        document.getElementById("key_Windows").style.border = "solid green";
        return false;
    }
    if(e.keyCode == ){
        e.preventDefault();
        document.getElementById("key_DownBright").style.color = "green";
        document.getElementById("key_DownBright").style.border = "solid green";
        return false;
    }
    if(e.keyCode == ){
        document.getElementById("key_UpBright").style.color = "green";
        document.getElementById("key_UpBright").style.border = "solid green";
    }*/
    if(e.keyCode == 173){
        document.getElementById("key_Mute").style.color = "green";
        document.getElementById("key_Mute").style.border = "solid green";
    }
    if(e.keyCode == 174){
        document.getElementById("key_DownSound").style.color = "green";
        document.getElementById("key_DownSound").style.border = "solid green";
    }
    if(e.keyCode == 175){
        document.getElementById("key_UpSound").style.color = "green";
        document.getElementById("key_UpSound").style.border = "solid green";
    }/*
    if(e.keyCode == ){
        document.getElementById("key_Lock").style.color = "green";
        document.getElementById("key_Lock").style.border = "solid green";
    }*/
    


    //Number row for keyboard
    if(e.keyCode == 220){
        document.getElementById("key_|").style.color = "green";
        document.getElementById("key_|").style.border = "solid green";
    }
    if(e.keyCode == 49){
        document.getElementById("key_1").style.color = "green";
        document.getElementById("key_1").style.border = "solid green";
    }
    if(e.keyCode == 50){
        document.getElementById("key_2").style.color = "green";
        document.getElementById("key_2").style.border = "solid green";
    }
    if(e.keyCode == 51){
        document.getElementById("key_3").style.color = "green";
        document.getElementById("key_3").style.border = "solid green";
    }
    if(e.keyCode == 52){
        document.getElementById("key_4").style.color = "green";
        document.getElementById("key_4").style.border = "solid green";
    }
    if(e.keyCode == 53){
        document.getElementById("key_5").style.color = "green";
        document.getElementById("key_5").style.border = "solid green";
    }
    if(e.keyCode == 54){
        document.getElementById("key_6").style.color = "green";
        document.getElementById("key_6").style.border = "solid green";
    }
    if(e.keyCode == 55){
        document.getElementById("key_7").style.color = "green";
        document.getElementById("key_7").style.border = "solid green";
    }
    if(e.keyCode == 56){
        document.getElementById("key_8").style.color = "green";
        document.getElementById("key_8").style.border = "solid green";
    }
    if(e.keyCode == 57){
        document.getElementById("key_9").style.color = "green";
        document.getElementById("key_9").style.border = "solid green";
    }
    if(e.keyCode == 48){
        document.getElementById("key_0").style.color = "green";
        document.getElementById("key_0").style.border = "solid green";
    }
    if(e.keyCode == 187){
        document.getElementById("key_+").style.color = "green";
        document.getElementById("key_+").style.border = "solid green";
    }
    if(e.keyCode == 219){
        document.getElementById("key_219").style.color = "green";
        document.getElementById("key_219").style.border = "solid green";
    }
    if(e.keyCode == 8){
        document.getElementById("key_BackSpace").style.color = "green";
        document.getElementById("key_BackSpace").style.border = "solid green";
    }
    

    //Letter row nr1 for keyboard
    if(e.keyCode == 9){
        e.preventDefault();
        document.getElementById("key_Tab").style.color = "green";
        document.getElementById("key_Tab").style.border = "solid green";
        return false;
    }
    if(e.keyCode == 81){
        document.getElementById("key_q").style.color = "green";
        document.getElementById("key_q").style.border = "solid green";
    }
    if(e.keyCode == 87){
        document.getElementById("key_w").style.color = "green";
        document.getElementById("key_w").style.border = "solid green";
    }
    if(e.keyCode == 69){
        document.getElementById("key_e").style.color = "green";
        document.getElementById("key_e").style.border = "solid green";
    }
    if(e.keyCode == 82){
        document.getElementById("key_r").style.color = "green";
        document.getElementById("key_r").style.border = "solid green";
    }
    if(e.keyCode == 84){
        document.getElementById("key_t").style.color = "green";
        document.getElementById("key_t").style.border = "solid green";
    }
    if(e.keyCode == 89){
        document.getElementById("key_y").style.color = "green";
        document.getElementById("key_y").style.border = "solid green";
    }
    if(e.keyCode == 85){
        document.getElementById("key_u").style.color = "green";
        document.getElementById("key_u").style.border = "solid green";
    }
    if(e.keyCode == 73){
        document.getElementById("key_i").style.color = "green";
        document.getElementById("key_i").style.border = "solid green";
    }
    if(e.keyCode == 79){
        document.getElementById("key_o").style.color = "green";
        document.getElementById("key_o").style.border = "solid green";
    }
    if(e.keyCode == 80){
        document.getElementById("key_p").style.color = "green";
        document.getElementById("key_p").style.border = "solid green";
    }
    if(e.keyCode == 221){
        document.getElementById("key_å").style.color = "green";
        document.getElementById("key_å").style.border = "solid green";
    }
    if(e.keyCode == 186){
        document.getElementById("key_186").style.color = "green";
        document.getElementById("key_186").style.border = "solid green";
    }
    

    //Letter row nr2 for keyboard
    if(e.keyCode == 91){
        e.preventDefault();
        document.getElementById("key_Search").style.color = "green";
        document.getElementById("key_Search").style.border = "solid green";
        return false;
    }
    if(e.keyCode == 65){
        document.getElementById("key_a").style.color = "green";
        document.getElementById("key_a").style.border = "solid green";
    }
    if(e.keyCode == 83){
        document.getElementById("key_s").style.color = "green";
        document.getElementById("key_s").style.border = "solid green";
    }
    if(e.keyCode == 68){
        document.getElementById("key_d").style.color = "green";
        document.getElementById("key_d").style.border = "solid green";
    }
    if(e.keyCode == 70){
        document.getElementById("key_f").style.color = "green";
        document.getElementById("key_f").style.border = "solid green";
    }
    if(e.keyCode == 71){
        document.getElementById("key_g").style.color = "green";
        document.getElementById("key_g").style.border = "solid green";
    }
    if(e.keyCode == 72){
        document.getElementById("key_h").style.color = "green";
        document.getElementById("key_h").style.border = "solid green";
    }
    if(e.keyCode == 74){
        document.getElementById("key_j").style.color = "green";
        document.getElementById("key_j").style.border = "solid green";
    }
    if(e.keyCode == 75){
        document.getElementById("key_k").style.color = "green";
        document.getElementById("key_k").style.border = "solid green";
    }
    if(e.keyCode == 76){
        document.getElementById("key_l").style.color = "green";
        document.getElementById("key_l").style.border = "solid green";
    }
    if(e.keyCode == 192){
        document.getElementById("key_ø").style.color = "green";
        document.getElementById("key_ø").style.border = "solid green";
    }
    if(e.keyCode == 222){
        document.getElementById("key_æ").style.color = "green";
        document.getElementById("key_æ").style.border = "solid green";
    }
    if(e.keyCode == 191){
        document.getElementById("key_191").style.color = "green";
        document.getElementById("key_191").style.border = "solid green";
    }
    if(e.keyCode == 13){
        document.getElementById("key_Enter").style.color = "green";
        document.getElementById("key_Enter").style.border = "solid green";
    }
    

    //Letter row nr3 for keyboard
    if(e.keyCode == 16){
        document.getElementById("key_lShift").style.color = "green";
        document.getElementById("key_lShift").style.border = "solid green";
    }
    if(e.keyCode == 226){
        document.getElementById("key_226").style.color = "green";
        document.getElementById("key_226").style.border = "solid green";
    }
    if(e.keyCode == 90){
        document.getElementById("key_z").style.color = "green";
        document.getElementById("key_z").style.border = "solid green";
    }
    if(e.keyCode == 88){
        document.getElementById("key_x").style.color = "green";
        document.getElementById("key_x").style.border = "solid green";
    }
    if(e.keyCode == 67){
        document.getElementById("key_c").style.color = "green";
        document.getElementById("key_c").style.border = "solid green";
    }
    if(e.keyCode == 86){
        document.getElementById("key_v").style.color = "green";
        document.getElementById("key_v").style.border = "solid green";
    }
    if(e.keyCode == 66){
        document.getElementById("key_b").style.color = "green";
        document.getElementById("key_b").style.border = "solid green";
    }
    if(e.keyCode == 78){
        document.getElementById("key_n").style.color = "green";
        document.getElementById("key_n").style.border = "solid green";
    }
    if(e.keyCode == 77){
        document.getElementById("key_m").style.color = "green";
        document.getElementById("key_m").style.border = "solid green";
    }
    if(e.keyCode == 188){
        document.getElementById("key_comma").style.color = "green";
        document.getElementById("key_comma").style.border = "solid green";
    }
    if(e.keyCode == 190){
        document.getElementById("key_period").style.color = "green";
        document.getElementById("key_period").style.border = "solid green";
    }
    if(e.keyCode == 189){
        document.getElementById("key_-").style.color = "green";
        document.getElementById("key_-").style.border = "solid green";
    }
    if(e.keyCode == 16){
        document.getElementById("key_rShift").style.color = "green";
        document.getElementById("key_rShift").style.border = "solid green";
    }
    if(e.keyCode == 38){
        document.getElementById("key_Up").style.color = "green";
        document.getElementById("key_Up").style.border = "solid green";
    }
    

    //Bottom row for keyboard
    if(e.keyCode == 17){
        document.getElementById("key_lCtrl").style.color = "green";
        document.getElementById("key_lCtrl").style.border = "solid green";
    }
    if(e.keyCode == 18){
        document.getElementById("key_lAlt").style.color = "green";
        document.getElementById("key_lAlt").style.border = "solid green";
    }
    if(e.keyCode == 32){
        document.getElementById("key_Space").style.color = "green";
        document.getElementById("key_Space").style.border = "solid green";
    }
    if(e.keyCode == 18){
        document.getElementById("key_rAlt").style.color = "green";
        document.getElementById("key_rAlt").style.border = "solid green";
    }
    if(e.keyCode == 17){
        document.getElementById("key_rCtrl").style.color = "green";
        document.getElementById("key_rCtrl").style.border = "solid green";
    }
    if(e.keyCode == 37){
        document.getElementById("key_Left").style.color = "green";
        document.getElementById("key_Left").style.border = "solid green";
    }
    if(e.keyCode == 40){
        document.getElementById("key_Down").style.color = "green";
        document.getElementById("key_Down").style.border = "solid green";
    }
    if(e.keyCode == 39){
        document.getElementById("key_Right").style.color = "green";
        document.getElementById("key_Right").style.border = "solid green";
    }
    

    //Check the f5 button without reloading the page (should be used on all function keys)
    /*if(e.keyCode == 116){
        e.preventDefault();
        document.getElementById("key_f5").style.color = "green";
        document.getElementById("key_f5").style.border = "solid green";
        return false;
        //<div_keys id="key_f5">F5</div_keys> (HTML code for the f5 button)
    }*/
});

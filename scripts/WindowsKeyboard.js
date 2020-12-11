$(document).keydown(function(e){

    //TODO: Skrive på nytt og bruke event.code isteden for key.code for å være mer spesfik - Må testes på et test prosjekt

    //FunctionRow
    if(e.keyCode == 27){
        document.getElementById("key_Esc").style.color = "green";
        document.getElementById("key_Esc").style.border = "solid green";
    }

    if(e.keyCode == 112){
        e.preventDefault();
        document.getElementById("f1").style.color = "green";
        document.getElementById("f1").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 113){
        e.preventDefault();
        document.getElementById("f2").style.color = "green";
        document.getElementById("f2").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 114){
        e.preventDefault();
        document.getElementById("f3").style.color = "green";
        document.getElementById("f3").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 115){
        e.preventDefault();
        document.getElementById("f4").style.color = "green";
        document.getElementById("f4").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 116){
        e.preventDefault();
        document.getElementById("f5").style.color = "green";
        document.getElementById("f5").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 117){
        e.preventDefault();
        document.getElementById("f6").style.color = "green";
        document.getElementById("f6").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 118){
        e.preventDefault();
        document.getElementById("f7").style.color = "green";
        document.getElementById("f7").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 119){
        e.preventDefault();
        document.getElementById("f8").style.color = "green";
        document.getElementById("f8").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 120){
        e.preventDefault();
        document.getElementById("f9").style.color = "green";
        document.getElementById("f9").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 121){
        e.preventDefault();
        document.getElementById("f10").style.color = "green";
        document.getElementById("f10").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 122){
        e.preventDefault();
        document.getElementById("f11").style.color = "green";
        document.getElementById("f11").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 123){
        e.preventDefault();
        document.getElementById("f12").style.color = "green";
        document.getElementById("f12").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 44){
        document.getElementById("prt").style.color = "green";
        document.getElementById("prt").style.border = "solid green";
    }

    if(e.keyCode == 145){
        e.preventDefault();
        document.getElementById("scroll").style.color = "green";
        document.getElementById("scroll").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 19){
        e.preventDefault();
        document.getElementById("pause").style.color = "green";
        document.getElementById("pause").style.border = "solid green";
        return false;
    }

    //NumRow
     //Number row for keyboard
     if(e.keyCode == 172){
        document.getElementById("key_|").style.color = "green";
        document.getElementById("key_|").style.border = "solid green";
    }

    if(e.keyCode == 49){
        document.getElementById("1").style.color = "green";
        document.getElementById("1").style.border = "solid green";
    }

    if(e.keyCode == 50){
        document.getElementById("2").style.color = "green";
        document.getElementById("2").style.border = "solid green";
    }

    if(e.keyCode == 51){
        document.getElementById("3").style.color = "green";
        document.getElementById("3").style.border = "solid green";
    }

    if(e.keyCode == 52){
        document.getElementById("4").style.color = "green";
        document.getElementById("4").style.border = "solid green";
    }

    if(e.keyCode == 53){
        document.getElementById("5").style.color = "green";
        document.getElementById("5").style.border = "solid green";
    }

    if(e.keyCode == 54){
        document.getElementById("6").style.color = "green";
        document.getElementById("6").style.border = "solid green";
    }

    if(e.keyCode == 55){
        document.getElementById("7").style.color = "green";
        document.getElementById("7").style.border = "solid green";
    }

    if(e.keyCode == 56){
        document.getElementById("8").style.color = "green";
        document.getElementById("8").style.border = "solid green";
    }

    if(e.keyCode == 57){
        document.getElementById("9").style.color = "green";
        document.getElementById("9").style.border = "solid green";
    }

    if(e.keyCode == 48){
        document.getElementById("0").style.color = "green";
        document.getElementById("0").style.border = "solid green";
    }

    if(e.keyCode == 171){
        document.getElementById("+").style.color = "green";
        document.getElementById("+").style.border = "solid green";
    }

    if(e.keyCode == 220){
        document.getElementById("220").style.color = "green";
        document.getElementById("220").style.border = "solid green";
    }

    if(e.keyCode == 8){
        document.getElementById("BackSpace").style.color = "green";
        document.getElementById("BackSpace").style.border = "solid green";
    }  

    if(e.keyCode == 13){
        document.getElementById("enter").style.color = "green";
        document.getElementById("enter").style.border = "solid green";
    }

    //Misc Keys
    if(e.keyCode == 45){
        e.preventDefault();
        document.getElementById("insert").style.color = "green";
        document.getElementById("insert").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 36){
        e.preventDefault();
        document.getElementById("home").style.color = "green";
        document.getElementById("home").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 33){
        e.preventDefault();
        document.getElementById("PageUp").style.color = "green";
        document.getElementById("PageUp").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 46){
        e.preventDefault();
        document.getElementById("del").style.color = "green";
        document.getElementById("del").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 35){
        e.preventDefault();
        document.getElementById("end").style.color = "green";
        document.getElementById("end").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 34){
        e.preventDefault();
        document.getElementById("PageDown").style.color = "green";
        document.getElementById("PageDown").style.border = "solid green";
        return false;
    }

    //Num Keys
    if(e.keyCode == 144){
        e.preventDefault();
        document.getElementById("NumLock").style.color = "green";
        document.getElementById("NumLock").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 111){
        e.preventDefault();
        document.getElementById("numDiv").style.color = "green";
        document.getElementById("numDiv").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 106){
        e.preventDefault();
        document.getElementById("numMult").style.color = "green";
        document.getElementById("numMult").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 109){
        e.preventDefault();
        document.getElementById("numMin").style.color = "green";
        document.getElementById("numMin").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 103){
        e.preventDefault();
        document.getElementById("num7").style.color = "green";
        document.getElementById("num7").style.border = "solid green";
        return false;
    }
    
    if(e.keyCode == 104){
        e.preventDefault();
        document.getElementById("num8").style.color = "green";
        document.getElementById("num8").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 105){
        e.preventDefault();
        document.getElementById("num9").style.color = "green";
        document.getElementById("num9").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 100){
        e.preventDefault();
        document.getElementById("num4").style.color = "green";
        document.getElementById("num4").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 101){
        e.preventDefault();
        document.getElementById("num5").style.color = "green";
        document.getElementById("num5").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 102){
        e.preventDefault();
        document.getElementById("num6").style.color = "green";
        document.getElementById("num6").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 97 ){
        e.preventDefault();
        document.getElementById("num1").style.color = "green";
        document.getElementById("num1").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 98){
        e.preventDefault();
        document.getElementById("num2").style.color = "green";
        document.getElementById("num2").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 99){
        e.preventDefault();
        document.getElementById("num3").style.color = "green";
        document.getElementById("num3").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 96){
        e.preventDefault();
        document.getElementById("num0").style.color = "green";
        document.getElementById("num0").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 107){
        e.preventDefault();
        document.getElementById("numAdd").style.color = "green";
        document.getElementById("numAdd").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 13){
        e.preventDefault();
        document.getElementById("numEnter").style.color = "green";
        document.getElementById("numEnter").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 110){
        e.preventDefault();
        document.getElementById("num.").style.color = "green";
        document.getElementById("num.").style.border = "solid green";
        return false;
    }


    //First Keyrow
    if(e.keyCode == 9){
        e.preventDefault();
        document.getElementById("Tab").style.color = "green";
        document.getElementById("Tab").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 81){
        document.getElementById("q").style.color = "green";
        document.getElementById("q").style.border = "solid green";
    }

    if(e.keyCode == 87){
        document.getElementById("w").style.color = "green";
        document.getElementById("w").style.border = "solid green";
    }

    if(e.keyCode == 69){
        document.getElementById("e").style.color = "green";
        document.getElementById("e").style.border = "solid green";
    }

    if(e.keyCode == 82){
        document.getElementById("r").style.color = "green";
        document.getElementById("r").style.border = "solid green";
    }

    if(e.keyCode == 84){
        document.getElementById("t").style.color = "green";
        document.getElementById("t").style.border = "solid green";
    }

    if(e.keyCode == 89){
        document.getElementById("y").style.color = "green";
        document.getElementById("y").style.border = "solid green";
    }

    if(e.keyCode == 85){
        document.getElementById("u").style.color = "green";
        document.getElementById("u").style.border = "solid green";
    }

    if(e.keyCode == 73){
        document.getElementById("i").style.color = "green";
        document.getElementById("i").style.border = "solid green";
    }

    if(e.keyCode == 79){
        document.getElementById("o").style.color = "green";
        document.getElementById("o").style.border = "solid green";
    }

    if(e.keyCode == 80){
        document.getElementById("p").style.color = "green";
        document.getElementById("p").style.border = "solid green";
    }

    if(e.keyCode == 221){
        document.getElementById("å").style.color = "green";
        document.getElementById("å").style.border = "solid green";
    }

    if(e.keyCode == 160){
        document.getElementById("key_160").style.color = "green";
        document.getElementById("key_160").style.border = "solid green";
    }

    //Letter row nr2 for keyboard
    if(e.keyCode == 20){
        e.preventDefault();
        document.getElementById("caps").style.color = "green";
        document.getElementById("caps").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 65){
        document.getElementById("a").style.color = "green";
        document.getElementById("a").style.border = "solid green";
    }

    if(e.keyCode == 83){
        document.getElementById("s").style.color = "green";
        document.getElementById("s").style.border = "solid green";
    }

    if(e.keyCode == 68){
        document.getElementById("d").style.color = "green";
        document.getElementById("d").style.border = "solid green";
    }

    if(e.keyCode == 70){
        document.getElementById("f").style.color = "green";
        document.getElementById("f").style.border = "solid green";
    }

    if(e.keyCode == 71){
        document.getElementById("g").style.color = "green";
        document.getElementById("g").style.border = "solid green";
    }

    if(e.keyCode == 72){
        document.getElementById("h").style.color = "green";
        document.getElementById("h").style.border = "solid green";
    }

    if(e.keyCode == 74){
        document.getElementById("j").style.color = "green";
        document.getElementById("j").style.border = "solid green";
    }

    if(e.keyCode == 75){
        document.getElementById("k").style.color = "green";
        document.getElementById("k").style.border = "solid green";
    }

    if(e.keyCode == 76){
        document.getElementById("l").style.color = "green";
        document.getElementById("l").style.border = "solid green";
    }

    if(e.keyCode == 192){
        document.getElementById("ø").style.color = "green";
        document.getElementById("ø").style.border = "solid green";
    }

    if(e.keyCode == 222){
        document.getElementById("æ").style.color = "green";
        document.getElementById("æ").style.border = "solid green";
    }

    if(e.keyCode == 222){
        e.preventDefault();
        document.getElementById("key_222").style.color = "green";
        document.getElementById("key_222").style.border = "solid green";
        return false;
    }


    //Row 3 for Keyboard
    if(e.code === "shiftLeft"){
        document.getElementById("lShift").style.color = "green";
        document.getElementById("lShift").style.border = "solid green";
    }

    if(e.keyCode == 60){
        document.getElementById("<").style.color = "green";
        document.getElementById("<").style.border = "solid green";
    }

    if(e.keyCode == 90){
        document.getElementById("z").style.color = "green";
        document.getElementById("z").style.border = "solid green";
    }

    if(e.keyCode == 88){
        document.getElementById("x").style.color = "green";
        document.getElementById("x").style.border = "solid green";
    }

    if(e.keyCode == 67){
        document.getElementById("c").style.color = "green";
        document.getElementById("c").style.border = "solid green";
    }

    if(e.keyCode == 86){
        document.getElementById("v").style.color = "green";
        document.getElementById("v").style.border = "solid green";
    }

    if(e.keyCode == 66){
        document.getElementById("b").style.color = "green";
        document.getElementById("b").style.border = "solid green";
    }

    if(e.keyCode == 78){
        document.getElementById("n").style.color = "green";
        document.getElementById("n").style.border = "solid green";
    }

    if(e.keyCode == 77){
        document.getElementById("m").style.color = "green";
        document.getElementById("m").style.border = "solid green";
    }

    if(e.keyCode == 188){
        document.getElementById(",").style.color = "green";
        document.getElementById(",").style.border = "solid green";
    }

    if(e.keyCode == 190){
        document.getElementById(".").style.color = "green";
        document.getElementById(".").style.border = "solid green";
    }

    if(e.keyCode == 173){
        document.getElementById("-").style.color = "green";
        document.getElementById("-").style.border = "solid green";
    }

    if(e.code === "shiftRight"){
        document.getElementById("rShift").style.color = "green";
        document.getElementById("rShift").style.border = "solid green";
    }

    if(e.keyCode == 38){
        document.getElementById("up").style.color = "green";
        document.getElementById("up").style.border = "solid green";
    }

    //Bottom row for keyboard
    if(e.ctrlKey){
        document.getElementById("lCtrl").style.color = "green";
        document.getElementById("lCtrl").style.border = "solid green";
    }
    
    if(e.keyCode == 18){
        document.getElementById("Alt").style.color = "green";
        document.getElementById("Alt").style.border = "solid green";
    }

    if(e.keyCode == 91){
        document.getElementById("lWin").style.color = "green";
        document.getElementById("lWin").style.border = "solid green";
        document.getElementById("rWin").style.color = "green";
        document.getElementById("rWin").style.border = "solid green";
    }

    if(e.keyCode == 32){
        document.getElementById("space").style.color = "green";
        document.getElementById("space").style.border = "solid green";
    }

    if(e.keyCode == 18){
        document.getElementById("AltGr").style.color = "green";
        document.getElementById("AltGr").style.border = "solid green";
    }
    
    if(e.keyCode == 91){
        document.getElementById("lWin").style.color = "green";
        document.getElementById("lWin").style.border = "solid green";
        document.getElementById("rWin").style.color = "green";
        document.getElementById("rWin").style.border = "solid green";
    }

    if(e.keyCode == 93){
        e.preventDefault();
        document.getElementById("cont").style.color = "green";
        document.getElementById("cont").style.border = "solid green";
        return false;
    }

    if(e.keyCode == 17){
        document.getElementById("rCtrl").style.color = "green";
        document.getElementById("rCtrl").style.border = "solid green";
    }

    if(e.keyCode == 37){
        document.getElementById("left").style.color = "green";
        document.getElementById("left").style.border = "solid green";
    }

    if(e.keyCode == 40){
        document.getElementById("down").style.color = "green";
        document.getElementById("down").style.border = "solid green";
    }

    if(e.keyCode == 39){
        document.getElementById("right").style.color = "green";
        document.getElementById("right").style.border = "solid green";
    }
});
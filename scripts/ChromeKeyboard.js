$(document).keydown(function(event){
    //Function keys row
    if (event.code === 'Escape'){
        event.preventDefault();
        document.getElementById("key_Esc").style.color = "green";
        document.getElementById("key_Esc").style.border = "solid green";
    }
    if (event.keyCode == 166){
        event.preventDefault();
        document.getElementById("BrowseBack").style.color = "green";
        document.getElementById("BrowseBack").style.border = "solid green";
        return false;
    }
    if (event.keyCode == 167){
        event.preventDefault();
        document.getElementById("BrowseForward").style.color = "green";
        document.getElementById("BrowseForward").style.border = "solid green";
        return false;
    }
    if (event.keyCode == 168){
        event.preventDefault();
        document.getElementById("Refresh").style.color = "green";
        document.getElementById("Refresh").style.border = "solid green";
    }
    if (event.code === ''){
        event.preventDefault();
        document.getElementById("fullscreen").style.color = "green";
        document.getElementById("fullscreen").style.border = "solid green";
    }
    if (event.code === ''){
        event.preventDefault();
        document.getElementById("WinTab").style.color = "green";
        document.getElementById("WinTab").style.border = "solid green";
    }
    if (event.code === 'BrightnessDown'){
        event.preventDefault();
        document.getElementById("BrightnessDown").style.color = "green";
        document.getElementById("BrightnessDown").style.border = "solid green";
    }
    if (event.code === 'BrightnessUp'){
        event.preventDefault();
        document.getElementById("BrightnessUp").style.color = "green";
        document.getElementById("BrightnessUp").style.border = "solid green";
    }
    if (event.code === 'AudioVolumeMute'){
        event.preventDefault();
        document.getElementById("mute").style.color = "green";
        document.getElementById("mute").style.border = "solid green";
    }
    if (event.code === 'AudioVolumeDown'){
        event.preventDefault();
        document.getElementById("SoundDown").style.color = "green";
        document.getElementById("SoundDown").style.border = "solid green";
    }
    if (event.code === 'AudioVolumeUp'){
        event.preventDefault();
        document.getElementById("SoundUp").style.color = "green";
        document.getElementById("SoundUp").style.border = "solid green";
    }
    if (event.code === 'LogOff'){
        event.preventDefault();
        document.getElementById("lock").style.color = "green";
        document.getElementById("lock").style.border = "solid green";
    }

    //Number keys row
    if (event.code === 'Backquote'){
        event.preventDefault();
        document.getElementById("key_|").style.color = "green";
        document.getElementById("key_|").style.border = "solid green";
    }
    if (event.code === 'Digit1'){
        event.preventDefault();
        document.getElementById("1").style.color = "green";
        document.getElementById("1").style.border = "solid green";
    }
    if (event.code === 'Digit2'){
        event.preventDefault();
        document.getElementById("2").style.color = "green";
        document.getElementById("2").style.border = "solid green";
    }
    if (event.code === 'Digit3'){
        event.preventDefault();
        document.getElementById("3").style.color = "green";
        document.getElementById("3").style.border = "solid green";
    }
    if (event.code === 'Digit4'){
        event.preventDefault();
        document.getElementById("4").style.color = "green";
        document.getElementById("4").style.border = "solid green";
    }
    if (event.code === 'Digit5'){
        event.preventDefault();
        document.getElementById("5").style.color = "green";
        document.getElementById("5").style.border = "solid green";
    }
    if (event.code === 'Digit6'){
        event.preventDefault();
        document.getElementById("6").style.color = "green";
        document.getElementById("6").style.border = "solid green";
    }
    if (event.code === 'Digit7'){
        event.preventDefault();
        document.getElementById("7").style.color = "green";
        document.getElementById("7").style.border = "solid green";
    }
    if (event.code === 'Digit8'){
        event.preventDefault();
        document.getElementById("8").style.color = "green";
        document.getElementById("8").style.border = "solid green";
    }
    if (event.code === 'Digit9'){
        event.preventDefault();
        document.getElementById("9").style.color = "green";
        document.getElementById("9").style.border = "solid green";
    }
    if (event.code === 'Digit0'){
        event.preventDefault();
        document.getElementById("0").style.color = "green";
        document.getElementById("0").style.border = "solid green";
    }
    if (event.code === 'Minus'){
        event.preventDefault();
        document.getElementById("+").style.color = "green";
        document.getElementById("+").style.border = "solid green";
    }
    if (event.code === 'Equal'){
        event.preventDefault();
        document.getElementById("220").style.color = "green";
        document.getElementById("220").style.border = "solid green";
    }
    if (event.code === 'Backspace'){
        event.preventDefault();
        document.getElementById("BackSpace").style.color = "green";
        document.getElementById("BackSpace").style.border = "solid green";
        return false;
    }

    //Arrow Keys
    if (event.code === 'ArrowUp'){
        event.preventDefault();
        document.getElementById("up").style.color = "green";
        document.getElementById("up").style.border = "solid green";
    }
    if (event.code === 'ArrowDown'){
        event.preventDefault();
        document.getElementById("down").style.color = "green";
        document.getElementById("down").style.border = "solid green";
    }
    if (event.code === 'ArrowLeft'){
        event.preventDefault();
        document.getElementById("left").style.color = "green";
        document.getElementById("left").style.border = "solid green";
    }
    if (event.code === 'ArrowRight'){
        event.preventDefault();
        document.getElementById("right").style.color = "green";
        document.getElementById("right").style.border = "solid green";
    }

    // First letter row
    if (event.code === 'Tab'){
        event.preventDefault();
        document.getElementById("Tab").style.color = "green";
        document.getElementById("Tab").style.border = "solid green";
    }
    if (event.code === 'KeyQ'){
        event.preventDefault();
        document.getElementById("q").style.color = "green";
        document.getElementById("q").style.border = "solid green";
    }
    if (event.code === 'KeyW'){
        event.preventDefault();
        document.getElementById("w").style.color = "green";
        document.getElementById("w").style.border = "solid green";
    }
    if (event.code === 'KeyE'){
        event.preventDefault();
        document.getElementById("e").style.color = "green";
        document.getElementById("e").style.border = "solid green";
    }
    if (event.code === 'KeyR'){
        event.preventDefault();
        document.getElementById("r").style.color = "green";
        document.getElementById("r").style.border = "solid green";
    }
    if (event.code === 'KeyT'){
        event.preventDefault();
        document.getElementById("t").style.color = "green";
        document.getElementById("t").style.border = "solid green";
    }
    if (event.code === 'KeyY'){
        event.preventDefault();
        document.getElementById("y").style.color = "green";
        document.getElementById("y").style.border = "solid green";
    }
    if (event.code === 'KeyU'){
        event.preventDefault();
        document.getElementById("u").style.color = "green";
        document.getElementById("u").style.border = "solid green";
    }
    if (event.code === 'KeyI'){
        event.preventDefault();
        document.getElementById("i").style.color = "green";
        document.getElementById("i").style.border = "solid green";
    }
    if (event.code === 'KeyO'){
        event.preventDefault();
        document.getElementById("o").style.color = "green";
        document.getElementById("o").style.border = "solid green";
    }
    if (event.code === 'KeyP'){
        event.preventDefault();
        document.getElementById("p").style.color = "green";
        document.getElementById("p").style.border = "solid green";
    }
    if (event.code === 'BracketLeft'){
        event.preventDefault();
        document.getElementById("å").style.color = "green";
        document.getElementById("å").style.border = "solid green";
    }
    if (event.code === 'BracketRight'){
        event.preventDefault();
        document.getElementById("key_160").style.color = "green";
        document.getElementById("key_160").style.border = "solid green";
    }
    if (event.code === 'Enter'){
        event.preventDefault();
        document.getElementById("enter").style.color = "green";
        document.getElementById("enter").style.border = "solid green";
    }

    //Second Letter Row
    if (event.code === 'MetaLeft'){
        event.preventDefault();
        document.getElementById("search").style.color = "green";
        document.getElementById("search").style.border = "solid green";
    }
    if (event.code === 'KeyA'){
        event.preventDefault();
        document.getElementById("a").style.color = "green";
        document.getElementById("a").style.border = "solid green";
    }
    if (event.code === 'KeyS'){
        event.preventDefault();
        document.getElementById("s").style.color = "green";
        document.getElementById("s").style.border = "solid green";
    }
    if (event.code === 'KeyD'){
        event.preventDefault();
        document.getElementById("d").style.color = "green";
        document.getElementById("d").style.border = "solid green";
    }
    if (event.code === 'KeyF'){
        event.preventDefault();
        document.getElementById("f").style.color = "green";
        document.getElementById("f").style.border = "solid green";
    }
    if (event.code === 'KeyG'){
        event.preventDefault();
        document.getElementById("g").style.color = "green";
        document.getElementById("g").style.border = "solid green";
    }
    if (event.code === 'KeyH'){
        event.preventDefault();
        document.getElementById("h").style.color = "green";
        document.getElementById("h").style.border = "solid green";
    }
    if (event.code === 'KeyJ'){
        event.preventDefault();
        document.getElementById("j").style.color = "green";
        document.getElementById("j").style.border = "solid green";
    }
    if (event.code === 'KeyK'){
        event.preventDefault();
        document.getElementById("k").style.color = "green";
        document.getElementById("k").style.border = "solid green";
    }
    if (event.code === 'KeyL'){
        event.preventDefault();
        document.getElementById("l").style.color = "green";
        document.getElementById("l").style.border = "solid green";
    }
    if (event.code === 'Semicolon'){
        event.preventDefault();
        document.getElementById("ø").style.color = "green";
        document.getElementById("ø").style.border = "solid green";
    }
    if (event.code === 'Quote'){
        event.preventDefault();
        document.getElementById("æ").style.color = "green";
        document.getElementById("æ").style.border = "solid green";
    }
    if (event.code === 'Backslash'){
        event.preventDefault();
        document.getElementById("key_222").style.color = "green";
        document.getElementById("key_222").style.border = "solid green";
    }

    //Third Key Row
    if (event.code === 'ShiftLeft'){
        event.preventDefault();
        document.getElementById("lShift").style.color = "green";
        document.getElementById("lShift").style.border = "solid green";
    }
    if (event.code === 'IntlBackslash'){
        event.preventDefault();
        document.getElementById("<").style.color = "green";
        document.getElementById("<").style.border = "solid green";
    }
    if (event.code === 'KeyZ'){
        event.preventDefault();
        document.getElementById("z").style.color = "green";
        document.getElementById("z").style.border = "solid green";
    }
    if (event.code === 'KeyX'){
        event.preventDefault();
        document.getElementById("x").style.color = "green";
        document.getElementById("x").style.border = "solid green";
    }
    if (event.code === 'KeyC'){
        event.preventDefault();
        document.getElementById("c").style.color = "green";
        document.getElementById("c").style.border = "solid green";
    }
    if (event.code === 'KeyV'){
        event.preventDefault();
        document.getElementById("v").style.color = "green";
        document.getElementById("v").style.border = "solid green";
    }
    if (event.code === 'KeyB'){
        event.preventDefault();
        document.getElementById("b").style.color = "green";
        document.getElementById("b").style.border = "solid green";
    }
    if (event.code === 'KeyN'){
        event.preventDefault();
        document.getElementById("n").style.color = "green";
        document.getElementById("n").style.border = "solid green";
    }
    if (event.code === 'KeyM'){
        event.preventDefault();
        document.getElementById("m").style.color = "green";
        document.getElementById("m").style.border = "solid green";
    }
    if (event.code === 'Comma'){
        event.preventDefault();
        document.getElementById(",").style.color = "green";
        document.getElementById(",").style.border = "solid green";
    }
    if (event.code === 'Period'){
        event.preventDefault();
        document.getElementById(".").style.color = "green";
        document.getElementById(".").style.border = "solid green";
    }
    if (event.code === 'Slash'){
        event.preventDefault();
        document.getElementById("-").style.color = "green";
        document.getElementById("-").style.border = "solid green";
    }
    if (event.code === 'ShiftRight'){
        event.preventDefault();
        document.getElementById("rShift").style.color = "green";
        document.getElementById("rShift").style.border = "solid green";
    }

    //Bottow row
    if (event.code === 'ControlLeft'){
        event.preventDefault();
        document.getElementById("lCtrl").style.color = "green";
        document.getElementById("lCtrl").style.border = "solid green";
    }
    if (event.code === 'OSLeft'){
        event.preventDefault();
        document.getElementById("lWin").style.color = "green";
        document.getElementById("lWin").style.border = "solid green";
    }
    if (event.code === 'AltLeft'){
        event.preventDefault();
        document.getElementById("Alt").style.color = "green";
        document.getElementById("Alt").style.border = "solid green";
    }
    if (event.code === 'Space'){
        event.preventDefault();
        document.getElementById("space").style.color = "green";
        document.getElementById("space").style.border = "solid green";
    }
    if (event.code === 'AltRight'){
        event.preventDefault();
        document.getElementById("AltGr").style.color = "green";
        document.getElementById("AltGr").style.border = "solid green";
    }
    if (event.code === 'OSRight'){
        event.preventDefault();
        document.getElementById("rWin").style.color = "green";
        document.getElementById("rWin").style.border = "solid green";
    }
    if (event.code === 'ContextMenu'){
        event.preventDefault();
        document.getElementById("cont").style.color = "green";
        document.getElementById("cont").style.border = "solid green";
    }
    if (event.code === 'ControlRight'){
        event.preventDefault();
        document.getElementById("rCtrl").style.color = "green";
        document.getElementById("rCtrl").style.border = "solid green";
    }
});
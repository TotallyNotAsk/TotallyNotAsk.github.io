$(document).addEventListeners('keydown', (event) => {
    //Function keys row
    if (event.code === 'F1'){
        event.preventDefault();
        document.getElementById("test").style.color = "green";
    }
});
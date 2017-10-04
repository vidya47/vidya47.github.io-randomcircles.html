var start = new Date().getTime();
function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var colors = '#';
    for (i=0; i<6; i++){
        colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}
function makeshapeappear() {
    var top = Math.random() * 400;
    var left = Math.random() * 300;
    var width = Math.random() * 200 + 100;
    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0";
    }
    
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.backgroundColor = randomColor();
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
    }
function appearafterDelay() {
    setTimeout(makeshapeappear, Math.random() * 2000);
}

appearafterDelay();
document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken =  (end - start)/ 1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearafterDelay();
}


function calculator() {
    var int1 = document.getElementById("int1").value;
    var int2 = document.getElementById("int2").value;
    var op = document.getElementById("operation").value;
    if (/*Number.isInteger(int1) === false || Number.isInteger(int2) === false*/ false) {
        document.getElementById("output").innerHTML = "Please make sure both input boxes only contain integers (numbers) then click \"Go\" again.";
        console.log("help help help help, "+Number.isInteger(int1)+" "+int2)
    }
    else {
        var result = eval(int1 + op + int2);
        if (result.toString() == "NaN" || result.toString() == "-Infinity" || result.toString() == "Infinity") {
            document.getElementById("output").innerHTML = "You sneaky boy you, this is an unsolvable equation!";
            console.log("unsolve trigger, nice code hunting btw")
        }
        else {
            document.getElementById("output").innerHTML = result;
            console.log("solve trigger, nice code hunting btw")
        }
    }
}
function randomNumber(min, max){
return Math.floor(Math.random() * (max - min));
}
function randomizeColor(idOutput) {
    var red = randomNumber(0,255);
    var green = randomNumber(0,255);
    var blue = randomNumber(0,255);
    document.getElementById(idOutput).style.color = "rgb("+red+","+green+","+blue+")";
}
function run5050(){
    var rng = Math.round(Math.random());
    var sites = ["even", "odd"]
    window.location.href = "pages/"+sites[rng]+".html"
}
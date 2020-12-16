function corc() {
    var int1 = document.getElementById("int1").value;
    var int2 = document.getElementById("int2").value;
    console.log("run")
    console.log(int1);
    console.log(int2);
    var calc = eval('"'+int1+'"'+"+' '+"+'"'+int2+'"');

    console.log(calc);
    if (calc == "Baba Booey"){
        document.getElementById("output").innerHTML = calc;
    }
}
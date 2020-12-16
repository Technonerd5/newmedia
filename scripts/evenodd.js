var date = new Date;
var minutes = date.getMinutes();
var isOdd = (minutes % 2) == 1;
var path = window.location.pathname;
var page = path.split("/").pop();
if (page == "even.html") {
    var background = "<a href='unusannus.html' style='color:inherit;text-decoration:inherit;cursor:initial;'>0</a>"
    
    for (i = 2; i < screen.width;) {
        background = background + " " + i
        i++
        i++
    }
    document.getElementById("bktext").innerHTML = background;
    if (isOdd == true) {
        document.getElementById('centered').innerHTML = `<p class="foreground">Sorry, now's an <strong>odd</strong> time for me, could you come back when my schedule's more <strong>even?</strong><br><a href="index.html">Click me to return to the main page</a></p>`
    }
    else{
        document.getElementById('centered').innerHTML = `<p class="foreground">Hello, welcome to my humble abode, feel free to take a look around.<br>I'd love to stay and chat but it's almost that time again, I should send you on your way. <br><strong>Baba</strong><br><a href="../index.html">Click me to return to the main page</a></p>`
    }
}

else if (page == "odd.html") {
    var background = ""
    for (i = 1; i < screen.width;) {
        console.log(i)
        if (i == 365) {
            background = background + " " + "<a href='unusannus.html' style='color:inherit;text-decoration:inherit;cursor:initial;'>365</a>"
        }
        else {
            background = background + " " + i
        };
        i++
        i++
    }
    document.getElementById("bktext").innerHTML = background;
    if (isOdd == false) {
        document.getElementById('centered').innerHTML = `<p class="foreground">Sorry, my schedule's a bit un<strong>even</strong> at the moment, could you come back in a minute or <strong>three?</strong><br><a href="index.html">Click me to return to the main page</a></p>`

    }
    else{
        document.getElementById('centered').innerHTML = `<p class="foreground">Pog you figurd it out good job unless you didnt and you got to this one first wait what i didnt say anything you said something ok anyway have this then get out of my damn house <br><strong>Booey</strong><br><a href="../index.html">Click me to return to the main page</a></p>`
    }
}

var wavArray = new Array;
wavArray[0] = '../audio/dinosaur-2.wav'
/*wavArray[0] = 'audio/dinosaur1.wav';
wavArray[1] = 'audio/dinosaur2.wav';
wavArray[2] = 'audio/dinosaur3.wav';
wavArray[3] = 'audio/dinosaur4.wav';
wavArray[4] = 'audio/dinosaur5.wav';
wavArray[5] = 'audio/dinosaur6.wav';
wavArray[6] = 'audio/dinosaur7.wav';
wavArray[7] = 'audio/dinosaur8.wav';
wavArray[8] = 'audio/dinosaur9.wav';
wavArray[9] = 'audio/dinosaur10.wav';
wavArray[10] = 'audio/dinosaur11.wav';
wavArray[11] = 'audio/dinosaur12.wav';
wavArray[12] = 'audio/dinosaur13.wav';
wavArray[13] = 'audio/dinosaur14.wav';
wavArray[14] = 'audio/dinosaur15.wav';
wavArray[15] = 'audio/dinosaur16.wav';
wavArray[16] = 'audio/dinosaur17.wav';
wavArray[17] = 'audio/dinosaur18.wav';
wavArray[18] = 'audio/dinosaur19.wav';
wavArray[19] = 'audio/dinosaur20.wav';
wavArray[20] = 'audio/dinosaur20.wav';
wavArray[21] = 'audio/dinosaur21.wav';
wavArray[22] = 'audio/dinosaur22.wav';
wavArray[23] = 'audio/dinosaur23.wav';
wavArray[24] = 'audio/dinosaur24.wav';
wavArray[25] = 'audio/dinosaur25.wav';
wavArray[26] = 'audio/dinosaur26.wav';*/
for (i = 1; i <= 26;) {
    eval("wavArray[" + i + "]='../audio/dinosaur" + i + ".wav';");
    i++
};
var duration = 1;
function randAudio() {
    return new Promise(resolve => {
        var rng = Math.floor(Math.random() * wavArray.length)
        document.getElementById("audiobox").innerHTML = "<audio id = 'audio'><source src=" + wavArray[rng] + "></audio>"
        document.getElementById("audio").play()
        var au = document.createElement('audio');
        au.src = wavArray[rng];
        au.addEventListener('loadedmetadata', function () {
            duration = au.duration;
            resolve(duration)
        }, false);
    });
}


async function callAudio() {
    const resolve = await randAudio();
    setTimeout(() => {
        callAudio();
    }, Math.floor(resolve * 1000));
}
callAudio()
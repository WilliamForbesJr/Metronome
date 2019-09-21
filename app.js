const button = document.querySelector("#start");
const audio = document.querySelector('#click');
const tempoInput = document.querySelector('#tempo');

let playing; //create global variable to avoid scoping issue with Setinterval()


const setClick = (tempo) => {
        if (!playing) {
            playing = setInterval(() => {
                audio.play()
            }, tempo);
        } else {
            window.clearInterval(playing);
            playing = null;
        }
}

button.addEventListener("click", () => {
    const tempo = 60000 / tempoInput.value //BPM to MS Conversion
    setClick(tempo);
})
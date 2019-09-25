const audio = document.querySelector('#click');
const tempoInput = document.querySelector('#tempo');
const metronome = document.querySelector('.metronome-wrapper')
const slider = document.querySelector('.slider')

let playing; //create global variable to avoid scoping issue with Setinterval()


const setClick = (tempo) => {
        if (!playing) {
            playing = setInterval(() => {
                audio.play()
                audio.currentTime = 0;
                metronome.classList.add('click')
            }, tempo);
        } else {
            window.clearInterval(playing);
            playing = null;
        }
}

const removeTransition = function (e) {
    if (e.propertyName !== 'transform') return; //look for ONLY trasform properties
    this.classList.remove('click')
}

const setTempo = () => {
    const tempo = 60000 / tempoInput.value //BPM to MS Conversion
    setClick(tempo);
}

metronome.addEventListener("click", setTempo)

metronome.addEventListener('transitionend', removeTransition)

slider.addEventListener('change', function () {(tempoInput.value = this.value)})
slider.addEventListener('mousemove', function () { (tempoInput.value = this.value) })


tempoInput.addEventListener('change', () => slider.value = tempoInput.value)


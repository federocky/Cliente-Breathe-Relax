const container = document.querySelector('.containter');
const text = document.querySelector('#text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


breatheAnimation();

function breatheAnimation() {

    text.innerHTML = 'Breath in';
    container.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out';
            container.className = 'container shrink';

        }, holdTime)

    }, breatheTime)
}

setInterval(breatheAnimation, totalTime);
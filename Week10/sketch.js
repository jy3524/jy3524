let i = 0;
let txt = '🤖: I WILL TAKE OVER YOUR JOB!';
let speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById('head').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

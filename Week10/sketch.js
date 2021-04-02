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

function Shutdown() {
    window.location.href = 'shutdown.html';
}

document.querySelector('#b2').style.display = 'none';
document.querySelector('#b1').addEventListener('click', showBtn);

function showBtn(s) {
    document.querySelector('#b2').style.display = 'block';
    s.preventDefault();
}

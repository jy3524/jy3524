const theText = document.getElementById('head');
const middleButton = document.getElementById('b2');
const rightButton = document.getElementById('b3');

middleButton.addEventListener('click', textChange)
rightButton.addEventListener('click', refreshPage)

function textChange() {
    theText.textContent = "Charlie and Jeongin"
}

function randomize() {
    document.getElementById('body').style.backgroundColor = randomColor();
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function refreshPage() {
    window.location.reload();
}
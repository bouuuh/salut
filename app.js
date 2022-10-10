setInterval(randomColor, 1000);
function randomColor() {
    let color = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.querySelector(".title").style.color = color;
};





let table = ['blue', 'white', 'red', 'black', 'yellow'];
function randomColor2(){
    let random = Math.floor(Math.random()*table.length);
    let value = table[random];
    document.querySelector(".title2").style.color = value;
};
setInterval(randomColor2, 1000);

let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.box'),
    score = 0,
    time = 0,
    interval = 0;

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value != '') {
        time = input.value
        input.value = '';
        score = 0;
        clearInterval(interval)
        start();
        let result = document.querySelector('.result');
        result.style.display = "none"
    }
})


box.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})


function start() {
    interval = setInterval(() => decreaseTime(),1000)
    createBall()
    
}



function decreaseTime() {
    if(time === 0) {
        endGame()
    }else {
        if(time<=60){
            let currentTime = --time;
            if(currentTime < 10) {
                timeOut.classList.add('afterTen')
                currentTime = '0' + currentTime
            }
            timeOut.innerHTML = '00:' + currentTime 
        }else{
            time-=1;
            let nowMin = Math.floor(time/60);
            let nowSec = time%60;
            if(nowSec < 10) {
                nowSec = '0' + nowSec
            }
            if(nowMin < 10) {
                nowMin = '0' + nowMin
            }
            timeOut.innerHTML = `${nowMin}:` + nowSec
        }
         
    }
}

function endGame() {
    box.innerHTML = `<h1 class="result">Вы набрали: <span>${score}</span> очков</h1>`
    timeOut.classList.remove('afterTen')
}

function createBall() {
    let ball = document.createElement('div');
    let size = random(20,80);
    let coordinates = box.getBoundingClientRect()
    let x = random(0, coordinates.width - size);
    let y = random(0, coordinates.height - size);
    
    ball.style.width = size + 'px';
    ball.style.height = size + 'px';
    ball.classList.add('ball');
    ball.classList.add(randomFigure());
    ball.style.background = randomColor();
    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
    box.style.boxShadow = `0 0 20px 0 ${randomColor()}`;
    box.append(ball)
}

function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function randomColor(){
    return `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}

function randomFigure(){
    if(Math.floor(Math.random()*2)){
        return 'ball'
    }
    return 'square'
    
}

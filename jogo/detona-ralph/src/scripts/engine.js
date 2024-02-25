const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft : document.querySelector('#time-left'),
        score: document.querySelector('#score'),
    },
    values: {
        timerId: null,
        gameVelocity: 1000,
    }
};

function randomsquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    })
    let random = Math.floor(Math.random()*9);
    let randomsquare = state.view.squares[random];
    randomsquare.classList.add("enemy");
}

function moveEnemy(){
    state.values.timerId = setInterval(randomsquare,state.values.gameVelocity);
}


function addListenerhitbox(){
    state.view.squares.forEach((square)=>{
        
    })
}

function initialize(){
    moveEnemy()
};

initialize();
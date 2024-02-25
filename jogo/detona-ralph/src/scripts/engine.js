const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft : document.querySelector('#time-left'),
        score: document.querySelector('#score'),
    },
    values: {
        hitposition: 0,
        result: 0,
        currentime: 120,
    },
    actions: {
        timerId: setInterval(randomsquare, 1000),
        countDownTimerId: setInterval(countDown,1000),
    }
};

function playSound(){
    let audio = new Audio ('/detona-ralph/src/audio/hit.m4a');
    audio.volume = 0.2;
    audio.play()
}
function countDown (){
    state.values.currentime--;
    state.view.timeLeft.textContent = state.values.currentime;

    if (state.values.currentime <= 0 ){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId)
        alert('Game Over: Resultado: '+ state.values.result)
    }
}
function randomsquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    })
    let random = Math.floor(Math.random()*9);
    let randomsquare = state.view.squares[random];
    randomsquare.classList.add("enemy");
    state.values.hitposition = randomsquare.id;
}


function addListenerhitbox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown",()=>{
            if(square.id === state.values.hitposition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitposition = null ;
                playSound()
            }
        })
    })
}

function initialize(){
    addListenerhitbox()
};

initialize();
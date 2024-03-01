const pianoKeys = document.querySelectorAll('.keys .key')
const Volume = document.querySelector('.volume-slider input')
const keysCheck = document.querySelector('.keys-check input')

let audio = new Audio('/tunes/a.wav')
let mapKeys = []

const playTune = (key) =>{
    audio.src = `/tunes/${key}.wav`
    audio.play();

    console.log()
    const clicKey = document.querySelector(`[data-key="${key}"]`)
    clicKey.classList.add("active")
    setTimeout(()=>{
        clicKey.classList.remove("active")
    },150)
}

pianoKeys.forEach((key)=>{
    key.addEventListener("click",()=>playTune(key.dataset.key))
    mapKeys.push(key.dataset.key)
})

document.addEventListener("keydown",(e)=>{

    if(mapKeys.includes(e.key)){
    playTune(e.key)
    }
})
const handleVolume = (e)=>{
    audio.volume = e.target.value
}

const showHideKeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

Volume.addEventListener("input",handleVolume)

keysCheck.addEventListener('click',showHideKeys)
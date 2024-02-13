window.alert('Olá, vamos fazer a atividade 03')//alerta
var nome = window.prompt('Qual seu nome? ')//string guardada na variavel
window.alert(`Muito prazer, ${nome}`)//concatenação

document.getElementById('p').innerHTML = `${nome},<br>Vamos praticar` 

const main = document.querySelectorAll(`.title`)[0];

setTimeout(()=>{
    main.classList.add('principal');
},1000);

function mtn() {
    let time = document.getElementById('time')
    let date = new Date()
    let hours = date.getHours()
    let min = date.getMinutes()
    let dia = date.getDate() 
    let month = date.getMonth()+1
    let year = date.getFullYear()
    time.innerHTML = `Dia ${dia}/${month}/${year}<br>Hora ${hours}:${min}`
    if (hours > 0 && hours <12){
        document.body.style.background = `#dee376`
    }else if ( hours >12 && hours<19){
        document.body.style.background = `#f5b942`
    }else {
        document.body.style.background = `#4682b4`
    }

}

function somar(){
    let txt1 = document.getElementById('txtn1')
    let txt2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let v1 = Number(txt1.value)
    let v2 = Number(txt2.value)
    let s = v1+v2
    res.innerHTML = `A soma dos valores é ${s}.`
}

function subtrair(){
    let txt1 = document.getElementById('txtn1')
    let txt2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let v1 = Number(txt1.value)
    let v2 = Number(txt2.value)
    let sb = v1-v2
    res.innerHTML = `A subtração dos valores é ${sb}.`
}

function multiplicar (){
    let txt1 = document.getElementById('txtn1')
    let txt2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let v1 = Number(txt1.value)
    let v2 = Number(txt2.value)
    let m = v1*v2
    res.innerHTML = `A multiplicação dos valores é ${m}.`
}

function dividir(){
    let txt1 = document.getElementById('txtn1')
    let txt2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let v1 = Number(txt1.value)
    let v2 = Number(txt2.value)
    let d = v1/v2
    res.innerHTML = `A divisão dos valores é ${d}.`
}

function potencia (){
    let txt1 = document.getElementById('txtn1')
    let txt2 = document.getElementById('txtn2')
    let res = document.getElementById('res')
    let v1 = Number(txt1.value)
    let v2 = Number(txt2.value)
    let pot = Math.pow(v1,v2)
    res.innerHTML = `A potência dos valores é ${pot}.`             
}

function raiz (){
    let txt3 = document.querySelector('input#txtn3')
    let res = document.getElementById('resd')
    let v3 = Number(txt3.value)
    let rq = Math.sqrt(v3)
    res.innerHTML = `A raiz quadrada do valor é ${rq}.`             
}

function cosseno(){
    let txt3 =document.getElementById('txtn3')
    let res = document.getElementById('resd')
    let v3 = Number(txt3.value)
    let cs = Math.cos(v3)
    res.innerHTML = `O cosseno do valor é ${cs}.`
}

function seno (){
    let txt3 = document.getElementById('txtn3')
    let res = document.getElementById('resd')
    let v3 = Number(txt3.value)
    let sn = Math.sin(v3)
    res.innerHTML = `O seno do valor é ${sn}.`
}

function fatorial (){
    let txt3 = document.getElementById(`txtn3`)
    let res = document.getElementById(`resd`)
    let v3 = Number(txt3.value)
    let resultado = v3
        for (let i = 1; i < v3;i++){
            resultado*=i;
        }
        res.innerHTML = `O resultado do fatorial é ${resultado}`
    }

function maxima(){
    let txt4 = document.getElementById('txtn4')
    let txt5 = document.getElementById('txtn5')
    let txt6 = document.getElementById('txtn6')
    let res = document.getElementById('resm')
    let v4 = Number(txt4.value)
    let v5 = Number(txt5.value)
    let v6 = Number(txt6.value)
    let mx = Math.max(v4,v5,v6)
    res.innerHTML = `A Máxima dos valores é ${mx}.`
}

function minima (){
    let txt4 = document.getElementById('txtn4')
    let txt5 = document.getElementById('txtn5')
    let txt6 = document.getElementById('txtn6')
    let res = document.getElementById('resm')
    let v4 = Number(txt4.value)
    let v5 = Number(txt5.value)
    let v6 = Number(txt6.value)
    let mn = Math.min(v4,v5,v6)
    res.innerHTML = `A Mínima dos valores é ${mn}.`
}

function equacao (){
    let txt4 = document.getElementById('txtn4')
    let txt5 = document.getElementById('txtn5')
    let txt6 = document.getElementById('txtn6')
    let res = document.getElementById('resm')
    let a = Number(txt4.value)
    let b = Number(txt5.value)
    let c = Number(txt6.value)
    let delta = Math.pow(b,2) - 4*a*c
    var x1 = Math.sqrt(delta)
    var x1 = -b + x1
    var x1 = x1/(2*a)
    var x2 = Math.sqrt(delta)
    var x2 = -b - x2
    var x2 = x2/(2*a)
    res.innerHTML = `O resultado da equação de segundo grau e x1 = ${x1} e x2 = ${x2}`
}

function tabuada () {
    let txt7 = document.getElementById(`txtn7`)
    let res = document.getElementById(`tab`)
    let c = 1
    let v7 = Number(txt7.value)
    res.innerHTML =``
    while (c <= 10){
        let item = document.createElement('option')
        item.innerHTML = `${v7} x ${c} =  ${v7*c}`
        res.value = `res${c}`
        res.appendChild(item)
        c++

    }
}
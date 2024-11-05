function handleMouseEnter(){
    this.classList.add('p-card--hovered')
    document.body.id = `${this.id}-hovered`
}

function handleMouseLeave(){
    this.classList.remove('p-card--hovered')
    document.body.id = '';
}

function addEventListener(){
    const card = document.getElementsByClassName('p-card')
    
    for(let index = 0; index < card.length;index ++){
        const cards = card[index]
        cards.addEventListener('mouseenter', handleMouseEnter)
        cards.addEventListener('mouseleave', handleMouseLeave)
    }
}

document.addEventListener('DOMContentLoaded',addEventListener,false)

function Spiders (personagem){
    const desc = document.getElementById('description');

    if (personagem === 'Cindy'){
        desc.innerHTML = `
                            Cindy Moon é uma personagem do universo Marvel conhecida como Silk. Ela foi 
                            picada pela mesma aranha radioativa que deu poderes a Peter Parker (Homem-Aranha), 
                            mas manteve suas habilidades em segredo por muitos anos, vivendo escondida para 
                            se proteger. Cindy possui poderes semelhantes aos de Peter, incluindo força 
                            sobre-humana, agilidade e a capacidade de disparar teias orgânicas diretamente 
                            de suas mãos. Além disso, ela tem um "sentido aranha" ainda mais aguçado. 
                            Como Silk, ela se torna uma heroína independente, lutando contra o crime e 
                            descobrindo sua própria identidade no vasto universo de heróis da Marvel`
    } else if (personagem === 'MayDay') {
        desc.innerHTML = `  
                            Mayday Parker é a filha de Peter Parker e Mary Jane Watson em uma linha do tempo 
                            alternativa da Marvel conhecida como MC2. Como Spider-Girl, Mayday herda os 
                            poderes de aranha de seu pai, incluindo força sobre-humana, agilidade e o 
                            "sentido aranha". Determinada e corajosa, ela assume o manto de heroína adolescente 
                            para proteger Nova York e continuar o legado de seu pai. Mayday traz uma nova 
                            perspectiva à história do Homem-Aranha, equilibrando sua vida escolar e 
                            responsabilidades familiares com suas aventuras como Spider-Girl.`
    }else if ( personagem === 'Ock'){
        desc.innerHTML = `
                            O Homem-Aranha Superior é uma versão do Homem-Aranha na qual o Dr. Otto Octavius 
                            (Dr. Octopus) assume o corpo de Peter Parker. Em seus momentos finais, Octavius 
                            transfere sua mente para o corpo de Peter, herdando suas memórias e senso de 
                            responsabilidade. Com a intenção de ser um "herói melhor" e mais eficiente, ele se 
                            torna o Homem-Aranha Superior, empregando métodos mais brutais e estratégias rígidas 
                            no combate ao crime. Ao longo de sua jornada, Octavius acaba aprendendo valiosas 
                            lições sobre heroísmo e compaixão, tornando-se um herói mais complexo e, em 
                            certo grau, redimido.`
    }else{
        desc.innerHTML = `não encontrado`
    }
}
function handleMouseEnter(){
    this.classList.add('g-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('g-card--hovered')
    document.body.id = '';
}

function initializeEvent () {
    const card = document.getElementsByClassName('g-card');

    for(let index = 0; index < card.length; index ++ ){
        const cards = card[index];
        cards.addEventListener('mouseenter', handleMouseEnter);
        cards.addEventListener('mouseleave', handleMouseLeave)
    }
}

document.addEventListener('DOMContentLoaded',initializeEvent, false)

function Spiders (personagem){
    const desc = document.getElementById('description');

    if (personagem === 'Ben'){
        desc.innerHTML = `                        
                            Ben Reilly é um clone de Peter Parker e também conhecido como o Scarlet Spider 
                            no universo Marvel. Criado pelo vilão Chacal, ele compartilha das mesmas habilidades 
                            e memórias de Peter, mas possui uma identidade e trajetória próprias. Ben adota o 
                            manto de Scarlet Spider e, por um tempo, substitui Peter como Homem-Aranha. Ele é 
                            caracterizado por seu senso de justiça, mas enfrenta crises de identidade e busca 
                            constante por propósito, lutando para se afirmar como um verdadeiro herói, mesmo 
                            sendo um clone`
    }else if (personagem === 'Jess'){
        desc.innerHTML = `
                            Jessica Drew é a primeira Mulher-Aranha da Marvel, introduzida em Marvel Spotlight #32 
                            (1977). Exposta a soro de aranha e experimentos genéticos ainda criança, ela desenvolve 
                            habilidades como força sobre-humana, agilidade, e a capacidade de liberar “rajadas de 
                            veneno” bioelétricas. Jessica é uma heroína forte e independente, conhecida por sua 
                            personalidade determinada e seu papel como espiã. Ela atua tanto com os Vingadores 
                            quanto com a S.H.I.E.L.D., enfrentando ameaças globais e conflitos pessoais enquanto 
                            constrói sua própria identidade no universo Marvel.`
    }else if( personagem === 'Miguel'){
        desc.innerHTML = `
                            Miguel O'Hara é o Homem-Aranha do ano 2099, introduzido pela primeira vez em 
                            Spider-Man 2099 #1 (1992). Ele é um geneticista brilhante que, após um acidente, ganha 
                            habilidades de aranha, incluindo visão aguçada, garras retráteis e agilidade 
                            sobre-humana. Miguel vive em uma Nova York futurista, onde combate corporações 
                            corruptas e lida com os desafios de ser um herói em um mundo distópico. Diferente de 
                            Peter Parker, Miguel tem uma personalidade mais impulsiva e sarcástica, mas mantém um 
                            forte senso de justiça e dedicação em proteger seu mundo.`
    }else{
        desc.innerHTML = `não encontrado`
    }
}
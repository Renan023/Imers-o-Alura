function handleMouseEnter() {
    this.classList.add('m-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
    this.classList.remove('m-card--hovered');
    document.body.id = '';
}

function initializeEvent() {
    const card = document.getElementsByClassName('m-card');

    for (let index = 0; index < card.length; index++) {
        const cards = card[index];
        cards.addEventListener('mouseenter', handleMouseEnter);
        cards.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener('DOMContentLoaded', initializeEvent, false);

function Spiders(personagem) {
    const desc = document.getElementById("description");
    
    if(personagem === 'Hobie') {
        desc.innerHTML = `
                            Hobart "Hobie" Brown é uma versão alternativa do Homem-Aranha da Terra-138. 
                            Criado em 2015, ele tem um visual punk rock, com moicano 
                            e jaqueta de couro. Ao invés de Peter Parker, Hobie é um jovem rebelde que 
                            luta contra o governo autoritário do seu mundo, liderado por Norman Osborn. Usando 
                            sua guitarra como arma e símbolo, ele inspira resistência e liberdade, sendo um 
                            herói que combate injustiças do sistema. Spider-Punk ganhou destaque no filme 
                            Spider-Man: Across the Spider-Verse (2023), onde sua atitude revolucionária e 
                            estilo o tornaram popular entre os fãs.`;
    } else if(personagem === 'Anya') {
        desc.innerHTML = `
                            Anya Corazon é uma personagem do universo Marvel, conhecida por ser uma das 
                            versões da Mulher-Aranha. Introduzida em Spider-Man: The Spider-Clan (2004), Anya 
                            é uma adolescente latina que ganha habilidades de aranha após ser mordida por uma 
                            aranha radioativa. Ela é marcada por seu forte senso de justiça e a determinação em 
                            combater o crime. Anya, que também é conhecida como Araña, tem um traje distinto e 
                            habilidades como força sobre-humana, agilidade e a capacidade de escalar paredes. 
                            Ela enfrenta desafios típicos de adolescentes, enquanto lida com suas 
                            responsabilidades como heroína. Anya representa uma nova geração de super-heróis, 
                            trazendo diversidade e uma perspectiva única para o legado do Homem-Aranha.`;
    } else if(personagem === 'Kaine') {
        desc.innerHTML = `
                            Kaine Parker é uma das versões do Homem-Aranha no universo Marvel, conhecido 
                            como um clone de Peter Parker. Criado a partir de um experimento de clonagem, Kaine 
                            foi introduzido pela primeira vez em The Amazing Spider-Man #637 (2010). Ele possui 
                            habilidades semelhantes às de Peter, como força sobre-humana, agilidade e a capacidade 
                            de escalar paredes. Kaine é marcado por uma abordagem mais sombria e violenta em relação 
                            ao crime, frequentemente lutando contra suas próprias tendências e a sombra de sua origem 
                            como clone. Ele também possui uma forma de telepatia e a habilidade de criar garras 
                            retráteis. Com o tempo, Kaine busca redenção e se torna um herói por conta própria, 
                            assumindo a identidade de "Scarlet Spider". Ele se destaca por sua luta interna entre 
                            seu passado sombrio e seu desejo de ser um verdadeiro herói, trazendo complexidade ao 
                            legado do Homem-Aranha.`;
    } else {
        desc.innerHTML = `  
                            Personagem não encontrado.`;
    }
}
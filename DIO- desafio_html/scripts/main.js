import createRollDice from "./functions/roll-dice.js";
import createCharM20 from "./functions/character.js";
import createButtonsListener from "./functions/buttons-listener.js";

// Inicializando os módulos
const rollDice = createRollDice();
const char = createCharM20();
const buttonsListerner = createButtonsListener(document);

buttonsListerner.init();
char.createChar(char.races.DRAGONBORN, char.charClasses.WHITEMAGE);

// Função para exibir o resultado de ataque no console
console.log(char.toJSON());
console.log(char.attack(rollDice.d20(), 'mind'));

// Função que classifica o herói com base no XP
function classificarHeroi(nome, xp) {
    let nivel = "";

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Retorna o nível para ser usado em outro lugar
    return nivel;
}

// Função para capturar dados do herói e exibir o nível no HTML
export function verificarNivelHeroi() {
    const nome = document.getElementById("nomeHeroi").value;
    const xp = parseInt(document.getElementById("xpHeroi").value);

    if (!nome || isNaN(xp)) {
        alert("Por favor, insira um nome e um valor válido de XP.");
        return;
    }

    const nivel = classificarHeroi(nome, xp); // Chama a função que classifica o herói
    const resultado = `O Herói de nome ${nome} está no nível de ${nivel}`;

    // Exibe o resultado no HTML
    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerText = resultado;
}

// Integrar a função de ataque e dados do personagem com o clique no botão de rolar dados
export function rolarDadosHeroi() {
    const ataque = char.attack(rollDice.d20(), 'mind');
    const resultadoAtaque = `Ataque usando Mind: ${ataque.total} (Valor do dado: ${ataque.diceRoll}, Bônus de atributo: ${ataque.attribute.value})`;

    // Exibe o resultado do ataque no HTML
    const elementoAtaque = document.getElementById("resultadoAtaque");
    elementoAtaque.innerText = resultadoAtaque;
}

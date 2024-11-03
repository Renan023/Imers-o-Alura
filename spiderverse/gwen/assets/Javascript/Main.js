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
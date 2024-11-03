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
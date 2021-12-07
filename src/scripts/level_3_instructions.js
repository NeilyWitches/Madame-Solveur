class Level3Instructions {
    constructor() {
        this.screen = document.getElementById('screen');
        this.renderInstructions();
        this.clicked = 0;
    }

    renderInstructions() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = 'Level 3';
        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = 'Correctly label the barrels!';
        const instructions_label = document.createElement('h2');
        instructions_label.innerText = 'INSTRUCTIONS:'
        instructions_label.setAttribute('class', 'instructions-label');
        this.screen.appendChild(instructions_label);
    }
}

export default Level3Instructions;
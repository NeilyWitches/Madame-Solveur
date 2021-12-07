class Level3Story {
    constructor() {
        this.screen = document.getElementById('screen');
        // this.clickNext = this.clickNext.bind(this);
        this.renderScreen();
        this.clicked = 0;
    }

    renderScreen() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = 'Level 3';
        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
    }
}

export default Level3Story;
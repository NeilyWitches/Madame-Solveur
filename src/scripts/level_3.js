class Level3 {
    constructor () {
        this.renderLevel();

    }

    renderLevel() {
        const h1 = document.createElement('h1');
        document.getElementById('body').appendChild(h1);
        h1.innerText = 'More levels coming soon.'
    }

    
}

export default Level3;
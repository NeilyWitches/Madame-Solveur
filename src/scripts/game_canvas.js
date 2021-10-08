class GameCanvas {
    constructor () {
        this.draw();
    }

    draw() {
        const canvas = document.getElementById('game-canvas');
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
        }
    }
}

export default GameCanvas;
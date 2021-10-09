class Level1 {
    constructor () {
        this.canvas = document.getElementById('start-game-canvas');
        this.ctx = this.draw();
        this.canv_dims = this.canv_dim();
    }

    draw() {
        if (this.canvas.getContext) {
            const ctx = this.canvas.getContext('2d');
            return ctx;
        }
    }

    canv_dim() {
        const dims = [];

        const canv_width = this.canvas.getAttribute('width');
        const canv_height = this.canvas.getAttribute('height');
        dims.push(canv_width, canv_height);

        return dims;
    }
}

export default Level1;
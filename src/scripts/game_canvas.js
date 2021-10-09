class GameCanvas {
    constructor () {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.draw();
        this.canv_dims = this.canv_dim();
        
    }

    draw() {
        // const canvas = document.getElementById('game-canvas');
        if (this.canvas.getContext) {
            const ctx = this.canvas.getContext('2d');
            // ctx.fillStyle = 'rgb(200, 0, 0)';
            // ctx.fillRect(10, 10, 50, 50);
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

    center_box(outer_width, outer_height, inner_width, inner_height) {
        let wrh = inner_width / inner_height;
        let newWidth = inner_width;
        let newHeight = newWidth / wrh;
        if (newHeight > outer_height) {
            newHeight = outer_height;
            newWidth = newHeight * wrh;
        }
        let xOffset = newWidth < outer_width ? ((outer_width - newWidth) / 2) : 0;
        let yOffset = newHeight < outer_height ? ((outer_height - newHeight) / 2) : 0;
        return [xOffset, yOffset, newWidth, newHeight];
    }
}

export default GameCanvas;
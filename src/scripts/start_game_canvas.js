class StartGameCanvas {
    constructor () {
        this.canvas = document.getElementById('start-game-canvas');
        this.ctx = this.draw();
        this.canv_dims = this.canv_dim();
        this.renderTitles();
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

    renderTitles() {
        const text_h1 = "Madame Solveur:";
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 45px Arial";
        this.ctx.textBaseLine = "top";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text_h1, this.canvas.width / 2, 45);

        const text_h2 = "A game about solving puzzles!";
        this.ctx.fillStyle = "purple";
        this.ctx.font = "bold 25px Arial";
        this.ctx.textBaseLine = "top";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text_h2, this.canvas.width / 2, 80);
    }
}

export default StartGameCanvas;
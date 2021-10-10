class Level1Proper {
    constructor () {
        this.canvas = document.createElement('canvas');
        document.getElementById('body').appendChild(this.canvas);
        this.canvas.setAttribute('id', 'level-1-proper');
        this.ctx = this.draw();
        this.renderLevel();
        // this.renderBalls();
    }

    draw() {
        this.canvas.setAttribute('width', '600');
        this.canvas.setAttribute('height', '700');
        return this.canvas.getContext('2d');
    }

    renderLevel() {
        this.renderTitles();
    }

    renderTitles() {
        const text_h1 = "Level 1:";
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 45px Arial";
        this.ctx.textBaseline = "top";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text_h1, this.canvas.width / 2, 25);

        const text_h2 = "Find the heavier ball bearing!";
        this.ctx.fillStyle = "purple";
        this.ctx.font = "bold 25px Arial";
        this.ctx.textBaseLine = "top";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text_h2, this.canvas.width / 2, 80);
    }

}

export default Level1Proper;
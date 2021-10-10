import Level1 from "./level_1";

class TextBox extends Level1 {
    constructor (text) {
        super();
        this.box_width = 400;
        this.box_height = 400;
        this.box_centered_dims = this.center_box(this.canv_dims[0], this.canv_dims[1], this.box_width, this.box_height);
        this.renderDialogue(text);
    }

    renderDialogue(text) {
        this.ctx.fillStyle = 'lavender';
        this.ctx.fillRect(...this.box_centered_dims);
        this.ctx.fillStyle = "black";
        this.ctx.font = "20px Arial";
        this.ctx.textAlign = 'left';
        const lineHeight = 25;
        const padding = 5;
        let x = ((this.canvas.width - this.box_width) / 2) + padding;
        let y = this.box_centered_dims[1] + padding;
        this.wrapText(text, x, y, this.box_width - padding, lineHeight);
    }

    wrapText(text, x, y, maxWidth, lineHeight) {
        let words = text.split(" ");
        let line = '';

        for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = this.ctx.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                this.ctx.fillText(line, x, y);
                line = words[n] + ' ';
                line = words[n] + ' ';
                y += lineHeight;
            }
            else {
                line = testLine;
            }
        }
        this.ctx.fillText(line, x, y);
    }
}

export default TextBox;
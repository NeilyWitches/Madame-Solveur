import Level1 from "./level_1";
import StartGameCanvas from "./start_game_canvas";

class Button extends StartGameCanvas {
    constructor() {
        super();
        this.draw_rect();
    }

    draw_rect() {
        this.ctx.fillStyle = 'purple';
        const rect_width = 250;
        const rect_height = 50;
        const rect_centered_dims = this.center_box(this.canv_dims[0], this.canv_dims[1], rect_width, rect_height);
        this.ctx.fillRect(...rect_centered_dims);
        this.getClicked(rect_centered_dims[0], rect_centered_dims[1], rect_width, rect_height);

        const text = "Start";
        this.ctx.fillStyle = "black";
        const font = "bold " + rect_centered_dims[3] + "px Arial";
        this.ctx.font = font;
        this.ctx.textBaseline = "top";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text, this.canv_dims[0] / 2, rect_centered_dims[1]);
    }

    getClicked(xpoint, ypoint, rect_width, rect_height) {
        this.canvas.addEventListener ('click', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if (x > xpoint && x < xpoint + rect_width && y > ypoint && y < ypoint + rect_height) {
                console.log('inside button')
                this.canvas.parentNode.removeChild(this.canvas);
                new Level1();
            } else {
                console.log('outside button');
            }
        })
    }
}

export default Button;
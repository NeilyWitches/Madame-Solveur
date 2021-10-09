import GameCanvas from "./game_canvas";

class Button extends GameCanvas {
    constructor() {
        super();
        this.draw_rect();
    }

    draw_rect() {
        this.ctx.fillStyle = 'rgb(200, 0, 0)';
        const rect_width = 250;
        const rect_height = 50;
        const rect_centered_dims = this.center_box(this.canv_dims[0], this.canv_dims[1], rect_width, rect_height);
        this.ctx.fillRect(...rect_centered_dims);

        const text = "Start";
        this.ctx.fillStyle = "black";
        const font = "bold " + rect_centered_dims[3] + "px Arial";
        this.ctx.font = font;
        this.ctx.textBaseline = "top";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text, this.canv_dims[0] / 2, rect_centered_dims[1]);
    }
}

export default Button;
import StartGameCanvas from "./start_game_canvas";
import TextBox from "./text_box";

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
                 const dialogue_1 = `On one typical Autumn morning, Mme Solveur had been sitting in her office heavily concentrating on her research in theoretical physics at the Sorbonne in Paris, France. As she thought about a possible candidate for dark matter, a freshman had approached her office knocking on the door pane. Startled, but warm the physicist welcomed him in and he explained that his reason for coming was that he was tasked with assisting in an experiment with one of Mme Solveur's colleagues and needed help with a problem he had encountered. The student had heard about Mme Solveur's ability to solve puzzles...`;
                 new TextBox(dialogue_1);
            } else {
                console.log('outside button');
            }
        })
    }
}

export default Button;
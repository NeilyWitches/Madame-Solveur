import Level2Proper from "./level_2_proper";

class Level2 {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.getElementById('body').appendChild(this.canvas);
        this.canvas.setAttribute('id', 'level-2');
        this.ctx = this.draw();
        this.clicked = false;
        this.box_width = 400;
        this.box_height = 400;
        this.box_centered_dims = this.center_box(this.canvas.width, this.canvas.height, this.box_width, this.box_height);
        this.renderLevel();
    }

    draw() {
        if (this.canvas.getContext) {
            const ctx = this.canvas.getContext('2d');
            this.canvas.setAttribute('width', '600');
            this.canvas.setAttribute('height', '700');
            return ctx;
        }
    }

    renderLevel() {
        this.renderTitles();
        this.renderDialogue();
        this.nextButton();
    }

    renderTitles() {
        const text_h1 = "Level 2:";
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 45px Arial";
        this.ctx.textBaseline = "top";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text_h1, this.canvas.width / 2, 25);

        const text_h2 = "Be the first to say 50!";
        this.ctx.fillStyle = "purple";
        this.ctx.font = "bold 25px Arial";
        this.ctx.textBaseLine = "top";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text_h2, this.canvas.width / 2, 80);
    }

    nextButton() {
        this.ctx.fillStyle = 'purple';
        const button_width = 250;
        const button_height = 50;
        const button_y = 600;
        const button_centered_dims = this.center_box(this.canvas.width, this.canvas.height, button_width, button_height);
        this.ctx.fillRect(button_centered_dims[0], button_y, button_width, button_height);
        this.getClicked(button_centered_dims[0], button_y, button_width, button_height);

        const next_text = "Next";
        this.ctx.fillStyle = "black";
        const font = "bold " + button_centered_dims[3] + "px Arial";
        this.ctx.font = font;
        this.ctx.textBaseline = "top";
        this.ctx.textAlign = "center";
        this.ctx.fillText(next_text, this.canvas.width / 2, button_y);
    }

    getClicked(xpoint, ypoint, rect_width, rect_height) {
        this.canvas.addEventListener('click', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if (x > xpoint && x < xpoint + rect_width && y > ypoint && y < ypoint + rect_height) {
                if (this.clicked === false) {
                    this.ctx.clearRect(...this.box_centered_dims);
                    this.clicked = true;
                    this.renderIntructions();
                } else if (this.clicked === true) {
                    this.canvas.parentNode.removeChild(this.canvas);
                    new Level2Proper();
                }
            } else {
                console.log('outside button');
            }
        })
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

    renderIntructions() {
        const instructions = `INSTRUCTIONS: Mme Solveur and the student are playing a game. The winner of the game is the first to say the number 50, but there are rules. She and the student will take turns saying aloud numbers. The first number spoken must be a number from 1 to 10. The next number spoken must be 1 to 10 larger than the previous number. The student allows the Mme to go first. Input your number into the box and click 'Say' to say aloud that number...`;
        this.ctx.fillStyle = 'lavender';
        this.ctx.fillRect(...this.box_centered_dims);
        this.ctx.fillStyle = "black";
        this.ctx.font = "20px Arial";
        this.ctx.textAlign = 'left';
        const lineHeight = 25;
        const padding = 5;
        let x = ((this.canvas.width - this.box_width) / 2) + padding;
        let y = this.box_centered_dims[1] + padding;
        this.wrapText(instructions, x, y, this.box_width - padding, lineHeight);
    }

    renderDialogue() {
        const dialogue_1 = `"The student gleefully thanks the Mme for finding the heavier ball and mosies out of her office. Shortly afterwards, the professor had felt hungry so she made her way to the quad and sat down at the café. Upon sitting, she ran into one of her graduate students. After they exchanged pleasantries, the grad student presented the physicist with a game she had come up with.`;
        this.ctx.fillStyle = 'lavender';
        this.ctx.fillRect(...this.box_centered_dims);
        this.ctx.fillStyle = "black";
        this.ctx.font = "20px Arial";
        this.ctx.textAlign = 'left';
        const lineHeight = 25;
        const padding = 5;
        let x = ((this.canvas.width - this.box_width) / 2) + padding;
        let y = this.box_centered_dims[1] + padding;
        this.wrapText(dialogue_1, x, y, this.box_width - padding, lineHeight);
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

export default Level2;
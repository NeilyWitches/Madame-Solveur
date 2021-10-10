class Level1 {
    constructor () {
        this.canvas = document.createElement('canvas');
        document.getElementById('body').appendChild(this.canvas);
        this.canvas.setAttribute('id', 'level-1');
        this.ctx = this.draw();
        this.canv_dims = this.canv_dim();
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

    canv_dim() {
        const dims = [];

        const canv_width = this.canvas.getAttribute('width');
        const canv_height = this.canvas.getAttribute('height');
        dims.push(canv_width, canv_height);

        return dims;
    }

    renderLevel() {
        this.renderTitles();
        this.renderDialogue();
        this.nextButton();
    }

    renderTitles() {
        const text_h1 = "Level 1:";
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 45px Arial";
        this.ctx.textBaseline = "top";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text_h1, this.canv_dims[0] / 2, 25);

        const text_h2 = "Find the heavier ball bearing!";
        this.ctx.fillStyle = "purple";
        this.ctx.font = "bold 25px Arial";
        this.ctx.textBaseLine = "top";
        this.ctx.textAlign = "center";
        this.ctx.fillText(text_h2, this.canv_dims[0] / 2, 80);
    }

    nextButton() {
        this.ctx.fillStyle = 'purple';
        const button_width = 250;
        const button_height = 50;
        const button_y = 600;
        const button_centered_dims = this.center_box(this.canvas.width, this.canvas.height, button_width, button_height);
        this.ctx.fillRect(button_centered_dims[0], button_y, button_width, button_height);
        this.getClicked(button_centered_dims[0], button_y, button_width, button_height);
    }

    getClicked(xpoint, ypoint, rect_width, rect_height) {
        this.canvas.addEventListener('click', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if (x > xpoint && x < xpoint + rect_width && y > ypoint && y < ypoint + rect_height) {
                console.log('inside button')
                this.canvas.parentNode.removeChild(this.canvas);
                this.ctx.clearRect();
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

    renderDialogue(text) {
        const dialogue_1 = `On one typical Autumn morning, Mme Solveur had been sitting in her office heavily concentrating on her research in theoretical physics at the Sorbonne in Paris, France. As she thought about a possible candidate for dark matter, a freshman had approached her office knocking on the door pane. Startled, but warm the physicist welcomed him in and he explained that his reason for coming was that he was tasked with assisting in an experiment with one of Mme Solveur's colleagues and needed help with a problem he had encountered. The student had heard about Mme Solveur's ability to solve puzzles...`;
        this.ctx.fillStyle = 'lavender';
        const box_width = 400;
        const box_height = 400;
        const box_centered_dims = this.center_box(this.canvas.width, this.canvas.height, box_width, box_height);
        this.ctx.fillRect(...box_centered_dims);
        this.ctx.fillStyle = "black";
        this.ctx.font = "20px Arial";
        this.ctx.textAlign = 'left';
        const lineHeight = 25;
        const padding = 5;
        let x = ((this.canvas.width - box_width) / 2) + padding;
        let y = box_centered_dims[1] + padding;
        this.wrapText(dialogue_1, x, y, box_width - padding, lineHeight);
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

export default Level1;
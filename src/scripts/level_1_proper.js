class Level1Proper {
    constructor () {
        this.canvas = document.createElement('canvas');
        document.getElementById('body').appendChild(this.canvas);
        this.canvas.setAttribute('id', 'level-1-proper');
        this.ctx = this.draw();
        this.renderLevel();
    }

    draw() {
        this.canvas.setAttribute('width', '600');
        this.canvas.setAttribute('height', '700');
        return this.canvas.getContext('2d');
    }

    renderLevel() {
        this.renderTitles();
        this.renderBalls();
        this.renderImages();
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

    renderBalls() {
        for (let i = 0; i < 9; i++) {
            this.ctx.beginPath();
            this.ctx.arc(100 + i * 30, 150, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = "gray";
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }

    renderImages() {
        const that = this;
        const student = new Image();
        student.src = 'assets/student_lvl_1.jpg';
        const student_scale_factor = 1 / 8;
        student.addEventListener('load', function() {
            that.ctx.drawImage(student, 450, 150, student.width * student_scale_factor, student.height * student_scale_factor);
        }, false);
        const student_cite = new Image();
        student_cite.src = 'assets/student_cite.jpg';
        const student_cite_scale_factor = 1 / 4;
        student.addEventListener('load', function () {
            console.log(student_cite.width);
            console.log(student_cite.height);
            that.ctx.drawImage(student_cite, 395, 375, student_cite.width * student_cite_scale_factor, student_cite.height * student_cite_scale_factor);
        }, false);
    }

}

export default Level1Proper;
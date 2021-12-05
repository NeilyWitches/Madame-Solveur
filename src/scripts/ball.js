class Ball {
    constructor() {
        this.balls = document.getElementById('balls');
        this.renderBall();
    }

    renderBall() {
        const div = document.createElement('div');
        this.balls.appendChild(div);
        div.classList.add('dropzone');
        div.classList.add('ball-div');
        const img = new Image();
        div.appendChild(img);
        

        const scale_factor = 1 / 100;
        img.onload = function() {
            this.width = this.width * scale_factor;
        }
        img.src = 'assets/ball.png';
        img.classList.add('ball');
        img.setAttribute('mass', 100);
        img.setAttribute('draggable', true);
        img.setAttribute('ondragstart', "event.dataTransfer.setData('text/plain',null)");
    }
}

export default Ball;
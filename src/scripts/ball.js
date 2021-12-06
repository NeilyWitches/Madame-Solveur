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
        img.src = 'assets/ball.png';
        img.classList.add('ball');
        img.setAttribute('mass', 100);
        img.setAttribute('draggable', true);
        img.setAttribute('ondragstart', "event.dataTransfer.setData('text/plain',null)");
    }
}

export default Ball;
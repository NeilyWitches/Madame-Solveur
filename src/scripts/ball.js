class Ball {
    constructor(li, i) {
        this.li = li;
        this.renderBall(i);
    }

    renderBall(i) {
        const img = new Image();
        this.li.appendChild(img);
        const scale_factor = 1 / 100;
        img.onload = function() {
            this.width = this.width * scale_factor;
        }
        img.src = 'assets/ball.jpg';
        img.classList.add('ball');
        img.setAttribute('id', `lightBall ${i}`);
    }
}

export default Ball;
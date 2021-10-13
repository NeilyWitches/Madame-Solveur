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
        img.innerText = `${i}`;
        img.setAttribute('id', `lightBall ${i}`);
        img.setAttribute('draggable', true);
        img.setAttribute('ondragstart', "event.dataTransfer.setData('text/plain',null)");
    }
}

export default Ball;
class Ball {
    constructor(i) {
        this.heavy = false;
        this.handle = {
            x: 100 + i * 30,
            y: 150,
            radius: 10
        };
        this.canvas = document.getElementById("level-1-proper");
        this.ctx = this.canvas.getContext("2d");
        this.renderBall();
        this.dragDrop();
    }

    renderBall() {
        // this.clearCircle(this.ctx, this.handle.x, this.handle.y, this.handle.radius);

        this.ctx.clearRect(this.handle.x - 12, this.handle.y - 12, 2.5 * this.handle.radius, 2.5 * this.handle.radius);
        this.ctx.beginPath();
        this.ctx.arc(this.handle.x, this.handle.y, this.handle.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = "gray";
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }

    clearCircle(ctx, x, y, radius) {
        console.log("inside clearCircle");
        ctx.save();
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2*Math.PI, true);
        ctx.clip();
        ctx.clearRect(x - radius, y - radius, radius * 2, radius * 2);
        ctx.restore();
    }

    circlePointCollision(x, y, circle) {
        return this.distanceXY(x, y, circle.x, circle.y) < circle.radius;
    }

    distanceXY(x0, y0, x1, y1) {
        const dx = x1 - x0;
        const dy = y1 - y0;
        return Math.sqrt(dx * dx + dy * dy);
    }

    dragDrop() {
        this.canvas.addEventListener("mousedown", (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if(this.circlePointCollision(x, y, this.handle)) {
                console.log("inside circle");
                this.canvas.addEventListener("mousemove", this.onMouseMove.bind(this));
                this.canvas.addEventListener("mouseup", this.onMouseUp.bind(this));
            }
        });
    }

    onMouseMove(event) {
        const rect = this.canvas.getBoundingClientRect();
        this.handle.x = event.clientX - rect.left;
        this.handle.y = event.clientY - rect.top;
        this.renderBall();
    }

    onMouseUp() {
        console.log("mouseup");
        const that = this;
        this.canvas.removeEventListener("mousemove", that.onMouseMove.bind(that));
        this.canvas.removeEventListener("mouseup", that.onMouseUp.bind(that));
    }
}

export default Ball;
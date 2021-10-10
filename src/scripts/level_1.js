class Level1 {
    constructor () {
        this.canvas = document.createElement('canvas');
        document.getElementById('body').appendChild(this.canvas);
        // body.appendChild(body);
        this.canvas.setAttribute('id', 'level-1');
        this.ctx = this.draw();
        this.canv_dims = this.canv_dim();
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
}

export default Level1;
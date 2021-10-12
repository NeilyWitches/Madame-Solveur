import Ball from "./ball.js"

class Level1Redo {
    constructor() {
        this.level = document.createElement('div');
        document.getElementById('body').appendChild(this.level);
        this.level.setAttribute('id', 'level-1-redo');
        this.renderLevel();
        this.dragAndDrop();
    }

    renderLevel() {
        const h1 = document.createElement('h1');
        this.level.appendChild(h1);
        h1.innerText = "Level 1:";

        const h2 = document.createElement('h2');
        h1.appendChild(h2);
        h2.innerText = "Find the heavier ball bearing!"

        this.renderBalls();
        // this.renderScale();
        this.renderScale();
        // this.renderStudent();
        this.renderButton();
    }

    renderBalls() {
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'ul');
        this.level.appendChild(ul);

        const li_balls = document.createElement('li');
        ul.appendChild(li_balls);
        
        const balls = [];
        for (let i = 0; i < 9; i++) {
            balls.push(new Ball(li_balls, i));
        }

    }

    renderScaleOld() {
        const li_2 = document.createElement('li');
        li_2.setAttribute('id', 'li_2');
        document.getElementById('ul').appendChild(li_2);

        const scale_left = new Image();
        const scale_right = new Image();
        scale_left.classList.add('dropzone');
        scale_right.classList.add('dropzone');

        li_2.appendChild(scale_left);
        li_2.appendChild(scale_right);
        const scale_factor = 1 / 4;
        scale_left.onload = function () {
            this.width = this.width * scale_factor;
        }
        scale_right.onload = function () {
            this.width = this.width * scale_factor;
        }
        scale_left.src = 'assets/scale_left.png';
        scale_right.src = 'assets/scale_right.png';
    }

    renderScale() {
        const ul = document.getElementById('ul');
        const li_2 = document.createElement('li');
        li_2.classList.add('scale');
        ul.appendChild(li_2);
        const scale_top = new Image();
        li_2.appendChild(scale_top);
        const scale_factor = 1 /4;
        scale_top.onload = function () {
            this.width = this.width * scale_factor;
        }
        scale_top.src = 'assets/scale_top.png';

        const li_3 = document.createElement('li');
        li_3.classList.add('scale');
        ul.appendChild(li_3);
        const scale_1 = new Image();
        scale_1.setAttribute('id', 'scale-1');
        li_3.appendChild(scale_1);
        scale_1.onload = function () {
            this.width = this.width * scale_factor;
        }
        scale_1.src = 'assets/scale_1.png';
    }

    renderStudent() {
        const student = new Image();
        student.setAttribute('id', 'student');
        const li_2 = document.getElementById('li_2');
        li_2.appendChild(student);
        const scale_factor = 1 / 5;
        student.onload = function () {
            this.width = this.width * scale_factor;
        }
        student.src = 'assets/student_lvl_1.jpg';
    }

    renderButton() {
        const li_6 = document.createElement('li');
        li_6.setAttribute('id', 'li_6');
        const ul = document.getElementById('ul');
        ul.appendChild(li_6);

        const weighButton = document.createElement('button');
        li_6.appendChild(weighButton);
        weighButton.setAttribute('type', 'button');
        weighButton.innerText = "Weigh";

        const counter = document.createElement('p');
        li_6.appendChild(counter);
        counter.innerText = 0;
    }

    dragAndDrop() {
        let dragged;
        document.addEventListener('drag', function(event) {

        }, false);

        document.addEventListener('dragstart', function(event) {
            dragged = event.target;
        }, false);

        document.addEventListener('dragover', function(event) {
            event.preventDefault();
        }, false);

        document.addEventListener('drop', function(event) {
            event.preventDefault();
            if (event.target.className == "dropzone") {
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
            }

        }, false);
    }

}

export default Level1Redo;
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
        this.renderScale();
        // this.renderStudent();
        // this.renderButton();
    }

    renderBalls() {
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'ul');
        this.level.appendChild(ul);

        const li_balls = document.createElement('li');
        li_balls.setAttribute('id', "li_balls");
        ul.appendChild(li_balls);

        const balls = [];
        for (let i = 0; i < 9; i++) {
            balls.push(new Ball(li_balls, i));
        }

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

        const scale_2 = new Image();
        scale_2.setAttribute('id', 'scale-2');
        li_3.appendChild(scale_2);
        scale_2.onload = function () {
            this.width = this.width * scale_factor;
        }
        scale_2.src = 'assets/scale_2.png';

        const scale_3 = new Image();
        scale_3.setAttribute('id', 'scale-3');
        li_3.appendChild(scale_3);
        scale_3.onload = function () {
            this.width = this.width * scale_factor;
        }
        scale_3.src = 'assets/scale_3.png';

        const li_4 = document.createElement('li');
        li_4.classList.add('scale');
        ul.appendChild(li_4);

        const div_left = document.createElement('div');
        div_left.classList.add('dropzone');
        li_4.appendChild(div_left);
        div_left.setAttribute('id', 'div-left');
        
        const scale_5 = new Image();
        scale_5.setAttribute('id', 'scale-5');
        li_4.appendChild(scale_5);
        scale_5.onload = function () {
            this.width = this.width * scale_factor;
        }
        scale_5.src = 'assets/scale_5.png';

        const div_right = document.createElement('div');
        div_right.classList.add('dropzone');
        li_4.appendChild(div_right);
        div_right.setAttribute('id', 'div-right');

        const li_5 = document.createElement('li');
        li_5.classList.add('scale');
        ul.appendChild(li_5);

        const scale_8 = new Image();
        scale_8.setAttribute('id', 'scale-8');
        li_5.appendChild(scale_8);
        scale_8.onload = function () {
            this.width = this.width * scale_factor;
        }
        scale_8.src = 'assets/scale_8.png';
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
        const li_7 = document.createElement('li');
        li_7.setAttribute('id', 'li_7');
        const ul = document.getElementById('ul');
        ul.appendChild(li_7);

        const weighButton = document.createElement('button');
        li_7.appendChild(weighButton);
        weighButton.setAttribute('type', 'button');
        weighButton.innerText = "Weigh";

        const counter = document.createElement('p');
        li_7.appendChild(counter);
        counter.innerText = 0;
    }

    dragAndDrop() {
        let dragged;

        // document.addEventListener('mousedown', function(event_1) {
        //     if (dragged.getAttribute('draggable') === "true") {
                
        //     }
        // })

        document.addEventListener('dragstart', function(event) {
            dragged = event.target;
    
        }, false);

        document.addEventListener('dragover', function(event) {
            event.preventDefault();
        }, false);

        document.addEventListener('drop', function(event) {
            event.preventDefault();
            if (event.target.className.includes("dropzone")) {
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
            }

        }, false);
    }

}

export default Level1Redo;
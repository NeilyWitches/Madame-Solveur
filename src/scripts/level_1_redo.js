import Ball from "./ball.js"

class Level1Redo {
    constructor() {
        this.level = document.createElement('div');
        document.getElementById('body').appendChild(this.level);
        this.level.setAttribute('id', 'level-1-redo');
        this.renderLevel();
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
        this.renderStudent();
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

    renderScale() {
        const li_2 = document.createElement('li');
        li_2.setAttribute('id', 'li_2');
        document.getElementById('ul').appendChild(li_2);

        const scale_left = new Image();
        const scale_right = new Image();
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
        const li_3 = document.createElement('li');
        li_3.setAttribute('id', 'li_3');
        const ul = document.getElementById('ul');
        ul.appendChild(li_3);

        const weighButton = document.createElement('button');
        li_3.appendChild(weighButton);
        weighButton.setAttribute('type', 'button');
        weighButton.innerText = "Weigh";

        const counter = document.createElement('p');
        li_3.appendChild(counter);
        counter.innerText = 0;
    }

}

export default Level1Redo;
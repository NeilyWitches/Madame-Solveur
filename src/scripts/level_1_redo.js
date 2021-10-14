import Ball from "./ball.js"
import Level1Instructions from "./level_1_instructions.js";
import Level2Instructions from "./level_2.js";

class Level1Redo {
    constructor() {
        this.level = document.createElement('div');
        document.getElementById('body').appendChild(this.level);
        this.level.setAttribute('id', 'level-1-redo');
        this.renderLevel();
        this.dragAndDrop();
        this.clickWeigh();
        this.reset();
        this.instructions();
    }

    renderLevel() {
        const h1 = document.createElement('h1');
        h1.setAttribute('id', 'h1');
        this.level.appendChild(h1);
        h1.innerText = "Level 1";

        const h2 = document.createElement('h2');
        h1.appendChild(h2);
        h2.innerText = "Find the heavier ball bearing!"

        this.renderBalls();
        this.renderScale();
        this.renderButtons();
        this.renderStudent();
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

        const random_num = Math.floor(Math.random() * 9);
        let heavy_ball = li_balls.children[random_num].children[0];
        let mass = heavy_ball.getAttribute('mass');
        mass = parseInt(mass) + 1;
        heavy_ball.setAttribute('mass', mass);
    }

    renderScale() {
        const ul = document.getElementById('ul');
        const li_2 = document.createElement('li');
        li_2.classList.add('scale');
        ul.appendChild(li_2);
        const scale_top = new Image();
        scale_top.setAttribute('id', 'scale-top');
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
        li_4.setAttribute('id', 'li_4');
        ul.appendChild(li_4);

        const div_left = document.createElement('div');
        div_left.classList.add('dropzone');
        li_4.appendChild(div_left);
        div_left.setAttribute('id', 'div-left');
        div_left.style.position = "relative";
        div_left.style.top = "-23px";
        div_left.style.right = "-5px";
        
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
        div_right.style.position = "relative";
        div_right.style.top = "-200px";
        div_right.style.right = "-180px";

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
        const li_4 = document.getElementById('li_4');
        li_4.appendChild(student);
        const scale_factor = 1 / 5;
        student.onload = function () {
            this.width = this.width * scale_factor;
        }
        student.src = 'assets/student_lvl_1.png';
    }

    renderButtons() {
        const li_6 = document.createElement('li');
        li_6.setAttribute('id', 'li_6');
        const ul = document.getElementById('ul');
        ul.appendChild(li_6);

        const weighButton = document.createElement('button');
        li_6.appendChild(weighButton);
        weighButton.setAttribute('id', 'weighButton');
        weighButton.setAttribute('type', 'button');
        weighButton.innerText = "Weigh";

        const counter = document.createElement('p');
        counter.setAttribute('id', 'counter');
        li_6.appendChild(counter);
        counter.innerText = 0;

        const resetButton = document.createElement('button');
        li_6.appendChild(resetButton);
        resetButton.setAttribute('id', 'resetButton');
        resetButton.setAttribute('type', 'button');
        resetButton.innerText = "Reset";

        const instructions = document.createElement('button');
        this.level.appendChild(instructions);
        instructions.setAttribute('id', 'instructions-1-button');
        instructions.setAttribute('type', 'button');
        instructions.innerText = "Instructions";
    }

    dragAndDrop() {
        let dragged;
        const that = this;

        document.addEventListener('dragstart', handleDragStart);
        function handleDragStart(event) {
            dragged = event.target;
        };

        document.addEventListener('dragover', handleDragOver);
        function handleDragOver(event) {
            event.preventDefault();
        }

        document.addEventListener('drop', handleDrop);
        function handleDrop(event) {
            event.preventDefault();
            if (event.target.className.includes("dropzone")) {
                dragged.parentNode.removeChild(dragged);
                event.target.appendChild(dragged);
            }
            else if (event.target.id === 'student') {
                let mass = parseInt(dragged.getAttribute('mass'));
                let body = document.getElementById('body');
                document.removeEventListener('dragstart', handleDragStart);
                document.removeEventListener('dragover', handleDragOver);
                document.removeEventListener('drop', handleDrop);
                if (mass === 100) {
                    while (body.firstChild) {
                        body.removeChild(body.firstChild);
                    }
                    
                    alert("That was not the heavy ball! Restart the level!");
                    new Level1Instructions();
                    return false;
                } else if (mass === 101) {
                    alert('Good work, professor! Did you know you can be certain of which ball is the heavy one in only two clicks of the weigh button?');
                    while (body.firstChild) {
                        body.removeChild(body.firstChild);
                    }
                    new Level2Instructions();
                }
            }
        }
    }

    clickWeigh() {
        const button = document.getElementById('weighButton');
        button.addEventListener('click', handleClick);
        const that = this;

        function handleClick(e) {
            let div_left = document.getElementById('div-left');
            let div_right = document.getElementById('div-right');
            let left_pos = div_left.style.top;
            let right_pos = div_right.style.top;
            if (left_pos !== "-23px" || right_pos !== "-200px") {
                alert("Please click 'Reset' to reset the scale.");
            } else {
                const left = document.getElementById('div-left').children;
                const right = document.getElementById('div-right').children;
                let mass_left = 0;
                let mass_right = 0;
                for (let i = 0; i < left.length; i++) {
                    mass_left += parseInt(left[i].getAttribute('mass'));
                }
                for (let i = 0; i < right.length; i++) {
                    mass_right += parseInt(right[i].getAttribute('mass'));
                }
                if (mass_left < mass_right) {
                    let y_pos_right = parseInt(div_right.style.top);
                    div_right.style.top = y_pos_right + 100 + "px";
                } else if (mass_left > mass_right) {
                    let y_pos_left = parseInt(div_left.style.top);
                    div_left.style.top = y_pos_left + 100 + "px";
                }
                let counter = document.getElementById('counter');
                let count = counter.innerText;
                let new_count = parseInt(count) + 1;
                counter.innerText = new_count;
                if (new_count > 4) {
                    document.removeEventListener('click', handleClick);
                    alert("You weighed too many times! Restart the level.")
                    document.getElementById('body').removeChild(that.level);
                    new Level1Instructions();
                }
            }
        }
    }

    reset() {
        const button = document.getElementById('resetButton');
        button.addEventListener('click', handleClick);
        const div_left = document.getElementById('div-left');
        const div_right = document.getElementById('div-right');
        const that = this;

        function handleClick(e) {
            div_left.style.top = "-23px";
            div_right.style.top = "-200px";
        }
    }

    instructions() {
        const button = document.getElementById("instructions-1-button");
        button.addEventListener('click', handleClick);
        const that = this;
        
        function handleClick(e) {
            alert(`The student approaches the Mme with 9 ball bearings, all of them identical in appearance. They all weigh exactly the same except for one which is slightly heavier. Your task is to use the scale provided to find which ball is heavier than the rest. Drag and drop the balls onto either side of the scale and click "weigh" to see which side the scale will tip. Try to click the "weigh" button as little as possible. If you click it 5 times, you failed the puzzle! When you think you have figured out which ball is the heavy one, drag that ball to the student...`);
        }
    }

}

export default Level1Redo;
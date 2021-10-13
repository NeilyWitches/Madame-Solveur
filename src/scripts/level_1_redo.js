import Ball from "./ball.js"
import Level1 from "./level_1.js";
import Level2 from "./level_2.js";

class Level1Redo {
    constructor() {
        this.level = document.createElement('div');
        document.getElementById('body').appendChild(this.level);
        this.level.setAttribute('id', 'level-1-redo');
        this.renderLevel();
        this.dragAndDrop();
        this.clickWeigh();
        this.reset();
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
        student.src = 'assets/student_lvl_1.jpg';
    }

    renderButtons() {
        const li_6 = document.createElement('li');
        li_6.setAttribute('id', 'li_6');
        li_6.style.position = "relative";
        li_6.style.top = "-500px";
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
    }

    // renderReset() {
    //     const
    // }

    dragAndDrop() {
        let dragged;
        const that = this;

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
            else if (event.target.id === 'student') {
                let mass = parseInt(dragged.getAttribute('mass'));
                if (mass < 101) {
                    alert("That was not the heavy ball! Restart the level!");
                    document.getElementById('body').removeChild(that.level);
                    new Level1();
                } else {
                    let count = document.getElementById('counter').innerText;
                    if (count === "2") {
                        alert(`Amazing! You found the heavy ball using the scale the fewest amount of times as possible!`);
                    } else {
                        alert('Good work, professor! But did you know you can find the heavy ball in only two clicks of the weigh button?');
                    }
                    document.getElementById('body').removeChild(that.level);
                    new Level2 ();
                }
            }

        }, false);
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
                    alert("You weighed too many times! Restart the level.")
                    document.getElementById('body').removeChild(that.level);
                    new Level1();
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

}

export default Level1Redo;
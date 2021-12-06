import Ball from "./ball.js"
import Level1Instructions from "./level_1_instructions";
import Level2Instructions from "./level_2.js";

class Level1Proper {
    constructor() {
        this.screen = document.getElementById('screen');
        this.renderLevel();
        this.dragAndDrop();
        // this.clickWeigh();
        // this.reset();
        // this.instructions();
    }

    renderLevel() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = "Level 1";

        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = "Find the heavier ball bearing!"
        const balls = document.createElement('div');
        this.screen.appendChild(balls);
        balls.setAttribute('id', 'balls');

        this.renderBalls();
        this.renderScale();
        this.renderButtons();
        this.renderStudent();
    }

    renderBalls() {
        const balls = [];
        for (let i = 0; i < 9; i++) {
            balls.push(new Ball());
        }

        const random_num = Math.floor(Math.random() * 9);
        let heavy_ball = document.getElementById('balls').children[random_num].children[0];
        let mass = heavy_ball.getAttribute('mass');
        mass = parseInt(mass) + 1;
        heavy_ball.setAttribute('mass', mass);
    }

    renderScale() {

        const scale_top = new Image();
        scale_top.setAttribute('id', 'scale-top');
        this.screen.appendChild(scale_top);
        scale_top.src = 'assets/scale_vert_bar.png';

        const scale_rot_part = new Image();
        scale_rot_part.setAttribute('id', 'scale-rot-part');
        this.screen.appendChild(scale_rot_part);
        scale_rot_part.src = 'assets/scale_rotating_part.png';

        const left_v = new Image();
        left_v.setAttribute('id', 'left_v');
        this.screen.appendChild(left_v);
        left_v.src = 'assets/scale_v.png';

        const right_v = new Image();
        right_v.setAttribute('id', 'right_v');
        this.screen.appendChild(right_v);
        right_v.src = 'assets/scale_v.png';

        const div_left = document.createElement('div');
        div_left.classList.add('dropzone');
        this.screen.appendChild(div_left);
        div_left.setAttribute('id', 'div-left');

        const div_right = document.createElement('div');
        div_right.classList.add('dropzone');
        this.screen.appendChild(div_right);
        div_right.setAttribute('id', 'div-right');

        // let angle = 0;
        // let v_y = 73;
        // let v_x = 248;
        // let left_div_y = 0;
        // let left_div_x = 250;
        // let scaleTipsRight = setInterval(tipScaleRight, 10);

        // function tipScaleRight() {
        //     if (angle === 45) {
        //         clearInterval(scaleTipsRight);
        //     } else {
        //         angle++;
        //         if (angle % 2 === 0) {
        //             v_x = v_x - 1;
        //             v_y = v_y - 3;
        //             left_div_x = left_div_x - 1;
        //             left_div_y = left_div_y - 3;
        //         }
        //         left_v.style.top = `${v_y}px`;
        //         left_v.style.right = `${v_x}px`;
        //         div_left.style.top = `${left_div_y}px`;
        //         div_left.style.right = `${left_div_x}px`;
        //         scale_rot_part.style.transform = `rotate(${angle}deg)`;
        //     }
        // }
        
        const T = new Image();
        T.setAttribute('id', 'T');
        this.screen.appendChild(T);
        T.src = 'assets/scale_T.png';
    }

    renderStudent() {
        const student = new Image();
        student.setAttribute('id', 'student-lvl-1-proper');
        this.screen.appendChild(student);
        student.src = 'assets/student_looking_left.png';
    }

    renderButtons() {
        const weighButton = document.createElement('button');
        this.screen.appendChild(weighButton);
        weighButton.setAttribute('id', 'weigh-button');
        weighButton.innerText = "Weigh";

        const counter = document.createElement('p');
        counter.setAttribute('id', 'counter');
        this.screen.appendChild(counter);
        counter.innerText = 0;

        const resetButton = document.createElement('button');
        this.screen.appendChild(resetButton);
        resetButton.setAttribute('id', 'reset-button');
        resetButton.innerText = "Reset";

        const instructions = document.createElement('button');
        this.screen.appendChild(instructions);
        instructions.setAttribute('id', 'instructions-1-button');
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
            else if (event.target.id === 'student-lvl-1-proper') {
                let mass = parseInt(dragged.getAttribute('mass'));
                document.removeEventListener('dragstart', handleDragStart);
                document.removeEventListener('dragover', handleDragOver);
                document.removeEventListener('drop', handleDrop);
                if (mass === 100) {
                    while (that.screen.firstChild) {
                        that.screen.removeChild(that.screen.firstChild);
                    }
                    
                    alert("That was not the heavy ball! Restart the level!");
                    new Level1Instructions();
                } else if (mass === 101) {
                    alert('Good work, professor! Did you know you can be certain of which ball is the heavy one in only two clicks of the weigh button?');
                    while (that.screen.firstChild) {
                        that.screen.removeChild(that.screen.firstChild);
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

export default Level1Proper;
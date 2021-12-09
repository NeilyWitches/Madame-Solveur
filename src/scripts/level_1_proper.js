import Ball from "./ball.js"
import Level1Instructions from "./level_1_instructions";
import Level2Password from "./level_2_password.js";

window.middleToLeftAnimation = function() {
    const scale_rot_part = document.getElementById('scale-rot-part');
    const left_v = document.getElementById('left_v');
    const right_v = document.getElementById('right_v');
    const div_left = document.getElementById('div-left');
    const div_right = document.getElementById('div-right');

    let angle = 0;
    let left_v_y = 73;
    let left_v_x = 248;
    let left_div_y = 0;
    let left_div_x = 250;
    let right_v_y = 8;
    let right_v_x = 53;
    let right_div_y = 80;
    let right_div_x = 50;
    let scaleTipsLeft = setInterval(tipScaleLeft, 10);

    function tipScaleLeft() {
        if (angle === -45) {
            clearInterval(scaleTipsLeft);
        } else {
            angle--;
            if (angle % 2 === 0) {
                left_v_x = left_v_x - 1;
                left_v_y = left_v_y + 3;
                left_div_x = left_div_x - 1;
                left_div_y = left_div_y + 3;
                right_v_x = right_v_x + 1;
                right_v_y = right_v_y - 3;
                right_div_x = right_div_x + 1;
                right_div_y = right_div_y + 3;
            }
            left_v.style.top = `${left_v_y}px`;
            left_v.style.right = `${left_v_x}px`;
            div_left.style.top = `${left_div_y}px`;
            div_left.style.right = `${left_div_x}px`;
            right_v.style.top = `${right_v_y}px`;
            right_v.style.right = `${right_v_x}px`;
            div_right.style.bottom = `${right_div_y}px`;
            div_right.style.right = `${right_div_x}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`;
        }
    }
}

window.middleToRightAnimation = function () {
    const scale_rot_part = document.getElementById('scale-rot-part');
    const left_v = document.getElementById('left_v');
    const right_v = document.getElementById('right_v');
    const div_left = document.getElementById('div-left');
    const div_right = document.getElementById('div-right');

    let angle = 0;
    let left_v_y = 73;
    let left_v_x = 248;
    let left_div_y = 0;
    let left_div_x = 250;
    let right_v_y = 8;
    let right_v_x = 53;
    let right_div_y = 80;
    let right_div_x = 50;
    let scaleTipsRight = setInterval(tipScaleRight, 10);

    function tipScaleRight() {
        if (angle === 45) {
            clearInterval(scaleTipsRight);
        } else {
            angle++;
            if (angle % 2 === 0) {
                left_v_x = left_v_x - 1;
                left_v_y = left_v_y - 3;
                left_div_x = left_div_x - 1;
                left_div_y = left_div_y - 3;
                right_v_x = right_v_x + 1;
                right_v_y = right_v_y + 3;
                right_div_x = right_div_x + 1;
                right_div_y = right_div_y - 3;
            }
            left_v.style.top = `${left_v_y}px`;
            left_v.style.right = `${left_v_x}px`;
            div_left.style.top = `${left_div_y}px`;
            div_left.style.right = `${left_div_x}px`;
            right_v.style.top = `${right_v_y}px`;
            right_v.style.right = `${right_v_x}px`;
            div_right.style.bottom = `${right_div_y}px`;
            div_right.style.right = `${right_div_x}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`;
        }
    }
}

window.leftSideWiggleAnimation = function() {
    const scale_rot_part = document.getElementById('scale-rot-part');
    const left_v = document.getElementById('left_v');
    const right_v = document.getElementById('right_v');
    const div_left = document.getElementById('div-left');
    const div_right = document.getElementById('div-right');

    let angle = -45;
    let counter = 0;

    let left_v_y = 139;
    let right_v_y = -58;
    let div_left_y = 66;
    let div_right_y = 146; 

    let scaleWiggles = setInterval(wiggleScale, 20);
    
    function wiggleScale() {
        if (counter === 0 && angle < -40){
            angle++
            left_v_y = left_v_y - 1
            right_v_y = right_v_y + 1
            div_left_y = div_left_y - 1
            div_right_y = div_right_y - 1

            left_v.style.top = `${left_v_y}px`;
            div_left.style.top = `${div_left_y}px`;
            right_v.style.top = `${right_v_y}px`;
            div_right.style.bottom = `${div_right_y}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`
        } else if (counter === 1 && angle > -45) {
            angle--
            left_v_y = left_v_y + 1
            right_v_y = right_v_y - 1
            div_left_y = div_left_y + 1
            div_right_y = div_right_y + 1

            left_v.style.top = `${left_v_y}px`;
            div_left.style.top = `${div_left_y}px`;
            right_v.style.top = `${right_v_y}px`;
            div_right.style.bottom = `${div_right_y}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`

            scale_rot_part.style.transform = `rotate(${angle}deg)`
        } else if (angle === -40) {
            counter++
        } else if (angle === -45) {
            clearInterval(scaleWiggles)
        }
    }
}

window.leftToMiddleAnimation = function() {
    const scale_rot_part = document.getElementById('scale-rot-part');
    const left_v = document.getElementById('left_v');
    const right_v = document.getElementById('right_v');
    const div_left = document.getElementById('div-left');
    const div_right = document.getElementById('div-right');

    let angle = -45;
    let left_v_y = 139;
    let left_v_x = 226;
    let left_div_y = 66;
    let left_div_x = 228;
    let right_v_y = -58;
    let right_v_x = 75;
    let right_div_y = 146;
    let right_div_x = 72;

    let scaleMoves = setInterval(moveScale, 10);

    function moveScale() {
        if (angle === 0) {
            clearInterval(scaleMoves);
        } else {
            angle++
            if (angle % 2 === 0) {
                left_v_x = left_v_x + 1;
                left_v_y = left_v_y - 3;
                left_div_x = left_div_x + 1;
                left_div_y = left_div_y - 3;
                right_v_x = right_v_x - 1;
                right_v_y = right_v_y + 3;
                right_div_x = right_div_x - 1;
                right_div_y = right_div_y - 3;
            }
            left_v.style.top = `${left_v_y}px`;
            left_v.style.right = `${left_v_x}px`;
            div_left.style.top = `${left_div_y}px`;
            div_left.style.right = `${left_div_x}px`;
            right_v.style.top = `${right_v_y}px`;
            right_v.style.right = `${right_v_x}px`;
            div_right.style.bottom = `${right_div_y}px`;
            div_right.style.right = `${right_div_x}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`;
        }
    }
}

window.leftToRightAnimation = function() {
    const scale_rot_part = document.getElementById('scale-rot-part');
    const left_v = document.getElementById('left_v');
    const right_v = document.getElementById('right_v');
    const div_left = document.getElementById('div-left');
    const div_right = document.getElementById('div-right');

    let angle = -45;
    let left_v_y = 139;
    let left_v_x = 226;
    let left_div_y = 66;
    let left_div_x = 228;
    let right_v_y = -58;
    let right_v_x = 75;
    let right_div_y = 146;
    let right_div_x = 72;
    let scaleMovesToRight;

    let scaleMovesToMiddle = setInterval(moveScaleToMiddle, 10);

    function moveScaleToMiddle() {
        if (angle === 0) {
            clearInterval(scaleMovesToMiddle);
            let scaleMovesToRight = setInterval(moveScaleToRight, 10)
        } else {
            angle++
            if (angle % 2 === 0) {
                left_v_x = left_v_x + 1;
                left_v_y = left_v_y - 3;
                left_div_x = left_div_x + 1;
                left_div_y = left_div_y - 3;
                right_v_x = right_v_x - 1;
                right_v_y = right_v_y + 3;
                right_div_x = right_div_x - 1;
                right_div_y = right_div_y - 3;
            }
            left_v.style.top = `${left_v_y}px`;
            left_v.style.right = `${left_v_x}px`;
            div_left.style.top = `${left_div_y}px`;
            div_left.style.right = `${left_div_x}px`;
            right_v.style.top = `${right_v_y}px`;
            right_v.style.right = `${right_v_x}px`;
            div_right.style.bottom = `${right_div_y}px`;
            div_right.style.right = `${right_div_x}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`;
        }

        function moveScaleToRight() {
            if (angle === 45) {
                clearInterval(scaleMovesToRight);
            } else {
                angle++;
                if (angle % 2 === 0) {
                    left_v_x = left_v_x - 1;
                    left_v_y = left_v_y - 3;
                    left_div_x = left_div_x - 1;
                    left_div_y = left_div_y - 3;
                    right_v_x = right_v_x + 1;
                    right_v_y = right_v_y + 3;
                    right_div_x = right_div_x + 1;
                    right_div_y = right_div_y - 3;
                }
                left_v.style.top = `${left_v_y}px`;
                left_v.style.right = `${left_v_x}px`;
                div_left.style.top = `${left_div_y}px`;
                div_left.style.right = `${left_div_x}px`;
                right_v.style.top = `${right_v_y}px`;
                right_v.style.right = `${right_v_x}px`;
                div_right.style.bottom = `${right_div_y}px`;
                div_right.style.right = `${right_div_x}px`;
                scale_rot_part.style.transform = `rotate(${angle}deg)`;
            }
        }
    }
}

window.middleWiggleAnimation = function() {
    const scale_rot_part = document.getElementById('scale-rot-part');
    const left_v = document.getElementById('left_v');
    const right_v = document.getElementById('right_v');
    const div_left = document.getElementById('div-left');
    const div_right = document.getElementById('div-right');

    let angle = 0;
    let counter = 0;

    let left_v_y = 73;
    let right_v_y = 8;
    let div_left_y = 0;
    let div_right_y = 80; 

    let scaleWiggles = setInterval(wiggleScale, 20);

    function wiggleScale() {
        if (counter === 0 && angle < 5){
            angle++
            left_v_y = left_v_y - 1
            right_v_y = right_v_y + 1
            div_left_y = div_left_y - 1
            div_right_y = div_right_y - 1

            left_v.style.top = `${left_v_y}px`;
            div_left.style.top = `${div_left_y}px`;
            right_v.style.top = `${right_v_y}px`;
            div_right.style.bottom = `${div_right_y}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`
        } else if (counter === 1 && angle > 0) {
            angle--
            left_v_y = left_v_y + 1
            right_v_y = right_v_y - 1
            div_left_y = div_left_y + 1
            div_right_y = div_right_y + 1

            left_v.style.top = `${left_v_y}px`;
            div_left.style.top = `${div_left_y}px`;
            right_v.style.top = `${right_v_y}px`;
            div_right.style.bottom = `${div_right_y}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`

            scale_rot_part.style.transform = `rotate(${angle}deg)`
        } else if (angle === 5) {
            counter++
        } else if (angle === 0) {
            clearInterval(scaleWiggles)
        }
    }
}

window.rightToMiddleAnimation = function() {
    const scale_rot_part = document.getElementById('scale-rot-part');
    const left_v = document.getElementById('left_v');
    const right_v = document.getElementById('right_v');
    const div_left = document.getElementById('div-left');
    const div_right = document.getElementById('div-right');

    let angle = 45;
    let left_v_y = 7;
    let left_v_x = 226;
    let left_div_y = -66;
    let left_div_x = 228;
    let right_v_y = 74;
    let right_v_x = 75;
    let right_div_y = 14;
    let right_div_x = 72;
    let scaleTipsRight = setInterval(tipScaleRight, 10);

    function tipScaleRight() {
        if (angle === 0) {
            clearInterval(scaleTipsRight);
        } else {
            angle--;
            if (angle % 2 === 0) {
                left_v_x = left_v_x + 1;
                left_v_y = left_v_y + 3;
                left_div_x = left_div_x + 1;
                left_div_y = left_div_y + 3;
                right_v_x = right_v_x - 1;
                right_v_y = right_v_y - 3;
                right_div_x = right_div_x - 1;
                right_div_y = right_div_y + 3;
            }
            left_v.style.top = `${left_v_y}px`;
            left_v.style.right = `${left_v_x}px`;
            div_left.style.top = `${left_div_y}px`;
            div_left.style.right = `${left_div_x}px`;
            right_v.style.top = `${right_v_y}px`;
            right_v.style.right = `${right_v_x}px`;
            div_right.style.bottom = `${right_div_y}px`;
            div_right.style.right = `${right_div_x}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`;
        }
    }
}

window.rightSideWiggleAnimation = function() {
    const scale_rot_part = document.getElementById('scale-rot-part');
    const left_v = document.getElementById('left_v');
    const right_v = document.getElementById('right_v');
    const div_left = document.getElementById('div-left');
    const div_right = document.getElementById('div-right');

    let angle = 45;
    let counter = 0;

    let left_v_y = 7;
    let right_v_y = 74;
    let div_left_y = -66;
    let div_right_y = 14; 

    let scaleWiggles = setInterval(wiggleScale, 20);

    function wiggleScale() {
        if (counter === 0 && angle > 40){
            angle--
            left_v_y = left_v_y + 1
            right_v_y = right_v_y - 1
            div_left_y = div_left_y + 1
            div_right_y = div_right_y + 1

            left_v.style.top = `${left_v_y}px`;
            div_left.style.top = `${div_left_y}px`;
            right_v.style.top = `${right_v_y}px`;
            div_right.style.bottom = `${div_right_y}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`
        } else if (counter === 1 && angle < 45) {
            angle++
            left_v_y = left_v_y - 1
            right_v_y = right_v_y + 1
            div_left_y = div_left_y - 1
            div_right_y = div_right_y - 1

            left_v.style.top = `${left_v_y}px`;
            div_left.style.top = `${div_left_y}px`;
            right_v.style.top = `${right_v_y}px`;
            div_right.style.bottom = `${div_right_y}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`

            scale_rot_part.style.transform = `rotate(${angle}deg)`
        } else if (angle === 40) {
            counter++
        } else if (angle === 45) {
            clearInterval(scaleWiggles)
        }
    }
}

window.rightToLeftAnimation = function() {
    const scale_rot_part = document.getElementById('scale-rot-part');
    const left_v = document.getElementById('left_v');
    const right_v = document.getElementById('right_v');
    const div_left = document.getElementById('div-left');
    const div_right = document.getElementById('div-right');

    let angle = 45;
    let left_v_y = 7;
    let left_v_x = 226;
    let left_div_y = -66;
    let left_div_x = 228;
    let right_v_y = 74;
    let right_v_x = 75;
    let right_div_y = 14;
    let right_div_x = 72;
    let scaleMovesToRight;

    let scaleMovesToMiddle = setInterval(moveScaleToMiddle, 10);

    function moveScaleToMiddle() {
        if (angle === 0) {
            clearInterval(scaleMovesToMiddle);
            let scaleMovesToLeft = setInterval(moveScaleToLeft, 10)
        } else {
            angle--
            if (angle % 2 === 0) {
                left_v_x = left_v_x + 1;
                left_v_y = left_v_y + 3;
                left_div_x = left_div_x + 1;
                left_div_y = left_div_y + 3;
                right_v_x = right_v_x - 1;
                right_v_y = right_v_y - 3;
                right_div_x = right_div_x - 1;
                right_div_y = right_div_y + 3;
            }
            left_v.style.top = `${left_v_y}px`;
            left_v.style.right = `${left_v_x}px`;
            div_left.style.top = `${left_div_y}px`;
            div_left.style.right = `${left_div_x}px`;
            right_v.style.top = `${right_v_y}px`;
            right_v.style.right = `${right_v_x}px`;
            div_right.style.bottom = `${right_div_y}px`;
            div_right.style.right = `${right_div_x}px`;
            scale_rot_part.style.transform = `rotate(${angle}deg)`;
        }

        function moveScaleToLeft() {
            if (angle === -45) {
                clearInterval(scaleMovesToRight);
            } else {
                angle--;
                if (angle % 2 === 0) {
                    left_v_x = left_v_x - 1;
                    left_v_y = left_v_y + 3;
                    left_div_x = left_div_x - 1;
                    left_div_y = left_div_y + 3;
                    right_v_x = right_v_x + 1;
                    right_v_y = right_v_y - 3;
                    right_div_x = right_div_x + 1;
                    right_div_y = right_div_y + 3;
                }
                left_v.style.top = `${left_v_y}px`;
                left_v.style.right = `${left_v_x}px`;
                div_left.style.top = `${left_div_y}px`;
                div_left.style.right = `${left_div_x}px`;
                right_v.style.top = `${right_v_y}px`;
                right_v.style.right = `${right_v_x}px`;
                div_right.style.bottom = `${right_div_y}px`;
                div_right.style.right = `${right_div_x}px`;
                scale_rot_part.style.transform = `rotate(${angle}deg)`;
            }
        }
    }
}

class Level1Proper {
    constructor() {
        this.screen = document.getElementById('screen');
        this.renderLevel();
        this.dragAndDrop();
        this.clickWeigh = this.clickWeigh.bind(this);
        this.clickInstructions = this.clickInstructions.bind(this);
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
        this.weighButton = document.createElement('button');
        this.screen.appendChild(this.weighButton);
        this.weighButton.setAttribute('id', 'weigh-button');
        this.weighButton.innerText = "Weigh";
        this.weighButton.addEventListener('click', this.clickWeigh);

        const counter = document.createElement('p');
        counter.setAttribute('id', 'counter');
        this.screen.appendChild(counter);
        counter.innerText = 4;

        const weighsLeft = document.createElement('p');
        weighsLeft.setAttribute('id', 'weighs-left');
        this.screen.appendChild(weighsLeft);
        weighsLeft.innerText = 'Weighs Left:'

        this.instructions = document.createElement('button');
        this.screen.appendChild(this.instructions);
        this.instructions.setAttribute('class', 'instructions-button');
        this.instructions.innerText = "Instructions";
        this.instructions.addEventListener('click', this.clickInstructions);
        
    }

    dragAndDrop() {
        let dragged;
        const that = this;

        document.addEventListener('dragstart', handleDragStart);
        function handleDragStart(event) {
            if (event.target.className === 'ball') {
                dragged = event.target;
            }
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
                    new Level2Password();
                }
            }
        }
    }

    clickWeigh() {
        const scale_rot_part = document.getElementById('scale-rot-part');
        let scalePosition = window.getComputedStyle(scale_rot_part).transform
        let tippedLeft = 'matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)'
        let balanced = 'matrix(1, 0, 0, 1, 0, 0)'
        let tippedRight = 'matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)'

        let counter = document.getElementById('counter');
        let count = counter.innerText;
        let new_count = parseInt(count) - 1;

        const left_v = document.getElementById('left_v');
        const right_v = document.getElementById('right_v');
        const div_left = document.getElementById('div-left');
        const div_right = document.getElementById('div-right');

        if (new_count < 0) {
                alert("You are out of weighs!")
        } else {
            counter.innerText = new_count;
            const left = div_left.children;
            const right = div_right.children;
            let massLeft = 0;
            let massRight = 0;
            for (let i = 0; i < left.length; i++) {
                massLeft += parseInt(left[i].getAttribute('mass'));
            }
            for (let i = 0; i < right.length; i++) {
                massRight += parseInt(right[i].getAttribute('mass'));
            }
            if (scalePosition === tippedLeft) {
                if (massLeft > massRight) {
                    leftSideWiggleAnimation();
                } else if (massLeft === massRight) {
                    leftToMiddleAnimation();
                } else if (massRight > massLeft) {
                    leftToRightAnimation();
                }
            } else if (scalePosition === balanced) {
                if (massLeft > massRight) {
                    middleToLeftAnimation();
                } else if (massLeft === massRight) {
                    middleWiggleAnimation();
                } else if (massRight > massLeft) {
                    middleToRightAnimation();
                }
            } else if (scalePosition === tippedRight) {
                if (massLeft > massRight) {
                    rightToLeftAnimation();
                } else if (massLeft === massRight) {
                    rightToMiddleAnimation();
                } else if (massRight > massLeft) {
                    rightSideWiggleAnimation();
                }
            }
        }
    }

    clickInstructions() {
        alert(`The student approaches the Mme with 9 ball bearings, all of them identical in appearance. They all weigh exactly the same except for one which is slightly heavier. Your task is to use the scale provided to find which ball is heavier than the rest. Drag and drop the balls onto either side of the scale and click "weigh" to see which side the scale will tip. Try to click the "Weigh" button as little as possible. You cannot weight more than 4 times! When you think you have figured out which ball is the heavy one, drag that ball to the student...`);
    }
}

export default Level1Proper;
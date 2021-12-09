import Level1Proper from "./level_1_proper";

class Level1Instructions {
    constructor() {
        this.screen = document.getElementById('screen');
        this.clickNext = this.clickNext.bind(this);
        this.clickBack = this.clickBack.bind(this);
        this.renderInstructions();
        this.clicked = 0;
    }

    renderInstructions() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = 'Level 1';
        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = 'Find the heavier ball bearing!';
        const instructions_label = document.createElement('h2');
        instructions_label.innerText = "INSTRUCTIONS:"
        instructions_label.setAttribute('class', 'instructions-label')
        this.screen.appendChild(instructions_label);

        this.renderText()
        this.renderNextButton();
        this.renderBackButton();
    }
    
    renderText() {
        this.instructions = document.createElement('div');
        this.screen.appendChild(this.instructions);
        this.instructions.setAttribute('class', 'text-box');
        this.instructions.setAttribute('id', 'level-1-instructions-text');

        this.instructions.innerText = "The student approaches the Mme with 9 ball bearings, all of them identical in appearance.";

        this.student = new Image();
        this.student.setAttribute('id', 'student-instructions');
        this.screen.appendChild(this.student);
        this.student.src = 'assets/student_looking_right.png';
        
        this.balls = new Image();
        this.balls.setAttribute('id', 'nine-balls');
        this.screen.appendChild(this.balls);
        this.balls.src = 'assets/nine_balls.png';
    }

    renderNextButton() {
        this.nextButton = document.createElement('button');
        this.screen.appendChild(this.nextButton);
        this.nextButton.setAttribute('class', 'next-button-instructions')
        this.nextButton.innerText = "Next";
        this.nextButton.addEventListener('click', this.clickNext);
    }

    renderBackButton() {
        this.backButton = document.createElement('button');
        this.backButton.setAttribute('class', 'back-button-instructions');
        this.backButton.innerText = "Back";
        this.backButton.addEventListener('click', this.clickBack);
    }

    clickBack() {
        if (this.clicked === 1) {
            this.screen.removeChild(this.backButton);
            this.clicked = 0;
            this.instructions.innerText = "The student approaches the Mme with 9 ball bearings, all of them identical in appearance.";
        }else if (this.clicked === 2) {
            this.clicked = 1;
            this.instructions.innerText = "They all weigh exactly the same except for one which is slightly heavier.";
            this.screen.removeChild(document.getElementById('scale-instructions-1'));
            this.screen.appendChild(this.student);
            this.screen.removeChild(this.balls);
            this.balls = new Image();
            this.balls.setAttribute('id', 'nine-balls');
            this.screen.appendChild(this.balls);
            this.balls.src = 'assets/nine_balls.png';
            
        } else if (this.clicked === 3) {
            this.clicked = 2;
            this.instructions.innerText = "Your task is to use the scale provided to find which ball is heavier than the rest.";
            this.screen.removeChild(document.getElementById('lvl-1-instructions-1'));
            const scale = new Image();
            scale.setAttribute('id', 'scale-instructions-1');
            this.screen.appendChild(scale);
            scale.src = 'assets/scale_instructions.png';
            this.balls = new Image();
            this.balls.setAttribute('id', 'nine-balls');
            this.screen.appendChild(this.balls);
            this.balls.src = 'assets/nine_balls.png';
            this.balls.style.bottom = '250px';
        } else if (this.clicked === 4) {
            this.clicked = 3;
            this.instructions.innerText = `Drag and drop the balls onto either side of the scale and click "weigh" to see which side the scale will tip.`;
        } else if (this.clicked === 5) {
            this.clicked = 4;
            this.instructions.innerText = `Try to click the "Weigh" button as little as possible. You cannot weigh more than 4 times!`;
            this.screen.removeChild(document.getElementById('lvl-1-instructions-2'));
            const gif_instructions_1 = new Image();
            gif_instructions_1.setAttribute('id', 'lvl-1-instructions-1');
            this.screen.appendChild(gif_instructions_1);
            gif_instructions_1.src = 'assets/lvl_1_instructions_1.gif';
            this.nextButton.innerText = 'Next';
        }
    }

    clickNext() {
        this.clicked += 1
        if (this.clicked === 1) {
            this.instructions.innerText = "They all weigh exactly the same except for one which is slightly heavier.";
            this.screen.appendChild(this.backButton);
        } else if (this.clicked === 2) {
            this.instructions.innerText = "Your task is to use the scale provided to find which ball is heavier than the rest."
            this.screen.removeChild(this.student);
            this.balls.style.bottom = 0;
            this.balls.style.top = '100px';
            const scale = new Image();
            scale.setAttribute('id', 'scale-instructions-1');
            this.screen.appendChild(scale);
            scale.src = 'assets/scale_instructions.png';
        } else if (this.clicked === 3) {
            this.instructions.innerText = `Drag and drop the balls onto either side of the scale and click "weigh" to see which side the scale will tip.`
            const scale = document.getElementById('scale-instructions-1')
            this.screen.removeChild(this.balls);
            this.screen.removeChild(scale);
            const gif_instructions_1 = new Image();
            gif_instructions_1.setAttribute('id', 'lvl-1-instructions-1');
            this.screen.appendChild(gif_instructions_1);
            gif_instructions_1.src = 'assets/lvl_1_instructions_1.gif';
        } else if (this.clicked === 4) {
            this.instructions.innerText = `Try to click the "Weigh" button as little as possible. You cannot weigh more than 4 times!`;
        } else if (this.clicked === 5) {
            this.instructions.innerText = 'When you think you have figured out which ball is the heavy one, drag that ball to the student...';
            let gif_instructions_1 = document.getElementById('lvl-1-instructions-1');
            gif_instructions_1.parentNode.removeChild(gif_instructions_1);
            const gif_instructions_2 = new Image();
            gif_instructions_2.setAttribute('id', 'lvl-1-instructions-2');
            this.screen.appendChild(gif_instructions_2);
            gif_instructions_2.src = 'assets/lvl_1_instructions_2.gif';
            this.nextButton.innerText = 'Start';
        } else if (this.clicked === 6) {
            this.nextButton.removeEventListener('click', this.clickNext);
            while (this.screen.firstChild) {
                this.screen.removeChild(this.screen.firstChild);
            }
            new Level1Proper();
        }
    }

}

export default Level1Instructions;
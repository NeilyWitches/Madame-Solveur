class Level1Instructions {
    constructor() {
        this.screen = document.getElementById('screen')
        this.renderInstructions();
        this.clickNext();
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
    }
    
    renderText() {
        this.instructions = document.createElement('div');
        this.screen.appendChild(this.instructions);
        this.instructions.setAttribute('class', 'text-box');
        this.instructions.setAttribute('id', 'level-1-instructions-text');

        this.instructions.innerText = "The student approaches the Mme with 9 ball bearings, all of them identical in appearance.";

        const student = new Image();
        student.setAttribute('id', 'student-instructions');
        
        this.screen.appendChild(student);
        student.src = 'assets/student_looking_right.png';
        
        const nine_balls = new Image();
        nine_balls.setAttribute('id', 'nine-balls');
        this.screen.appendChild(nine_balls);
        nine_balls.src = 'assets/nine_balls.png';
    }

    renderNextButton() {
        this.nextButton = document.createElement('button');
        this.screen.appendChild(this.nextButton);
        this.nextButton.setAttribute('id', 'next-button-1-instructions');
        this.nextButton.innerText = "Next";
    }

    clickNext() {
        let clicked = 0;
        const that = this;
        this.nextButton.addEventListener('click', handleClick);
        const student = document.getElementById('student-instructions');
        const balls = document.getElementById('nine-balls');

        function handleClick() {
            clicked += 1
            if (clicked === 1) {
                that.instructions.innerText = "They all weigh exactly the same except for one which is slightly heavier."
            }
            else if (clicked === 2) {
                that.instructions.innerText = "Your task is to use the scale provided to find which ball is heavier than the rest."
                that.screen.removeChild(student);
                that.screen.removeChild(balls);
            } 
        }
    }

}

export default Level1Instructions;
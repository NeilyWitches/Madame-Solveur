import Level2Instructions from "./level_2_story";
import Level3Story from "./level_3_story";

class Level2Proper {
    constructor() {
        this.screen = document.getElementById('screen');
        this.studNums = [0, 6, 17, 28, 39, 50];
        this.clickInstructions = this.clickInstructions.bind(this);
        this.renderLevel();
    }

    renderLevel() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = "Level 2";

        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = "Be the first to say 50!";

        this.mme = new Image();
        this.mme.setAttribute('id', 'mme-lvl2');
        this.screen.appendChild(this.mme);
        this.mme.src = 'assets/mme_solveur.png';

        this.student = new Image();
        this.student.setAttribute('id', 'student-lvl2');
        this.screen.appendChild(this.student);
        this.student.src = 'assets/grad_student.png';

        const mmeSpeech = new Image();
        mmeSpeech.setAttribute('id', 'mme-speech');
        this.screen.appendChild(mmeSpeech);
        mmeSpeech.src = 'assets/mme_speech.png';

        const mmeDiv = document.createElement('div');
        mmeDiv.setAttribute('id', 'mme-div');
        this.screen.appendChild(mmeDiv);

        const studentSpeech = new Image();
        studentSpeech.setAttribute('id', 'student-speech');
        this.screen.appendChild(studentSpeech);
        studentSpeech.src = 'assets/student_speech.png';

        const studentDiv = document.createElement('div');
        studentDiv.setAttribute('id', 'student-div');
        this.screen.appendChild(studentDiv);
        studentDiv.innerText = 0;

        const mmeThought = new Image();
        mmeThought.setAttribute('id', 'mme-thought');
        this.screen.appendChild(mmeThought);
        mmeThought.src = 'assets/mme_thought.png';

        const input = document.createElement('input');
        input.setAttribute('id', 'lvl2-input')
        this.screen.appendChild(input);
        input.setAttribute('placeholder', `Enter number`);

        this.button = document.createElement('button');
        this.button.innerText = "Say";
        this.screen.appendChild(this.button);
        this.button.setAttribute('id', 'say-button');

        const instructions = document.createElement('button');
        instructions.innerText = "Instructions";
        this.screen.appendChild(instructions);
        instructions.setAttribute('class', 'instructions-button');
        instructions.addEventListener('click', this.clickInstructions)

        this.handleInput(0, mmeDiv, studentDiv);
    }

    clickInstructions() {
         alert(`Mme Solveur and the student are playing a game. The winner of the game is the first to say the number 50, but there are rules. She and the student will take turns saying numbers aloud. The first number spoken must be a number from 1 - 10. The next number spoken must be 1 - 10 larger than the previous number. For example, if the student said "13", your next number must be from 14 - 24. The student allows the Mme to go first. Type in your number into the thought bubble and click 'Say' to have the Mme say that number aloud...`);
    }

    handleInput(i, mmePrevNum, studPrevNum) {
        let studPrevNumVal = parseInt(studPrevNum.innerText);
        if (studPrevNumVal === 50) {
            studPrevNum.innerText = '50!'
            setTimeout(() => {
                alert("The student says 50! You lose! Restart the level.")
                this.button.removeEventListener('click', handleClick);
                while (this.screen.firstChild) {
                    this.screen.removeChild(this.screen.firstChild);
                }
                new Level2Instructions();
            }, 1);
        }
        this.button.addEventListener('click', handleClick);
        const that = this;
        function handleClick() {
            let inputVal = document.getElementById('lvl2-input').value;
            inputVal = parseInt(inputVal);
            if (!Number.isInteger(inputVal)) {
                alert("Please enter a number.");
            } else if (inputVal <= studPrevNumVal || inputVal > studPrevNumVal + 10) {
                alert("The number must be 1 - 10 larger than the Student's number.")
            } else {
                that.button.removeEventListener('click', handleClick);
                if (inputVal === 50) {
                    mmePrevNum.innerText = '50!';
                    setTimeout(() => {
                        alert("Amazing! The professor managed to beat her student at her own game.");
                        while (that.screen.firstChild) {
                            that.screen.removeChild(that.screen.firstChild);
                        }
                        new Level3Story();
                    }, 50);
                } else {
                    mmePrevNum.innerText = inputVal;
                    if (inputVal === that.studNums[i + 1]) {
                        studPrevNum.innerText = Math.floor(Math.random() * 10) + inputVal + 1;
                        that.handleInput(i + 1, mmePrevNum, studPrevNum);
                    } else if (inputVal > that.studNums[i + 1]) {
                        studPrevNum.innerText = that.studNums[i + 2];
                        that.handleInput(i + 2, mmePrevNum, studPrevNum);
                    } else {
                        studPrevNum.innerText = that.studNums[i + 1]
                        that.handleInput(i + 1, mmePrevNum, studPrevNum);
                    }
                }
            } 
        }
    }
}

export default Level2Proper;
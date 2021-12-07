import Level2Instructions from "./level_2_story";
import Level3 from "./level_3";

class Level2Proper {
    constructor() {
        this.screen = document.getElementById('screen');
        this.studNums = [0, 6, 17, 28, 39, 50];
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

        const studentSpeech = new Image();
        studentSpeech.setAttribute('id', 'student-speech');
        this.screen.appendChild(studentSpeech);
        studentSpeech.src = 'assets/student_speech.png';

        const mmeThought = new Image();
        mmeThought.setAttribute('id', 'mme-thought');
        this.screen.appendChild(mmeThought);
        mmeThought.src = 'assets/mme_thought.png';

        // li_1.innerText = "Student's Number:";
        // li_2.innerText = 0;
        // li_3.innerText = "Mme Solveur's Previous Number:";
        // li_4.innerText = "(Your number will go here)";
        // const input = document.createElement('input');
        // this.button = document.createElement('button');
        // this.button.innerText = "Say";

        // li_7.innerText = "Say a number 1 to 10 larger than the Student's number!"

        // this.handleInput(0, li_4, li_2);
    }

    handleInput(i, mmePrevNum, studPrevNum) {
        let studPrevNumVal = parseInt(studPrevNum.innerText);
        if (studPrevNumVal === 50) {
            alert("The student says 50! You lose! Restart the level.");
            this.button.removeEventListener('click', handleClick);
            while (this.screen.firstChild) {
                this.screen.removeChild(this.screen.firstChild);
            }
            new Level2Instructions();
        }
        this.button.addEventListener('click', handleClick);
        const that = this;
        function handleClick() {
            let inputVal = document.getElementById('input').value;
            inputVal = parseInt(inputVal);
            if (!Number.isInteger(inputVal)) {
                alert("Please enter a number.");
            } else if (inputVal <= studPrevNumVal || inputVal > studPrevNumVal + 10) {
                alert("The number must be 1 to 10 larger than the Student's number.")
            } else {
                that.button.removeEventListener('click', handleClick);
                if (inputVal === 50) {
                    while (that.screen.firstChild) {
                        that.screen.removeChild(that.screen.firstChild);
                    }
                    new Level3();
                }
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

export default Level2Proper;
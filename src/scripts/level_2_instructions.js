import Level2Proper from "./level_2_proper";

class Level2Instructions {
    constructor() {
        this.screen = document.getElementById('screen');
        this.clickNext = this.clickNext.bind(this);
        this.clickBack = this.clickBack.bind(this);
        this.clicked = 0;
        this.renderInstructions();
        this.playMusic();
    }

    playMusic() {
        const music = document.getElementById('thinking-music');
        music.play();
    }

    renderInstructions() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = 'Level 2';
        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = 'Be the first to say 50!';
        const instructions_label = document.createElement('h2');
        instructions_label.innerText = 'INSTRUCTIONS:'
        instructions_label.setAttribute('class', 'instructions-label');
        this.screen.appendChild(instructions_label);

        this.renderText();
        this.renderNextButton();
        this.renderBackButton();
    }

    renderText() {
        this.instructions = document.createElement('div');
        this.screen.appendChild(this.instructions);
        this.instructions.setAttribute('class', 'text-box');
        this.instructions.setAttribute('id', 'level-2-instructions-text');

        this.instructions.innerText = `Mme Solveur and the student are playing a game. The winner of the game is the first to say the number 50, but there are rules.`;

        this.mme = new Image();
        this.mme.setAttribute('id', 'mme-lvl2-instructions');
        this.screen.appendChild(this.mme);
        this.mme.src = 'assets/mme_solveur.png';

        this.student = new Image();
        this.student.setAttribute('id', 'student-lvl2-instructions');
        this.screen.appendChild(this.student);
        this.student.src = 'assets/grad_student.png';
    }

    renderNextButton() {
        this.nextButton = document.createElement('button');
        this.screen.appendChild(this.nextButton);
        this.nextButton.setAttribute('class', 'next-button-instructions');
        this.nextButton.addEventListener('click', this.clickNext);
        this.nextButton.innerText = 'Next';
    }

    renderBackButton() {
        this.backButton = document.createElement('button');
        this.backButton.setAttribute('class', 'back-button-instructions');
        this.backButton.innerText = 'Back';
        this.backButton.addEventListener('click', this.clickBack)
    }

    clickNext() {
        const sound = document.getElementById('button-press')
        sound.play()
        this.clicked += 1
        if (this.clicked === 1) {
            this.instructions.innerText = 'She and the student will take turns saying numbers aloud. The first number spoken must be a number from 1 - 10.'
            this.screen.appendChild(this.backButton);

            const four = new Image();
            four.setAttribute('id', 'four-bubble');
            this.screen.appendChild(four);
            four.src = 'assets/4_bubble.png';
        } else if (this.clicked === 2) {
            this.instructions.innerText = 'The next number spoken must be 1 - 10 larger than the previous number. For example, if the student said "13", your next number must be from 14 - 24.';
            
            const thirteen = new Image();
            thirteen.setAttribute('id', 'thirteen-bubble');
            this.screen.appendChild(thirteen);
            thirteen.src = 'assets/13_bubble.png';
        } else if (this.clicked === 3) {
            this.instructions.innerText = `The student allows the Mme to go first. Type in your number into the thought bubble and click 'Say' to have the Mme say that number aloud. Click "start" to play the level.`
            this.screen.removeChild(document.getElementById('thirteen-bubble'));
            this.screen.removeChild(document.getElementById('four-bubble'));
            this.screen.removeChild(this.mme);
            this.screen.removeChild(this.student);
            
            const gif = new Image();
            gif.setAttribute('id', 'lvl2-instructions-gif');
            this.screen.appendChild(gif);
            gif.src = 'assets/lvl_2_instructions.gif';

            this.nextButton.innerText = 'Start'
        } else {
            this.nextButton.removeEventListener('click', this.clickNext);
            while (this.screen.firstChild) {
                this.screen.removeChild(this.screen.firstChild);
            }
            new Level2Proper();
        }
    }

    clickBack() {
        const sound = document.getElementById('button-press')
        sound.play()
        if (this.clicked === 1) {
            this.screen.removeChild(this.backButton);
            this.screen.removeChild(document.getElementById('four-bubble'));
            this.clicked = 0;
            this.instructions.innerText = 'Mme Solveur and the student are playing a game. The winner of the game is the first to say the number 50, but there are rules.'
        } else if (this.clicked === 2) {
            this.screen.removeChild(document.getElementById('thirteen-bubble'));
            this.clicked = 1;
            this.instructions.innerText = 'She and the student will take turns saying numbers aloud. The first number spoken must be a number from 1 - 10.'
        } else if (this.clicked === 3) {
            this.clicked = 2;
            this.instructions.innerText = 'The next number spoken must be 1 - 10 larger than the previous number. For example, if the student said "13", your next number must be from 14 - 24.';

            this.screen.removeChild(document.getElementById('lvl2-instructions-gif'))

            const thirteen = new Image();
            thirteen.setAttribute('id', 'thirteen-bubble');
            this.screen.appendChild(thirteen);
            thirteen.src = 'assets/13_bubble.png';

            const four = new Image();
            four.setAttribute('id', 'four-bubble');
            this.screen.appendChild(four);
            four.src = 'assets/4_bubble.png';

            this.screen.appendChild(this.mme);
            this.screen.appendChild(this.student);

            this.nextButton.innerText = 'Next';
        }
    }
}

export default Level2Instructions;
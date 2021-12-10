import Level1Story from "./level_1_story";
import ContinueScreen from './continue_screen';

class StartMenu {
    constructor() {
        this.screen = document.getElementById('screen')
        this.clickNewGame = this.clickNewGame.bind(this);
        this.clickContinue = this.clickContinue.bind(this);
        this.renderStartMenu();
    }

    renderChars() {
        const mme = new Image();
        this.screen.appendChild(mme)
        mme.setAttribute('id', 'mme-start');
        mme.src = "assets/mme_solveur.png";

        const underGrad = new Image();
        this.screen.appendChild(underGrad)
        underGrad.setAttribute('id', 'undergrad-start');
        underGrad.src = "assets/student_looking_right.png";
        let pos = -400;
        let studentCreeps = setInterval(moveStudent, 10);

        function moveStudent() {
            if (pos === -200) {
                clearInterval(studentCreeps);
            } else {
                pos++;
                underGrad.style.top = pos + 'px';
            }
        }

        const gradStudent = new Image();
        this.screen.appendChild(gradStudent)
        gradStudent.setAttribute('id', 'grad-student-start');
        gradStudent.src = "assets/grad_student.png";
    }

    renderStartMenu() {
        this.renderText();
        this.renderStartButton();
        this.renderChars();
        this.renderContinueButton();
    }

    renderText() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = "Madame Solveur"

        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = "A game about solving puzzles!"

        const descriptionContainer = document.createElement('div');
        this.screen.appendChild(descriptionContainer);
        descriptionContainer.setAttribute('class', 'text-box')
        const description = document.createElement('div');
        description.innerText = 'Welcome to Madame Solveur. In this game, each level is itself a minigame! Although each minigame shares the common property of being a puzzle, each puzzle is very different. I hope you enjoy solving puzzles as much as I do and half as much as I did'
        descriptionContainer.appendChild(description);
        const repo = document.createElement('a');
        repo.innerText = 'making this game.'
        descriptionContainer.appendChild(repo);
        repo.setAttribute('href', 'https://github.com/NeilyWitches/Madame-Solveur')
        repo.setAttribute('rel', "noopener noreferrer");
        repo.setAttribute('target',"_blank");
    }

    renderStartButton() {
        const startButton = document.createElement('button');
        this.screen.appendChild(startButton);
        startButton.setAttribute('id', 'start-button');
        startButton.innerText = "New Game";
        startButton.addEventListener('click', this.clickNewGame)
    }

    renderContinueButton() {
        const continueButton = document.createElement('button');
        this.screen.appendChild(continueButton);
        continueButton.setAttribute('class', 'skip-button');
        continueButton.innerText = "Continue";  
        continueButton.addEventListener('click', this.clickContinue); 
    }

    clickContinue() {
        this.screen = document.getElementById('screen')
        while (this.screen.firstChild) {
            this.screen.removeChild(this.screen.firstChild);
        }
        new ContinueScreen();
    }

    clickNewGame() {
        const button = document.getElementById('start-button');
        button.removeEventListener('click', this.clickNewGame);
        while (this.screen.firstChild) {
            this.screen.removeChild(this.screen.firstChild);
        }
        const sound = document.getElementById('start-menu-music')
        sound.pause();
        sound.currentTime = 0;
        new Level1Story();
    }
}

export default StartMenu;
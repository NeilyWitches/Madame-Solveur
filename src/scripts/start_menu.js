import Level1Instructions from "./level_1_instructions";

class StartMenu {
    constructor() {
        this.screen = document.getElementById('screen')
        this.renderStartMenu();
        this.clickStart();
    }

    renderChars() {
        const mme = new Image();
        this.screen.appendChild(mme)
        mme.setAttribute('id', 'mme-start');
        mme.src = "assets/mme_solveur.png";
    }

    renderStartMenu() {
        this.renderText();
        this.renderButton();
        this.renderChars();
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
        descriptionContainer.setAttribute('id', 'start-menu-game-description')
        const description = document.createElement('div');
        description.innerText = 'Welcome to Madame Solveur. In this game, each level is itself a minigame! Although each minigame shares the common property of being a puzzle, each puzzle is very different. I hope you enjoy solving puzzles as much as I do and half as much as I did'
        descriptionContainer.appendChild(description);
        const repo = document.createElement('a');
        repo.innerText = 'making this game.'
        descriptionContainer.appendChild(repo);
        repo.setAttribute('href', 'https://github.com/NeilyWitches/Madame-Solveur')
        
    }

    renderButton() {
        const startButton = document.createElement('button');
        this.screen.appendChild(startButton);
        startButton.setAttribute('id', 'start-button');
        startButton.innerText = "Start";
    }

    clickStart() {
        const button = document.getElementById('start-button');
        button.addEventListener('click', handleClick);
        let that = this;

        function handleClick() {
            button.removeEventListener('click', handleClick);
            while (that.screen.firstChild) {
                that.screen.removeChild(that.screen.firstChild);
            }
            new Level1Instructions();
        }
    }
}

export default StartMenu;
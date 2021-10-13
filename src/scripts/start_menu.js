import Level1 from "./level_1_instructions";

class StartMenu {
    constructor() {
        this.screen = document.createElement('div');
        document.getElementById('body').appendChild(this.screen);
        this.screen.setAttribute('id', 'start-menu');
        this.renderScreen();
        this.clickStart();
    }

    renderScreen() {
        this.renderLinks();
        this.renderButton();
    }

    renderLinks() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = "Madame Solveur:"

        const h2 = document.createElement('h2');
        h1.appendChild(h2);
        h2.innerText = "A game about solving puzzles!"

        const ul = document.createElement('ul');
        this.screen.appendChild(ul);
        ul.setAttribute('id', 'socials');

        const li_1 = document.createElement('li');
        ul.appendChild(li_1);

        const myGitHub = document.createElement('a');
        myGitHub.setAttribute('href', 'https://github.com/NeilyWitches');
        li_1.appendChild(myGitHub);

        const gitHubIcon = new Image();
        gitHubIcon.setAttribute('id', 'github');
        myGitHub.appendChild(gitHubIcon);
        gitHubIcon.onload = function () {
            this.width = this.width;
        }
        gitHubIcon.src = "assets/github.png";

        const li_2 = document.createElement('li');
        ul.appendChild(li_2);

        const myLinkedIn = document.createElement('a');
        myLinkedIn.setAttribute('href', 'https://www.linkedin.com/in/neil-pandya-610588187/');
        li_2.appendChild(myLinkedIn);

        const linkedInIcon = new Image();
        linkedInIcon.setAttribute('id', 'linkedin');
        myLinkedIn.appendChild(linkedInIcon);
        const scaleFactorLinkedIn = 1 / 5;
        linkedInIcon.onload = function () {
            this.width = this.width * scaleFactorLinkedIn;
        }
        linkedInIcon.src = 'assets/linkedin.png';
    }

    renderButton() {
        const li_3 = document.createElement('li');
        const ul = document.getElementById('socials');
        ul.appendChild(li_3);

        const startButton = document.createElement('button');
        li_3.appendChild(startButton);
        startButton.setAttribute('id', 'start-button');
        startButton.setAttribute('type', 'button');
        startButton.innerText = "Start";
    }

    clickStart() {
        const button = document.getElementById('start-button');
        button.addEventListener('click', handleClick);

        function handleClick(event) {
            button.removeEventListener('click', handleClick);
            const body = document.getElementById('body');
            while (body.firstChild) {
                body.removeChild(body.firstChild);
            }
            new Level1();
        }
    }
}

export default StartMenu;
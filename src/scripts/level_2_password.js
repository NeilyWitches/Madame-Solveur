import Level2Story from "./level_2_story";

class Level2Password {
    constructor() {
        this.screen = document.getElementById('screen');
        this.clickContinue = this.clickContinue.bind(this);
        this.renderScreen();
    }

    renderScreen() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = 'Level 2';
        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = "Password:"

        this.renderPassword();
        this.renderText();
        this.renderContinueButton();
    }

    renderPassword() {
        const password = document.createElement('h1');
        this.screen.appendChild(password);
        password.setAttribute('class', 'password');
        password.innerText = `dusk`
    }

    renderText() {
        const text = document.createElement('div');
        this.screen.appendChild(text);
        text.setAttribute('class', 'text-box');
        text.innerText = `If you return to this game after closing it, you can use this password at the start menu to pick up from where you left off.`
    }

    renderContinueButton() {
        const continueButton = document.createElement('button');
        this.screen.appendChild(continueButton);
        continueButton.setAttribute('id', 'start-button');
        continueButton.innerText = "Continue";
        continueButton.addEventListener('click', this.clickContinue)
    }

    clickContinue() {
        const sound = document.getElementById('button-press')
        sound.play()
        const button = document.getElementById('start-button');
        while (this.screen.firstChild) {
            this.screen.removeChild(this.screen.firstChild);
        }
        new Level2Story();
        }
}

export default Level2Password;
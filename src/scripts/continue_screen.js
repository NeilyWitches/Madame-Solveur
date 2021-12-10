import Level2Story from "./level_2_story";
import Level3Story from "./level_3_story";
import StartMenu from "./start_menu";

class ContinueScreen {
    constructor() {
        this.screen = document.getElementById('screen')
        this.renderStartMenu();
        this.clickSubmit = this.clickSubmit.bind(this);
        this.clickBack = this.clickBack.bind(this);
    }

    renderStartMenu() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = "Continue"

        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = "Pick up from where you left off!";

        const input = document.createElement('input');
        input.setAttribute('id', 'password-input');
        this.screen.appendChild(input);
        input.setAttribute('placeholder', `Enter a level's password.`);

        const submitButton = document.createElement('button');
        this.screen.appendChild(submitButton);
        submitButton.setAttribute('id', 'password-submit');
        submitButton.innerText = 'Submit';
        submitButton.addEventListener('click', this.clickSubmit)

        const backButton = document.createElement('button');
        this.screen.appendChild(backButton);
        backButton.setAttribute('id', 'back');
        backButton.innerText = 'Back';
        backButton.addEventListener('click', this.clickBack)
    }

    clickSubmit() {
        const inputVal = document.getElementById('password-input').value;
        this.screen = document.getElementById('screen');
        if (inputVal === 'dusk') {
            while (this.screen.firstChild) {
                this.screen.removeChild(this.screen.firstChild);
            }
            const sound = document.getElementById('start-menu-music')
            sound.pause();
            sound.currentTime = 0;
            new Level2Story();
        } else if (inputVal === 'cupcake') {
            while (this.screen.firstChild) {
                this.screen.removeChild(this.screen.firstChild);
            }
            const sound = document.getElementById('start-menu-music')
            sound.pause();
            sound.currentTime = 0;
            new Level3Story();  
        } else {
            alert('That is not a password to any level!')
        }
    }

    clickBack() {
        this.screen = document.getElementById('screen'); 
        while (this.screen.firstChild) {
            this.screen.removeChild(this.screen.firstChild);
        }
        new StartMenu();
    }
}

export default ContinueScreen;
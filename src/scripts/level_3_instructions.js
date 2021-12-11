import Level3Proper from "./level_3_proper";

class Level3Instructions {
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
        h1.innerText = 'Level 3';
        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = 'Correctly label the barrels!';
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
        this.instructions.setAttribute('id', 'level-3-instructions-text');

        this.instructions.innerText = `Before you are three barrels, identical in appearance, each of which contains fruit.`;

        this.barrels = new Image();
        this.barrels.setAttribute('class', 'barrels');
        this.screen.appendChild(this.barrels);
        this.barrels.src = 'assets/three_barrels.png';
    }

    renderNextButton() {
        this.nextButton = document.createElement('button');
        this.screen.appendChild(this.nextButton);
        this.nextButton.setAttribute('class', 'next-button-instructions');
        this.nextButton.innerText = 'Next';
        this.nextButton.addEventListener('click', this.clickNext);
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
            this.instructions.innerText = `One of the barrels contains only apples, another only oranges, and the last contains a mixture of both. You do not know which barrels contain what.`;
            
            this.screen.appendChild(this.backButton);
        } else if (this.clicked === 2) {
            this.instructions.innerText = `They have all been incorrectly labeled!`;
            this.screen.removeChild(this.barrels);
            
            this.barrelsLabeled = new Image();
            this.barrelsLabeled.setAttribute('class', 'barrels');
            this.screen.appendChild(this.barrelsLabeled);
            this.barrelsLabeled.src = 'assets/barrels_labeled.png';
        } else if (this.clicked === 3) {
            this.instructions.innerText = `Drag and drop the labels to swap them until all of the barrels are all labeled correctly.`;
            this.screen.removeChild(this.barrelsLabeled);

            const level_3_instructions_gif = new Image();
            level_3_instructions_gif.setAttribute('id', 'lvl-3-instructions-gif-1');
            this.screen.appendChild(level_3_instructions_gif);
            level_3_instructions_gif.src = 'assets/level_3_instructions_gif_1.gif';
        } else if (this.clicked === 4) {
            this.instructions.innerText = `You may peek inside only one of the barrels only one time. Peeking inside a barrel will expose only 1 fruit, no matter the barrel.`;
            this.screen.removeChild(document.getElementById('lvl-3-instructions-gif-1'));

            const level_3_instructions_gif = new Image();
            level_3_instructions_gif.setAttribute('id', 'lvl-3-instructions-gif-2');
            this.screen.appendChild(level_3_instructions_gif);
            level_3_instructions_gif.src = 'assets/level_3_instructions_gif_2.gif';
        } else if (this.clicked === 5) {
            this.instructions.style.marginTop = "100px"
            this.instructions.innerText = `When you think you have labeled all the barrels correctly, click the "Submit" button...`;
            this.screen.removeChild(document.getElementById('lvl-3-instructions-gif-2'))
            this.nextButton.innerText = 'Start';
        } else {
            while (this.screen.firstChild) {
                this.screen.removeChild(this.screen.firstChild)
            }
            new Level3Proper();
        }
    }

    clickBack() {
        const sound = document.getElementById('button-press')
        sound.play()
        if (this.clicked === 1) {
            this.screen.removeChild(this.backButton);
            this.clicked = 0;
            this.instructions.innerText = `Before you are three barrels, identical in appearance, each of which contains fruit.`       
        } else if (this.clicked === 2) {
            this.instructions.innerText = `One of the barrels contains only apples, another only oranges, and the last contains a mixture of both. You do not know which barrels contain what.`;
            this.screen.removeChild(this.barrelsLabeled);
            this.screen.appendChild(this.barrels);
            this.clicked = 1;
        } else if (this.clicked === 3) {
            this.instructions.innerText = `They have all been incorrectly labeled!`;
            this.screen.removeChild(document.getElementById('lvl-3-instructions-gif-1'));
            this.screen.appendChild(this.barrelsLabeled);
            this.clicked = 2;
        } else if (this.clicked === 4) {
            this.instructions.innerText = `Drag and drop the labels to swap them until all of the barrels are all labeled correctly.`
            this.screen.removeChild(document.getElementById('lvl-3-instructions-gif-2'));

            const level_3_instructions_gif = new Image();
            level_3_instructions_gif.setAttribute('id', 'lvl-3-instructions-gif-1');
            this.screen.appendChild(level_3_instructions_gif);
            level_3_instructions_gif.src = 'assets/level_3_instructions_gif_1.gif';
            this.screen.appendChild(document.getElementById('lvl-3-instructions-gif-1'));
            this.clicked = 3;
        } else if (this.clicked === 5) {
            this.instructions.style.marginTop = "0"
            this.nextButton.innerText = 'Next';
            this.instructions.innerText = `You may peek inside only one of the barrels only one time. Peeking inside a barrel will expose only 1 fruit, no matter the barrel.`;

            const level_3_instructions_gif = new Image();
            level_3_instructions_gif.setAttribute('id', 'lvl-3-instructions-gif-2');
            this.screen.appendChild(level_3_instructions_gif);
            level_3_instructions_gif.src = 'assets/level_3_instructions_gif_2.gif';
            this.clicked = 4;
        }
    }
}

export default Level3Instructions;
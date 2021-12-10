import Level3Instructions from "./level_3_instructions";
import ComingSoon from './coming_soon';

class Level3Proper {
    constructor() {
        this.screen = document.getElementById('screen');
        this.clicked = false;
        this.clickApplesPeek = this.clickApplesPeek.bind(this);
        this.clickOrangesPeek = this.clickOrangesPeek.bind(this);
        this.clickBothPeek = this.clickBothPeek.bind(this);
        this.clickSubmit = this.clickSubmit.bind(this);
        this.clickInstructions = this.clickInstructions.bind(this);
        this.handleDragOver = this.handleDragOver.bind(this);
        this.handleDragStart = this.handleDragStart.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.renderLevel();
        this.dragAndDrop();
        this.playMusic();
    }

    playMusic() {
        const music = document.getElementById('thinking-music');
        music.play();
    }

    clickApplesPeek() {
        if (!this.clicked) {
            const modal = document.createElement('div');
            this.screen.appendChild(modal);
            modal.setAttribute('class', 'modal');
            const modalContent = document.createElement('div');
            modalContent.setAttribute('class', 'modal-content');
            modal.appendChild(modalContent)
            const close = document.createElement('span');
            close.setAttribute('class', 'close');
            close.innerHTML = `&times;`
            modalContent.appendChild(close)

            const apple = new Image();
            apple.setAttribute('id', 'apple');
            modalContent.appendChild(apple);
            apple.src = 'assets/apple.png';
            modal.style.display = 'block';
            close.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            this.clicked = true;
        } else {
            alert('You may only peek once!')
        }
    }

    clickOrangesPeek() {
        if (!this.clicked) {
            const modal = document.createElement('div');
            this.screen.appendChild(modal);
            modal.setAttribute('class', 'modal');
            const modalContent = document.createElement('div');
            modalContent.setAttribute('class', 'modal-content');
            modal.appendChild(modalContent)
            const close = document.createElement('span');
            close.setAttribute('class', 'close');
            close.innerHTML = `&times;`
            modalContent.appendChild(close)

            const orange = new Image();
            orange.setAttribute('id', 'orange');
            modalContent.appendChild(orange);
            orange.src = 'assets/orange.png';
            modal.style.display = 'block';
            close.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            this.clicked = true;
        } else {
            alert('You may only peek once!')
        }
    }

    clickBothPeek() {
        if (!this.clicked) {
            const modal = document.createElement('div');
            this.screen.appendChild(modal);
            modal.setAttribute('class', 'modal');
            const modalContent = document.createElement('div');
            modalContent.setAttribute('class', 'modal-content');
            modal.appendChild(modalContent)
            const close = document.createElement('span');
            close.setAttribute('class', 'close');
            close.innerHTML = `&times;`
            modalContent.appendChild(close)

            const apple = new Image();
            apple.setAttribute('id', 'apple');
            apple.src = 'assets/apple.png';

            const orange = new Image();
            orange.setAttribute('id', 'orange');
            orange.src = 'assets/orange.png';

            const coinFlip = Math.floor(Math.random() * 2)
            if (coinFlip === 0) {
                modalContent.appendChild(apple);
            } else {
                modalContent.appendChild(orange);
            }

            modal.style.display = 'block';
            close.onclick = function() {
                modal.style.display = "none";
            }
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            this.clicked = true;
        } else {
            alert('You may only peek once!')
        }
    }

    renderLevel() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = "Level 3";

        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = "Correctly label the barrels!"

        this.renderBarrels();

        const submitButton = document.createElement('button');
        this.screen.appendChild(submitButton);
        submitButton.setAttribute('id', 'lvl3-submit');
        submitButton.innerText = 'Submit';
        submitButton.addEventListener('click', this.clickSubmit)

        const instructions = document.createElement('button');
        instructions.innerText = "Instructions";
        this.screen.appendChild(instructions);
        instructions.setAttribute('class', 'instructions-button');
        instructions.addEventListener('click', this.clickInstructions)

        const password = document.createElement('div');
        password.innerText = "Password: cupcake"
        this.screen.appendChild(password);
        password.setAttribute('class', 'password-header');
    }

    clickInstructions() {
         alert(`Before you are three barrels, identical in appearance, each of which contains fruit. One of the barrels contains only apples, another only oranges, and the last contains a mixture of both. You do not know which barrels contain what. They have all been incorrectly labeled! Drag and drop the labels to swap them until all of the barrels are all labeled correctly. You may peek inside only one of the barrels only one time. When you think you have labeled all the barrels correctly, click the "Submit" button...`);
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    renderBarrels() {
        let barrelsArray = [];
        let labelsArray = [];

        const barrelsDiv = document.createElement('div');
        this.screen.appendChild(barrelsDiv)
        barrelsDiv.setAttribute('id', 'barrels-div');

        const applesDiv = document.createElement('div');
        applesDiv.setAttribute('fruit', 'apples')
        const apples = new Image();
        apples.setAttribute('id', 'apples');
        apples.setAttribute('class', 'barrel');
        applesDiv.appendChild(apples);
        apples.src = 'assets/barrel.png';
        barrelsArray.push(applesDiv)
        const applesButton = document.createElement('button');
        applesDiv.appendChild(applesButton);
        applesButton.setAttribute('id', 'apples-peek');
        applesDiv.setAttribute('class', 'barrel-div');
        applesButton.innerText = 'peek';
        applesButton.addEventListener('click', this.clickApplesPeek)
        const applesLabel = new Image();
        applesLabel.setAttribute('id', 'apples-label');
        applesLabel.setAttribute('class', 'label');
        applesLabel.setAttribute('fruit', 'apples');
        applesLabel.src = 'assets/apples_label.png';
        labelsArray.push(applesLabel);

        const orangesDiv = document.createElement('div');
        orangesDiv.setAttribute('fruit', 'oranges');
        const oranges = new Image();
        oranges.setAttribute('id', 'oranges');
        oranges.setAttribute('class', 'barrel');
        orangesDiv.appendChild(oranges);
        oranges.src = 'assets/barrel.png';
        barrelsArray.push(orangesDiv);
        const orangesButton = document.createElement('button');
        orangesDiv.appendChild(orangesButton);
        orangesButton.setAttribute('id', 'oranges-peek');
        orangesDiv.setAttribute('class', 'barrel-div');
        orangesButton.innerText = 'peek';
        orangesButton.addEventListener('click', this.clickOrangesPeek);
        const orangesLabel = new Image();
        orangesLabel.setAttribute('id', 'oranges-label');
        orangesLabel.setAttribute('class', 'label');
        orangesLabel.setAttribute('fruit', 'oranges');
        orangesLabel.src = 'assets/oranges_label.png';
        labelsArray.push(orangesLabel)

        const bothDiv = document.createElement('div');
        bothDiv.setAttribute('fruit', 'both');
        const both = new Image();
        both.setAttribute('id', 'both');
        both.setAttribute('class', 'barrel');
        bothDiv.appendChild(both);
        both.src = 'assets/barrel.png';
        barrelsArray.push(bothDiv);
        const bothButton = document.createElement('button');
        bothDiv.appendChild(bothButton);
        bothButton.setAttribute('id', 'both-peek');
        bothDiv.setAttribute('class', 'barrel-div');
        bothButton.innerText = 'peek';
        bothButton.addEventListener('click', this.clickBothPeek)
        const bothLabel = new Image();
        bothLabel.setAttribute('id', 'both-label');
        bothLabel.setAttribute('class', 'label');
        bothLabel.src = 'assets/both_label.png';
        bothLabel.setAttribute('fruit', 'both');
        labelsArray.push(bothLabel);

        this.shuffle(barrelsArray);

        for (let i = 0; i < barrelsArray.length; i++) {
            barrelsDiv.appendChild(barrelsArray[i])
        }

        this.attachWrongLabels(barrelsArray, labelsArray);
    }

    attachWrongLabels(barrelsArray, labelsArray) {
        let dupLabels = labelsArray.slice()
        if (barrelsArray[0].getAttribute('fruit') === 'apples') {
            dupLabels.splice(0,1);
        } else if (barrelsArray[0].getAttribute('fruit') === 'oranges') {
            dupLabels.splice(1,1);
        } else {
            dupLabels.splice(2,1);
        }

        let j = Math.floor(Math.random() * 2)
        let affixedLabel = dupLabels[j]
        barrelsArray[0].appendChild(affixedLabel)

        for (let i = 0; i < labelsArray.length; i++) {
            if (affixedLabel === labelsArray[i]) {
                labelsArray.splice(i, 1)
            }
        }

        for (let i = 1; i < barrelsArray.length; i++) {
            if (barrelsArray[i].getAttribute('fruit') !== affixedLabel.getAttribute('fruit')) {
                for (let j = 0; j < labelsArray.length; j++) {
                    if (labelsArray[j].getAttribute('fruit') !== barrelsArray[i].getAttribute('fruit')) {
                        barrelsArray[i].appendChild(labelsArray[j])
                        labelsArray.splice(j,1)
                    }
                }
            }
        }

        for (let i = 1; i < barrelsArray.length; i++) {
            if (barrelsArray[i].children.length === 2) {
                barrelsArray[i].appendChild(labelsArray[0])
            }
        }
    }

    dragAndDrop() {
        document.addEventListener('dragstart', this.handleDragStart);
        document.addEventListener('dragover', this.handleDragOver);
        document.addEventListener('drop', this.handleDrop);
    }

    handleDragStart(event) {
        if (event.target.className === "label") {
                this.dragged = event.target;
        }
    }

    handleDragOver(event) {
        event.preventDefault();
    }

    handleDrop(event) {
        event.preventDefault();
        if (event.target.className === 'label') {
            let draggedParent = this.dragged.parentNode;
            event.target.parentNode.appendChild(this.dragged);
            draggedParent.appendChild(event.target);
        }
    }

    clickSubmit() {
        let lost = false;
        const barrels = document.getElementById('barrels-div').children;
        for (let i = 0; i < barrels.length; i++) {
            if (barrels[i].getAttribute('fruit') !== barrels[i].children[2].getAttribute('fruit')) {
                alert('The barrels were not correctly labeled! Try again.')
                while (this.screen.firstChild) {
                    this.screen.removeChild(this.screen.firstChild);
                }
                lost = true;
                document.removeEventListener('dragstart', this.handleDragStart);
                document.removeEventListener('dragover', this.handleDragOver);
                document.removeEventListener('drop', this.handleDrop);
                new Level3Instructions();
                break
            }
        }
        if (!lost) {
            alert('Nothing gets past you, professor!')
            const sound = document.getElementById('thinking-music')
            sound.pause();
            sound.currentTime = 0;
            while (this.screen.firstChild) {
                this.screen.removeChild(this.screen.firstChild);
            }
            new ComingSoon();
        }
    }
}

export default Level3Proper;
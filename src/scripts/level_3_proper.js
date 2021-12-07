class Level3Proper {
    constructor() {
        this.screen = document.getElementById('screen');
        this.renderLevel();
    }

    renderLevel() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = "Level 3";

        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = "Correctly label the barrels!"

        this.renderBarrels();
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
        const applesLabel = new Image();
        applesLabel.setAttribute('id', 'apples-label');
        applesLabel.setAttribute('class', 'label');
        applesLabel.setAttribute('fruit', 'apples');
        // applesDiv.appendChild(applesLabel);
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
        const orangesLabel = new Image();
        orangesLabel.setAttribute('id', 'oranges-label');
        orangesLabel.setAttribute('class', 'label');
        orangesLabel.setAttribute('fruit', 'oranges');
        // orangesDiv.appendChild(orangesLabel);
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
        const bothLabel = new Image();
        bothLabel.setAttribute('id', 'both-label');
        bothLabel.setAttribute('class', 'label');
        // bothDiv.appendChild(bothLabel);
        bothLabel.src = 'assets/both_label.png';
        bothLabel.setAttribute('fruit', 'both');
        labelsArray.push(bothLabel);

        this.shuffle(barrelsArray);
        // this.shuffle(labelsArray);

        for (let i = 0; i < barrelsArray.length; i++) {
            barrelsDiv.appendChild(barrelsArray[i])
        }

        this.attachWrongLabels(barrelsArray, labelsArray);
        console.log(barrelsArray[0]);
        console.log(barrelsArray[1]);
        console.log(barrelsArray[2]);
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
        
        //we put affixedLabel on firstBarrel
        // we don't want to put the label whose fruit is firstBarrelFruit on the barrel whose fruit is affixedLabelFruit 
        // find the barrel whose fruit is not the affixedLabel fruit
        for (let i = 1; i < barrelsArray.length; i++) {
            if (barrelsArray[i].getAttribute('fruit') !== affixedLabel.getAttribute('fruit')) {
                // find the label whose fruit is not the fruit of the barrel
                for (let j = 0; j < labelsArray.length; j++) {
                    if (labelsArray[j].getAttribute('fruit') !== barrelsArray[i].getAttribute('fruit')) {
                        barrelsArray[i].appendChild(labelsArray[j])
                        // discard that label from labelsArray
                        labelsArray.splice(j,1)
                    }
                }
            }
        }
        // console.log(labelsArray[0])
        // affix the label whose fruit is not the fruit of the barrel

        // find the barrel with no label
        for (let i = 1; i < barrelsArray.length; i++) {
            if (barrelsArray[i].children.length === 2) {
                barrelsArray[i].appendChild(labelsArray[0])
            }
        }
        // affix to it the final label

    }
}

export default Level3Proper;
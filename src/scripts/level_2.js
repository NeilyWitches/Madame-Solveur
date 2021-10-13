import Level2Proper from "./level_2_proper";

class Level2Instructions {
    constructor() {
        this.screen = document.createElement('div');
        document.getElementById('body').appendChild(this.screen);
        this.screen.setAttribute('id', 'level-2-instructions');
        this.ul = document.createElement('ul');
        this.renderScreen();
        this.clickNext();
    }

    renderScreen() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = 'Level 2:';
        const h2 = document.createElement('h2');
        h1.appendChild(h2);
        h2.innerText = "Be the first to say 50!"

        this.renderDialogue();
        this.renderNextButton();
    }

    renderDialogue() {
        this.screen.appendChild(this.ul);
        const li_1 = document.createElement('li');
        this.ul.appendChild(li_1);
        const dialogue_box = document.createElement('div');
        li_1.appendChild(dialogue_box);
        const dialogue = document.createElement('p');
        dialogue.setAttribute('id', 'level-2-dialogue-text');
        dialogue_box.setAttribute('id', 'level-2-dialogue');
        dialogue_box.appendChild(dialogue);
        dialogue.innerText = `The student gleefully thanked the Mme for finding the heavier ball and mosied out of her office. Shortly afterwards, the professor had felt hungry so she'd made her way to the quad and sat down at the café. Upon sitting, she ran into one of her graduate students. After they exchanged pleasantries, the student presented the physicist with a game she had come up with...`;
    }

    renderNextButton() {
        const li_2 = document.createElement('li');
        this.ul.appendChild(li_2);

        const nextButton = document.createElement('button');
        li_2.appendChild(nextButton);
        nextButton.setAttribute('id', 'next-button');
        nextButton.setAttribute('type', 'button');
        nextButton.innerText = "Next";
    }

    clickNext() {
        const button = document.getElementById('next-button');
        let clicked = false;
        button.addEventListener('click', handleClick);

        function handleClick(event) {
            console.log(clicked);
            if (!clicked) {
                let dialogue = document.getElementById("level-2-dialogue-text");
                dialogue.innerText = `INSTRUCTIONS: 
                Mme Solveur and the student are playing the game. The winner of the game is the first to say the number 50, but there are rules. She and the student will take turns saying aloud numbers. The first number spoken must be a number from 1 to 10. The next number spoken must be 1 to 10 larger than the previous number. The student allows the Mme to go first. Input your number into the box and click 'Say' to say aloud that number...`
                clicked = true;
            } else {
                button.removeEventListener('click', handleClick);
                const body = document.getElementById('body');
                while (body.firstChild) {
                    body.removeChild(body.firstChild);
                }
                new Level2Proper();
            }
        }
    }

}

export default Level2Instructions;
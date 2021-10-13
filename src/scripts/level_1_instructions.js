import Level1Redo from "./level_1_redo";

class Level1Instructions {
    constructor() {
        this.screen = document.createElement('div');
        document.getElementById('body').appendChild(this.screen);
        this.screen.setAttribute('id', 'level-1-instructions');
        this.ul = document.createElement('ul');
        this.renderScreen();
        this.clickNext();
    }

    renderScreen() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = 'Level 1:';
        const h2 = document.createElement('h2');
        h1.appendChild(h2);
        h2.innerText = "Find the heavier ball bearing!"

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
        dialogue.setAttribute('id', 'level-1-dialogue-text');
        dialogue_box.setAttribute('id', 'level-1-dialogue');
        dialogue_box.appendChild(dialogue);
        dialogue.innerText = `On one typical Autumn morning, Mme Solveur had been sitting in her office heavily concentrating on her research in theoretical physics at the Sorbonne in Paris, France. As she thought about a possible candidate for dark matter, a freshman had approached her office knocking on the door pane. Startled, but warm the physicist welcomed him in and he explained that his reason for coming was that he was tasked with assisting in an experiment with one of Mme Solveur's colleagues and needed help with a problem he had encountered. The student had heard about Mme Solveur's ability to solve puzzles...`;
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
                let dialogue = document.getElementById("level-1-dialogue-text");
                dialogue.innerText = `INSTRUCTIONS: 
                The student approaches the Mme with 9 ball bearings, all of them identical in appearance. They all weigh exactly the same except for one which is slightly heavier. Your task is to use the scale provided to find which ball is heavier than the rest. Drag and drop the balls onto either side of the scale and click "weigh" to see which side the scale will tip. Try to click the "weigh" button as little as possible. When you think you have figured out which ball is the heavy one, drag that ball to the student...`
                clicked = true;
            } else {
                button.removeEventListener('click', handleClick);
                const body = document.getElementById('body');
                while (body.firstChild) {
                    body.removeChild(body.firstChild);
                }
                new Level1Redo();
            }
        }
    }

}

export default Level1Instructions;
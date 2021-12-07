import Level1Redo from "./level_1_proper";
import Level1Instructions from './level_1_instructions';

class Level1Story {
    constructor() {
        this.screen = document.getElementById('screen')
        this.renderStory();
        this.clickNext();
    }

    renderStory() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = 'Level 1';
        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = "Find the heavier ball bearing!"

        this.renderDialogue();
        this.renderNextButton();
    }

    renderDialogue() {
        this.dialogue = document.createElement('div');
        this.screen.appendChild(this.dialogue);
        this.dialogue.setAttribute('class', 'text-box');
        this.dialogue.setAttribute('id', 'level-1-story-text');
        this.dialogue.innerText = `On one typical Autumn morning, Mme Solveur was sitting in her office heavily concentrated on her research in theoretical physics at the Sorbonne in Paris, France. `

        const sorbonne = new Image();
        sorbonne.setAttribute('id', 'sorbonne');
        this.screen.appendChild(sorbonne);
        sorbonne.src = "assets/sorbonne.jpeg";

        const mme = new Image();
        mme.setAttribute('id', 'mme-1');
        this.screen.appendChild(mme);
        mme.src = "assets/mme_solveur.png";

    }

    renderNextButton() {
        this.nextButton = document.createElement('button');
        this.screen.appendChild(this.nextButton);
        this.nextButton.setAttribute('id', 'next-button');
        this.nextButton.innerText = "Next";
    }

    clickNext() {
        let clicked = 0;
        const that = this;
        this.nextButton.addEventListener('click', handleClick);

        function handleClick() {
            
            clicked += 1
            if (clicked === 1) {
                
                that.dialogue.innerText = 'As she thought about a possible candidate for dark matter, a freshman had approached her office knocking on the open door. '
                
                const student = new Image();
                student.setAttribute('id', 'student-story');
                that.screen.appendChild(student);
                student.src = "assets/student_needs_help.png";
                let pos = 580;
                let studentKnocks = setInterval(moveStudent, 10);
                
                function moveStudent() {
                    if (pos == 350) {
                        clearInterval(studentKnocks);
                    } else {
                        pos--;
                        student.style.left = pos + 'px';
                    }
                }

            }
            else if (clicked === 2) {
                that.dialogue.innerText = "Startled but warm, the physicist welcomed them in and the student explained their reason for coming."             }
            else if (clicked === 3) {
                that.dialogue.innerText = "They were tasked with assisting in an experiment with one of Mme Solveur's colleagues and needed help with a problem they had encountered."
            }
            else if (clicked === 4) {
                that.dialogue.innerText = "They heard about Mme Solveur's exceptional ability to solve puzzles..."
            }
            else if (clicked === 5) {
                that.nextButton.removeEventListener('click', handleClick);
                while (that.screen.firstChild) {
                    that.screen.removeChild(that.screen.firstChild);
                 }
                new Level1Instructions();
            }
        }
    }

}

export default Level1Story;
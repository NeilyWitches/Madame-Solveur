import Level1Redo from "./level_1_redo";
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
                student.src = "assets/student_looking_left.png";
                let pos = 580;
                let studentKnocks = setInterval(moveStudent, 10);
                
                function moveStudent() {
                    if (pos == 420) {
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
                // let student = document.getElementById('student-instructions-1');
                // let nine_balls = document.getElementById('nine-balls');
                // student.parentNode.removeChild(student);
                // nine_balls.parentNode.removeChild(nine_balls);

                // const scale = new Image();
                // scale.setAttribute('id', 'scale-instructions-1');
                // that.screen.appendChild(scale);
                // const scaleFactorScale = 1 / 4;
                // scale.onload = function () {
                //     this.width = this.width * scaleFactorScale;
                // }
                // scale.src = 'assets/scale_instructions.png';
            }
            else if (clicked === 4) {
                that.dialogue.innerText = "They heard about Mme Solveur's exceptional ability to solve puzzles..."

                // dialogue.innerText = `Drag and drop the balls onto either side of the scale and click "weigh" to see which side the scale will tip.`

                // let scale = document.getElementById('scale-instructions-1');
                // scale.parentNode.removeChild(scale);

                // const gif_instructions_1 = new Image();
                // gif_instructions_1.setAttribute('id', 'lvl-1-instructions-1');
                // that.screen.appendChild(gif_instructions_1);
                // const scaleFactorGifInstructions1 = 1 / 4;
                // gif_instructions_1.onload = function () {
                //     this.width = this.width * scaleFactorGifInstructions1;
                // }
                // gif_instructions_1.src = 'assets/lvl_1_instructions_1.gif';
            }
            else if (clicked === 5) {
                that.nextButton.removeEventListener('click', handleClick);
                while (that.screen.firstChild) {
                    that.screen.removeChild(that.screen.firstChild);
                 }
                new Level1Instructions();

                // dialogue.innerText = `Try to click the "weigh" button as little as possible. If you click it 5 times, you failed the puzzle!`;
            }

            else if (clicked === 6) {
                dialogue.innerText = `When you think you have figured out which ball is the heavy one, drag that ball to the student...`;

                let gif_instructions_1 = document.getElementById('lvl-1-instructions-1');
                gif_instructions_1.parentNode.removeChild(gif_instructions_1);

                const gif_instructions_2 = new Image();
                gif_instructions_2.setAttribute('id', 'lvl-1-instructions-2');
                that.screen.appendChild(gif_instructions_2);
                const scaleFactorGifInstructions2 = 1 / 3;
                gif_instructions_2.onload = function () {
                    this.width = this.width * scaleFactorGifInstructions2;
                }
                gif_instructions_2.src = 'assets/lvl_1_instructions_2.gif';
            }
            else if (clicked === 7) {
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

export default Level1Story;
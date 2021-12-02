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
        h1.setAttribute('id', 'h1');
        this.screen.appendChild(h1);
        h1.innerText = 'Level 1';
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
        const dialogue = document.createElement('div');
        li_1.appendChild(dialogue);
        dialogue.setAttribute('id', 'level-1-dialogue');
        dialogue.innerText = `On one typical Autumn morning, Mme Solveur was sitting in her office heavily concentrating on her research in theoretical physics at the Sorbonne in Paris, France. `
        const mme = new Image();
        mme.setAttribute('id', 'mme-1');
        this.screen.appendChild(mme);
        const scaleFactorMme = 1;
        mme.onload = function () {
            this.width = this.width * scaleFactorMme;
        }
        mme.src = "assets/mme_solveur.png";
            // As she thought about a possible candidate for dark matter, a freshman had approached her office knocking on the door pane. 
            // Startled but warm, the physicist welcomed him in and he explained that his reason for coming was that he was tasked with assisting in an experiment with one of Mme Solveur's colleagues and needed help with a problem he had encountered. The student heard about Mme Solveur's ability to solve puzzles...`;
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
        let clicked = 0;
        const that = this;
        button.addEventListener('click', handleClick);
        let dialogue = document.getElementById("level-1-dialogue");

        function handleClick(event) {
            clicked += 1
            if (clicked === 1) {
                const instructions_label = document.createElement('h2');
                instructions_label.setAttribute('id', 'instructions-label-1');
                const h1 = document.getElementById('h1');
                h1.appendChild(instructions_label);
                instructions_label.innerText = "INSTRUCTIONS:"

                dialogue.innerText = "The student approaches the Mme with 9 ball bearings, all of them identical in appearance.";

                const nine_balls = new Image();
                nine_balls.setAttribute('id', 'nine-balls');
                that.screen.appendChild(nine_balls);
                const scaleFactorNineBalls = 1 / 2;
                nine_balls.onload = function () {
                    this.width = this.width * scaleFactorNineBalls;
                }
                nine_balls.src = 'assets/nine_balls.png';

                const student = new Image();
                student.setAttribute('id', 'student-instructions-1');
                that.screen.appendChild(student);
                const scaleFactorStudent = 1 / 8;
                student.onload = function () {
                    this.width = this.width * scaleFactorStudent;
                }
                student.src = "assets/student_lvl_1.png";
            }
            else if (clicked === 2) {
                dialogue.innerText = "They all weigh exactly the same except for one which is slightly heavier."
            }
            else if (clicked === 3) {
                dialogue.innerText = "Your task is to use the scale provided to find which ball is heavier than the rest."
                let student = document.getElementById('student-instructions-1');
                let nine_balls = document.getElementById('nine-balls');
                student.parentNode.removeChild(student);
                nine_balls.parentNode.removeChild(nine_balls);

                const scale = new Image();
                scale.setAttribute('id', 'scale-instructions-1');
                that.screen.appendChild(scale);
                const scaleFactorScale = 1 / 4;
                scale.onload = function () {
                    this.width = this.width * scaleFactorScale;
                }
                scale.src = 'assets/scale_instructions.png';
            }
            else if (clicked === 4) {
                dialogue.innerText = `Drag and drop the balls onto either side of the scale and click "weigh" to see which side the scale will tip.`

                let scale = document.getElementById('scale-instructions-1');
                scale.parentNode.removeChild(scale);

                const gif_instructions_1 = new Image();
                gif_instructions_1.setAttribute('id', 'lvl-1-instructions-1');
                that.screen.appendChild(gif_instructions_1);
                const scaleFactorGifInstructions1 = 1 / 4;
                gif_instructions_1.onload = function () {
                    this.width = this.width * scaleFactorGifInstructions1;
                }
                gif_instructions_1.src = 'assets/lvl_1_instructions_1.gif';
            }
            else if (clicked === 5) {
                dialogue.innerText = `Try to click the "weigh" button as little as possible. If you click it 5 times, you failed the puzzle!`;
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

export default Level1Instructions;
import Level2Instructions from "./level_2_instructions";

class Level2Story {
    constructor() {
        this.screen = document.getElementById('screen');
        this.clickNext = this.clickNext.bind(this);
        this.renderScreen();
        this.clicked = 0;
    }

    renderScreen() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = 'Level 2';
        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = "Be the first to say 50!"

        this.renderDialogue();
        this.renderNextButton();
    }

    renderDialogue() {
        this.dialogue = document.createElement('div');
        this.screen.appendChild(this.dialogue);
        this.dialogue.setAttribute('class', 'text-box');
        this.dialogue.setAttribute('id', 'level-2-dialogue');
        this.dialogue.innerText = `The student gleefully thanked the Mme for finding the heavier ball and mosied out of her office.`

        const sorbonne = new Image();
        sorbonne.setAttribute('id', 'sorbonne');
        this.screen.appendChild(sorbonne);
        sorbonne.src = "assets/sorbonne.jpeg";

        const mme = new Image();
        mme.setAttribute('id', 'mme-1');
        this.screen.appendChild(mme);
        mme.src = "assets/mme_solveur.png";

        const student = new Image();
        student.setAttribute('id', 'student-lvl-2-leaving');
        this.screen.appendChild(student);
        student.src = 'assets/student_looking_right.png';

        let pos = 300;
        let studentLeaves = setInterval(moveStudent, 10);
        
        function moveStudent() {
            if (pos == 600) {
                clearInterval(studentLeaves);
            } else {
                pos++;
                student.style.left = pos + 'px';
            }
        }
    }

    renderNextButton() {
        this.nextButton = document.createElement('button');
        this.screen.appendChild(this.nextButton);
        this.nextButton.setAttribute('id', 'next-button');
        this.nextButton.innerText = "Next";
        this.nextButton.addEventListener('click', this.clickNext)
    }

    clickNext() {
        this.clicked += 1;
        if (this.clicked === 1) {
            this.dialogue.innerText = `Shortly afterwards, the professor felt hungry so she made her way to the quad and sat down at the café.`
            this.screen.removeChild(document.getElementById('sorbonne'));
            
            const cafe = new Image();
            cafe.setAttribute('id', 'cafe');
            this.screen.appendChild(cafe);
            cafe.src = 'assets/cafe.jpeg';

            const mme = document.getElementById('mme-1')

            let pos = -100;
            let mmeEnters = setInterval(moveMme, 10);

            function moveMme() {
                if (pos == 100) {
                    clearInterval(mmeEnters)
                } else {
                    pos++;
                    mme.style.left = pos + 'px';
                }
            }
        } else if (this.clicked === 2) {
            this.dialogue.innerText = `Upon sitting, she ran into one of her graduate students.`;

            const gradStudent = new Image();
            gradStudent.setAttribute('id', 'grad-student-story');
            this.screen.appendChild(gradStudent);
            gradStudent.src = 'assets/grad_student.png';
        } else if (this.clicked === 3) {
            this.dialogue.innerText = `After they exchanged pleasantries, the student presented the physicist with a game she had come up with...`;
        } else {
            this.nextButton.removeEventListener('click', this.clickNext);
            while (this.screen.firstChild) {
                this.screen.removeChild(this.screen.firstChild);
            }
            new Level2Instructions();
        }
    }
}

export default Level2Story;
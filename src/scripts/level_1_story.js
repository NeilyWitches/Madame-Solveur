import Level1Instructions from './level_1_instructions';

class Level1Story {
    constructor() {
        this.screen = document.getElementById('screen')
        this.clickNext = this.clickNext.bind(this);
        this.clickSkip = this.clickSkip.bind(this);
        this.clicked = 0;
        this.renderStory();
        this.playMusic();
    }

    playMusic() {
        const music = document.getElementById('story-music')
        music.play()
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
        this.renderSkipButton();
    }

    renderDialogue() {
        this.dialogue = document.createElement('div');
        this.screen.appendChild(this.dialogue);
        this.dialogue.setAttribute('class', 'text-box');
        this.dialogue.setAttribute('id', 'level-1-story-text');
        this.dialogue.innerText = `On one typical Autumn morning, Mme (Madame) Solveur was sitting in her office heavily concentrated on her research in theoretical physics at the Sorbonne in Paris, France. `

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
        this.nextButton.addEventListener('click', this.clickNext);
    }

    clickSkip() {
        this.screen = document.getElementById('screen')
        while (this.screen.firstChild) {
            this.screen.removeChild(this.screen.firstChild);
        }
        const sound = document.getElementById('story-music')
        sound.pause();
        sound.currentTime = 0;
        new Level1Instructions();
    }

    renderSkipButton() {
        this.skip = document.createElement('button');
        this.screen.appendChild(this.skip);
        this.skip.setAttribute('class', 'skip-button');
        this.skip.innerText = "Skip";
        this.skip.addEventListener('click', this.clickSkip);
    }

    clickNext() {
        this.clicked += 1
        if (this.clicked === 1) {
            
            this.dialogue.innerText = 'As she thought about a possible candidate for dark matter, a freshman had approached her office knocking on the open door. '
            
            const student = new Image();
            student.setAttribute('id', 'student-story');
            this.screen.appendChild(student);
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
        else if (this.clicked === 2) {
            this.dialogue.innerText = "Although startled, the physicist warmly beckoned them in and the student explained their reason for coming."             }
        else if (this.clicked === 3) {
            this.dialogue.innerText = "They were tasked with assisting in an experiment with one of Mme Solveur's colleagues and needed help with a problem they had encountered."
        }
        else if (this.clicked === 4) {
            this.dialogue.innerText = "They heard about Mme Solveur's exceptional ability to solve puzzles..."
        }
        else if (this.clicked === 5) {
            this.nextButton.removeEventListener('click', this.clickNext);
            const sound = document.getElementById('story-music')
            sound.pause();
            sound.currentTime = 0;
            while (this.screen.firstChild) {
                this.screen.removeChild(this.screen.firstChild);
                }
            new Level1Instructions();
        }
    }
}

export default Level1Story;
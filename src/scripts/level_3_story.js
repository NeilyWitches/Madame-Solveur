import Level3Instructions from './level_3_instructions';

class Level3Story {
    constructor() {
        this.screen = document.getElementById('screen');
        this.clickNext = this.clickNext.bind(this);
        this.clickSkip = this.clickSkip.bind(this);
        this.clicked = 0;
        this.renderScreen();
        this.playMusic();
    }

    playMusic() {
        const music = document.getElementById('story-music');
        music.play();
    }

    renderScreen() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = 'Level 3';
        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = 'Correctly label the barrels!';

        this.renderDialogue();
        this.renderNextButton();
        this.renderSkipButton();
    }

    renderDialogue() {
        this.dialogue = document.createElement('div');
        this.screen.appendChild(this.dialogue);
        this.dialogue.setAttribute('class', 'text-box');
        this.dialogue.setAttribute('id', 'level-3-dialogue');
        this.dialogue.innerText = `Mme Solveur looked at her watch and noticed she was late in giving her lecture on quantum mechanics.`

        const cafe = new Image();
        cafe.setAttribute('id', 'cafe');
        this.screen.appendChild(cafe);
        cafe.src = 'assets/cafe.jpeg';

        const mme = new Image();
        mme.setAttribute('id', 'mme-1');
        this.screen.appendChild(mme);
        mme.src = "assets/mme_solveur.png";

        const gradStudent = new Image();
        gradStudent.setAttribute('id', 'grad-student-story');
        this.screen.appendChild(gradStudent);
        gradStudent.src = 'assets/grad_student.png';
    }

    renderNextButton() {
        this.nextButton = document.createElement('button');
        this.screen.appendChild(this.nextButton);
        this.nextButton.setAttribute('id', 'next-button');
        this.nextButton.innerText = "Next";
        this.nextButton.addEventListener('click', this.clickNext)
    }

    renderSkipButton() {
        this.skip = document.createElement('button');
        this.screen.appendChild(this.skip);
        this.skip.setAttribute('class', 'skip-button');
        this.skip.innerText = "Skip";
        this.skip.addEventListener('click', this.clickSkip);
    }

    clickSkip() {
        const sound = document.getElementById('button-press')
        sound.play()
        this.screen = document.getElementById('screen')
        const music = document.getElementById('story-music')
        music.pause();
        music.currentTime = 0;
        while (this.screen.firstChild) {
            this.screen.removeChild(this.screen.firstChild);
        }
        new Level3Instructions();
    }

    clickNext() {
        const sound = document.getElementById('button-press')
        sound.play()
        this.clicked += 1;
        if (this.clicked === 1) {
            const speed_away = document.getElementById('speed-away')
            speed_away.play();
            this.dialogue.innerText = `After hastily but politely excusing herself, she darted out of the café and beelined to the Physics Lecture Hall.`;

            this.screen.removeChild(document.getElementById('mme-1'))

            const mme = new Image();
            mme.setAttribute('id', 'mme-1');
            this.screen.appendChild(mme);
            mme.src = "assets/mme_looking_left.png";

            let pos = 400;
            let mmeExits = setInterval(moveMme, 1);

            function moveMme() {
                if (pos === 700) {
                    clearInterval(mmeExits)
                } else {
                    pos += 2;
                    mme.style.right = pos + 'px';
                }
            }
        } else if (this.clicked === 2) {
            this.dialogue.innerText = `Today's lecture focused on Heisenberg's uncertainty principle and our limited ability to observe the world around us.`;

            this.screen.removeChild(document.getElementById('cafe'));
            this.screen.removeChild(document.getElementById('grad-student-story'));

            const PLH = new Image();
            PLH.setAttribute('class', 'setting');
            this.screen.appendChild(PLH);
            PLH.src = "assets/PLH.jpeg";

            const mme = new Image();
            mme.setAttribute('id', 'mme-1');
            this.screen.appendChild(mme);
            mme.src = "assets/mme_solveur.png";
        } else if (this.clicked === 3) {
            this.dialogue.innerText = `Speaking of "limited ability to observe," one of the professor's students offered a puzzle to the class...`;
        } else {
            this.nextButton.removeEventListener('click', this.clickNext);
            const music = document.getElementById('story-music')
            music.pause();
            music.currentTime = 0;
            while (this.screen.firstChild) {
                this.screen.removeChild(this.screen.firstChild);
            }
            new Level3Instructions();
        }
    }
}

export default Level3Story;
class ComingSoon {
    constructor() {
        this.screen = document.getElementById('screen');
        this.playMusic();
        this.renderScreen();
    }

    playMusic() {
        const music = document.getElementById('coming-soon-music');
        music.play()
    }

    renderScreen() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = "Thank you";

        const h2 = document.createElement('h2');
        this.screen.appendChild(h2);
        h2.innerText = "More levels coming soon!"

        this.renderText();
        this.renderAttributions();
    }

    renderText() {
        this.dialogue = document.createElement('div');
        this.screen.appendChild(this.dialogue);
        this.dialogue.setAttribute('class', 'text-box');
        this.dialogue.setAttribute('id', 'coming-soon-text');
        this.dialogue.innerText = 'Thank you for playing my game made entirely with vanilla JavaScript--no external libraries--pushing the boundaries of what it can do. If you are interested in seeing my other projects, please click on one of the links above.'

        const AnishDiv = document.createElement('div');
        this.dialogue.append(AnishDiv);
        AnishDiv.setAttribute('id', 'anish-credit')
        AnishDiv.innerText = 'Music by '
        const obliviga = document.createElement('a');
        obliviga.innerText = 'Anish Kshatriya.'
        AnishDiv.appendChild(obliviga);
        obliviga.setAttribute('href', 'https://soundcloud.com/obliviga')
        obliviga.setAttribute('rel', "noopener noreferrer");
        obliviga.setAttribute('target',"_blank");

        const FreepikDiv = document.createElement('div');
        this.dialogue.append(FreepikDiv);
        FreepikDiv.setAttribute('id', 'freepik-credit')
        FreepikDiv.innerText = 'Images by '
        const freepik = document.createElement('a');
        freepik.innerText = 'freepik.'
        FreepikDiv.appendChild(freepik);
        freepik.setAttribute('href', 'http://www.freepik.com')
        freepik.setAttribute('rel', "noopener noreferrer");
        freepik.setAttribute('target',"_blank");
    }

    renderAttributions() {
        const attributions = document.createElement('div');
        attributions.setAttribute('id', 'attributions');
        this.screen.appendChild(attributions)

        const ballDiv = document.createElement('div');
        ballDiv.setAttribute('class', 'attribution');
        attributions.appendChild(ballDiv);
        const ball = new Image();
        ball.setAttribute('id', 'ball-attribution');
        ballDiv.appendChild(ball);
        ball.src = 'assets/ball.png';
        const ballAttribution = document.createElement('div');
        ballAttribution.innerText = 'vectorpouch';
        ballDiv.appendChild(ballAttribution)

        const underGradDiv = document.createElement('div');
        underGradDiv.setAttribute('class', 'attribution');
        attributions.appendChild(underGradDiv)
        const underGrad = new Image();
        underGrad.setAttribute('id', 'undergrad-attribution');
        underGradDiv.appendChild(underGrad);
        underGrad.src = 'assets/student_needs_help.png';
        const underGradAttribution = document.createElement('div');
        underGradAttribution.innerText = 'pikisuperstar';
        underGradDiv.appendChild(underGradAttribution);

        const mmeDiv = document.createElement('div');
        mmeDiv.setAttribute('class', 'attribution');
        attributions.appendChild(mmeDiv)
        const mme = new Image();
        mme.setAttribute('id', 'mme-attribution');
        mmeDiv.appendChild(mme);
        mme.src = 'assets/mme_solveur.png';
        const mmeAttribution = document.createElement('div');
        mmeAttribution.innerText = 'Freepik';
        mmeDiv.appendChild(mmeAttribution);

        const gradStudentDiv = document.createElement('div');
        gradStudentDiv.setAttribute('class', 'attribution');
        attributions.appendChild(gradStudentDiv)
        const gradStudent = new Image();
        gradStudent.setAttribute('id', 'gradStudent-attribution');
        gradStudentDiv.appendChild(gradStudent);
        gradStudent.src = 'assets/grad_student.png';
        const gradStudentAttribution = document.createElement('div');
        gradStudentAttribution.innerText = 'pch.vector';
        gradStudentDiv.appendChild(gradStudentAttribution);
    }
}

export default ComingSoon;
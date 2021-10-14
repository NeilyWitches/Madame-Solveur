// import StartMenu from "./start_menu";

class Level3 {
    constructor() {
        this.screen = document.createElement('div');
        document.getElementById('body').appendChild(this.screen);
        this.screen.setAttribute('id', 'level-3');
        this.renderScreen();
        // this.clickStart();
    }

    renderScreen() {
        this.renderLinks();
        // this.renderButton();
    }

    renderLinks() {
        const h1 = document.createElement('h1');
        this.screen.appendChild(h1);
        h1.innerText = "Level 3:"

        const h2 = document.createElement('h2');
        h1.appendChild(h2);
        h2.innerText = "More levels coming soon!"

        const ul = document.createElement('ul');
        this.screen.appendChild(ul);
        ul.setAttribute('id', 'lvl3-ul');

        const li_1 = document.createElement('li');
        li_1.setAttribute('id', 'lvl3-li-1')
        ul.appendChild(li_1);

        const myGitHub = document.createElement('a');
        myGitHub.setAttribute('href', 'https://github.com/NeilyWitches');
        li_1.appendChild(myGitHub);

        const gitHubIcon = new Image();
        gitHubIcon.setAttribute('id', 'github-3');
        myGitHub.appendChild(gitHubIcon);
        gitHubIcon.onload = function () {
            this.width = this.width;
        }
        gitHubIcon.src = "assets/github.png";

        const myLinkedIn = document.createElement('a');
        myLinkedIn.setAttribute('href', 'https://www.linkedin.com/in/neil-pandya-610588187/');
        li_1.appendChild(myLinkedIn);

        const linkedInIcon = new Image();
        linkedInIcon.setAttribute('id', 'linkedin-3');
        myLinkedIn.appendChild(linkedInIcon);
        const scaleFactorLinkedIn = 1 / 5;
        linkedInIcon.onload = function () {
            this.width = this.width * scaleFactorLinkedIn;
        }
        linkedInIcon.src = 'assets/linkedin.png';

        const li_2 = document.createElement('li');
        ul.appendChild(li_2);
        const att_label = document.createElement('p');
        att_label.setAttribute('id', 'att-label');
        li_2.appendChild(att_label);
        att_label.innerText = "Attributions:"

        const freepik = document.createElement('a');
        li_2.appendChild(freepik);
        freepik.setAttribute('id', 'freepik');
        freepik.setAttribute('href', "http://www.freepik.com");
        freepik.innerText = "Freepik";

        const li_3 = document.createElement('li');
        ul.appendChild(li_3);
        li_3.setAttribute('id', 'attributions');

        const ball = new Image();
        ball.setAttribute('id', 'ball-3');
        li_3.appendChild(ball);
        const scaleFactorBall = 1 / 30;
        ball.onload = function () {
            this.width = this.width * scaleFactorBall;
        }
        ball.src = 'assets/ball.png';

        const student = new Image();
        student.setAttribute('id', 'student-3');
        li_3.appendChild(student);
        const scaleFactorStudent = 1 / 20;
        student.onload = function () {
            this.width = this.width * scaleFactorStudent;
        }
        student.src = 'assets/student_lvl_1.png';

        const mme = new Image();
        mme.setAttribute('id', 'mme-3');
        li_3.appendChild(mme);
        const scaleFactorMme = 1 / 4;
        mme.onload = function () {
            this.width = this.width * scaleFactorMme;
        }
        mme.src = 'assets/mme_solveur.png';

        const li_4 = document.createElement('li');
        ul.appendChild(li_4);
        li_4.setAttribute('id', 'li-4');

        const ball_p = document.createElement('p');
        ball_p.setAttribute('id', 'ball-p');
        li_4.appendChild(ball_p);
        ball_p.innerText = "vectorpouch";
       
        const student_p = document.createElement('p');
        student_p.setAttribute('id', 'student-p');
        li_4.appendChild(student_p);
        student_p.innerText = "pikisuperstar";

        const mme_p = document.createElement('p');
        mme_p.setAttribute('id', 'mme-p');
        li_4.appendChild(mme_p);
        mme_p.innerText = "Freepik";
    }

    renderButton() {
        const li_3 = document.createElement('li');
        const ul = document.getElementById('socials');
        ul.appendChild(li_3);

        const startButton = document.createElement('button');
        li_3.appendChild(startButton);
        startButton.setAttribute('id', 'start-button');
        startButton.setAttribute('type', 'button');
        startButton.innerText = "Start";
    }

    clickStart() {
        const button = document.getElementById('start-button');
        button.addEventListener('click', handleClick);

        function handleClick(event) {
            button.removeEventListener('click', handleClick);
            const body = document.getElementById('body');
            while (body.firstChild) {
                body.removeChild(body.firstChild);
            }
            new Level1Instructions();
        }
    }
}

export default Level3;
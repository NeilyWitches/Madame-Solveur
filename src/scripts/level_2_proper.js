class Level2Proper {
    constructor() {
        this.level = document.createElement('div');
        document.getElementById('body').appendChild(this.level);
        this.level.setAttribute('id', 'level-2');
        this.renderLevel();
    }

    renderLevel() {
        const h1 = document.createElement('h1');
        this.level.appendChild(h1);
        h1.innerText = "Level 2:";

        const h2 = document.createElement('h2');
        h1.appendChild(h2);
        h2.innerText = "Be the first to say 50!";

        const ul = document.createElement('ul');
        this.level.appendChild(ul);

        const li_1 = document.createElement('li');
        ul.appendChild(li_1);
        li_1.setAttribute('id', 'stud-num-label');
        li_1.setAttribute('class', 'student');
        li_1.classList.add('label');
        li_1.innerText = "Student's Number:";

        const li_2 = document.createElement('li');
        ul.appendChild(li_2);
        li_2.setAttribute('id', 'stud-num');
        li_2.setAttribute('class', 'student');
        li_2.classList.add('number');
        li_2.innerText = "You go first!";

        const li_3 = document.createElement('li');
        ul.appendChild(li_3);
        li_3.setAttribute('id', 'mme-num-label');
        li_3.setAttribute('class', "mme");
        li_3.classList.add('label');
        li_3.innerText = "Mme Solveur's Number:";

        const li_4 = document.createElement('li');
        ul.appendChild(li_4);
        li_4.setAttribute('id', "mme-num");
        li_4.setAttribute('class', 'mme');
        li_4.classList.add('number');
        li_4.innerText = "Input a number from 1 to 10!";

        const li_5 = document.createElement('li');
        ul.appendChild(li_5);
        const input = document.createElement('input');
        li_5.appendChild(input);
        li_5.setAttribute('type', 'text');
    }
}

export default Level2Proper;
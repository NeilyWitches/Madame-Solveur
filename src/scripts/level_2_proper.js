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
        li_1.innerText = "Student's Number:";

        const li_2 = document.createElement('li');
        ul.appendChild(li_2);
        li_2.setAttribute('id', 'stud-num');
        li_2.innerText = "";

        const li_3 = document.createElement('li');
        ul.appendChild(li_3);
        li_3.setAttribute('id', 'mme-num-label');
        li_3.innerText = "Mme Solveur's Number:";

        const li_4 = document.createElement('li');
        ul.appendChild(li_4);
        const input = document.createElement('input');
        li_4.appendChild(input);
        li_4.setAttribute('type', 'text');
    }
}

export default Level2Proper;
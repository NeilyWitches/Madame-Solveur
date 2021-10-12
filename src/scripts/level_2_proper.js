class Level2Proper {
    constructor() {
        this.level = document.createElement('div');
        document.getElementById('body').appendChild(this.level);
        this.level.setAttribute('id', 'level-2');
        this.studNums = [0, 6, 17, 28, 39, 50];
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
        li_2.innerText = 0;

        const li_3 = document.createElement('li');
        ul.appendChild(li_3);
        li_3.setAttribute('id', 'mme-num-label');
        li_3.setAttribute('class', "mme");
        li_3.classList.add('label');
        li_3.innerText = "Mme Solveur's Previous Number:";

        const li_4 = document.createElement('li');
        ul.appendChild(li_4);
        li_4.setAttribute('id', "mme-num");
        li_4.setAttribute('class', 'mme');
        li_4.classList.add('number');
        li_4.innerText = "(Your number will go here)";

        const li_5 = document.createElement('li');
        ul.appendChild(li_5);
        const input = document.createElement('input');
        li_5.appendChild(input);
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'input')

        const li_6 = document.createElement('li');
        ul.appendChild(li_6);
        const button = document.createElement('button');
        li_6.appendChild(button);
        button.setAttribute('type', 'button');
        button.innerText = "Say";

        const li_7 = document.createElement('li');
        ul.appendChild(li_7);
        li_7.setAttribute('id', 'instructions');
        li_7.innerText = "Say a number 1 to 10 larger than the Student's number!"

        this.handleInput(button, 0, li_4, li_2);
    }

    handleInput(button, i, mmePrevNum, studPrevNum) {
        button.addEventListener('click', handleClick);
        const that = this;
        function handleClick(e) {
            let inputVal = document.getElementById('input').value;
            inputVal = parseInt(inputVal);
            // let studNums = [0, 6, 17, 28, 39, 50];
            // const prevNum = document.getElementById('mme-num');
            // const studPrevNum = document.getElementById('stud-num');
            // for (let i = 0; i < studNums.length; i++){
            if (!Number.isInteger(inputVal)) {
                alert("Please enter a number.");
            } else if (inputVal <= that.studNums[i] || inputVal > that.studNums[i] + 10) {
                alert("The number must be 1 to 10 larger than the Student's number.")
            } else {
                button.removeEventListener('click', handleClick);
                mmePrevNum.innerText = inputVal;
                if (inputVal === that.studNums[i + 1]) {
                    studPrevNum.innerText = Math.floor(Math.random() * 11) + inputVal;
                } else if (inputVal > that.studNums[i + 1]) {
                    studPrevNum.innerText = that.studNums[i + 2];
                } else {
                    studPrevNum.innerText = that.studNums[i + 1]
                }
            }
        }
    }
}

export default Level2Proper;
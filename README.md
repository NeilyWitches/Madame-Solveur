# Madame Solveur

[Live Link](https://neilywitches.github.io/Madame-Solveur/)

## Background
If you like problem solving as much as I do, I think you're going to enjoy this game! Based on the series of games known as Professor Layton, *Mme Solveur* has you playing through a variety of fun but challenging puzzles. The entire project was done using Vanilla Javascript DOM manipulation pushing its capabilities to the limit. 

The game is heavily inspired by the Professor Layton Series of games. The game will involve two levels, but more levels will be added eventually. Each level is a small puzzle. The first puzzle will involve dragging and dropping ball bearings onto either side of a scale to figure out which ball is the heaviest one. The player is awarded with the next level if a small number of moves were used. The second level involves competing against a computer player at a number game.

![lvl_1_instructions_1](https://user-images.githubusercontent.com/59269773/145656572-727e35a8-7165-4b29-b672-d307e8fbbc2e.gif)

- Leveraged OOP to create ball objects attributing mass to their image elements.
- Built animations and algorithm to add up the masses and simulate the behavior of a scale.

```javascript
clickWeigh() {
        const sound = document.getElementById('button-press')
        sound.play()
        const scale_rot_part = document.getElementById('scale-rot-part');
        let scalePosition = window.getComputedStyle(scale_rot_part).transform
        let tippedLeft = 'matrix(0.707107, -0.707107, 0.707107, 0.707107, 0, 0)'
        let balanced = 'matrix(1, 0, 0, 1, 0, 0)'
        let tippedRight = 'matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, 0)'

        let counter = document.getElementById('counter');
        let count = counter.innerText;
        let new_count = parseInt(count) - 1;

        const left_v = document.getElementById('left_v');
        const right_v = document.getElementById('right_v');
        const div_left = document.getElementById('div-left');
        const div_right = document.getElementById('div-right');

        if (new_count < 0) {
                alert("You are out of weighs!")
        } else {
            counter.innerText = new_count;
            const left = div_left.children;
            const right = div_right.children;
            let massLeft = 0;
            let massRight = 0;
            for (let i = 0; i < left.length; i++) {
                massLeft += parseInt(left[i].getAttribute('mass'));
            }
            for (let i = 0; i < right.length; i++) {
                massRight += parseInt(right[i].getAttribute('mass'));
            }
            if (scalePosition === tippedLeft) {
                if (massLeft > massRight) {
                    leftSideWiggleAnimation();
                } else if (massLeft === massRight) {
                    leftToMiddleAnimation();
                } else if (massRight > massLeft) {
                    leftToRightAnimation();
                }
            } else if (scalePosition === balanced) {
                if (massLeft > massRight) {
                    middleToLeftAnimation();
                } else if (massLeft === massRight) {
                    middleWiggleAnimation();
                } else if (massRight > massLeft) {
                    middleToRightAnimation();
                }
            } else if (scalePosition === tippedRight) {
                if (massLeft > massRight) {
                    rightToLeftAnimation();
                } else if (massLeft === massRight) {
                    rightToMiddleAnimation();
                } else if (massRight > massLeft) {
                    rightSideWiggleAnimation();
                }
            }
        }
    }
```
![lvl_2_instructions_gif](https://user-images.githubusercontent.com/59269773/145656820-ed3834a0-c4d1-484e-a1df-78d59c3d0a9a.gif)

- Implemented recursion to construct the algorithm for AI opponent in Level 2's number game.

```javascript
handleInput(i, mmePrevNum, studPrevNum) {
        const music = document.getElementById('thinking-music')
        let studPrevNumVal = parseInt(studPrevNum.innerText);
        if (studPrevNumVal === 50) {
            studPrevNum.innerText = '50!'
            setTimeout(() => {
                const wrong = document.getElementById('wrong');
                wrong.play()
                alert("The student says 50! You lose! Restart the level.")
                this.button.removeEventListener('click', handleClick);
                music.pause()
                while (this.screen.firstChild) {
                    this.screen.removeChild(this.screen.firstChild);
                }
                new Level2Instructions();
            }, 1);
        }
        this.button.addEventListener('click', handleClick);
        const that = this;
        function handleClick() {
            const sound = document.getElementById('button-press')
            sound.play()
            let inputVal = document.getElementById('lvl2-input').value;
            inputVal = parseInt(inputVal);
            if (!Number.isInteger(inputVal)) {
                alert("Please enter a number.");
            } else if (inputVal <= studPrevNumVal || inputVal > studPrevNumVal + 10) {
                alert("The number must be 1 - 10 larger than the Student's number.")
            } else {
                that.button.removeEventListener('click', handleClick);
                if (inputVal === 50) {
                    mmePrevNum.innerText = '50!';
                    setTimeout(() => {
                        const right = document.getElementById('right');
                        right.play()
                        alert("Amazing! The professor managed to beat her student at her own game.");
                        music.pause();
                        music.currentTime = 0;
                        while (that.screen.firstChild) {
                            that.screen.removeChild(that.screen.firstChild);
                        }
                        new Level3Password();
                    }, 50);
                } else {
                    mmePrevNum.innerText = inputVal;
                    if (inputVal === that.studNums[i + 1]) {
                        studPrevNum.innerText = Math.floor(Math.random() * 10) + inputVal + 1;
                        that.handleInput(i + 1, mmePrevNum, studPrevNum);
                    } else if (inputVal > that.studNums[i + 1]) {
                        studPrevNum.innerText = that.studNums[i + 2];
                        that.handleInput(i + 2, mmePrevNum, studPrevNum);
                    } else {
                        studPrevNum.innerText = that.studNums[i + 1]
                        that.handleInput(i + 1, mmePrevNum, studPrevNum);
                    }
                }
            } 
        }
    }
```

![level_3_instructions_2_gif](https://user-images.githubusercontent.com/59269773/145657027-780b120c-e8a0-42c1-aafd-f4ff6da604a9.gif)

- Employed Fisher-Yates suffle algorithm in Level 3 ensuring the barrels are always random but that every label affixed to each barell is random yet always incorrectly labelled. 

```javascript
attachWrongLabels(barrelsArray, labelsArray) {
        let dupLabels = labelsArray.slice()
        if (barrelsArray[0].getAttribute('fruit') === 'apples') {
            dupLabels.splice(0,1);
        } else if (barrelsArray[0].getAttribute('fruit') === 'oranges') {
            dupLabels.splice(1,1);
        } else {
            dupLabels.splice(2,1);
        }

        let j = Math.floor(Math.random() * 2)
        let affixedLabel = dupLabels[j]
        barrelsArray[0].appendChild(affixedLabel)

        for (let i = 0; i < labelsArray.length; i++) {
            if (affixedLabel === labelsArray[i]) {
                labelsArray.splice(i, 1)
            }
        }

        for (let i = 1; i < barrelsArray.length; i++) {
            if (barrelsArray[i].getAttribute('fruit') !== affixedLabel.getAttribute('fruit')) {
                for (let j = 0; j < labelsArray.length; j++) {
                    if (labelsArray[j].getAttribute('fruit') !== barrelsArray[i].getAttribute('fruit')) {
                        barrelsArray[i].appendChild(labelsArray[j])
                        labelsArray.splice(j,1)
                    }
                }
            }
        }

        for (let i = 1; i < barrelsArray.length; i++) {
            if (barrelsArray[i].children.length === 2) {
                barrelsArray[i].appendChild(labelsArray[0])
            }
        }
    }
```

## Functionality & MVPSs

In Madame Solveur, users will be able to:

- click start game
- click drag and drop ball bearings onto either side of a scale
- click weigh
- guess which ball is the heaviest by dragging and dropping their guessed ball onto an image of another character
- input numbers into a text box

In addition, this project will include:
- nav links on the game menu
- nav links at the end of the game
- level 3 screen indicating more levels to come
- instructions in each level how to interact with the puzzle 
- a counter that counts the number of times the scale in lvl 1 was used

## Wireframes

<img width="625" alt="Screen Shot 2021-10-07 at 9 07 18 PM" src="https://user-images.githubusercontent.com/59269773/136634580-de01b51b-fc27-4980-8946-8ea2d96a3f31.png">

<img width="632" alt="Screen Shot 2021-10-07 at 9 09 41 PM" src="https://user-images.githubusercontent.com/59269773/136634590-4fc15b19-3c2f-4d4b-a2a8-63cf6745246d.png">

<img width="632" alt="Screen Shot 2021-10-07 at 9 14 13 PM" src="https://user-images.githubusercontent.com/59269773/136634596-5e63135d-be50-442d-9be9-a4b79cfee772.png">

<img width="632" alt="Screen Shot 2021-10-07 at 9 16 58 PM" src="https://user-images.githubusercontent.com/59269773/136634607-322ed525-817a-42b4-9fe5-c93f030850ae.png">

<img width="632" alt="Screen Shot 2021-10-07 at 9 18 22 PM" src="https://user-images.githubusercontent.com/59269773/136634613-4b1c7044-e169-443e-a3a5-478182058c35.png">

## Technologies, Libraries, APIs

This project will be implemented with the following technologies:

- Vanilla JS
- Webpack and Babel to bundle and transpile the source JavaScript code
- npm to manage project dependencies

## Implementation Timeline

- **Friday Afternoon & Weekend**: Setup project, render start menu, render level 1, build logic for level 1.
- **Monday**: Continue logic for level 1. Render.
- **Tuesday**: Render level 2, logic.
- **Wednesday**: Continue logic level 2. Render. Render level 3. Bonuses if time permits.
- **Thursday Morning**: Deploy to GithHub pages. Rewrite README as production README if time permits.

## Bonus Features
- Dialogue boxes at the start of each level.
- Ability to continue game.
Please check out my other projects or [LinkedIn](https://www.linkedin.com/in/neil-pandya-610588187/)!

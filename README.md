# Madame Solveur

## Background

The game is heavily inspired by the Professor Layton Seriea of games. The game will involve two levels, but more levels will be added eventually. Each level is a small puzzle. The first puzzle will involve dragging and dropping ball bearings onto either side of a scale to figure out which ball is the heaviest one. The player is awarded with the next level if a small number of moves were used. The second level involves competing against a computer player at a number game.

## Functionality & MVPSs

In Maadame Solveur, users will be able to:

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

- The Canvas API to render each game screen including the start menu, level 1 (which itself includes dialogue), level 2 (which also includes dialogue boxes), and level 3.
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

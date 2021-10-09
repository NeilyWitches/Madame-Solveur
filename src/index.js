// import Example from "./scripts/example"
import Button from "./scripts/button"
import GameCanvas from "./scripts/game_canvas"

document.addEventListener("DOMContentLoaded", () => {
    // const main = document.getElementById("main")
    // new Example(main)
    // const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');
    new GameCanvas();
    new Button();
})
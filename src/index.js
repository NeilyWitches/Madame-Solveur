// import Example from "./scripts/example"
import Button from "./scripts/button"
import StartGameCanvas from "./scripts/start_game_canvas"
import Level1 from "./scripts/level_1"

document.addEventListener("DOMContentLoaded", () => {
    // const main = document.getElementById("main")
    // new Example(main)
    new StartGameCanvas();
    new Button();
    // new Level1();
})
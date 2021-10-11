// import Example from "./scripts/example"
import Button from "./scripts/button"
import StartGameCanvas from "./scripts/start_game_canvas"
// import Level2 from "./scripts/level_2"
import Level2Proper from "./scripts/level_2_proper";

document.addEventListener("DOMContentLoaded", () => {
    // const main = document.getElementById("main")
    // new Example(main)
    new StartGameCanvas();
    new Button();
    // new Level2Proper();
})
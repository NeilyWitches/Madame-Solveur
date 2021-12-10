import Level1Instructions from "./scripts/level_1_instructions";
import Level2Proper from "./scripts/level_2_proper";
import Level2Instructions from "./scripts/level_2_instructions";
import Level3Story from "./scripts/level_3_story";
import StartMenu from "./scripts/start_menu";
import Level1Story from './scripts/level_1_story';
import Level1Proper from "./scripts/level_1_proper";
import Level2Story from './scripts/level_2_story';
import Level3Proper from './scripts/level_3_proper';
import ComingSoon from "./scripts/coming_soon";
import Level3Instructions from "./scripts/level_3_instructions";
import Level2Password from './scripts/level_2_password';
import Level3Password from './scripts/level_3_password';

document.addEventListener("DOMContentLoaded", () => {
    createAllSound()
    muteAllSound()
    const soundButton = document.getElementById('sound-button');
    soundButton.addEventListener('click', clickSoundButton);
    new StartMenu();
    // new Level1Story();
    // new Level1Instructions();
    // new Level1Proper();
    // new Level2Story();
    // new Level2Instructions;
    // new Level3Story;
    // new Level2Proper;
    // new Level3Proper;
    // new ComingSoon
    // new Level3Instructions
    // new Level2Password;
    // new Level3Password;
})

function clickSoundButton() {
    const soundButton = document.getElementById('sound-button');
    const sounds = document.getElementsByClassName('sound')
    const startMenuMusic = document.getElementById('start-menu-music');
    const header = document.getElementsByTagName('h1')[0].innerText
    
    if (header === 'Madame Solveur' || header === 'Continue') {
        startMenuMusic.play()
    }

    if (soundButton.innerText === 'Enable') {
        soundButton.innerText = 'Disable'
        for (let i = 0; i < sounds.length; i++) {
            sounds[i].muted = false;
        }
    } else {
        soundButton.innerText = 'Enable'
        for (let i = 0; i < sounds.length; i++) {
            sounds[i].muted = true;
        }
    }
}

function muteAllSound() {
    const sounds = document.getElementsByClassName('sound')
    for (let i = 0; i < sounds.length; i++) {
        sounds[i].muted = true;
    }
}

function createAllSound() {
    const body = document.getElementById('body')

    const start_menu = new Audio();
    body.appendChild(start_menu);
    start_menu.src = 'assets/sounds/start_menu.mp3'
    start_menu.setAttribute('class', 'sound');
    start_menu.setAttribute('id', 'start-menu-music')
    start_menu.loop = true;

    const story = new Audio();
    body.appendChild(story);
    story.src = 'assets/sounds/story.mp3'
    story.setAttribute('class', 'sound');
    story.setAttribute('id', 'story-music');
    story.loop = true;

    const thinking = new Audio();
    body.appendChild(thinking);
    thinking.src = 'assets/sounds/thinking.mp3'
    thinking.setAttribute('class', 'sound');
    thinking.setAttribute('id', 'thinking-music');
    thinking.loop = true;

    const comingSoon = new Audio();
    body.appendChild(comingSoon);
    comingSoon.src = 'assets/sounds/comingSoon.mp3'
    comingSoon.setAttribute('class', 'sound');
    comingSoon.setAttribute('id', 'coming-soon-music');
    comingSoon.loop = true;
}
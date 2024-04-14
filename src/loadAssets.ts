import jump from '../assets/jump.mp3'
import gameOver from '../assets/gameOver.mp3'
import level from '../assets/level.mp3'
import spriteImage from '../assets/sprite.png'

export const sprite = new Image();
export const jumpSound = new Audio();
export const gameOverSound = new Audio();
export const levelSound = new Audio();

const loadImage = async() => {
    sprite.src = spriteImage;
    await sprite.decode()
};

const loadSounds = async() => {
    jumpSound.src = jump;
    gameOverSound.src = gameOver;
    levelSound.src = level;
    await jumpSound.load();
    await gameOverSound.load();
    await levelSound.load();
}

export const loadAssets = async()=> {
    await loadImage();
    await loadSounds();
}
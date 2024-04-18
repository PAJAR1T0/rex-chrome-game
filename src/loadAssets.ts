import jump from '../assets/jump.mp3'
import gameOver from '../assets/gameOver.mp3'
import level from '../assets/level.mp3'
import spriteImage from '../assets/sprite.png'

export const sprite: HTMLImageElement = new Image();
export const jumpSound: HTMLAudioElement = new Audio();
export const gameOverSound: HTMLAudioElement = new Audio();
export const levelSound: HTMLAudioElement = new Audio();

const loadImage = async(): Promise<void> => {
    sprite.src = spriteImage;
    await sprite.decode()
};

const loadSounds = async(): Promise<void> => {
    jumpSound.src = jump;
    gameOverSound.src = gameOver;
    levelSound.src = level;
    await jumpSound.load();
    await gameOverSound.load();
    await levelSound.load();
}

export const loadAssets = async(): Promise<void> => {
    await loadImage();
    await loadSounds();
}
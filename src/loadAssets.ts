export const sprite = new Image();
export const jumpSound = new Audio();
export const gameOverSound = new Audio();
export const levelSound = new Audio();

const loadImage = async(): Promise<void> => {
    sprite.src = '../assets/sprite.png';
    await sprite.decode()
};

const loadSounds = async(): Promise<void> => {
    jumpSound.src = '../assets/jump.mp3';
    gameOverSound.src = '../assets/gameover.mp3';
    levelSound.src = '../assets/level.mp3';
    await jumpSound.load();
    await gameOverSound.load();
    await levelSound.load();
}

export const loadAssets = async(): Promise<void> => {
    await loadImage();
    await loadSounds();
}
export const sprite = new Image();

export const loadImage = async(): Promise<void> => {
    sprite.src = '../assets/sprite.png';
    await sprite.decode()
};
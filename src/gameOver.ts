import { configValues, ctx, sprites, sprite, newGameButton, gameOverPointsLogic, gameOverSound } from './index';

export let gameOver: boolean = false;
let hasNewGameButton: boolean = false;

export const gameOverLogic = () => {
    gameOverSound.play();
    gameOver = true;
    ctx.font = '50px Pixelify Sans';
    ctx.fillStyle = '#505050';
    ctx.fillText('GAME OVER', 170, 80);
    replayIcon(sprites['replayIcon']);
    gameOverPointsLogic();
}

export const setGameOver = () => {
    gameOver = false;
}

const replayIcon = ({h,w,x,y}: {h: number, w: number, x: number, y: number}) => {
    ctx.drawImage(sprite, x, y, w, h, ((configValues.canvasMaxWidth / 2) - (h / 4)), 90, w / 2, h / 2)
    if (!hasNewGameButton) {
        newGameButton(((configValues.canvasMaxWidth / 2) - (h / 4)), 90, w / 2, h / 2);
        hasNewGameButton = true;
    }
}
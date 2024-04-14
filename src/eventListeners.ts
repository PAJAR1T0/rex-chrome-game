import { start, jump, gameOver, setGameOver, newGame, canvas, chorsCanvas, jumpSound } from "./index";

let gameStarted = false;
export let duck = false;

export const eventListeners = () => {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            if (gameOver) {
                setGameOver();
                newGame();
            }
            
            if ( !gameStarted ) {
                gameStarted = true;
                return start();
            }
            jump()
            jumpSound.play();
        }
        if (event.key === 'ArrowDown') {
            if (duck) return;
            duck = true;
        }
    });
    window.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowDown') {
            duck = false;
        }
    });

};

export const newGameButton = (buttonX: number, buttonY: number, buttonWidth: number, buttonHeight: number) => {
    canvas.addEventListener('click', (event) => {
        let x = event.clientX - chorsCanvas.x;
        let y = event.clientY - chorsCanvas.y;
        if ( x > buttonX && x < buttonX + buttonWidth && y > buttonY && y < buttonY + buttonHeight && gameOver) {
            setGameOver();
            newGame();
        }
    });
}
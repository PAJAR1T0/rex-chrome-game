import { start, jump, gameOver, setGameOver, newGame, canvas, jumpSound, newGameButtonInterface } from "./index";

let gameStarted: boolean = false;
export let duck: boolean = false;

export const eventListeners = (): void => {
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

export const newGameButton: newGameButtonInterface = (buttonX, buttonY, buttonWidth, buttonHeight) => {
    canvas.addEventListener('click', (event: MouseEvent) => {
        let chorsCanvas = canvas.getBoundingClientRect();
        let x = event.clientX - chorsCanvas.x;
        let y = event.clientY - chorsCanvas.y;
        console.log(chorsCanvas.x, chorsCanvas.y)
        console.log(x, y, buttonX, buttonY, buttonWidth, buttonHeight, gameOver)
        if ( x > buttonX && x < buttonX + buttonWidth && y > buttonY && y < buttonY + buttonHeight && gameOver) {
            setGameOver();
            newGame();
        }
    });
}
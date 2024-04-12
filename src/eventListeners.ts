import { configValues,
         start, jump,
         dinoActualY, isJumping} from "./index";

let gameStarted = false;
export let duck = false;

export const eventListeners = () => {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            if ( !gameStarted ) {
                gameStarted = true;
                return start();
            }
            jump()
        }
        if (event.key === 'ArrowDown') {
            if (duck) return;
            duck = true;
        }
    });
    window.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowUp') {
            
        }
        if (event.key === 'ArrowDown') {
            duck = false;
        }
    });
};
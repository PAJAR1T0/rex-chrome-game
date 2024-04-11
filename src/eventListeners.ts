import { configValues,
         start, jump,
         dinoActualY} from "./index";

let gameStarted = false;
export let duck = false;

export const eventListeners = () => {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            if ( !gameStarted ) {
                gameStarted = true;
                return start();
            }
            if ( configValues.dinoY > dinoActualY) return;
            console.log('jump');
            jump();
        }
        if (event.key === 'ArrowDown') {
            if (duck) return;
            duck = true;
        }
    });
    window.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowUp') {
            console.log('up');
        }
        if (event.key === 'ArrowDown') {
            duck = false;
        }
    });
};
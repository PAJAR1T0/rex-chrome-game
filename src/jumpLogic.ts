import { configValues } from './index';

export let dinoActualY: number = configValues.dinoY;
let dinoJumpVelocity: number = 13;
const dinoHeightJump: number = 90;
const dinoMaxHeight: number = configValues.dinoY - dinoHeightJump;
export let isJumping: boolean = false;
let isUpping: boolean = false


const upping = (): void =>  {
        if (dinoMaxHeight < dinoActualY - 1) {
            dinoJumpVelocity -= dinoJumpVelocity * .11;
            dinoActualY -= dinoJumpVelocity;
            return;
        }
        isUpping = false;
    }

const downing = (): void =>  {
        if ( dinoActualY < configValues.dinoY - 6 ) {
            dinoJumpVelocity += dinoJumpVelocity * .13;
            (configValues.dinoY > dinoActualY ) ? dinoActualY += dinoJumpVelocity : dinoActualY = configValues.dinoY;
            return
        }
        dinoActualY = 140
        dinoJumpVelocity = 13;
        isJumping = false;
    }

export const jumpLogic = (): void =>  {
    if (isJumping) {
        if (isUpping) return upping();
        return downing();
    }
}


export const jump = (): void => {    
    if (!isJumping) {
        isJumping = true;
        isUpping = true;
    }
}


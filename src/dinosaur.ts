import { ctx, sprite, dinoActualY, configValues, duck, spriteInterface } from './index';

let dinoDrawLeg: string = 'RightLeg';
export let dinoPosture: string = `dino${dinoDrawLeg}`;

export const dinosaurInterval = () => {
        setInterval(() => {
            dinoDrawLeg = dinoDrawLeg === 'RightLeg' ? 'LeftLeg' : 'RightLeg';
        }, 1000/10);
    }


export const drawDinosaur = ( { h, w, x, y }: spriteInterface ) => {
    ctx.drawImage(sprite, x, y, w, h, configValues.dinoX, dinoActualY - h / 2, w / 2, h / 2);
}

export const dinosaurPosture = () => {
        if ( configValues.dinoY === dinoActualY ) {
            return dinoPosture = ( duck ) ? `dinoDuck${ dinoDrawLeg }` : `dino${ dinoDrawLeg }`;
        }
        return dinoPosture = 'dino';
}


import { configValues, groundVelocity, ctx, sprite, spriteInterface } from "./index";

export const drawCloud = ( { h, w, x, y }: spriteInterface ) => {
    configValues.clouds.x1 -= groundVelocity / 3;
    configValues.clouds.x2 -= groundVelocity / 3;
    
    ctx.drawImage(sprite, x, y, w, h, configValues.clouds.x1, 20, w, h);
    ctx.drawImage(sprite, x, y, w, h, configValues.clouds.x2, 70, w *.7, h*.7);
    
    if (configValues.clouds.x1 <= -100) configValues.clouds.x1 = 600;
    if (configValues.clouds.x2 <= -100) configValues.clouds.x2 = 600;
};

export const drawGround = ( { h, w, y }: spriteInterface ) => {
    configValues.groundx += groundVelocity;
    ctx.drawImage(sprite, configValues.groundx, y, w, h, 0, configValues.groundy, w, h);
    
    if (configValues.groundx > w - 600) {
        ctx.drawImage(sprite, 0, y, w, h, w - configValues.groundx, 123, w, h);
        ( configValues.groundx >= w) ? configValues.groundx = 0 : configValues.groundx;
    }
};
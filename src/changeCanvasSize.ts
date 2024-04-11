import { configValues, ctx, canvas, scale } from "./index";

export const expandCanvas = () => {
    setTimeout(() => { 
        configValues.canvasWidth += 4;
        updateCanvasSize(configValues.canvasWidth);
        ctx.font = '25px Pixelify Sans';
        ctx.fillStyle = 'gray';  
        if (configValues.canvasWidth < 600) expandCanvas();
    }, 1);
}

const updateCanvasSize = (width: number) => {
    canvas.style.width = `${width}px`;
    canvas.width = Math.floor(width * scale);
    ctx.scale(scale, scale);
}

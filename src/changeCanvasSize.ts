import { configValues, ctx, canvas, scale } from "./index";

let canvasWidth = configValues.canvasInitialWidth;

export const expandCanvas = () => {
    setTimeout(() => { 
        canvasWidth += 4;
        updateCanvasSize(canvasWidth);
        if (canvasWidth < configValues.canvasMaxWidth) expandCanvas();
    }, 1);
}

const updateCanvasSize = (width: number) => {
    canvas.style.width = `${width}px`;
    canvas.width = Math.floor(width * scale);
    ctx.scale(scale, scale);
}

import { configValues, ctx, canvas, scale, app } from "./index";

let canvasWidth = configValues.canvasInitialWidth;

export const expandCanvas = () => {
    setTimeout(() => { 
        canvasWidth += 4;
        updateCanvasSize(canvasWidth);
        if (canvasWidth < configValues.canvasMaxWidth) return expandCanvas();
    }, 1);
}

const updateCanvasSize = (width: number) => {
    canvas.style.width = `${width}px`;
    canvas.width = Math.floor(width * scale);
    ctx.scale(scale, scale);
}

export const activeShadows = () => {
    app.style.filter = 'drop-shadow(0 0 7px rgba(0, 0, 0, 0.2))';
    app.style.boxShadow = '0 0 30px rgba(0, 0, 0, 0.1)';
    app.style.borderRadius = '20px';
}

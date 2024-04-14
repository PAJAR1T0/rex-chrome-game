import { configValues } from "./index";

// Added type any to resolve the errors

export let ctx: any;
export let canvas: any;
export let scale: any;
export let chorsCanvas: any;

export const createPage = (): void => {
    const app: any = document.getElementById('app');
    canvas = document.createElement('canvas');

    scale = window.devicePixelRatio;
    canvas.style.width = `${configValues.canvasInitialWidth}px`;
    canvas.style.height = '150px';
    canvas.width = Math.floor(configValues.canvasInitialWidth * scale);
    canvas.height = Math.floor(150 * scale);
    canvas.style.backgroundColor = 'transparent';
    ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = true;
    app.appendChild(canvas);
    chorsCanvas = canvas.getBoundingClientRect();
}


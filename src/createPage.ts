import { configValues } from "./index";

export let ctx: CanvasRenderingContext2D;
export let canvas: HTMLCanvasElement
export let scale: number;
export let app: HTMLDivElement;

export const createPage = (): void => {
    app = document.getElementById('app') as HTMLDivElement;
    canvas = document.createElement('canvas');
    scale = window.devicePixelRatio;
    canvas.style.width = `${configValues.canvasInitialWidth}px`;
    canvas.style.height = '150px';
    canvas.width = Math.floor(configValues.canvasInitialWidth * scale);
    canvas.height = Math.floor(150 * scale);
    canvas.style.backgroundColor = 'transparent';
    ctx = canvas.getContext('2d')!;
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = true;
    app.appendChild(canvas);
}


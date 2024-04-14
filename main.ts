import './assets/style.css'
import { loadImage, createPage, eventListeners, drawDinosaur, sprites, drawGround } from './src/index.ts'

(async() => {
    let sprite: HTMLImageElement;
    const main = async() => {
        await loadImage();
        await createPage();
        eventListeners();
        drawGround(sprites.ground);
        drawDinosaur(sprites.dino);
    };
    
    main();

})()
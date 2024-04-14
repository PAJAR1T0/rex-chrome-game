import './assets/style.css'
import { createPage, eventListeners, drawDinosaur, sprites, drawGround, loadAssets } from './src/index.ts'

(async() => {
    let sprite: HTMLImageElement;
    const main = async() => {
        await loadAssets();
        await createPage();
        eventListeners();
        drawGround(sprites.ground);
        drawDinosaur(sprites.dino);
    };
    
    main();

})()
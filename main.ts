import './assets/style.css'
import { createPage, eventListeners, drawDinosaur, sprites, drawGround, loadAssets } from './src/index'

(async() => {
    const main = async(): Promise<void> => {
        await loadAssets();
        await createPage();
        eventListeners();
        drawGround(sprites.ground);
        drawDinosaur(sprites.dino);
    };
    
    main();

})()
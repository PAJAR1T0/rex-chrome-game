import {dinoActualY, configValues, sprites, gameOverLogic, duck} from './index'

let dinoWidth = sprites['dino'].w / 2
let dinoHeight = sprites['dino'].h / 2

export const checkColition = ({obstacleActualX, drawY, obstacleHeight, obstacleWidth, type}) => {
    let dinoActualHeight: number = (!duck) ? dinoHeight : sprites['dinoDuckLeftLeg'].h / 2;
    drawY = (type === 'cactus' || type === 'cactusDoubleB') ? drawY + 6 : drawY;
    if (configValues.dinoX + dinoWidth - 13 > obstacleActualX && configValues.dinoX + 10 < obstacleActualX + obstacleWidth){
        if (dinoActualY - 5 > drawY + (drawY * .20) && dinoActualY - dinoActualHeight < drawY + obstacleHeight) gameOverLogic();
    }
}

const app = document.getElementById('app');
const canvas = document.createElement('canvas');


const scale = window.devicePixelRatio;

let dino;
let duck = false;
let groundx = 0;
let clouds = {x1: 800, x2: 500};
let groundVelocity = 7;
let dinoDrawLeg = 'RightLeg';
let dinoPosture = `dino${dinoDrawLeg}`;
let gameStarted = false;
let canvasWidth = 70;
let points = 0;
let drawPoints = 0;
let historicalPoints = '0000';
let jump = false;
let dinoY = 140;
let dinoActualY = dinoY;
let dinoHeightJump = 90;
let dinoMaxHeight = dinoY - dinoHeightJump;
let dinoJumpVelocity = 13;
let isUpping = true;


canvas.style.width = `${canvasWidth}px`;
canvas.style.height = '150px';
canvas.width = Math.floor(canvasWidth * scale);
canvas.height = Math.floor(150 * scale);
canvas.style.backgroundColor = 'transparent';
const ctx = canvas.getContext('2d');
ctx.scale(scale, scale);
ctx.imageSmoothingEnabled = true;
app.appendChild(canvas);

const loadImage = async() => {
    const image = new Image();
    image.src = '../assets/sprite.png';
    await image.decode()
    dino = image;
};



const sprites = {
    dino: { h: 86, w: 80, x: 350, y: 31 },
    dinoLeftLeg: { h: 86, w: 80, x: 432, y: 31 },
    dinoRightLeg: { h: 86, w: 80, x: 514, y: 31 },
    dinoDuckLeftLeg: { h: 52, w: 110, x: 596, y: 31 },
    dinoDuckRightLeg: { h: 52, w: 110, x: 596, y: 85 },
    ground: { h: 28, w: 2400, x: 0, y: 2 },
    cloud: { h: 28, w: 92, x: 794, y: 31 },
}

const drawCloud = ({h,w,x,y}) => {
    clouds.x1 -= groundVelocity / 3;
    clouds.x2 -= groundVelocity / 3;
    ctx.drawImage(dino, x, y, w, h, clouds.x1, 20, w, h);
    ctx.drawImage(dino, x, y, w, h, clouds.x2, 70, w *.7, h*.7);
    if (clouds.x1 <= -100) clouds.x1 = 600;
    if (clouds.x2 <= -100) clouds.x2 = 600;
};

const drawGround = ({h,w,x,y}) => {
    groundx += groundVelocity;
    ctx.drawImage(dino, groundx, y, w, h, 0, 123, w, h);

    if (groundx > w - 600) {
        ctx.drawImage(dino, 0, y, w, h, w - groundx, 123, w, h);
        if ( groundx >= w) {
            groundx = 0;
        }
    }
};


const jumpLogic = () => {
    
    if (jump) {
        if (isUpping) {
            if (dinoMaxHeight < dinoActualY - 1) {
                dinoJumpVelocity -= dinoJumpVelocity * .11;
                return dinoActualY -= dinoJumpVelocity
            }
            isUpping = false;
        }
        
        
    

        if ( dinoActualY < dinoY - 6 ) {
            dinoJumpVelocity += dinoJumpVelocity * .13;
            (dinoY > dinoActualY ) ? dinoActualY += dinoJumpVelocity : dinoY;
            return;
        }
        dinoActualY = dinoY
        dinoJumpVelocity = 13;
        jump = false;
    };
};

const drawDinosaur = ({h,w,x,y}) => {
    ctx.drawImage(dino, x, y, w, h, 20, dinoActualY - h / 2, w / 2, h / 2);
}

const dinosaurInterval = () => {
    setInterval(() => {
            dinoDrawLeg = dinoDrawLeg === 'RightLeg' ? 'LeftLeg' : 'RightLeg';
        }, 1000/10);
    }

const managePoints = () => {
    setTimeout(() => {
        points++;
        managePoints();
    }, 75);
}

const drawActualPoints = () => {
    drawPoints = (points.toString().length === 1) ? `000${points}` : 
                 (points.toString().length === 2) ? `00${points}` :
                 (points.toString().length === 3) ? `0${points}` : points;
    ctx.fillText(drawPoints, 540, + 25);
};

const drawHistoricalPoints = () => {
    historicalPoints = (points > historicalPoints * 1) ? drawPoints : historicalPoints;
    ctx.fillText(historicalPoints, 470, + 25);
};

const drawDinosaurLogic = () => {
    if (!jump) {
        return dinoPosture = (duck) ? `dinoDuck${dinoDrawLeg}` : `dino${dinoDrawLeg}`;
    }
    dinoPosture = 'dino'
}

const gameFrames = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGround(sprites.ground);
    jumpLogic();
    drawDinosaurLogic();
    drawCloud(sprites.cloud);
    drawDinosaur(sprites[dinoPosture]);
    drawActualPoints();
    drawHistoricalPoints();

    requestAnimationFrame(gameFrames);
};

const expandCanvas = () => {
    setTimeout(() => { 
        canvasWidth += 4;
        updateCanvasSize(canvasWidth);
        ctx.font = '25px Pixelify Sans';
        ctx.fillStyle = 'gray';  
        if (canvasWidth < 600) expandCanvas();
    }, 1);
}

const eventListeners = () => {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            if ( !gameStarted ) {
                gameStarted = true;
                return start();
            }
            if (jump) return;

            jump = true;
            isUpping = true;
        }
        if (event.key === 'ArrowDown') {
            if (duck) return;
            duck = true;
        }
    });
    window.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowUp') {
            console.log('up');
        }
        if (event.key === 'ArrowDown') {
            duck = false;
        }
    });
};

const updateCanvasSize = (width) => {
    canvas.style.width = `${width}px`;
    canvas.width = Math.floor(width * scale);
    ctx.scale(scale, scale);
}

const start = () => {
    requestAnimationFrame(gameFrames);
    dinosaurInterval();
    expandCanvas();
    managePoints();
}

const main = async() => {
    await loadImage();
    eventListeners();
    drawGround(sprites.ground);
    drawDinosaur(sprites.dino);
};

main();
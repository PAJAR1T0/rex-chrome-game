export interface newGameButtonInterface {
    (buttonX: number, buttonY: number, buttonWidth: number, buttonHeight: number): void;
}

export interface spriteInterface {
    x: number;
    y: number;
    w: number;
    h: number;
};

export interface colitionInterface {
    obstacleActualX: number, 
    obstacleHeight: number, 
    obstacleWidth: number, 
    drawY: number, 
    type: string
};

export interface obstacleInterface {
    type: string, 
    x: number, 
    y: number, 
    w: number, 
    h: number, 
    initialX: number, 
    obstacleActualX: number, 
    drawY : number, 
    obstacleHeight: number, 
    obstacleWidth: number, 
    isDrawingObstacle: boolean, 
    isDrawingBird: boolean, 
    baseY: number,
}
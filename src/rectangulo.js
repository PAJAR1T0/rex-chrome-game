const app = document.querySelector('#app');
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.backgroundColor = 'white';
app.appendChild(canvas);
const ctx = canvas.getContext('2d');

const drawRect = (x, y, width, height, fillColor, strokeColor) => {
    ctx.beginPath();
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 5;
    ctx.rect(x, y, width, height)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};

const drawLine = ([initialX, initialY, finalX, finalY, strokeColor]) => {
    ctx.beginPath();
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 5;
    ctx.moveTo(initialX, initialY);
    ctx.lineTo(finalX, finalY);
    ctx.stroke();
    ctx.closePath();
};

const drawCircle = ([x, y, radius, startAngle, endAngle, isClock = false]) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, isClock);
    ctx.stroke();
    ctx.closePath();
};

drawRect(100, 100, 200, 100, 'red', 'black');
drawRect(300, 300, 200, 100, 'blue', 'black');
drawLine([500, 100, 700, 300, 'green']);
drawLine([700, 100, 500, 300, 'green']);

const esvasticLine = [
    [900, 100, 900, 300, 'purple'],
    [800, 200, 1000, 200, 'purple'],
    [800, 100, 900, 100, 'purple'],
    [900, 300, 1000, 300, 'purple'],
    [800, 200, 800, 300, 'purple'],
    [1000, 100, 1000, 200, 'purple'],
    [850, 150, 950, 250, 'purple'],
    [950, 150, 850, 250, 'purple']]

const degreesToRadians = degrees => degrees * Math.PI / 180;

esvasticLine.forEach(line => drawLine(line));



// const valores = [0, 300],
//       radianes = [Math.PI, Math.PI * 2];


// const circle = () => {
//     setTimeout(() => {
//         ctx.clearRect(625, 325, 150, 150);

//         valores.map( (value, index) => { 
//         (value < 360) ? valores[index]++ : valores[index] = 0; 
//         radianes[index] = degreesToRadians(valores[index]);
//         });
//         drawCircle([700, 400, 70, radianes[0], radianes[1]]);
//         circle();  
//     }, 5)};
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.moveTo(900, 400);
ctx.quadraticCurveTo(850, 300, 700, 400);
ctx.quadraticCurveTo(850, 500, 900, 400);
ctx.quadraticCurveTo(800, 450, 900, 600);
ctx.quadraticCurveTo(1000, 450, 900, 400);
ctx.quadraticCurveTo(950, 300, 1100, 400);
ctx.quadraticCurveTo(950, 500, 900, 400);
ctx.quadraticCurveTo(800, 350, 900, 200);
ctx.quadraticCurveTo(1000, 350, 900, 400);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
drawCircle([900, 400, 70, 0, 2 * Math.PI]);
ctx.fill();
ctx.closePath();

ctx.beginPath();
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(1, 'white');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 200, 100);
ctx.closePath();


// Establecer estilos de texto
ctx.fillStyle = 'black';
ctx.font = 'bold 24px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Dibujar texto rellenado
ctx.fillText('¡Hola, mundo!', canvas.width / 2, canvas.height / 2);


let draw = false;
canvas.addEventListener('mousedown', () => {
    ctx.beginPath();
    draw = true
});

canvas.addEventListener('mouseup', () => draw = false);

canvas.addEventListener('mousemove', (event) => {
    if (draw) {
        const canvasPosition = canvas.getBoundingClientRect();
        const x = event.clientX - canvasPosition.left;
        const y = event.clientY - canvasPosition.top;
        
        ctx.lineTo(x, y);
        ctx.stroke();
    };
});



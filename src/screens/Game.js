import React, {useEffect, useRef, useState} from 'react';
import "../assets/game.scss";

const Game = () => {
    const [score, setScore] = useState(0);
    const canvasRef = useRef(null);
    const WIDTH = 400;
    const HEIGHT = 400;
    let gridSize = 20; let tileSize = 20;
    let speedX = 0; let speedY = 0;
    let context;
    let flag; let snake;
    const snakeHeight = 20;

    useEffect(() => {
        createCanvas();
        startGame();
        window.addEventListener("keydown", handleKeyEvent);
    });

    const startGame = () => {
        let snakeX = 100; let snakeY = 100; let snakeWidth = 60;
        let flagX; let flagY;
        let minX = snakeHeight / 2; let maxX = WIDTH - snakeHeight / 2; let minY = 0; let maxY = HEIGHT - snakeHeight;
        snake = new Snake("right", snakeX, snakeY, snakeWidth, snakeHeight);
        do {
            flagX = Math.floor(Math.random() * (maxX - minX + 1) + minX);
            flagY = Math.floor(Math.random() * (maxY - minY + 1) + minY);
        } while ( !(flagX <= snakeX - 10) && !(flagX >= snakeX + snakeWidth + snakeHeight / 2));
        flag = new Flag("blue", flagX, flagY, snakeHeight);
    };

    function Snake(direction, x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.direction = direction;
        const partWidth = this.width / 3;
        let head = new Part("#1d6f0f", x, y, partWidth, this.height);
        let body = new Part("#17306f", x + partWidth, y, partWidth, this.height);
        let tail = new Part("#6f2a24", x + 2 * partWidth, y, partWidth, this.height);
        this.parts = [head, body, tail];
        this.update = () => {
            this.parts.forEach(part => { part.update(); part.newPos(); });
        };
    }

    function Part (color, x, y, width, height) {
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.width = width;
        this.height = height;
        this.color = color;
        this.update = () => {
            context.fillStyle = color;
            context.strokeStyle = "darkgreen";
            context.fillRect(this.x, this.y, this.width, this.height);
            context.strokeRect(this.x, this.y, this.width, this.height);
        };
        this.newPos = () => {
            this.x += this.speedX;
            this.y += this.speedY;
        };
    }

    const createCanvas = () => {
        const canvas = canvasRef.current;
        context = canvas.getContext('2d');
        context.fillStyle = "rgba(0, 0, 0, 0)";
        context.fillRect(0, 0, WIDTH, HEIGHT);
    };

    const handleKeyEvent = (event) => {
        switch (event.keyCode) {
            case 38:
                speedY = -1;
                speedX = 0;
                break;
            case 40:
                speedY = 1;
                speedX = 0;
                break;
            case 37:
                speedY = 0;
                speedX = -1;
                break;
            case 39:
                speedY = 0;
                speedX = 1;
                break;
            default:
                break;
        }
    };


    function Flag (color, x, y, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x - snakeHeight / 2, y + this.height / 2);
        context.lineTo(x, y + this.height);
        context.lineTo(x + snakeHeight / 2, y + this.height / 2);
        context.lineTo(x, y);
        this.update = () => {
            context.strokeStyle = color;
            context.stroke();
        };
        this.newPos = () => {
            this.x = Math.floor(Math.random() * (WIDTH - 20));
            this.y = Math.floor(Math.random() * (HEIGHT - 20));
        };
    }

    const captureFlag = () => {
        if (flag.y === snake[0].y) {
            setScore(score => score + 5);
            flag.newPos();
            snake.push(new Part("#6f6e6d", WIDTH / 2, HEIGHT / 2, 20, 20));
        }
    };

    const updateArea = () => {
        context.clearRect(0, 0, WIDTH, HEIGHT);
        snake.update();
        flag.update();
        // captureFlag();
    };

    return (
        <div className="game">
            <div className="board">
                <p> Snake </p>
                <canvas className="canvas" ref={canvasRef} width={WIDTH} height={HEIGHT}/>
            </div>
            <div className="labels">
                <button onClick={startGame}> Start Game </button>
                <p> score: {score} </p>
            </div>
        </div>
    )
};


export default Game;
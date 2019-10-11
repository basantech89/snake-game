import React, {useEffect, useRef, useState} from 'react';
import "../assets/game.scss";

const Game2 = () => {
	const canvasRef = useRef(null);
	const WIDTH = 400;
	const HEIGHT = 400;
	let context;
	let gridSize = 20;
	let speedX = 0; let speedY = 0;

	useEffect(() => {
		startGame();
		window.addEventListener("keydown", handleKeyEvent);
	});

	const createCanvas = () => {
		const canvas = canvasRef.current;
		context = canvas.getContext('2d');
		context.fillStyle = "rgba(0, 0, 0, 0)";
		context.fillRect(0, 0, WIDTH, HEIGHT);
	};

	const clearCanvas = () => {
		context.clearRect(0, 0, WIDTH, HEIGHT);
		context.strokeRect(0, 0, WIDTH, HEIGHT);
	};

	const startGame = () => {
		createCanvas();
		let snake = [ { x: 100, y: 100 }, { x: 80, y: 100 }, { x: 60, y: 100 }, { x: 40, y: 100 }, { x: 20, y: 100 } ];
		clearCanvas();
		moveSnake(snake, 0, -20);
		moveSnake(snake, 0, -20);
		moveSnake(snake, 0, -20);
		moveSnake(snake, 0, -20);
		moveSnake(snake, 0, -20);
		drawSnake(snake);
	};
	
	const drawSnake = (snake) => {
		snake.forEach((part) => {
			context.fillStyle = "limegreen";
			context.strokeStyle = "darkgreen";
			context.fillRect(part.x, part.y, 20, 20);
			context.strokeRect(part.x, part.y, 20, 20);
		});
	};

	const moveSnake = (snake, dx, dy) => {
		const head = { x: snake[0].x + dx, y: snake[0].y + dy };
		snake.unshift(head);
		snake.pop();
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

	return (
		<div className="game">
			<div className="board">
				<p> Snake </p>
				<canvas className="canvas" ref={canvasRef} width={WIDTH} height={HEIGHT}/>
			</div>
			<div className="labels">
				<button onClick={startGame}> Start Game </button>
				{/*<p> score: {score} </p>*/}
			</div>
		</div>
	)
};

export default Game2;
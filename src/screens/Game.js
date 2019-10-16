import React, { useEffect, useRef, useState } from 'react';
import * as snake from '../logics/snake';
import * as mouse from "../logics/mouse";
import "../assets/game.scss";

let context;
let ts = 20;
const WIDTH = 400;
const HEIGHT = 400;
let mouseX; let mouseY;

const Game = () => {
	let [score, setScore] = useState(0);
	const canvasRef = useRef(null);
	let speed = 1000 / 10;
	let dx = ts; let dy = 0;

	useEffect(() => {
		startGame();
		window.addEventListener("keydown", handleKeyEvent);
		setInterval(updateArena, speed);
	});

	const createCanvas  = () => {
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
		clearCanvas();
		snake.drawSnake();
		[mouseX, mouseY] = mouse.changePos();
		mouse.drawMouse(mouseX, mouseY);
	};

	const updateArena = () => {
		clearCanvas();
		snake.moveSnake(dx, dy);
		snake.drawSnake();
		mouse.drawMouse(mouseX, mouseY);
		eatMouse(snake.snake);
	};

	const eatMouse = (snake) => {
		if (snake[0].x === mouseX && snake[0].y === mouseY) {
			snake.push({ x: mouseX, y: mouseY });
			[mouseX, mouseY] = mouse.changePos();
			setScore(prevScore => prevScore + 5);
		}
	};

	const handleKeyEvent = (event) => {
		switch (event.keyCode) {
			case 38:
				if (dy === 0) {
					dy = -ts;
					dx = 0;
				}
				break;
			case 40:
				if (dy === 0) {
					dy = ts;
					dx = 0;
				}
				break;
			case 37:
				if (dx === 0) {
					dy = 0;
					dx = -ts;
				}
				break;
			case 39:
				if (dx === 0) {
					dy = 0;
					dx = ts;
				}
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
				<p> score: {score} </p>
			</div>
		</div>
	)
};

export default Game;

export {
	context,
	ts,
	WIDTH,
	HEIGHT,
}
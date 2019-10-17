import React, { useEffect, useRef } from 'react';
import * as arena from "../logics/arena";
import "../assets/game.scss";

let context;
let ts = 20;
const canvasWidth = window.innerWidth - 5; const canvasHeight = window.innerHeight - 5;
let updateScore;
let resetGame;

const Game = () => {
	const canvasRef = useRef(null);
	let score = 0;
	let speed = 1000 / 10;
	let dx = ts; let dy = 0;

	useEffect(() => {
		createCanvas();
		arena.createArena();
		startGame();
		window.addEventListener("keydown", handleKeyEvent);
		setInterval(updateCanvas, 1000 / 500);
		setInterval(() => arena.drawArena(dx, dy), speed);
	});

	const createCanvas  = () => {
		const canvas = canvasRef.current;
		context = canvas.getContext('2d');
	};

	updateScore = () => score += 5;

	const showScore = () => {
		context.fillStyle = "#449041";
		context.font = "bold 30px Arial";
		context.fillText(`Score ${score}`, 50, 150);
	};

	const clearCanvas = () => {
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		context.strokeRect(0, 0, canvasWidth, canvasHeight);
	};

	const startGame = () => {
		arena.changeMousePos();
		clearCanvas();
	};

	resetGame = () => {
		score = 0;
	};

	const updateCanvas = () => {
		clearCanvas();
		arena.createArena();
		showScore();
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
			<canvas className="canvas" ref={canvasRef} width={canvasWidth} height={canvasHeight}/>
	)
};

export default Game;

export {
	context,
	ts,
	updateScore,
	resetGame,
	canvasWidth,
	canvasHeight
}
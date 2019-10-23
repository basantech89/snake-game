import React, { useEffect, useRef } from 'react';
import Arena from "./Arena";
import "../assets/game.scss";

let tileSize = 20;
let tilesX = 30;
let tilesY = 20;
let updateScore; let updateCanvas; let clearCanvas; let setSnakeMovement; let handleKeyEvent;
let dx = 0; let dy = 0; let score = 0;
let takingTurn; let setTurn;

const Game = () => {
	const canvasRef = useRef(null);
	const canvasWidth = window.innerWidth - 5; const canvasHeight = window.innerHeight - 5;
	let context;

	useEffect(() => {
		createCanvas();
	});

	const createCanvas  = () => {
		const canvas = canvasRef.current;
		context = canvas.getContext('2d');
	};

	clearCanvas = () => {
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		context.strokeRect(0, 0, canvasWidth, canvasHeight);
	};

	updateScore = (newScore) => score = newScore;

	setSnakeMovement = (x, y) => {
		dx = x;
		dy = y;
	};

	setTurn = (bool) => takingTurn = bool;

	const showScore = () => {
		context.fillStyle = "#076232";
		context.font = "20px 'Press Start 2P'";
		context.fillText(`Score ${score}`, 400, 600);
	};

	updateCanvas = () => {
		clearCanvas();
		showScore();
	};

	handleKeyEvent = (event) => {
		if (takingTurn) return;
		setTurn(true);
		switch (event.keyCode) {
			case 38:
				if (dy === 0)
					setSnakeMovement(0, -tileSize);
				break;
			case 40:
				if (dy === 0)
					setSnakeMovement(0, tileSize);
				break;
			case 37:
				if (dx === 0)
					setSnakeMovement(-tileSize, 0);
				break;
			case 39:
				if (dx === 0)
					setSnakeMovement(tileSize, 0);
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<canvas className="canvas" ref={canvasRef} width={canvasWidth} height={canvasHeight}/>
			<Arena/>
		</div>
	)
};

export default Game;

export {
	tileSize, tilesX, tilesY,
	updateScore,
	updateCanvas,
	setSnakeMovement,
	handleKeyEvent,
	clearCanvas,
	dx, dy, score,
	takingTurn, setTurn
}
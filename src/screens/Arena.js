import React, { useEffect, useRef, useState } from 'react';
import "../assets/game.scss";
import * as game from "./Game";
import * as mouse from "../logics/mouse";
import * as snake from "../logics/snake";


const arenaWidth = 600; const arenaHeight = 400;
let createArena; let changeMousePos;
let context;

const Arena = () => {
	const [speed, setSpeed] = useState(0);
	const [start, setStartStyle] = useState(null);
	const [over, setOverStyle] = useState({ display: 'none' });
	const arenaRef = useRef(null);

	useEffect(() => {
		createArena();
		window.addEventListener("keydown", game.handleKeyEvent);
		let drawInterval; let updateInterval;
		if (start && over) {
			updateInterval = setInterval(updateArena, speed);
			drawInterval = setInterval(drawArena, 1000 / 500);
		}
		return () => {
			clearInterval(drawInterval);
			clearInterval(updateInterval);
		};
	});

	createArena = () => {
		context = arenaRef.current.getContext('2d');
	};

	changeMousePos = () => mouse.changePos();

	const startGame = (event) => {
		setSpeed(event.target.value);
		setStartStyle({ display: 'none' });
		setOverStyle({ display: 'none' });
		changeMousePos();
		game.setSnakeMovement(game.tileSize, 0);
	};

	const gameOver = () => {
		game.setSnakeMovement(0, 0);
		setStartStyle({ display: 'none' });
		setOverStyle(null);
	};

	const resetGame = () => {
		setStartStyle(null);
		setOverStyle({ display: 'none' });
		game.updateScore(0);
		game.clearCanvas();
		clearArena();
	};

	const clearArena = () => {
		context.clearRect(0, 0, arenaWidth, arenaHeight);
		context.strokeRect(0, 0, arenaWidth, arenaHeight);
	};

	const drawArena = () => {
		game.updateCanvas();
		clearArena();
		snake.drawSnake();
		mouse.drawMouse(mouse.mouseX, mouse.mouseY);
	};

	const updateArena = () => {
		game.setTurn(false);
		snake.moveSnake(game.dx, game.dy);
		if (snake.eatItself(mouse.mouseX, mouse.mouseY)) gameOver();
		if (snake.hasHitWalls(-20, arenaWidth, -20, arenaHeight)) gameOver();
		snake.eatMouse(mouse.mouseX, mouse.mouseY);
	};

	return (
		<>
			<canvas className="arena" ref={arenaRef} width={arenaWidth} height={arenaHeight}/>
			<div className="welcome" style={start}>
				<p> Snake </p>
				<p> Choose Level </p>
	 			<button value={1000 / 10} onClick={startGame}> SLUG </button>
				<button value={1000 / 15} onClick={startGame}> WORM </button>
				<button value={1000 / 20} onClick={startGame}> PYTHON </button>
			</div>
			<div className="game-over" style={over}>
				<button onClick={resetGame}> Game Over </button>
			</div>
		</>
	)
};

export default Arena;

export {
	createArena, changeMousePos, context
}
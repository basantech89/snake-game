import * as game from "../screens/Game";
import { snake } from "./snake";
import * as utils from "../utils";

let mouseX; let mouseY;

const changePos = () => {
	// get 2 random nums confined in the canvas width nad height
	const maxX = game.tilesX - 1; const minX = 0;
	const maxY = game.tilesY - 1; const minY = 0;

 	// keep finding the numbers until they collide with the snake position
	do {
		mouseX = Math.floor(Math.random() * (maxX - minX + 1) + minX) * game.tileSize;
		mouseY = Math.floor(Math.random() * (maxY - minY + 1) + minY) * game.tileSize;
	} while (ifCollideWithSnake(mouseX, mouseY));

	return [mouseX, mouseY];
};


// return false if x or y collides with the snake position, true otherwise
const ifCollideWithSnake = (x, y) => {
	let len = snake.length;
	if (snake[0].x + game.tileSize <= x || snake[0].y + game.tileSize <= y ||
		snake[len - 1].x >= x || snake[len - 1].y >= y)
		return false;
	else return true;
};

const drawMouse = (x, y) => {
	utils.drawRect(x, y);
};


export {
	changePos,
	drawMouse,
	mouseX,
	mouseY
}
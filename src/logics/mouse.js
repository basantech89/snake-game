import * as vars from "../screens/Game";
import { snake } from "./snake";
import * as utils from "../utils";


const changePos = () => {
	let mouseX; let mouseY;
	// get 2 random nums confined in the canvas width nad height
	// const maxX = vars.WIDTH - vars.ts; const minX = 0;
	// const maxY = vars.HEIGHT - vars.ts; const minY = 0;
	const maxX = vars.ts - 1; const minX = 0;
	const maxY = vars.ts - 1; const minY = 0;

 	// keep finding the numbers until they collide with the snake position
	do {
		mouseX = Math.floor(Math.random() * (maxX - minX + 1) + minX) * vars.ts;
		mouseY = Math.floor(Math.random() * (maxY - minY + 1) + minY) * vars.ts;
	} while (ifCollideWithSnake(mouseX, mouseY));

	return [mouseX, mouseY];
};


// return false if x or y collides with the snake position, true otherwise
const ifCollideWithSnake = (x, y) => {
	let len = snake.length;
	if (snake[0].x + vars.ts <= x || snake[0].y + vars.ts <= y ||
		snake[len - 1].x >= x || snake[len - 1].y >= y)
		return false;
	else return true;
};

const drawMouse = (x, y) => {
	utils.drawRect(x, y);
};


export {
	changePos,
	drawMouse
}
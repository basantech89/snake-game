import * as game from "../screens/Game";
import * as mouse from "./mouse";
import * as utils from "../utils";

let snake = [ { x: 500, y: 200 }, { x: 480, y: 200 }, { x: 460, y: 200 }, { x: 440, y: 200 }, { x: 420, y: 200 } ];

const drawSnake = () => {
	snake.forEach((part) => {
		utils.drawRect(part.x, part.y);
	});
};

const moveSnake = (dx, dy) => {
	const head = { x: snake[0].x + dx, y: snake[0].y + dy };
	snake.unshift(head);
	snake.pop();
};

const eatMouse = (mouseX, mouseY) => {
	if (snake[0].x === mouseX && snake[0].y === mouseY) {
		snake.unshift({ x: mouseX, y: mouseY });
		mouse.changePos();
		game.updateScore();
	}
};

const hasHitWalls = (left, right, top, bottom) => snake[0].x === left || snake[0].x === right || snake[0].y === top || snake[0].y === bottom;

export {
	snake, drawSnake, moveSnake, eatMouse, hasHitWalls
}
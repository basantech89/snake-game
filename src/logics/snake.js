import * as utils from "../utils";
import * as game from "../screens/Game";

let snake = [ { x: 100, y: 100 }, { x: 80, y: 100 }, { x: 60, y: 100 }, { x: 40, y: 100 }, { x: 20, y: 100 } ];

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

export {
	snake, drawSnake, moveSnake
}
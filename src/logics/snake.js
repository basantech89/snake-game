import * as game from "../screens/Game";
import * as mouse from "./mouse";
import * as utils from "../utils";

let snake = [ { x: 180, y: 100 }, { x: 160, y: 100 }, { x: 140, y: 100 }, { x: 120, y: 100 }, { x: 100, y: 100 } ];

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
		game.updateScore(game.score + 5);
	}
};

const eatItself = () => {
	for (let i = 1; i < snake.length; i++) {
		if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
			snake = [ { x: 180, y: 100 }, { x: 160, y: 100 }, { x: 140, y: 100 }, { x: 120, y: 100 }, { x: 100, y: 100 } ];
			return true;
		}
	}
	return false;
};

const hasHitWalls = (left, right, top, bottom) => {
	if (snake[0].x === left || snake[0].x === right || snake[0].y === top || snake[0].y === bottom) {
		snake = [ { x: 180, y: 100 }, { x: 160, y: 100 }, { x: 140, y: 100 }, { x: 120, y: 100 }, { x: 100, y: 100 } ];
		return true;
	}
	return false;
};


export {
	snake, drawSnake, moveSnake, eatMouse, hasHitWalls, eatItself
}
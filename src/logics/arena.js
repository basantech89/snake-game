/*
import * as game from "../screens/Game";
import * as snake from '../logics/snake';
import * as mouse from "../logics/mouse";

const arenaX = 0; const arenaY = 0;
const arenaWidth = 600; const arenaHeight = 400;

const createArena = () => {
	game.context.strokeStyle = "#076232";
	game.context.lineWidth = 4;
	game.context.strokeRect(arenaX, arenaY, arenaWidth, arenaHeight);
	// snake.drawSnake();
	// mouse.drawMouse(mouse.mouseX, mouse.mouseY);
};

const changeMousePos = () => mouse.changePos();

const drawArena = (dx, dy) => {
	snake.moveSnake(dx, dy);
	snake.eatMouse(mouse.mouseX, mouse.mouseY);
	if (snake.hasHitWalls(arenaX, arenaX + arenaWidth, arenaY, arenaY + arenaHeight)) game.resetGame();
};

export {
	createArena, drawArena, changeMousePos
}*/

import * as game from "../screens/Game";
import * as snake from '../logics/snake';
import * as mouse from "../logics/mouse";

const arenaX = 400; const arenaY = 100;
const arenaWidth = 400; const arenaHeight = 400;

const createArena = () => {
	game.context.fillStyle = "#449041";
	game.context.fillRect(arenaX, arenaY, arenaWidth, arenaHeight);
	snake.drawSnake();
	mouse.drawMouse(mouse.mouseX, mouse.mouseY);
};

const changeMousePos = () => mouse.changePos();

const drawArena = (dx, dy) => {
	snake.moveSnake(dx, dy);
	snake.eatMouse(mouse.mouseX, mouse.mouseY);
	if (snake.hasHitWalls(arenaX, arenaX + arenaWidth, arenaY, arenaY + arenaHeight)) game.resetGame();
};

export {
	createArena, drawArena, changeMousePos
}
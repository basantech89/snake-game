import * as game from "./screens/Game";
import * as arena from "./screens/Arena";

const drawRect = (x, y, context = arena.context, fillStyle = "#076232", strokeStyle = "#0da958", width = game.tileSize, height = game.tileSize) => {
	context.fillStyle = fillStyle;
	context.strokeStyle = strokeStyle;
	context.fillRect(x, y, width, height);
	context.strokeRect(x, y, width, height);
};

export {
	drawRect
}
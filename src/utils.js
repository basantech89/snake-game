import * as game from "./screens/Game";

const drawRect = (x, y, width = game.ts, height = game.ts, fillStyle = "limegreen", strokeStyle = "darkgreen", context = game.context) => {
	context.fillStyle = fillStyle;
	context.strokeStyle = strokeStyle;
	context.fillRect(x, y, width, height);
	context.strokeRect(x, y, width, height);
};

/*
const drawRect = (x, y, width = vars.ts, height = vars.ts, fillStyle = "limegreen", strokeStyle = "darkgreen", context = vars.context) => {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;

	context.fillStyle = fillStyle;
	context.strokeStyle = strokeStyle;
	context.fillRect(x, y, width, height);
	context.strokeRect(x, y, width, height);
};
*/


export {
	drawRect
}
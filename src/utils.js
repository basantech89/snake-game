import * as vars from "./screens/Game";

const drawRect = (x, y, width = vars.ts, height = vars.ts, fillStyle = "limegreen", strokeStyle = "darkgreen", context = vars.context) => {
	context.fillStyle = fillStyle;
	context.strokeStyle = strokeStyle;
	context.fillRect(x, y, width, height);
	context.strokeRect(x, y, width, height);
};

export {
	drawRect
}
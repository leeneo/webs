// ES6 16.1.1
export const sqrt = Math.sqrt

export function square(x) {
	return x * x
}

export function diag(x, y) {
	return sqrt(square(x) + square(y))
}

function internal(){
	console.log('外部禁止访问！')
}
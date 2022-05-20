const board = document.querySelector('#board');
const colors = [
	'#F08080',
	'#B22222',
	'#7FFF00',
	'#00FA9A',
	'#ADFF2F',
	'#20B2AA',
	'#008080',
	'#7FFFD4',
	'#00BFFF',
	'#4169E1',
	'#FF00FF',
	'#9932CC',
	'#FF7F50',
	'#F4A460',
	'#2F4F4F',
];
const SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));

	square.addEventListener('mouseleave', () => removeColor(square));

	board.append(square);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}

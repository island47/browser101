const lineX = document.querySelector('.line-x');
const lineY = document.querySelector('.line-y');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

const onMouseMove = e => {
	const x = e.clientX;
	const y = e.clientY;
	lineX.style.top = `${y}px`;
	lineY.style.left = `${x}px`;
	target.style.top = `${y}px`;
	target.style.left = `${x}px`;
	tag.style.top = `${y}px`;
	tag.style.left = `${x}px`;
	tag.innerHTML = `${x}px,${y}px`;
};

document.addEventListener('mousemove', onMouseMove);

const colorGeneratorRGBA = (opacity = 0.4) => {
	const min = Math.ceil(0);
	const max = Math.floor(255);
	let generatedColors = [];
	for (let i = 0; i < 3; i++) {
		generatedColors.push(Math.floor(Math.random() * (max - min) + min));
	}
	return `rgba(${generatedColors[0]},${generatedColors[1]},${generatedColors[2]},${opacity})`;
};

const backgroundColorGradient = () => {
	const websiteBody = document.querySelector('body');
	let generatedColors = [];
	for (let i = 0; i < 2; i++) {
		generatedColors.push(colorGeneratorRGBA(0.1));
	}
	console.log(generatedColors);
	websiteBody.style.background = ` linear-gradient(${generatedColors[0]}, ${generatedColors[1]})`;
};

backgroundColorGradient();

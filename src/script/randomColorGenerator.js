const colorGeneratorRGBA = (opacity = 0.4) => {
	const MIN_VALUE = 0,
		MAX_VALUE = 255,
		generatedColors = [];
	for (let i = 0; i < 3; i++) {
		generatedColors.push(
			Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE) + MIN_VALUE)
		);
	}
	return `rgba(${generatedColors[0]},${generatedColors[1]},${generatedColors[2]},${opacity})`;
};

const backgroundColorGradient = () => {
	const websiteBody = document.querySelector('body'),
		generatedColors = [];
	for (let i = 0; i < 2; i++) {
		generatedColors.push(colorGeneratorRGBA(0.1));
	}
	websiteBody.style.background = ` linear-gradient(${generatedColors[0]}, ${generatedColors[1]})`;
};

backgroundColorGradient();

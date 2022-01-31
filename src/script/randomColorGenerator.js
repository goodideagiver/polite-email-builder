const colorGeneratorRGBA = () => {
	const min = Math.ceil(0);
	const max = Math.floor(255);
	let generatedColors = [];
	for (let i = 0; i < 3; i++) {
		generatedColors.push(Math.floor(Math.random() * (max - min) + min));
	}
	return `rgba(${generatedColors[0]},${generatedColors[1]},${generatedColors[2]},.2)`;
};

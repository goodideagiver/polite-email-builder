const tooltipNode = (nodeText) => {
	const tooltipElement = document.createElement('div');
	tooltipElement.classList.add('tooltip');
	tooltipElement.innerText = nodeText;
	return tooltipElement;
};

const showTooltip = (tooltipAnchorElement, tooltipText) => {
	if (!tooltipAnchorElement.querySelector('.tooltip')) {
		const tooltipElement = tooltipNode(tooltipText);
		tooltipAnchorElement.style.position = 'relative';
		tooltipAnchorElement.appendChild(tooltipElement);
		setTimeout(() => {
			tooltipElement.remove();
			tooltipAnchorElement.style.position = '';
		}, 2000);
	}
};

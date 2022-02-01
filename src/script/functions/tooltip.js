const tooltipNode = (nodeText) => {
	const tooltipElement = document.createElement('div');
	tooltipElement.classList.add('tooltip');
	tooltipElement.innerText = nodeText;
	return tooltipElement;
};

const showTooltip = (tooltipAnchorElement, tooltipText) => {
	const tooltip = tooltipNode(tooltipText);
	tooltipAnchorElement.style.position = 'relative';
	tooltipAnchorElement.appendChild(tooltip);
	setTimeout(() => {
		tooltip.remove();
		tooltipAnchorElement.style.position = '';
	}, 1000);
};

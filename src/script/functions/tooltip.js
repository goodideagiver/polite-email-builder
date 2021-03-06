const createTooltipNode = (nodeText) => {
	const tooltipElement = document.createElement('div');
	tooltipElement.classList.add('tooltip');
	tooltipElement.innerText = nodeText;
	return tooltipElement;
};

const showTooltip = (tooltipAnchorElement, tooltipText) => {
	if ((existTooltip = tooltipAnchorElement.querySelector('.tooltip'))) {
		existTooltip.remove();
	}
	const tooltipElement = createTooltipNode(tooltipText);
	tooltipAnchorElement.style.position = 'relative';
	tooltipAnchorElement.appendChild(tooltipElement);
	setTimeout(() => {
		tooltipElement.remove();
		tooltipAnchorElement.style.position = '';
	}, 2100);
};

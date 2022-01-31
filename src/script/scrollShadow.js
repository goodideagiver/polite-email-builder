const shadowScrollContainers = document.querySelectorAll('.sscroll');

const applyShadow = (e) => {
	const container = e.target;
	const maxScroll = container.clientHeight;
	console.log('maxScroll :', maxScroll);
	const currentScrollPosition = container.scrollTop;
	console.log('currentScrollPosition :', currentScrollPosition);
	if (currentScrollPosition < maxScroll - 10) {
		container.classList.add('bottom-box-shadow');
	} else {
		container.classList.remove('bottom-box-shadow');
	}
};

shadowScrollContainers.forEach((container) => {
	container.addEventListener('scroll', applyShadow);
});

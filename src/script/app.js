const mainApp = document.querySelector('#app');
const inputAdresse = document.querySelector('#adress');
const inputTopic = document.querySelector('#topic');
const contentWrapper = document.querySelector('#content');
const greetingWrapper = document.querySelector('#greeting');
const farewellsWrapper = document.querySelector('#farewell');
const followupWrapper = document.querySelector('#followup');
const conclusionWrapper = document.querySelector('#conclusion');

const btnbuilder = (text) => {
	const button = document.createElement('button');
	button.innerText = text;
	button.addEventListener('click', () => textReplacer(event));
	return button;
};

const mailObj = [
	{
		options: farewells,
		wrapper: farewellsWrapper,
	},
	{
		options: greetings,
		wrapper: greetingWrapper,
	},
	{
		options: followups,
		wrapper: followupWrapper,
	},
	{
		options: conclusions,
		wrapper: conclusionWrapper,
	},
];

mailObj.forEach((element) => {
	const wrapper = element.wrapper;
	element.options.forEach((element) => {
		wrapper.appendChild(btnbuilder(element));
	});
});

const removeElements = (nodeList) => {
	nodeList.forEach((element) => {
		element.remove();
	});
};

const resetSection = (e) => {
	console.log(e.target.parentNode);
	mailObj.forEach((element) => {
		if (element.wrapper == e.target.parentNode) {
			const wrapper = element.wrapper;
			wrapper.innerHTML = '';
			const options = element.options;
			options.forEach((option) => {
				wrapper.appendChild(btnbuilder(option));
			});
		}
	});
};

const textReplacer = (e) => {
	const resetOption = document.createElement('div');
	resetOption.innerText = 'x';
	resetOption.classList.add('option-reset');
	resetOption.addEventListener('click', resetSection);

	const chosenText = e.target.innerText;
	const chosenTextParent = e.target.parentNode;
	const allButtons = chosenTextParent.querySelectorAll('button');
	removeElements(allButtons);
	const chosenTextWrapper = document.createElement('div');
	chosenTextWrapper.innerText = chosenText;
	chosenTextParent.appendChild(chosenTextWrapper);
	chosenTextParent.appendChild(resetOption);
};

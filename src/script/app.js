const mainApp = document.querySelector('#app');
const inputAdresse = document.querySelector('#adress');
const inputTopic = document.querySelector('#topic');
const contentWrapper = document.querySelector('#content');
const greetingWrapper = document.querySelector('#greeting');
const farewellsWrapper = document.querySelector('#farewell');
const followupWrapper = document.querySelector('#followup');
const conclusionWrapper = document.querySelector('#conclusion');
const copyToClipboardBtn = document.querySelector('#copy');
const email = document.querySelector('#emailText');
const topic = document.querySelector('#topicText');
const sendBtn = document.querySelector('#send');
const resetBtn = document.querySelector('#reset');

const btnbuilder = (text) => {
	const button = document.createElement('button');
	button.innerText = text;
	button.addEventListener('click', () => textReplacer(event));
	button.style.backgroundColor = colorGeneratorRGBA();
	return button;
};

const mailAnimationPlay = () => {
	contentWrapper.classList.add('copy-animation');
	setTimeout(() => {
		contentWrapper.classList.remove('copy-animation');
	}, 2000);
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

const removeOptionsWrapperClasses = () => {
	const classesToRemove = [
		document.querySelectorAll('.disabled-choice'),
		document.querySelectorAll('.enabled-choice'),
	];
	classesToRemove.forEach((className) => {
		className.forEach((element) => {
			element.classList.remove('disabled-choice', 'enabled-choice');
		});
	});
};

const objectCreator = () => {
	mailObj.forEach((element) => {
		const wrapper = element.wrapper;
		wrapper.innerHTML = '';
		element.options.forEach((element) => {
			wrapper.appendChild(btnbuilder(element));
		});
	});
	mailAnimationPlay();
};

objectCreator();

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
			wrapper.classList.remove('enabled-choice');
			setTimeout(() => {
				wrapper.classList.add('disabled-choice');
			}, 1);
			const options = element.options;
			options.forEach((option) => {
				wrapper.appendChild(btnbuilder(option));
			});
		}
	});
};

const textReplacer = (e) => {
	const resetOption = document.createElement('div');
	resetOption.innerText = 'restart_alt';
	resetOption.classList.add('option-reset', 'material-icons-outlined');
	resetOption.addEventListener('click', resetSection);

	const chosenText = e.target.innerText;
	const chosenTextParent = e.target.parentNode;
	const allButtons = chosenTextParent.querySelectorAll('button');
	removeElements(allButtons);
	const chosenTextWrapper = document.createElement('div');
	chosenTextWrapper.innerText = chosenText;
	chosenTextWrapper.classList.add('chosen');
	chosenTextParent.appendChild(chosenTextWrapper);
	chosenTextParent.appendChild(resetOption);
	chosenTextParent.classList.remove('disabled-choice');
	setTimeout(() => {
		chosenTextParent.classList.add('enabled-choice');
	}, 1);
};

const copyToClibpoard = (source) => {
	navigator.clipboard.writeText(source).then(
		function () {
			//alert(`Skopiowano: ${source}`);
		},
		function (err) {
			alert('Nie można było skopiować 😢');
		}
	);
};

const mailContentGrabber = () => {
	const content = document.querySelectorAll('.chosen');
	let output = '';
	content.forEach((element) => {
		if (element.innerText) {
			output += element.innerText;
		} else {
			output += element.value;
		}
		output += '\n';
	});
	return output;
};

copyToClipboardBtn.addEventListener('click', () => {
	const text = mailContentGrabber();
	if (text) {
		copyToClibpoard(mailContentGrabber());
		mailAnimationPlay();
	}
});

const sendBuilder = () => {
	const outputMailto = {
		email: email.value,
		topic: topic.value,
		body: mailContentGrabber(),
	};
	return outputMailto;
};

const mailtoAction = () => {
	const mailOutput = sendBuilder();
	window.location.href = `mailto:${mailOutput.email}?subject=${
		mailOutput.topic
	}&body=${encodeURIComponent(mailOutput.body)}`;
};

sendBtn.addEventListener('click', mailtoAction);
resetBtn.addEventListener('click', () => {
	removeOptionsWrapperClasses();
	objectCreator();
});

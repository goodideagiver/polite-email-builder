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

const removeOptionsWrapperClasses = () => {
	const classesToRemove = [
		document.querySelectorAll('.disabled-choice'),
		document.querySelectorAll('.enabled-choice'),
	];
	classesToRemove.forEach((nameOfClass) => {
		nameOfClass.forEach((classElement) => {
			classElement.classList.remove('disabled-choice', 'enabled-choice');
		});
	});
};

const objectCreator = () => {
	mailObjects.forEach((mailObject) => {
		const optionsWrapper = mailObject.wrapper;
		optionsWrapper.innerHTML = '';
		mailObject.options.forEach((option) => {
			optionsWrapper.appendChild(btnbuilder(option));
		});
	});
	mailAnimationPlay();
};

const removeElements = (nodeList) => {
	nodeList.forEach((element) => {
		element.remove();
	});
};

const resetSection = (e) => {
	mailObjects.forEach((mailObject) => {
		if (mailObject.wrapper === e.target.parentNode) {
			mailObject.wrapper.innerHTML = '';
			mailObject.wrapper.classList.remove('enabled-choice');
			setTimeout(() => {
				mailObject.wrapper.classList.add('disabled-choice');
			}, 1);
			mailObject.options.forEach((option) => {
				mailObject.wrapper.appendChild(btnbuilder(option));
			});
		}
	});
};

const createResetButton = () => {
	const resetOption = document.createElement('div');
	resetOption.innerText = 'restart_alt';
	resetOption.classList.add('option-reset', 'material-icons-outlined');
	resetOption.addEventListener('click', resetSection);
	return resetOption;
};

const createTextNode = (nodeText) => {
	const chosenOptionWrapper = document.createElement('div');
	chosenOptionWrapper.innerText = nodeText;
	chosenOptionWrapper.classList.add('chosen');
	return chosenOptionWrapper;
};

const textReplacer = (e) => {
	const chosenOptionParent = e.target.parentNode;
	removeElements(chosenOptionParent.querySelectorAll('button'));
	chosenOptionParent.appendChild(createTextNode(e.target.innerText));
	chosenOptionParent.appendChild(createResetButton());
	chosenOptionParent.classList.remove('disabled-choice');
	setTimeout(() => {
		chosenOptionParent.classList.add('enabled-choice');
	}, 1);
};

const mailContentGrabber = () => {
	const userInputMailContent = document.querySelectorAll('.chosen');
	let output = '';
	userInputMailContent.forEach((element, index) => {
		if (element.innerText) {
			output += element.innerText;
			if (index < userInputMailContent.length) {
				output += '\n';
			}
		} else if (element.value > '') {
			output += element.value;
			if (index < userInputMailContent.length) {
				output += '\n';
			}
		}
	});
	return output;
};

const getSendContent = () => {
	const outputMailto = {
		email: email.value,
		topic: topic.value,
		body: mailContentGrabber(),
	};
	if (email.value > '' || topic.value > '' || mailContentGrabber() > '') {
		return outputMailto;
	} else {
		return 0;
	}
};

const mailtoAction = () => {
	const mailOutput = getSendContent();
	if (!mailOutput) {
		showTooltip(event.target, `Can't send empty message`);
		return;
	}
	try {
		window.location.href = `mailto:${mailOutput.email}?subject=${
			mailOutput.topic
		}&body=${encodeURIComponent(mailOutput.body)}`;
	} catch (error) {
		alert('It was not possible to send mail via built in app');
	}
};

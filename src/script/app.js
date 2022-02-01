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
const mailBody = document.querySelector('#mailBody');
const sendBtn = document.querySelector('#send');
const resetBtn = document.querySelector('#reset');
const signature = document.querySelector('#signature');

const mailObjects = [
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

copyToClipboardBtn.addEventListener('click', () => {
	const text = mailContentGrabber();
	if (text > '') {
		copyToClibpoard(text);
		mailAnimationPlay();
	} else {
		showTooltip(event.target, `Can't copy empty message`);
	}
});

objectCreator();

sendBtn.addEventListener('click', mailtoAction);

resetBtn.addEventListener('click', () => {
	removeOptionsWrapperClasses();
	objectCreator();
	[mailBody, inputAdresse, topic, signature].forEach((emailInputField) => {
		emailInputField.value = '';
	});
});

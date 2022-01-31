const copyToClibpoard = (source) => {
	navigator.clipboard.writeText(source).then(
		function () {
			//Here will be custom notification
		},
		function (err) {
			alert('Nie można było skopiować 😢');
		}
	);
};

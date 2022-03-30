const loginFormRef = document.querySelector('.login-form');

const onFormSubmit = (event) => {
	event.preventDefault();

	const {
		elements: {
			email: { value: email },
			password: { value: password },
		},
	} = event.currentTarget;

	!email || !password
		? alert('Пожалуйста, заполните ВСЕ поля')
		: console.log({ email: password });

	loginFormRef.reset();
};

loginFormRef.addEventListener('submit', onFormSubmit);

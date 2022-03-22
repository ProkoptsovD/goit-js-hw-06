const loginFormRef = document.querySelector('.login-form');

const onFormSubmit = (event) => {
	event.preventDefault();

	const {
		elements: { email: email, password: password },
	} = event.currentTarget;

	!email.value || !password.value
		? alert('Пожалуйста, заполните ВСЕ поля')
		: console.log(`Email: ${email.value}`, `Password: ${password.value}`);

	loginFormRef.reset();
};

loginFormRef.addEventListener('submit', onFormSubmit);

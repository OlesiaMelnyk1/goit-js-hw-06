
const textInput = document.querySelector('#validation-input');
const inputLength = textInput.getAttribute('data-length');

textInput.addEventListener('blur', event => {
	if (event.target.value.length === +inputLength) {
		textInput.classList.add('valid')
		if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
		}
  } else {
    textInput.classList.add('invalid')
		if (textInput.classList.contains('valid')) {
			textInput.classList.remove('valid')
		}
	}
})



const scriptURL = 'https://script.google.com/macros/s/AKfycbxv73iry0Ee8wVuQGHoxQ0epkcq6kv9KxzD-15Y/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { 
		method: 'POST', 
		body: new FormData(form),
		headers: {
			'Content-Type': 'text/plain;charset=utf-8',
		}
	})
		.then(response => alert('Thành Công. Quà đang trên đường tới!'))
		.catch(error => console.error('Error!', error.message))
})
	

const scriptURL = 'https://script.google.com/macros/s/AKfycby4wWP2L5NO0AHJMraLL8pRp2RugtYCYmHUhfXxv9JtHxUuMtM/exec'
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
		.then(response => function() {
			alert('Thành Công. Quà đang trên đường tới!')
			console.log('Success!', response)
		})
		.catch(error => console.error('Error!', error.message))
})
	

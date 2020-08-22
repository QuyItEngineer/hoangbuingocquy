const scriptURL = 'https://script.google.com/macros/s/AKfycbwCr2uKff-hk21ncYUecgNSRod3aY93_QH_0mdlPve7XJcTJP4/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
	e.preventDefault()
	fetch(scriptURL, { 
		method: 'POST', 
		body: new FormData(form),
		mode: 'cors',
		credentials: 'include',
		headers: {
			'Content-Type': 'text/plain;charset=utf-8',
		}
	})
		.then(response => alert('Thành Công. Quà đang trên đường tới!'))
		.catch(error => console.error('Error!', error.message))
})
	

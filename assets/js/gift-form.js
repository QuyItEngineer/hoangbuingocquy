// var $form = $('form#gift-form'),
//  url = 'https://script.google.com/macros/s/AKfycbwCr2uKff-hk21ncYUecgNSRod3aY93_QH_0mdlPve7XJcTJP4/exec'

// $('#gift-form-submit').on('click', function(e) {
// 	e.preventDefault();

// 	console.log(url + '?email=quy@gmail.com')
// 	console.log($form.serialize())

// 	var jqxhr = $.ajax({
// 		url: url + '?email=quy@gmail.com',
// 		method: "GET",
// 		dataType: "json",
// 		// dataType: 'jsonp',
// 		cache: false,
// 	//   data: $form.serializeObject()
// 		// data: JSON.stringify($form.serialize()),
// 		success: function() {
// 			alert('Cảm ơn ban, Chúc tôi sẽ gửi quà cho bạn.')
// 		},
// 		error: function(){
// 			// console.log(JSON.stringify($form.serialize()))
// 			alert('error!');
// 		}
// 	});
// })

const scriptURL = 'https://script.google.com/macros/s/AKfycbwCr2uKff-hk21ncYUecgNSRod3aY93_QH_0mdlPve7XJcTJP4/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
	console.log('click button')
	e.preventDefault()
	fetch(scriptURL, { method: 'POST', body: new FormData(form)})
		.then(response => console.log('Success!', response))
		.catch(error => console.error('Error!', error.message))
})
	

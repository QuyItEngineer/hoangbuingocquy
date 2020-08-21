//go through a sentence, wrap its characters with spans
function setUpCharacters(control1) {

	var $params = [
		{data: "Developer"},
		{data: "Youtuber"},
		{data: "Sharers"}
	];
	var $sentences = $('.sentence');
	
	//run for each sentence 
	$sentences.each(function() {
	  var $sentence = $(this);
		var newContent = '';
		
		var $control = control1;

		for (j=0 ; j < $params[$control].data.length; j++) {
			var substring = $params[$control].data.substr(j, 1);
			//if we have a character, wrap it
			if (substring != " ") {
			newContent += '<span>' + substring + '</span>';
			} else {
			newContent += substring;
			}
		}
	  //replace content
	  $sentence.html(newContent);
	});
  }
  
  
  //go through a sentence and trigger activate state
  function triggerCharacters() {
  
	var sentenceCounter = 0;
	var sentenceDelay = 600;
	$('.sentence').each(function() {
  
	  var $sentence = $(this);
	  //trigger for each sentence
	  setTimeout(function() {
  
		var $spans = $sentence.find('span');
  
		var spanCounter = 0;
		var spanDelay = 75;
  
		//loop through all spans and activate
		$spans.each(function() {
  
		  var $span = $(this);
		  //trigger a timeout so each span is offset
		  setTimeout(function() {
			$span.toggleClass('active');
		  }, (spanCounter * spanCounter));
  
		  spanCounter++;
		});
  
	  }, (sentenceCounter * sentenceDelay));
  
	  sentenceCounter++;
	});
  
	}
	
var indexLoop = 0;
setInterval(() => {	
	if (indexLoop == 3) {
		indexLoop = 0;
	} 
	setUpCharacters(indexLoop++);
	triggerCharacters();
}, 2000);
  
  
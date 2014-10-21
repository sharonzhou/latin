window.onload = init;

function init() {
	
	$('#puzzle-btn').on('click', function() {
		// parse sentence
		// var sentence = $('#sentence');
		// puzzle(sentence);

		// shrink bar above with sentence
		// $('#sentence').css('height', '50px');
		// $('#sentence').css('font-size', '15px');

		// for each puzzle piece generated, put in right order
		var margin_left = 0;
		var z_index = 0;
		$('.draggable').each(function() {
			console.log(this.children[0].width);
			console.log(this.children[0].style.left);

			this.style.marginLeft = margin_left.toString() + 'px';
			margin_left = margin_left + this.children[0].width;
			
			console.log(this.style.marginLeft);
			console.log(margin_left);
			
			this.style.zIndex = z_index;
			z_index++;
		})

		// show puzzle pieces
		$('.draggable').css('display', 'inherit');
	});

	// make puzzle pieces in DOM draggable
	$(function() {
	    $(".draggable").draggable();
	});

	// overlay text on puzzle pieces
	var img_height = parseInt($('img').css('height'));
	var img_width = parseInt($('img').css('width'));
	var text_width = img_width / 6.0;
	$('.text-overlay').css('font-size', text_width);
	$('.text-overlay').css('padding-left', img_width / 2.4);
	$('.text-overlay').css('padding-top', img_height / 2.5);
}

// general OO in js
function ClassWord(vocab) {
	var self = this;
	self.vocab = vocab;
	// etc.
}

ClassWord.prototype.spell = function () {};
ClassWord.prototype.constructor = ClassWord;

var word = new ClassWord();

puzzle = function(sentence) {
	$.each($(sentence)[0].value.split(" "), function() {

	var word = this;

	// parse each word entered, determining through Whitaker's Words what possible cases it could be
	/********** 
	1. examine the ending of a word,
	2. compare it with the standard endings,
	3. derive the possible stems that could be consistent,
	4. compare those stems with a dictionary of stems,
	5. eliminate those for which the ending is inconsistent with the dictionary stem (e.g., a verb ending with a noun dictionary item)
	6. if unsuccessful, it tries with a large set of prefixes and suffixes, and various tackons (e.g., -que),
	7. finally it tries various "dirty tricks" (e.g., "ae" may be replaced by "e", inp by imp, syncope, etc.),
	8. and it reports any resulting matches as possible interpretations.
	************/

	// examine ending of word
	word.value.splice(2);

	word.pos = [];

	if (word.pos.contains('noun')) {
		// case, number, gender, POS
	} 

	if (word.pos.contains('verb')) {
		// number, tense, mood, voice, person, POS
	} 

	if (word.pos.contains('adjective')) {
		// case, number, gender, POS
	} 

	if (word.pos.contains('adverb')) {
		// POS
	} 

	if (word.pos.contains('conjunction')) {
		// POS
	} 

	if (word.pos.contains('preposition')) {
		// case it takes, POS
	} 

	if (word.pos.contains('pronoun')) {
		// case, number, gender, person, POS
	} 

	word.cases = [];

	// decide associative puzzle piece(s) - case, POS, singularity/plurality - and superimpose word on it
	
	})
}

function getStems(entry) {
	var stems = entry.latin.slice(0);
	// is a verb: 
	if (entry.latin.length >= 4 && entry.latin[1].indexOf("re") == entry.latin[2].length - 2 && entry.latin[2].indexOf("i") == entry.latin[2].length - 1) {
		stems.push(entry.latin[1].substring(0, entry.latin[1].indexOf("re")));
		stems.push(entry.latin[3].substring(0, entry.latin[2].indexOf("i")));
	} 
	// is a noun:
	// or 2 part adj
	else if (entry.latin.length == 2 ) {
		var ending = entry.latin[1].substring(entry.latin[1].length - 2);
		if (ending == "ae" || ending == "us" || ending == "is" || ending == "ei") {
			stems.push(entry.latin[1].substring(0, entry.latin[1].length - 2));
		} else if (ending.substring(1) == "i") {
			stems.push(entry.latin[1].substring(0, entry.latin[1].length - 1));
		} else {
			stems.push(entry.latin[1].substring(0, entry.latin[1].length - 1));
			stems.push(entry.latin[1].substring(0, entry.latin[1].length - 2));
		}	
	}
	// is adj?
	else if (entry.latin.length == 3) {
		stems.push(entry.latin[1].substring(0, entry.latin[1].length - 1));
		stems.push(entry.latin[0].substring(0, entry.latin[1].length - 2));
	}
	return stems.filter(function(str){return str != ""});
}





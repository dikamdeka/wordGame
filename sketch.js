var url1='https://api.wordnik.com/v4/word.json/';
// var word = 'rainbow';
var word;
var url2 = '/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
var link;
var wordMy;


function setup(){
	noCanvas();
	

	link = select('#link');
	link.mousePressed(askWordnik);

	word = select('#name');
	word.changed(displayWord);


}

function displayWord(){
	
	link.html(word.value());
	
}

function askWordnik(){
	loadJSON(url1 + word.value() + url2, gotData);
	var col = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	link.style('color',col);
}

function gotData(data){
	// console.log(data);
	var index1 = floor(random(data.length));
	var index2 = floor(random(data[index1].words.length));
	wordMy = data[index1].words[index2];
	link.html(wordMy);
}





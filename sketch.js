var url1='http://api.wordnik.com/v4/word.json/';
// var word = 'rainbow';
var word;
var url2 = '/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=d67ed1c391f327050200107e80b0df3f01fc919055017a153';
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





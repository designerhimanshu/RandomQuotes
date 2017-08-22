//quotes object
var quotesCollection = {"quotesList": [
	{"content": "You can do anything, but not everything.",
	"person": "David Allen"},
	{"content": "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
	"person": "Antoine de Saint-Exupéry"},
	{"content": "The richest man is not he who has the most, but he who needs the least.",
	"person": "Unknown"},
	{"content": "You miss 100 percent of the shots you never take.",
	"person": "Wayne Gretzky"},
	{"content": "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.",
	"person": "Ambrose Redmoon"},
	{"content": "You must be the change you wish to see in the world.",
	"person": "Gandhi"},
	{"content": "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.",
	"person": "Lin Chi"},
	{"content": "To the man who only has a hammer, everything he encounters begins to look like a nail.",
	"person": "Abraham Maslow"},
	{"content": "We are what we repeatedly do; excellence, then, is not an act but a habit.",
	"person": "Aristotle"},
	{"content": "Always forgive your enemies; nothing annoys them so much.",
	"person": "Oscar Wilde"}
	]
};

//click event handler on new quote button 
$("#newQuote").on("click", function() {
	// 	//generating random r, g and b values
	var randomR = Math.floor(Math.random() * 256);
	var randomG = Math.floor(Math.random() * 256);
	var randomB = Math.floor(Math.random() * 256);
	// //combing random r, g and b values into single rgb value
	var randomRGB = "rgb(" + randomR + "," + randomG + "," + randomB + ")"; 
	// //using jquery to change css color properties of various dom elements
	$("body").css("background-color", randomRGB);
	$("h2").css("color", randomRGB);
	$("h4").css("color", randomRGB);
	$("button").css("background-color", randomRGB);
	
	//A random no. within the quotes array 
	var quoteNumber = Math.floor(Math.random() * quotesCollection.quotesList.length); 
	//Getting the quote content and author at random number array position
	var quoteText = quotesCollection.quotesList[quoteNumber].content;
	var quotePerson = " &mdash; " + quotesCollection.quotesList[quoteNumber].person;
	//Using jquery to update texts
	$("#quoteText").html(quoteText);
	$("#person").html(quotePerson);
	
	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
			$("body").append(a[0].content + "<p>— " + a[0].title + "</p>");
	});
});

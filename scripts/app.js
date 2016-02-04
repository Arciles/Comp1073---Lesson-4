/**
 * Created by esattahaibis on 2016-02-04.
 */
"use strict";
/* setup your IIFE (Immediately invoked Function Expression) or Self executing anonymous function */
(function(){

	console.log("JavaScripts works fine");
	// declared a named function
	/*function replaceFirstParagraph() {
		console.log("Inside of replaceFirstParagraph function");

		var firstParagraph;
		firstParagraph = document.getElementById("firstParagraph");

		firstParagraph.innerHTML = "My new paragraph data!";
	}*/
	// declare an anonymous function with named alias
	var replaceFirstParagraph = function() {

		console.log("Inside of replaceFirstParagraph anonymous function");

		var firstParagraph;
		firstParagraph = document.getElementById("firstParagraph");

		firstParagraph.innerHTML = "My new paragraph data!";
	};

	// called the named function
	replaceFirstParagraph();

})();

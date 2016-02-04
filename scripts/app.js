/**
 * Created by esattahaibis on 2016-02-04.
 */
"use strict";
/* setup your IIFE (Immediately invoked Function Expression) or Self executing anonymous function */
(function(){

	console.log("JavaScripts works fine");
	// declared a named function
	function replaceFirstPraragraphs() {
		console.log("Inside of replaceFirstParagraphs function");

		var firstParagraph;
		firstParagraph = document.getElementById("firstParagraph");

		firstParagraph.innerHTML = "My new paragraph data!";
	}
	// called the named function
	replaceFirstPraragraphs();

})();

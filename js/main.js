




//create an array of all scotches
// in the array, each scotch will be an object
//each object/scotch will have a list of properties
//there will be five properties for each scotch, each property will refer to a attribute of the scotch (e.g. flavour: fruity, body: light...)

$(function(){
	//SMOOTH SCROLL
	$('a.btn').smoothScroll({
		speed: 400
	});

	$("label[for=speyside]").mouseover(function() {
		$(".description-speyside").addClass("reveal")
	});

	$("label[for=speyside]").mouseleave(function() {
		$(".description-speyside").removeClass("reveal")
	});

	$("label[for=highland]").mouseover(function() {
		$(".description-highland").addClass("reveal")
	});

	$("label[for=highland]").mouseleave(function() {
		$(".description-highland").removeClass("reveal")
	});
	$("label[for=islay]").mouseover(function() {
		$(".description-islay").addClass("reveal")
	});

	$("label[for=islay]").mouseleave(function() {
		$(".description-islay").removeClass("reveal")
	});
	$("label[for=island]").mouseover(function() {
		$(".description-island").addClass("reveal")
	});

	$("label[for=island]").mouseleave(function() {
		$(".description-island").removeClass("reveal")
	});
	$("label[for=lowland]").mouseover(function() {
		$(".description-lowland").addClass("reveal")
	});

	$("label[for=lowland]").mouseleave(function() {
		$(".description-lowland").removeClass("reveal")
	});
	// });
	// $(".speysideLabel").mouseleave(function() {
	// 	$(".description").empty();
	// });



	 var listOfScotch = [
		{
			title: 'Arbeg 10yr',
			flavour: 'smokey',
			body: 'light',
			price: 'middle',
			region: 'islay',
			age: '12yrs',
			totalPoints: 0
		},

		{
			title: 'Highland Park 10yr',
			flavour: 'sweet',
			body: 'medium',
			price: 'low',
			region: 'island',
			age: '12yrs',
			totalPoints: 0
		},

		{
			title: 'Highland Park 12yr',
			flavour: 'smokey',
			body: 'medium',
			price: 'middle',
			region: 'island',
			age: '12yr',
			totalPoints: 0
		},

		{
			title: 'Oban 14yr',
			flavour: 'fruity',
			body: 'rich',
			price: 'high',
			region: 'highland',
			age: '14yr',
			totalPoints: 0
		},

		{
			title: 'Glenlivet 18yr',
			flavour: 'fruity',
			body: 'medium',
			price: 'high',
			region: 'speyside',
			age: '18yr',
			totalPoints: 0
		},

		{
			title: 'Highland Park 18yr',
			flavour: 'smokey',
			body: 'medium',
			price: 'high',
			region: 'island',
			age: '18yr',
			totalPoints: 0
		},

		{
			title: 'Laphroaig 10yr',
			flavour: 'smokey',
			body: 'light',
			price: '',
			region: 'island',
			age: '18yr',
			totalPoints: 0
		},
		{	title: 'Cragganmore 12 Yr',
			flavour: 'floral',
			body: 'medium',
			price: 'middle',
			region: 'speyside',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'Lagavulin 16 Year Old',
			flavour: 'smokey',
			body: 'rich',
			price: 'high',
			region: 'island',
			age: '14yrs',
			totalPoints: 0
		},
		{
			title: 'Tamdhu 10 Year Old ',
			flavour: 'spicy',
			body: 'medium',
			price: 'middle',
			region: 'speyside',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'Glenfiddich 12yr',
			flavour: 'fruity',
			body: 'medium',
			price: 'low',
			region: 'speyside',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'Glenmorangie Original',
			flavour: 'fruity',
			body: 'medium',
			price: 'middle',
			region: 'highland',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'Auchentoshan 12yr',
			flavour: 'fruity',
			body: 'medium',
			price: 'low',
			region: 'lowland',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'Glenkinchie 12yr',
			flavour: 'fruity',
			body: 'light',
			price: 'middle',
			region: 'island',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'Arran Port Cask Finish',
			flavour: 'fruity',
			body: 'rich',
			price: 'middle',
			region: 'island',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'Caol Ila ',
			flavour: 'smokey',
			body: 'light',
			price: 'middle',
			region: 'islay',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'Talisker 10 Yr',
			flavour: 'smokey',
			body: 'rich',
			price: 'high',
			region: 'island',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'Bowmore 12 Yr',
			flavour: 'smokey',
			body: 'rich',
			price: 'middle',
			region: 'islay',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'Arran Port Cask Finish',
			flavour: 'fruity',
			body: 'rich',
			price: 'middle',
			region: 'island',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'Bruichladdich Scottish Barley - The Classic Laddi',
			flavour: 'floral',
			body: 'medium',
			price: 'middle',
			region: 'island',
			age: '12yrs',
			totalPoints: 0
		},
		{
			title: 'The Macallan Gold',
			flavour: 'sweet',
			body: 'speyside',
			price: 'middle',
			region: 'island',
			age: 'no-age',
			totalPoints: 0
		}
		//add more items
	];
	//when user clicks on div choice, radio button is checked 
	// $(".choice").on("click", function (){
	// 	$(this input
	// });
	////when the user clicks submit we want to do something
	//$("form").on("submit", function (e) {
	$("form").on("submit", function (e) {
		e.preventDefault();
		//console.log(e);
		console.log("Did my form submit?");
		//create a new (model) object called dreamScotch, and fill that object with properties that have empty strings as property values
		//we want to gather the user's choices/input(value of radio buttons), and store their list of preferred properties inside of new object (model) frankenScotch dreamScotch
		var dreamScotch = {};
		dreamScotch["flavour"] = $("input[name=flavour]:checked").val();
		//console.log(dreamScotch);
		//console.log(dreamScotch["flavour"]);
		dreamScotch["body"] = $("input[name=body]:checked").val();
		//console.log(dreamScotch);
		//console.log(dreamScotch["body"]);
		dreamScotch["price"] = $("input[name=price]:checked").val();
		//console.log(dreamScotch);
		//console.log(dreamScotch["price"]);
		dreamScotch["region"] = $("input[name=region]:checked").val();
		//console.log(dreamScotch);
		//console.log(dreamScotch["region"]);
		dreamScotch["age"] = $("input[name=age]:checked").val();
		//console.log(dreamScotch);
		//console.log(dreamScotch["age"]);


		//loop through list of scotches (array)
		for(var i = 0; i < listOfScotch.length; i++) {
			//if the first property value of the first item in the array matches the first of property value of the dreamScotch, do something
			// add 1 point to the property value "totalPoints" of the array item
			// for each scotch/object compare users dreamScotch against each possible Scotch Object (look for property matches)
			//if the scotch object property value matches the dreamScotch property value, update the total points property by 1.
			if(listOfScotch[i].flavour === dreamScotch.flavour) {
				listOfScotch[i].totalPoints++;

			};
			if(listOfScotch[i].body === dreamScotch.body) {
				listOfScotch[i].totalPoints++;

			};
			if(listOfScotch[i].price === dreamScotch.price) {
				listOfScotch[i].totalPoints++;

			};
			if(listOfScotch[i].region === dreamScotch.region) {
				listOfScotch[i].totalPoints++;

			};
			if(listOfScotch[i].age === dreamScotch.age) {
				listOfScotch[i].totalPoints++;

			};
			if(dreamScotch.price === "noPreference") {
				listOfScotch[i].totalPoints++;
			};
			if(dreamScotch.region === "noPreference") {
				listOfScotch[i].totalPoints++;
			};
			if(dreamScotch.age === "noPreference") {
				listOfScotch[i].totalPoints++;
			};
			//console.log(listOfScotch);
			//now find the listOfScotch array items that has a totalPoints value of 5
			
			
		} //closes for loop

		//When you check to see which scotch from the list has the highest score	

			//Loop through
			var final;
			var totalNum = 0;
			for(var i = 0; i < listOfScotch.length; i++) {
				//For every iteration you need to check if that scotches total is the new max number
				if(listOfScotch[i].totalPoints > totalNum) {
					totalNum = listOfScotch[i].totalPoints;
					final = listOfScotch[i];
				}
			}
			// find the scotch that has a totalPoint value that equals the total num
			var finalArray = [];
			var resultHeading = "";

			for(var i = 0; i < listOfScotch.length; i++) {
				if(listOfScotch[i].totalPoints === totalNum) {
					finalArray.push(listOfScotch[i].title);
				}
			}
			//if (totalNum >= 3 && finalArray.length > 1) {
				
				//console.log("Here are some scotches!");
			//}

			// console.log()

			//convert the array items into a string/individual strings
			//finalArray = finalArray.join(", "); 
			


			for (var i = 0; i < finalArray.length; i++){
				var scotch = $("<li>").text(finalArray[i]);
				var scotch = $("<li>").text(finalArray[i]);
				
				$("ul.possibleScotches").append(scotch);
			}

			//push the phrase "These single malts meet" + totalNum + "of your five preferences"
			//Under the li Scotch title, list the properties of that Scotch
			$(".results .wrapper h3").append("These single malts meet " + totalNum + " of your 5 preferences");

			$.smoothScroll( {
			scrollTarget: '#results'
		});

	}); //closes on.submit

		//on "retake the quiz" button, tell checked butttons to turn into checked:false
		$(".btn-retake").on("click", function (){
			$("input[name=flavour]:checked").prop('checked', false);
			$("input[name=body]:checked").prop('checked', false);
			$("input[name=price]:checked").prop('checked', false);
			$("input[name=region]:checked").prop('checked', false);
			$("input[name=age]:checked").prop('checked', false);
			$("ul").empty();
			$(".results .wrapper h3").empty();
			
		});
		
			
	
	// write a conditional, e.g. if scotch has a min of 4 matches() push scotch(that matches conditional) to new array? which we will present later

	//each Scotch object will also have a property of totalPoints, which will be updated?
	//write the final results on html
	// $("ul.possibleScotches").append("<li")


}); //closes document ready



//Load all of files, once ready perform function
$(document).ready(function() {
	console.log("ready!")

//Defining variables needed
	var randomNumber = 0;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;

//need randomNumber array
	var randomNumberList = []

//filling in the values 19 to 120 as possible randomNumbers
for (var i = 19; i<=120; i++) {
		randomNumberList.push(i);
	}

	//need scoreList array
	var scoreList = []

	//filling in the values 1 to 12 as possible crystal value
for (var i = 1; i<=12; i++) {
		scoreList.push(i);
	}

	//set the random number from the randomNumberList array
	randomNumber = randomNumberList[Math.floor(Math.random() * randomNumberList.length)];

	//log the random number in the console
	console.log(randomNumber);

	//display the initial randomNumber
	$("#randomNumber").html(randomNumber);

	//display the initial wins and losses
	$("#scoreboard").html("<p>Wins: " + wins + " </p><p>Losses: " + losses + " </p>");

	//display the initial total score
	$("#gameScore").html("<h3> " + totalScore + " </h3>");

	//set the initial gem score values
	var redScore = scoreList[Math.floor(Math.random() * scoreList.length)];
	var blueScore = scoreList[Math.floor(Math.random() * scoreList.length)];
	var yellowScore = scoreList[Math.floor(Math.random() * scoreList.length)];
	var diamondScore = scoreList[Math.floor(Math.random() * scoreList.length)];

	//this is what happens when you click on the Red
	$("#red").on("click", function() {

		//adding the Red score to the total score
		totalScore = totalScore + redScore;

		//displaying the new total score
		$("#gameScore").html("<h3> " + totalScore + " </h3>");

		//this happens if the game is won
		if(totalScore==randomNumber) {

			//adding 1 to wins
			wins++;

			//rewriting the new scoreboard
			$("#scoreboard").html("<p>Wins: " + wins + " </p><p>Losses: " + losses + " </p>");

			//resetting total score to 0
			totalScore = 0;

			//setting a new random number
			randomNumber = randomNumberList[Math.floor(Math.random() * randomNumberList.length)];

			//logging the new random number in the console
			console.log(randomNumber);

			//rewriting the total score to display as 0
			$("#gameScore").html("<h3> " + totalScore + " </h3>");

			//displaying the new random number
			$("#randomNumber").html("<h3> " + randomNumber + " </h3>");

			//resetting the gem score values
			redScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			blueScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			yellowScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			diamondScore = scoreList[Math.floor(Math.random() * scoreList.length)];
		}

		//this happens if the game is lost
		else if(totalScore>randomNumber) {

			//adding 1 to losses
			losses++;

			//rewriting the new scoreboard
			$("#scoreboard").html("<p>Wins: " + wins + " </p><p>Losses: " + losses + " </p>");

			//resetting the total score to 0
			totalScore = 0;

			//setting a new random number
			randomNumber = randomNumberList[Math.floor(Math.random() * randomNumberList.length)];

			//logging the new random number in the console
			console.log(randomNumber);

			//rewriting the total score div to display as 0
			$("#gameScore").html("<h3> " + totalScore + " </h3>");

			//displaying the new random number
			$("#randomNumber").html("<h3> " + randomNumber + " </h3>");

			//resetting the gem score values
			redScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			blueScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			yellowScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			diamondScore = scoreList[Math.floor(Math.random() * scoreList.length)];
		}
	})

	//this is what happens when you click on the Blue
	$("#blue").on("click", function() {

		//adding the Blue score to the total score
		totalScore = totalScore + blueScore;

		//displaying the new total score
		$("#gameScore").html("<h3> " + totalScore + " </h3>");

		//this happens if the game is won
		if(totalScore==randomNumber) {

			//adding 1 to wins
			wins++;

			//rewriting the new scoreboard
			$("#scoreboard").html("<p>Wins: " + wins + " </p><p>Losses: " + losses + " </p>");

			//resetting total score to 0
			totalScore = 0;

			//setting a new random number
			randomNumber = randomNumberList[Math.floor(Math.random() * randomNumberList.length)];

			//logging the new random number in the console
			console.log(randomNumber);

			//rewriting the total score to display as 0
			$("#gameScore").html("<h3> " + totalScore + " </h3>");

			//displaying the new random number
			$("#randomNumber").html("<h3> " + randomNumber + " </h3>");

			//resetting the gem score values
			redScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			blueScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			yellowScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			diamondScore = scoreList[Math.floor(Math.random() * scoreList.length)];
		}

		//this happens if the game is lost
		else if(totalScore>randomNumber) {

			//adding 1 to losses
			losses++;

			//rewriting the new scoreboard
			$("#scoreboard").html("<p>Wins: " + wins + " </p><p>Losses: " + losses + " </p>");

			//resetting the total score to 0
			totalScore = 0;

			//setting a new random number
			randomNumber = randomNumberList[Math.floor(Math.random() * randomNumberList.length)];

			//logging the new random number in the console
			console.log(randomNumber);

			//rewriting the total score div to display as 0
			$("#gameScore").html("<h3> " + totalScore + " </h3>");

			//displaying the new random number
			$("#randomNumber").html("<h3> " + randomNumber + " </h3>");

			//resetting the gem score values
			redScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			blueScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			yellowScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			diamondScore = scoreList[Math.floor(Math.random() * scoreList.length)];
		}
	})

	//this is what happens when you click on the Yellow
	$("#yellow").on("click", function() {

		//adding the Yellow score to the total score
		totalScore = totalScore + yellowScore;

		//displaying the new total score
		$("#gameScore").html("<h3> " + totalScore + " </h3>");

		//this happens if the game is won
		if(totalScore==randomNumber) {

			//adding 1 to wins
			wins++;

			//rewriting the new scoreboard
			$("#scoreboard").html("<p>Wins: " + wins + " </p><p>Losses: " + losses + " </p>");

			//resetting total score to 0
			totalScore = 0;

			//setting a new random number
			randomNumber = randomNumberList[Math.floor(Math.random() * randomNumberList.length)];

			//logging the new random number in the console
			console.log(randomNumber);

			//rewriting the total score to display as 0
			$("#gameScore").html("<h3> " + totalScore + " </h3>");

			//displaying the new random number
			$("#randomNumber").html("<h3> " + randomNumber + " </h3>");

			//resetting the gem score values
			redScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			blueScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			yellowScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			diamondScore = scoreList[Math.floor(Math.random() * scoreList.length)];
		}

		//this happens if the game is lost
		else if(totalScore>randomNumber) {

			//adding 1 to losses
			losses++;

			//rewriting the new scoreboard
			$("#scoreboard").html("<p>Wins: " + wins + " </p><p>Losses: " + losses + " </p>");

			//resetting the total score to 0
			totalScore = 0;

			//setting a new random number
			randomNumber = randomNumberList[Math.floor(Math.random() * randomNumberList.length)];

			//logging the new random number in the console
			console.log(randomNumber);

			//rewriting the total score div to display as 0
			$("#gameScore").html("<h3> " + totalScore + " </h3>");

			//displaying the new random number
			$("#randomNumber").html("<h3> " + randomNumber + " </h3>");

			//resetting the gem score values
			redScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			blueScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			yellowScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			diamondScore = scoreList[Math.floor(Math.random() * scoreList.length)];
		}
	})

	//this is what happens when you click on the Diamond
	$("#diamond").on("click", function() {

		//adding the Diamond score to the total score
		totalScore = totalScore + diamondScore;

		//displaying the new total score
		$("#gameScore").html("<h3> " + totalScore + " </h3>");

		//this happens if the game is won
		if(totalScore==randomNumber) {

			//adding 1 to wins
			wins++;

			//rewriting the new scoreboard
			$("#scoreboard").html("<p>Wins: " + wins + " </p><p>Losses: " + losses + " </p>");

			//resetting total score to 0
			totalScore = 0;

			//setting a new random number
			randomNumber = randomNumberList[Math.floor(Math.random() * randomNumberList.length)];

			//logging the new random number in the console
			console.log(randomNumber);

			//rewriting the total score to display as 0
			$("#gameScore").html("<h3> " + totalScore + " </h3>");

			//displaying the new random number
			$("#randomNumber").html("<h3> " + randomNumber + " </h3>");

			//resetting the gem score values
			redScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			blueScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			yellowScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			diamondScore = scoreList[Math.floor(Math.random() * scoreList.length)];
		}

		//this happens if the game is lost
		else if(totalScore>randomNumber) {

			//adding 1 to losses
			losses++;

			//rewriting the new scoreboard
			$("#scoreboard").html("<p>Wins: " + wins + " </p><p>Losses: " + losses + " </p>");

			//resetting the total score to 0
			totalScore = 0;

			//setting a new random number
			randomNumber = randomNumberList[Math.floor(Math.random() * randomNumberList.length)];

			//logging the new random number in the console
			console.log(randomNumber);

			//rewriting the total score div to display as 0
			$("#gameScore").html("<h3> " + totalScore + " </h3>");

			//displaying the new random number
			$("#randomNumber").html("<h3> " + randomNumber + " </h3>");

			//resetting the gem score values
			redScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			blueScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			yellowScore = scoreList[Math.floor(Math.random() * scoreList.length)];
			diamondScore = scoreList[Math.floor(Math.random() * scoreList.length)];
		}
	})
	
});
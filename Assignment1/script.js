/*
	WEB 303 Assignment 1 - jQuery
	{Bhoomit Kiritbhai Patel}
*/


$(function () {   //Write your code inside a jQuery document ready function.

	$("input[type=text]").keyup(function () {  //Create an event handler to run whenever the salary and percent fields have changed ("change" event).

		let salary = $("#yearly-salary").val();
		let percentage = $("#percent").val();
		let answer = salary * percentage / 100;  //calculate the amount you can spend on tech

		let amount = $("span#amount");
		amount.text(answer.toFixed(2));   //Use the built in toFixed() method to round the number
		amount.prepend("$")

	});




});
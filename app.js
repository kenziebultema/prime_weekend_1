var array = [];
var monthlyCost = 0;

$(document).ready(function(){
	$('.employeeInfo').on('submit', function(event) {
		event.preventDefault();

		var values = {};

		$.each($(".employeeInfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		});

		$('.employeeInfo').find('input[type = text]').val("");

		array.push(values);
		monthlySalary(values.employeeSalary);
		appendDom(values);

		$('.employee').on('click', '.delete', function() {
			$('p').remove();
			$('.delete').hide();
		})
	
	});
});

function monthlySalary(salary) {
	salary = parseInt(salary);
	monthlyCost += Math.round(salary / 12);
	
	console.log('Monthly cost of employee salaries: $' + monthlyCost);
};

function appendDom(object){
	console.log(object);
	$(".container").append("<div class='employee'></div>");
	var $el = $(".container").children().last();

	$el.append("<p class='title'>Employee Name: </p><p>" + object.employeeFirstName + " " + object.employeeLastName + "</p>");
	$el.append("<p class='title'>Employee ID: </p><p>" + object.employeeID + "</p>");
	$el.append("<p class='title'>Employee Title: </p><p>" + object.employeeTitle + "</p>");
	$el.append("<p class='title'>Employee Salary (Yearly): </p><p>" + object.employeeSalary + "</p>");
	$el.append("<button class='delete'>Remove Entry</button>");

};
var array = [];
var monthlyCost = 0;

$(document).ready(function(){
	$('.employeeInfo').on('submit', function(event) {
		event.preventDefault();

		var values = {};

		console.log($(".employeeInfo").serializeArray());
		$.each($(".employeeInfo").serializeArray(), function(i, field){
			values[field.name] = field.value;
		});

		$('.employeeInfo').find('input[type = text]').val("");

		array.push(values);
		monthlySalary(values.employeeSalary);
		appendDom(values);
	
	});
});


function monthlySalary(salary) {
	salary = parseInt(salary);
	monthlyCost = Math.round(salary / 12);
	
	// return monthlyCost;
	console.log(monthlyCost);
};

function appendDom(object){
	console.log(object);
	$(".container").append("<div></div>");
	var $el = $(".container").children().last();

	$el.append("<p>" + object.employeeFirstName + "</p>");
	$el.append("<p>" + object.employeeLastName + "</p>");
	$el.append("<p>" + object.employeeID + "</p>");
	$el.append("<p>" + object.employeeTitle + "</p>");
	$el.append("<p>" + object.employeeSalary + "</p>");

};
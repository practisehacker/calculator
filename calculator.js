// AC Button
var ac = document.getElementById('ac');
ac.addEventListener('mouseover', function(event) {
    ac.style.backgroundColor = "blue";
    event.stopPropagation();

});
ac.addEventListener('mouseout', function() {
    ac.style.backgroundColor = "rgb(211, 166, 76)"
});
// plusMInus button
var plusMinus = document.getElementById('plusMinus');
plusMinus.addEventListener('mouseover', function(event) {
    plusMinus.style.backgroundColor = "blue";
    event.stopPropagation();

});
plusMinus.addEventListener('mouseout', function() {
    plusMinus.style.backgroundColor = "rgb(211, 166, 76)"
});
//percentageButton
var percentage = document.getElementById('percentage');
percentage.addEventListener('mouseover', function(event) {
    percentage.style.backgroundColor = "blue";
    event.stopPropagation();

});
percentage.addEventListener('mouseout', function() {
    percentage.style.backgroundColor = "rgb(211, 166, 76)"
});
// fordivide
var divide = document.getElementById('divide');
divide.addEventListener('mouseover', function(event) {
    divide.style.backgroundColor = "blue";
    event.stopPropagation();

});
divide.addEventListener('mouseout', function() {
    divide.style.backgroundColor = "rgb(211, 166, 76)"
});
//for seven
var seven = document.getElementById('seven');
seven.addEventListener('mouseover', function(event) {
    seven.style.backgroundColor = "blue";
    event.stopPropagation();

});
seven.addEventListener('mouseout', function() {
    seven.style.backgroundColor = "rgb(211, 166, 76)"
});
var eight = document.getElementById('eight');
eight.addEventListener('mouseover', function(event) {
    eight.style.backgroundColor = "blue";
    event.stopPropagation();

});
eight.addEventListener('mouseout', function() {
    eight.style.backgroundColor = "rgb(211, 166, 76)"
});
var nine = document.getElementById('nine');
nine.addEventListener('mouseover', function(event) {
    nine.style.backgroundColor = "blue";
    event.stopPropagation();
});
nine.addEventListener('mouseout', function() {
    nine.style.backgroundColor = "rgb(211, 166, 76)"
});
var multiply = document.getElementById('multiply');
multiply.addEventListener('mouseover', function(event) {
    multiply.style.backgroundColor = "blue";
    event.stopPropagation();
});
multiply.addEventListener('mouseout', function() {
    multiply.style.backgroundColor = "rgb(211, 166, 76)"
});
var four = document.getElementById('four');
four.addEventListener('mouseover', function(event) {
    four.style.backgroundColor = "blue";
    event.stopPropagation();
});
four.addEventListener('mouseout', function() {
    four.style.backgroundColor = "rgb(211, 166, 76)"
});
var five = document.getElementById('five');
five.addEventListener('mouseover', function(event) {
    five.style.backgroundColor = "blue";
    event.stopPropagation();
});
five.addEventListener('mouseout', function() {
    five.style.backgroundColor = "rgb(211, 166, 76)"
});
var six = document.getElementById('six');
six.addEventListener('mouseover', function(event) {
    six.style.backgroundColor = "blue";
    event.stopPropagation();
});
six.addEventListener('mouseout', function() {
    six.style.backgroundColor = "rgb(211, 166, 76)"
});
var sub = document.getElementById('sub');
sub.addEventListener('mouseover', function(event) {
    sub.style.backgroundColor = "blue";
    event.stopPropagation();
});
sub.addEventListener('mouseout', function() {
    sub.style.backgroundColor = "rgb(211, 166, 76)"
});
var one = document.getElementById('one');
one.addEventListener('mouseover', function(event) {
    one.style.backgroundColor = "blue";
    event.stopPropagation();
});
one.addEventListener('mouseout', function() {
    one.style.backgroundColor = "rgb(211, 166, 76)"
});
var two = document.getElementById('two');
two.addEventListener('mouseover', function(event) {
    two.style.backgroundColor = "blue";
    event.stopPropagation();
});
two.addEventListener('mouseout', function() {
    two.style.backgroundColor = "rgb(211, 166, 76)"
});
var three = document.getElementById('three');
three.addEventListener('mouseover', function(event) {
    three.style.backgroundColor = "blue";
    event.stopPropagation();
});
three.addEventListener('mouseout', function() {
    three.style.backgroundColor = "rgb(211, 166, 76)"
});
var plus = document.getElementById('plus');
plus.addEventListener('mouseover', function(event) {
    plus.style.backgroundColor = "blue";
    event.stopPropagation();
});
plus.addEventListener('mouseout', function() {
    plus.style.backgroundColor = "rgb(211, 166, 76)"
});
var zero = document.getElementById('zero');
zero.addEventListener('mouseover', function(event) {
    zero.style.backgroundColor = "blue";
    event.stopPropagation();
});
zero.addEventListener('mouseout', function() {
    zero.style.backgroundColor = "rgb(211, 166, 76)"
});
var dot = document.getElementById('dot');
dot.addEventListener('mouseover', function(event) {
    dot.style.backgroundColor = "blue";
    event.stopPropagation();
});
dot.addEventListener('mouseout', function() {
    dot.style.backgroundColor = "rgb(211, 166, 76)"
});
var equal = document.getElementById('equal');
equal.addEventListener('mouseover', function(event) {
    equal.style.backgroundColor = "blue";
    event.stopPropagation();
});
equal.addEventListener('mouseout', function() {
    equal.style.backgroundColor = "rgb(211, 166, 76)"
});









var buttons = document.getElementsByClassName("button-property");
var view = document.getElementById('screen');
view.textContent = 0;
var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {

        var value = this.getAttribute('data-value');
        var text = view.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            view.textContent = "";
        } else if (value == "ac") {
            view.textContent = "";
        } else if (value == "sign") {
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            view.textContent = operand1;
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                view.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            view.textContent = operand1
        } else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                view.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            view.textContent += value;
        }
    });
}
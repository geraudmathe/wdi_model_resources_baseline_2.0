function getValue(message){
  return prompt(message);
}

function getFloat(message){
  return parseFloat(getValue(message));
}


function roundToTwoDP(value){
  return Math.round(value * 100) / 100;
}

function result(message){
  alert(message);
}


function basicCalc(){
  var num1 = getFloat("first number");
  var op = getValue("(a)dd, (s)ubtract, (m)ultiply, (d)ivide: ");
  var num2 = getFloat("second number");
  

  switch(op){
    case "a":
    var ans = num1 + num2;
    break;
    case "s":
    var ans = num1 - num2;
    break;
    case "m":
    var ans = num1 * num2;
    break;
    case "d":
    var ans = num1 / num2;
    break;
  }
  result("The result is "+ ans);
}

function advancedCalc(){
  advancedOperation = prompt("(p)ower, (s)qrt: ")
  firstNumber = parseInt(prompt("first number"));
  
  if(advancedOperation == 's'){
    alert("the result is "+ Math.sqrt(firstNumber));
  }else{
    secondNumber = parseInt(prompt("second number"));
    result("the result is "+ Math.pow(firstNumber, secondNumber));
  }
}

function tripCalc(){
  var dist = getFloat("Distance (miles)");
  var mpg = getFloat("MPG");
  var cost = getFloat("Cost ($/gallon)");
  var speed  = getFloat("Speed (MPH)");

  var time = roundToTwoDP(dist / speed);

  if (mpg > 60) {
    var actualMPG = mpg - (speed - 60) * 2;
  } else {
    var actualMPG = mpg;
  }

  var cost = roundToTwoDP(dist / actualMPG * cost);
  result("Your trip will take " + time + " hours and cost $" + cost + ".")
}

function bmiCalc() {
  var mass = getFloat("Mass (KG)");
  var height = getFloat("Height (Meters)");

  console.log(mass, height, mass / Math.pow(height, 2))

  var bmi = roundToTwoDP(mass / Math.pow(height, 2));

  result( "Your BMI is " + bmi);
}

function mortgageCalc(){
  var loan = getFloat("Loan (£)");
  var apr = getFloat("APR (%)") / 100 / 12;
  var term = getFloat("Term (months)");

  var temp = Math.pow((1 + apr), term);
  var payment = roundToTwoDP(loan * apr * temp / (temp - 1));

  result( "Your monthly payment will be $" + payment);
}

window.onload = function(){

  operation = prompt("Which operation you would like to do ? (b)asic, (a)dvanced, (m)ortgage, bm(i), (t)rip or (q)uit: ");
  while(operation != "q"){
    switch(operation) {
    case "b":
        basicCalc();
        break;
    case "a":
        advancedCalc();
        break;
    case "m":
        mortgageCalc();
        break;
    case "i":
        bmiCalc()
        break;
    case "t":
        tripCalc();
        break;
    default:
        alert("wrong option")
    }
    operation = prompt("Which operation you would like to do ? (b)asic, (a)dvanced, (m)ortgage, bm(i), (t)rip or (q)uit: ");
  }
  
}













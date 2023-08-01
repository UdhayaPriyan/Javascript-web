var resetCalc = () => {
  document.getElementById('content').reset();
  document.getElementById('result-text').innerHTML = "";

}

let calc = () => {

  let num1 = parseInt(document.getElementById('first-number').value);
  let num2 = parseInt(document.getElementById('second-number').value);
  let operator = document.querySelector('input[name="operator"]:checked').value;
  let result = 0;

  switch (operator) {
    case "add":
      result = num1 + num2;
      break;

    case "subtract":
      result = num1 - num2;
      break;
    
  
    case "multiply":
      result = num1 * num2;
      break;
  
    case "divide":
      result = num1 / num2;
      break;
  }

  const resultText = document.getElementById('result-text');
  resultText.innerHTML = "The result of " + num1 + " and " + num2 + " is " + result;
}
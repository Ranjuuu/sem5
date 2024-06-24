
function calculateSum() {
    // Get input field values
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    // Parse input values to integers
    num1 = parseInt(num1);
    num2 = parseInt(num2);



    // Calculate the sum
    var sum = num1 + num2;

    // Display the result
    document.getElementById('result').innerText = 'Sum: ' + sum;
}
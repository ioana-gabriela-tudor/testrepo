let grocery1;
let grocery2;
let grocery3;

function calculate(a, b, c) {
    let total = a + b + c;
    document.getElementById('groceryResult').innerText = `The total amount is: $${total}`;
}

function calculateTotalAmount(){
    grocery1 = parseFloat(document.getElementById('grocery1').value);
    grocery2 = parseFloat(document.getElementById('grocery2').value);
    grocery3 = parseFloat(document.getElementById('grocery3').value);

    calculate(grocery1,grocery2,grocery3);
}

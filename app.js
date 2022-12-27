function updateNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let productNumber = caseInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    caseInput.value = productNumber;

    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;
    // caltulate total
    calculateTotal();
};

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 5;
    const totalAmount = subTotal + taxAmount;
    // console.log(subTotal);
    // update on the HTML
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-amount').innerText = totalAmount;
}

// phone increase decrease
document.getElementById('phone-plus').addEventListener('click', function () {
    updateNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateNumber('phone', 1219, false);
});
// case increase decrease
document.getElementById('case-plus').addEventListener('click', function () {
    updateNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateNumber('case', 59, false);
});
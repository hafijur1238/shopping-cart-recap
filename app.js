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
};

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
function uptadeProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;

    // update ..product total............

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate total..........

    calculateTotal();

}

// update final total

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

// calculate total........

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const textAmount = subTotal / 10;
    const totalPrice = subTotal + textAmount;
    // update on the html..........

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = textAmount;
    document.getElementById('total-price').innerText = totalPrice;


}

// phone hanlde increment decrement ..........

document.getElementById('phone-plus').addEventListener('click', function () {
    uptadeProductNumber('phone', 1219, true);
});


document.getElementById('phone-minus').addEventListener('click', function () {
    uptadeProductNumber('phone', 1219, false);
})

////////////////////////////////////////////////////////////////////////////////////////////

// case hanlde increment decrement ..........
document.getElementById('case-plus').addEventListener('click', function () {
    uptadeProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    uptadeProductNumber('case', 59, false);
});
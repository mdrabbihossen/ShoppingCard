function updateProduct(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");

  // ei jinisgula mathar upor diye gece , klker session e buje nite hbe
  var productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseFloat(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseFloat(productNumber) - 1;
  }

  productInput.value = productNumber;

  // update case total

  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;
  calculateTotal();
}

// for case
document.getElementById("case-plus").addEventListener("click", function () {
  updateProduct("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProduct("case", 59, false);
});

// for phone

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProduct("phone", 1219, true);
});

document.getElementById("phone-minus").addEventListener("click", function () {
  updateProduct("phone", 1219, false);
});

// total calculate

 // eitaw buji nai , session e giye bujte hbe
function getInputValue(product) {
  const productInput = document.getElementById(product + "-number");
  const productNumber = parseFloat(productInput.value);
  return productNumber;
}
function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tax = subTotal / 10;
  const totalPrice = subTotal + tax;
  // update on the html

  document.getElementById("subtotal").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tax;
  document.getElementById("total-amount").innerText = totalPrice;
}



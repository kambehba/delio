function handleFormSubmit() {
  document.getElementById("i1").className = "s9";
  event.preventDefault();
  //   document.getElementById("i1").style.color = "red";
}

function init() {
  setElementClasses();
}

function setElementClasses() {
  document.getElementById("i1").className = "s4";
}

function handleCalculate() {
  let price, rent, value, payForDealAmount, cashFlowPerYear;
  const r1 = document.getElementById("r1");
  const r2 = document.getElementById("r2");
  const r3 = document.getElementById("r3");

  price = document.getElementById("lp").value;
  rent = document.getElementById("mr").value;
  value = document.getElementById("av").value;

  cashFlowPerYear = (rent * 12) / 2;

  let onePercentOfPrice = price / 100;

  payForDealAmount = (value * 70) / 100;

  if (rent >= onePercentOfPrice) {
    r1.innerHTML = "Good Deal";
    r2.innerHTML = "Pay For This Deal: " + " $" + payForDealAmount;

    r3.innerHTML = "Your Yearly Cash Flow: " + " $" + cashFlowPerYear;
  } else {
    r1.innerHTML = "Bad Deal";
  }
}

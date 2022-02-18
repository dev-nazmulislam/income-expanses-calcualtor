// Function for get value from input or others tag
function getValue(id, isInput) {
  const inputValue = document.getElementById(id);
  //   Error Handaling and return value if no Error
  if (isInput) {
    if (isNaN(inputValue.value) || inputValue.value < 0) {
      inputValue.style.border = "2px solid red";
      document.getElementById(
        "error"
      ).innerText = `"${id.toUpperCase()}" Amount is incoret `;
      return "error";
    } else if (inputValue.value == "") {
      inputValue.style.border = "rgb(156 163 175 / var(--tw-border-opacity))";
      return 0;
    } else {
      inputValue.style.border = "rgb(156 163 175 / var(--tw-border-opacity))";
      return parseFloat(inputValue.value);
    }
  } else {
    inputValue.style.border = "rgb(156 163 175 / var(--tw-border-opacity))";
    return parseFloat(inputValue.innerText);
  }
}
// Function for update Total Expenses and Balance.
function updateBalance() {
  // get input Value
  const income = getValue("income", true);
  const food = getValue("food", true);
  const rent = getValue("rent", true);
  const clothes = getValue("clothes", true);
  const expenses = food + rent + clothes;
  const balance = income - expenses;
  //   Update Balance & show error when get error
  if (
    !(
      income == "error" ||
      food == "error" ||
      rent == "error" ||
      clothes == "error"
    )
  ) {
    //   clean error measage
    document.getElementById("error").innerText = "";
    // update expenses, Balance & remaining Balance if not error
    if (income < expenses) {
      document.getElementById(
        "error"
      ).innerText = `Your incom ${income} TK and Expenses ${expenses} Tk. Please Decrease expenses`;
      document.getElementById("total-expenses").innerText = expenses;
      document.getElementById("total-balance").innerText = balance;
      document.getElementById("total-balance").style.color = "red";
    } else {
      document.getElementById("total-expenses").innerText = expenses;
      document.getElementById("total-balance").innerText = balance;
      document.getElementById("saving-amount").innerText = 00;
      document.getElementById("saving-parsentage").value = "";
      document.getElementById("remaining-balance").innerText = balance;
      document.getElementById("total-balance").style.color = "black";
    }
  }
}
// Function for calculate saving Amount
function calculateSaving() {
  const income = getValue("income", true);
  const parsentage = getValue("saving-parsentage", true);
  const savingAmount = (income * parsentage) / 100;
  const balance = getValue("total-balance", false);
  if (!(income == "error" || parsentage == "error")) {
    //   show error if saving amount gaterthan balance
    if (savingAmount > balance) {
      document.getElementById(
        "balance-error"
      ).innerText = `Insufficient Balance. You try to save ${savingAmount} TK. your Balance is ${balance} TK.`;
    } else {
      // Update Saving Amount & Remaining Balance
      document.getElementById("saving-amount").innerText = savingAmount;
      document.getElementById("remaining-balance").innerText =
        balance - savingAmount;
      // Clean error massage
      document.getElementById("error").innerText = "";
      document.getElementById("balance-error").innerText = "";
    }
  }
}

// Event handlar for calculate expenses and update balance on 'calculate' button
document
  .getElementById("calculate-expenses")
  .addEventListener("click", function () {
    updateBalance();
  });
// Event handlar for calculate saving amount and remaining balance on "save" button
document
  .getElementById("saving-claculate")
  .addEventListener("click", function () {
    calculateSaving();
  });
  
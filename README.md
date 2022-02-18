# Income & Expenses Calculator

## Hello, I am Md Nazmul Islam 😊

## This is a Fully Responsive Income & Expenses Calculator APP Made with:

1. Html,
2. CSS,
3. Bootstrap,
4. JavaScript

[Live Site](https://income-expenses-calculator.netlify.app/)

[GitHub](https://github.com/Porgramming-Hero-web-course/money-master-dev-nazmulislam)

![screenshot-127 0 0 1_5500-2022 02 17-03_18_41](https://user-images.githubusercontent.com/97091081/154358958-b075f444-ef00-4890-9048-2062a02e6018.png)

### JavaScript code

> We use for this app Three Function & Two event Handler

1. Function for get value from input or others tag

```

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

```

2. Function for update Total Expenses and Balance.

```

function updateBalance() {
  // get input Value
  const income = getValue("income", true);
  const food = getValue("food", true);
  const rent = getValue("rent", true);
  const clothes = getValue("clothes", true);
  const expenses = food + rent + clothes;
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
    document.getElementById("total-expenses").innerText = expenses;
    const balance = income - expenses;
    if (balance < 0) {
      document.getElementById("error").innerText =
        "Please increase Income Balance Or Decrease expenses";
      document.getElementById("total-balance").innerText = balance;
      document.getElementById("remaining-balance").innerText = balance;
    } else {
      document.getElementById("total-balance").innerText = balance;
      document.getElementById("remaining-balance").innerText = balance;
    }
  }
}

```

3. Function for calculate saving Amount

```

function calculateSaving() {
  const income = getValue("income", true);
  const parsentage = getValue("saving-parsentage", true);
  const savingAmount = (income * parsentage) / 100;
  const balance = getValue("total-balance", false);
  if (!(income == "error" || parsentage == "error")) {
    //   show error if saving amount gaterthan balance
    if (savingAmount > balance) {
      document.getElementById("balance-error").innerText =
        "Insufficient Balance";
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

```

1. Event handlar for calculate expenses and update balance

```
document
  .getElementById("calculate-expenses")
  .addEventListener("click", function () {
    updateBalance();
  });

```

2. Event handlar for calculate saving amount and remaining balance on "save" button

```

document
  .getElementById("saving-claculate")
  .addEventListener("click", function () {
    calculateSaving();
  });

```

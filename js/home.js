document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    //
    const addMoney = document.getElementById("money-add").value;
    console.log(addMoney);
    //
    const pinNumber = document.getElementById("input-pin-number").value;
    console.log(pinNumber);

    //

    if (pinNumber === "1234") {
      console.log("added money");
    } else {
      alert("failed to add money");
    }
    //
    const balance = document.getElementById("acount-balance").innerText;
    console.log(balance);
    //

    const addMoneyNumber = parseFloat(addMoney);
    const balanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + balanceNumber;
    console.log(newBalance);
    //
    document.getElementById("acount-balance").innerText = newBalance;
  });

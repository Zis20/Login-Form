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
  });

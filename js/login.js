// console.log('btn click')

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();

    console.log("login button click");
    const phoneNumber = document.getElementById("phone-number");
    console.log(phoneNumber.value);
  });

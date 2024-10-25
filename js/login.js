// console.log('btn click')

document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("login button click");

    const phoneNumber = document.getElementById("phone-number").value;
    // console.log(phoneNumber.value);

    const pinCode = document.getElementById("pin-code").value;
    console.log(phoneNumber, pinCode);

    if (phoneNumber === "5" && pinCode === "1234") {
      console.log("you r logged in");
      window.location.href = '/home.html'
    } 
    else {
      alert("wrong phone number or pin");
    }
  });

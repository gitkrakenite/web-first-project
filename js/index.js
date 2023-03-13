function addTwoNumbers() {
  let num1 = document.getElementById("numOne").value;
  let num2 = document.getElementById("numTwo").value;

  if (!num1 || !num2) {
    alert("Both numbers are needed");
    return;
  }

  let total = parseInt(num1) + parseInt(num2);
  document.getElementById("answer").innerHTML = total;
}

function subtractTwoNumbers() {
  let num1 = document.getElementById("numOne").value;
  let num2 = document.getElementById("numTwo").value;

  if (!num1 || !num2) {
    alert("Both numbers are needed");
    return;
  }

  let total = parseInt(num1) - parseInt(num2);
  document.getElementById("answer").innerHTML = total;
}

function productTwoNumbers() {
  let num1 = document.getElementById("numOne").value;
  let num2 = document.getElementById("numTwo").value;

  if (!num1 || !num2) {
    alert("Both numbers are needed");
    return;
  }

  let total = parseInt(num1) * parseInt(num2);
  document.getElementById("answer").innerHTML = total;
}

function divideTwoNumbers() {
  let num1 = document.getElementById("numOne").value;
  let num2 = document.getElementById("numTwo").value;

  if (!num1 || !num2) {
    alert("Both numbers are needed");
    return;
  }

  if (num1 == 0) {
    alert("The first number cannot be zero");
    return;
  }

  let total = parseInt(num1) / parseInt(num2);
  document.getElementById("answer").innerHTML = total;
}

// handle submit
const handleSubmit = (e) => {
  var form = document.getElementById("form");
  const handleForm = (e) => e.preventDefault();
  form.addEventListener("submit", handleForm);

  // get Values
  let username = document.getElementById("username").value;
  let useremail = document.getElementById("useremail").value;
  let usertext = document.getElementById("usertext").value;
  let data = document.getElementById("data");

  if (!username || !useremail || !usertext) {
    alert("Please enter all fields");
    return;
  }

  data.innerHTML = `Received Succesfully: Your name is ${username} and your email is ${useremail}. Your data is: ${usertext}`;
};

// scroll to top of

const scrollTopHome = () => {
  window.scrollTo(0, 0);
};

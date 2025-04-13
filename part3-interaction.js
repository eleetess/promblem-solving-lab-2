function sayHello() {
  document.getElementById("message").innerHTML = "something different";
}

function showName() {
  let username = document.getElementById("nameInput").value;
  document.getElementById("output").innerHTML = username;
}

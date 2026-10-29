
const message = document.getElementById("test-message");
const button = document.getElementById("test-button");

message.textContent = "CSS and JavaScript are connected!";

button.addEventListener("click", function () {
  message.textContent = "Success! JavaScript is working correctly.";
  button.textContent = "Test passed!";
});

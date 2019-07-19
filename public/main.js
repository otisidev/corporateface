/**
Log new data to localStorage
*/
function logData(title, description) {
  document.getElementById("subject").value = "Purchase: " + title;
  let message = description.map(item => item.planDetails).join(",");
  document.getElementById("message").value = message;
}

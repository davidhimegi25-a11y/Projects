function bookTable() {
  const name = document.getElementById("name").value.trim();
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;
  const box = document.getElementById("confirmation");

  if (!name || !date || !time || !guests) {
    alert("Please fill all fields before booking.");
    return;
  }

  box.style.display = "block";

  box.innerHTML =
    " TABLE RESERVED SUCCESSFULLY!<br><br>" +
    "Name: " +
    name +
    "<br>" +
    "Date: " +
    date +
    "<br>" +
    "Time: " +
    time +
    "<br>" +
    "Guests: " +
    guests;
}

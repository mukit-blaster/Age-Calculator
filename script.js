function calculateAge() {
  const birthdate = document.getElementById("birthdate").value;
  const result = document.getElementById("result");

  if (!birthdate) {
    result.textContent = "Please enter a valid birthdate.";
    return;
  }

  const birthDate = new Date(birthdate);
  const today = new Date();

  // Calculate the difference
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // If days are negative
  if (days < 0) {
    months--;
    const daysInLastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += daysInLastMonth;
  }

  // If months are negative
  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `<span class="age">${years} years, ${months} months, and ${days} days old</span>`;
}

function updateSaleEndCounter() {
  const currentTime = new Date(),
  endOfSaleTime = new Date('09-01-23'),
  differenceTime = endOfSaleTime - currentTime,
  daysLeft = Math.floor(differenceTime / 1000 / 60 / 60 / 24),
  hoursLeft = Math.floor(differenceTime / 1000 / 60 / 60) % 24,
  minutesLeft = Math.floor(differenceTime / 1000 / 60) % 60;
  secondsLeft = Math.floor(differenceTime / 1000) % 60,
  countdownContainer = document.querySelector('div[data-type="countdown-container"]'),
  countdownDays = countdownContainer.querySelector('[data-type="countdown-days"]'),
  countdownHours = countdownContainer.querySelector('[data-type="countdown-hours"]'),
  countdownMinutes = countdownContainer.querySelector('[data-type="countdown-minutes"]'),
  countdownSeconds = countdownContainer.querySelector('[data-type="countdown-seconds"]');

  countdownDays.innerHTML = `<span data-count>${daysLeft}</span> дней `;
  countdownHours.innerHTML = `<span data-count>${hoursLeft}</span> часов `;
  countdownMinutes.innerHTML = `<span data-count>${minutesLeft}</span> минут `;
  countdownSeconds.innerHTML = `<span data-count>${secondsLeft}</span> секунд `;
}

setInterval(updateSaleEndCounter, 1000)
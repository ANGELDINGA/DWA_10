// app.js
document.addEventListener('DOMContentLoaded', () => {
    const counterDisplay = document.getElementById('counter');
    const addButton = document.getElementById('add-button');
    const subtractButton = document.getElementById('subtract-button');
    const resetButton = document.getElementById('reset-button');
    const resetAlert = document.getElementById('reset-alert');
  
    let counter = 0;
  
    addButton.addEventListener('click', () => {
      counter++;
      counterDisplay.textContent = counter;
    });
  
    subtractButton.addEventListener('click', () => {
      if (counter > 0) {
        counter--;
        counterDisplay.textContent = counter;
      }
    });
  
    resetButton.addEventListener('click', () => {
      counter = 0;
      counterDisplay.textContent = counter;
      resetAlert.show();
    });
  });
  
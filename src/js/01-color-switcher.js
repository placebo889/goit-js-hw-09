
 let intervalId;

    function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    }

    function changeBackgroundColor() {
      const newColor = getRandomHexColor();
      document.body.style.backgroundColor = newColor;
    }

    function startBackgroundChange() {
      intervalId = setInterval(changeBackgroundColor, 2000);
    }

    function stopBackgroundChange() {
      clearInterval(intervalId);
    }

    document.addEventListener('DOMContentLoaded', function() {
      const startButton = document.querySelector('[data-start]');
      const stopButton = document.querySelector('[data-stop]');

      startButton.addEventListener('click', startBackgroundChange);
      stopButton.addEventListener('click', stopBackgroundChange);
    });
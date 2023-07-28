// Script to rotate hands in analog clock simulator

const secondsHand = document.querySelector('.hand.second'),
      minutesHand = document.querySelector('.hand.minute'),
      hoursHand = document.querySelector('.hand.hour'),
      now = new Date();

function moveHands() {
    const secs = now.getSeconds(),
          mins = now.getMinutes() * 60,
          hours = now.getHours() * 3600;
    
    secondsHand.style.animationDelay = '-' + secs + 's';
    minutesHand.style.animationDelay = '-' + mins + 's';
    hoursHand.style.animationDelay = '-' + hours + 's';
  }
  
// Function call to move hands depening on the time
moveHands();
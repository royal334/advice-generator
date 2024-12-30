// fetch('https://api.adviceslip.com/advice')
// .then(response => response.json())
// .then(data => {
//      const adviceId = document.querySelector('.advice-id');
//      const adviceText = document.querySelector('.advice-text');
//      adviceId.textContent = `Advice #${data.slip.id}`;
//      adviceText.textContent = `"${data.slip.advice}"`;
// })
// .catch(error => console.error('Error fetching advice:', error));
const dice = document.querySelector('.dice-container');




async function fetchAdvice(){
     const response = await fetch('https://api.adviceslip.com/advice');
     const data = await response.json();
     return data;
}

async function displayAdvice(){
     const advice = await fetchAdvice();
     const adviceId = document.querySelector('.advice-id');
     const adviceText = document.querySelector('.advice-text');
     adviceId.textContent = `Advice #${advice.slip.id}`;
     adviceText.textContent = `"${advice.slip.advice}"`;
}
// Event Listener
dice.addEventListener('click', displayAdvice);


document.getElementById('Button').addEventListener('click', generateCards);
const cards = [
  { name: '6', value: 6, image: 'images/6 сердце.jpg' },
  { name: '7', value: 7, image: 'images/7 сердце.jpg' },
  { name: '8', value: 8, image: 'images/8 сердце.jpg' },
  { name: '9', value: 9, image: 'images/9 сердце.jpg' },
  { name: '10', value: 10, image: 'images/10 сердце.jpg' },
  { name: 'Валет', value: 2, image: 'images/валет сердечко.jpg' },
  { name: 'Дама', value: 3, image: 'images/дама сердечко.jpg' },
  { name: 'Король', value: 4, image: 'images/король сердечко.jpg' },
  { name: 'Туз', value: 11, image: 'images/туз сердце.jpg' },
  // ///////////////////////////
  { name: '6', value: 6, image: 'images/6 сердце ч.jpg' },
  { name: '7', value: 7, image: 'images/7 сердце ч.jpg' },
  { name: '8', value: 8, image: 'images/8 сердце ч.jpg' },
  { name: '9', value: 9, image: 'images/9 сердце ч.jpg' },
  { name: '10', value: 10, image: 'images/10 сердце ч.jpg' },
  { name: 'Валет', value: 2, image: 'images/валет сердце ч.jpg' },
  { name: 'Дама', value: 3, image: 'images/дама сердце ч.jpg' },
  { name: 'Король', value: 4, image: 'images/король сердце ч.jpg' },
  { name: 'Туз', value: 11, image: 'images/туз сердце ч.jpg' },
  // /////////////////////
  { name: '6', value: 6, image: 'images/6 звезда.jpg' },
  { name: '7', value: 7, image: 'images/7 звезда.jpg' },
  { name: '8', value: 8, image: 'images/8 звезда.jpg' },
  { name: '9', value: 9, image: 'images/9 звезда.jpg' },
  { name: '10', value: 10, image: 'images/10 звезда.jpg' },
  { name: 'Валет', value: 2, image: 'images/валет звезда.jpg' },
  { name: 'Дама', value: 3, image: 'images/дама звезда.jpg' },
  { name: 'Король', value: 4, image: 'images/король звезда.jpg' },
  { name: 'Туз', value: 11, image: 'images/туз звезда.jpg' },
  // //////////////////////
  { name: '6', value: 6, image: 'images/6 клевер.jpg' },
  { name: '7', value: 7, image: 'images/7 клевер.jpg' },
  { name: '8', value: 8, image: 'images/8 клевер.jpg' },
  { name: '9', value: 9, image: 'images/9 клевер.jpg' },
  { name: '10', value: 10, image: 'images/10 клевер.jpg' },
  { name: 'Валет', value: 2, image: 'images/валет клевер.jpg' },
  { name: 'Дама', value: 3, image: 'images/дама клевер.jpg' },
  { name: 'Король', value: 4, image: 'images/король клевер.jpg' },
  { name: 'Туз', value: 11, image: 'images/туз клевер.jpg' }
];
let userName = prompt("Ваше ім’я:");
let userScore = 0;
let computerScore = 0;
let attempt = 1;
let gameEnded = false;
if (!userName) {
  userName = "Користувач";
}
document.querySelector('.player-name').textContent = userName;

function generateCards() {
  if (attempt > 3 || gameEnded) return;

  const userCard = cards[Math.floor(Math.random() * cards.length)];
  const computerCard = cards[Math.floor(Math.random() * cards.length)];

  document.getElementById('user-card').src = userCard.image;
  document.getElementById('computer-card').src = computerCard.image;

  userScore += userCard.value;
  computerScore += computerCard.value;

  document.getElementById('userScore').innerText = userScore;
  document.getElementById('computerScore').innerText = computerScore;

  document.getElementById('attempts').innerText = `Спроба ${attempt} з 3`;

  attempt++;

  if (attempt > 3) {
    gameEnded = true;

    let winnerMessage;
    if (userScore > computerScore) {
      winnerMessage = `Перемагає ${userName} `;
    } else if (userScore < computerScore) {
      winnerMessage = `Перемагає компʼютер`;
    } else {
      winnerMessage = `Нічия!`;
    }

    document.getElementById('winner').innerText = winnerMessage;
  }
}
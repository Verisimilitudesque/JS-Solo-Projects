// variables to keep track of the scores
let homeScore = 0;
let guestScore = 0;

// function to increment the score for home or guest team
function increaseScore(team, points) {
  if (team === 'home') {
      homeScore += points;
      document.getElementById('home-score').textContent = homeScore;
  } else if (team === 'guest') {
      guestScore += points;
      document.getElementById('guest-score').textContent = guestScore;
  }
}
// function to reset the scores
function resetScores() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById('home-score').textContent = homeScore;
  document.getElementById('guest-score').textContent = guestScore;
}

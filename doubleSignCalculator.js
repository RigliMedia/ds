// h1-check.js content
// Compatibility scores for Lunar signs
var c = [
  [7, 4, 4, 4, 6, 6, 5, 8, 6, 6, 5, 5],
  [4, 7, 6, 5, 8, 6, 6, 5, 5, 6, 6, 5],
  [4, 6, 7, 6, 5, 8, 6, 6, 5, 5, 6, 6],
  [4, 5, 6, 7, 6, 5, 8, 6, 6, 5, 5, 6],
  [6, 8, 5, 6, 7, 6, 6, 5, 5, 6, 6, 5],
  [6, 6, 8, 5, 6, 7, 6, 6, 5, 5, 6, 6],
  [5, 6, 6, 8, 6, 6, 7, 6, 6, 5, 5, 6],
  [8, 5, 6, 6, 5, 6, 6, 7, 6, 6, 5, 5],
  [6, 5, 5, 6, 5, 5, 6, 6, 7, 6, 6, 5],
  [6, 6, 5, 5, 6, 5, 5, 6, 6, 7, 6, 6],
  [5, 6, 6, 5, 6, 6, 5, 5, 6, 6, 7, 6],
  [5, 5, 6, 6, 5, 6, 6, 5, 5, 6, 6, 7]
];

// Compatibility scores for Sun signs
var z = [
  [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6],
  [6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5],
  [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6],
  [6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5],
  [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6],
  [6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5],
  [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6],
 


// Event listener for form submission
document.getElementById("doubleSignForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const person1Lunar = document.getElementById("person1Lunar").value.trim();
    const person1Sun = document.getElementById("person1Sun").value.trim();
    const person2Lunar = document.getElementById("person2Lunar").value.trim();
    const person2Sun = document.getElementById("person2Sun").value.trim();

    const compatibilityScore = calculateCompatibility(person1Lunar, person1Sun, person2Lunar, person2Sun);

    document.getElementById("result").textContent = `Compatibility Score: ${compatibilityScore}`;
});

function calculateCompatibility(person1Lunar, person1Sun, person2Lunar, person2Sun) {
    return calcScore(person1Lunar, person1Sun, person2Lunar, person2Sun);
}

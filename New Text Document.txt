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
    // Your calcScore function implementation should be placed here
    // For example: return calcScore(person1Lunar, person1Sun, person2Lunar, person2Sun);

    // Note: The calcScore function and any related variables or functions must be copied from your h1-check.js file
    // For the sake of brevity, I didn't include

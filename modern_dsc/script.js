// Compatibility Data
const ch = [
  [100, 17, 33, 50, 65, 33, 50, 65, 33, 50, 65, 33],
  // ...
  [17, 100, 17, 33, 50, 65, 33, 50, 65, 33, 50, 65],
];

const we = [
  [100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
  // ...
  [50, 50, 50, 50, 50, 50, 50, 50, 50, 100, 50, 50],
];

// Calculate compatibility function
function calculateCompatibility(chinese1Index, western1Index, chinese2Index, western2Index) {
  let comp = Math.round(((ch[chinese2Index - 1][chinese1Index - 1] * 75) + (we[western2Index - 1][western1Index - 1] * 25)) / 8);
  return comp;
}

function check() {
  // Get selected indexes
  let chinese1Index = document.getElementById("chinese1").selectedIndex;
  let western1Index = document.getElementById("western1").selectedIndex;
  let chinese2Index = document.getElementById("chinese2").selectedIndex;
  let western2Index = document.getElementById("western2").selectedIndex;

  // Call the calculateCompatibility function
  let compatibility = calculateCompatibility(chinese1Index, western1Index, chinese2Index, western2Index);

  // Update the progress bar and percentage display
  document.getElementById("compatibilityBar").style.width = compatibility + "%";
  document.getElementById("compatibilityPercentage").innerHTML = compatibility + "%";
}

// Add event listeners for the "Check" button
document.getElementById("checkButton").addEventListener("click", check);

// Initialize the page
window.onload = function() {
  // Original onload code here
};

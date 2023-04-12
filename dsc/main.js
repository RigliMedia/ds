document.getElementById("calculate").addEventListener("click", function() {
  const userSunSign = document.getElementById("userSunSign").value;
  const userLunarSign = document.getElementById("userLunarSign").value;
  const partnerSunSign = document.getElementById("partnerSunSign").value;
  const partnerLunarSign = document.getElementById("partnerLunarSign").value;

  const compatibilityResult = calculateCompatibility(
    userSunSign,
    userLunarSign,
    partnerSunSign,
    partnerLunarSign
  );

  document.getElementById("compatibilityResult").innerText = compatibilityResult;
});

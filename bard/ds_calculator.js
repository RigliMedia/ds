// This code calculates the compatibility between two people based on their horoscope signs.

// Import the necessary libraries.
const moment = require('moment');
const zod = require('zodiac');

// Define a function to calculate the compatibility score between two people.
function compatibilityScore(person1, person2) {
  // Get the sun signs of the two people.
  const sunSign1 = zod.getSign(person1.birthDate);
  const sunSign2 = zod.getSign(person2.birthDate);

  // Get the lunar signs of the two people.
  const lunarSign1 = zod.getSign(person1.birthDate, 'lunar');
  const lunarSign2 = zod.getSign(person2.birthDate, 'lunar');

  // Calculate the compatibility score.
  const score = (sunSign1 + lunarSign1) * (sunSign2 + lunarSign2);

  // Return the compatibility score.
  return score;
}

// Define a function to get the compatibility between two people.
function getCompatibility(person1, person2) {
  // Calculate the compatibility score.
  const score = compatibilityScore(person1, person2);

  // Get the compatibility text.
  const compatibilityText = zod.getCompatibilityText(score);

  // Return the compatibility text.
  return compatibilityText;
}

// Define a function to save the compatibility results.
function saveCompatibilityResults(person1, person2, compatibilityText) {
  // Create a new file.
  const file = new File([compatibilityText], 'compatibility_results.txt');

  // Save the file to the local file system.
  file.save();
}

// Define a function to compare the compatibility of two people.
function compareCompatibility(person1, person2) {
  // Calculate the compatibility scores of the two people.
  const score1 = compatibilityScore(person1, person2);
  const score2 = compatibilityScore(person2, person1);

  // Get the compatibility texts of the two people.
  const compatibilityText1 = zod.getCompatibilityText(score1);
  const compatibilityText2 = zod.getCompatibilityText(score2);

  // Compare the compatibility scores and texts.
  if (score1 > score2) {
    return {
      winner: person1,
      loser: person2,
      compatibilityText: compatibilityText1
    };
  } else if (score2 > score1) {
    return {
      winner: person2,
      loser: person1,
      compatibilityText: compatibilityText2
    };
  } else {
    return {
      winner: null,
      loser: null,
      compatibilityText: 'The two people are equally compatible.'
    };
  }
}

// Define a function to start the calculator.
function startCalculator() {
  // Get the user's name and birth date.
  const name = prompt('What is your name?');
  const birthDate = moment(prompt('What is your birth date (YYYY-MM-DD)?'));

  // Get the other person's name and birth date.
  const otherName = prompt('What is the other person's name?');
  const otherBirthDate = moment(prompt('What is the other person's birth date (YYYY-MM-DD)?'));

  // Calculate the compatibility between the two people.
  const compatibilityText = getCompatibility(name, otherName);

  // Save the compatibility results.
  saveCompatibilityResults(name, otherName, compatibilityText);

  // Compare the compatibility of the two people.
  const comparisonResult = compareCompatibility(name, otherName);

  // Display the compatibility results.
  console.log('The compatibility between ' + name + ' and ' + otherName + ' is: ' + compatibilityText);
  if (comparisonResult.winner) {
    console.log('The winner is ' + comparisonResult.winner);
  } else {
    console.log('The two people are equally compatible.');
  }
}

// Start the calculator.
startCalculator();




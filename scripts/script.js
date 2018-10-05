const moodChoices = document.getElementById("moodChoices");



// when record journal entry is pressed, store entry values in variables-- console.log to test
document.addEventListener('submit', (e) => {
  e.preventDefault();
  let journalDate = document.getElementById("journalDate");
  let concepts = document.getElementById("concepts");
  let journalEntry = document.getElementById("journalEntry");
  let mood = moodChoices.options[moodChoices.selectedIndex];
  console.log(journalDate.value)
  console.log(concepts.value)
  console.log(journalEntry.value)
  console.log(mood.value)
  journalDate.value = " "
  concepts.value = " "
  journalEntry.value = " "
  // mood.value = "select" This isn't working yet-- console.log runs again as well

})  


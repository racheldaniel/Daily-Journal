const moodChoices = document.getElementById("moodChoices");



// when record journal entry is pressed, store entry values in variables-- console.log to test
document.addEventListener('submit', (e) => {
  e.preventDefault();
  let journalDate = document.getElementById("journalDate").value;
  let concepts = document.getElementById("concepts").value;
  let journalEntry = document.getElementById("journalEntry").value;
  let mood = moodChoices.options[moodChoices.selectedIndex].value;
  console.log(journalDate)
  console.log(concepts)
  console.log(journalEntry)
  console.log(mood)
  journalDate = " "
  concepts = " "

})  


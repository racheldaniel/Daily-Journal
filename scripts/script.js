// set choices of moods for later selection
const moodChoices = document.getElementById("moodChoices");
const allEntries = [];
const journal = document.getElementsByClassName("journal")



// listen for form submission
document.addEventListener('submit', (e) => {
  // prevent page from reloading
  e.preventDefault();
  // assign input to variables
  let journalDate = document.getElementById("journalDate");
  let concepts = document.getElementById("concepts");
  let journalEntry = document.getElementById("journalEntry");
  let mood = moodChoices.options[moodChoices.selectedIndex];

  //create an object with the input values
  let currentEntry = {
    Date: journalDate.value,
    Concepts: concepts.value,
    Entry: journalEntry.value,
    Mood: mood.value,
  }

  //push object to array of entries

  allEntries.push(currentEntry);

  //  reset form
  journalDate.value = " "
  concepts.value = " "
  journalEntry.value = " "
  moodChoices.selectedIndex = document.getElementById("moodChoices").firstElementChild

})

 //loop through array of entries and post to DOM

//  for (let i = 0; i < allEntries.length; i++){

//  }
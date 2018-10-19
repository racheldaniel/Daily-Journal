// set choices of moods for later selection
const moodChoices = document.getElementById("moodChoices");

// creates an element, creates text element, appends text to element and adds a class
// function createContent(element, content, className) {
//   elem = document.createElement(element);
//   elementContent = document.createTextNode(content);
//   elem.appendChild(elementContent);
//   elem.className = className;
//   return elem
// }

//function to create a new section element and append it to the journal article

const createSection = () => {
  const journal = document.getElementsByClassName("journal")[0]
  const section = document.createElement("section")
  journal.appendChild(section)
  return section
}

// function to create children of section out of json object
const createContent = (object) => {
  let html = `
    <h3 class="date">${object.date}</h3>
    <p class="concepts">${object.concepts}</p>
    <p class="entry">${object.entry}</p>
    <p class="mood">${object.mood}</p>
  `
  return html
}

//TODO: get this to work with fragment instead. Append sections to article with newest on top.

fetch("http://localhost:8088/entries")
  .then(entries => entries.json())
  .then(parsedEntries => {
    parsedEntries.forEach((entry) => {
      let section = createSection()
      let html = createContent(entry)
      section.innerHTML += html
    })
  })


//ALL OF THE FOLLOWING CODE IS MOOT UNTIL THE NEXT JOURNAL CHAPTER-- CURRENTLY USING DUMMY JSON ENTRY

// listen for form submission
document.addEventListener("submit", (e) => {
  // prevent page from reloading
  e.preventDefault();
  // assign input to variables
  let journalDate = document.getElementById("journalDate");
  let concepts = document.getElementById("concepts");
  let journalEntry = document.getElementById("journalEntry");
  let dailyMood = moodChoices.options[moodChoices.selectedIndex];

  //create an object with the input values
  let currentEntry = {
    date: journalDate.value,
    concepts: concepts.value,
    entry: journalEntry.value,
    mood: dailyMood.value,
  }

  let date = ("Date: " + currentEntry.date);
  let conceptsLearned = ("Concepts Covered: " + currentEntry.concepts);
  let journalEntryText = currentEntry.entry;
  let mood = ("I'm Feeling: " + currentEntry.mood);


  // let section = document.createElement("section");
  // journal.appendChild(section);

  // let dateElement = createContent("h3", date, "date");
  // section.appendChild(dateElement);

  // let conceptElement = createContent("p", conceptsLearned, "concepts");
  // section.appendChild(conceptElement);

  // let entryElement = createContent("p", journalEntryText, "entry");
  // section.appendChild(entryElement);

  // let moodElement = createContent("p", mood, "mood");
  // section.appendChild(moodElement);


  //  reset form
  journalDate.value = " "
  concepts.value = " "
  journalEntry.value = " "
  moodChoices.selectedIndex = document.getElementById("moodChoices").firstElementChild

})









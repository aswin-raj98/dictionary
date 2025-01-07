let wordname = document.getElementById("wordname");
let meaning = document.getElementById("meaning");
let pos = document.getElementById("pos");
let pos2 = document.getElementById("pos2");
let meaning2 = document.getElementById("meaning2");
let phonetics = document.getElementById("phonetics");
let audio = document.getElementById("audio");
let example = document.getElementById("example");
let example2 = document.getElementById("example2");
let searchBtn = document.getElementById("searchBtn");


searchBtn.addEventListener("click",function(){
    let wordName = document.getElementById("input").value;
    const dicLink = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordName}`;

    fetch(dicLink)
     .then(response => response.json())
     .then(data =>{
      try {
         wordname.innerHTML = `Word: ${data[0].word}`;
        phonetics.innerHTML = `Phonetic: ${data[0].phonetic}`;
        pos.innerHTML = `Parts of Speech: ${data[0].meanings[0].partOfSpeech}`;
        meaning.innerHTML = `Meaning: ${data[0].meanings[0].definitions[0].definition}`;
        example.innerHTML = `Example: ${data[0].meanings[0].definitions[0].example}`;
        pos2.innerHTML = `Parts of Speech: ${data[0].meanings[1].partOfSpeech}`;
        meaning2.innerHTML = `Meaning: ${data[0].meanings[1].definitions[0].definition}`;
        example2.innerHTML = `Example: ${data[0].meanings[1].definitions[0].example}`;
     
      } catch (error) {
         console.log(error);
         return `${wordName} not found in directory`;
      }
   })
})
document.getElementById("wordSearch").addEventListener("keydown", function (event) {
   if (event.key === "Enter") {
       event.preventDefault(); 
       document.getElementById("searchBtn").click(); 
   }
});

// https://www.stands4.com/services/v2/syno.php?uid=12962&tokenid=NzQjilcbHQaY2h6I&word=ship&format=json
//  const uid = "12962";
   //  const api_Key = `NzQjilcbHQaY2h6I`;
   //  const api_Key= "IQiVl4lGd6ohCnOkU2cMng==r4DysZqMREWSA2Cg"
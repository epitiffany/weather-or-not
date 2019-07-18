var newDay = $('.newDayButton');
var container = $('.inputContainer');
var journal = [];
var right=$('.right');

var clear=$('.clearButton')

clear.on("click",clearAll)

function clearAll (){
  localStorage.clear();
  $('.journalCard').remove();
}

newDay.on("click", getLog);


function getLog () {
    var day = $('.day').val();
    var feeling = $('.feeling').val();
    var clothing = $('.clothing').val();

    var log = {
      day:day,
      feeling:feeling,
      clothing:clothing
    }
    appendLog(log);
    saveLog(log);
}

function appendLog (log) {
  right.prepend(`
    <div class="journalCard">
      <p>Date:${log.day}</p>
      <p>How did it feel outside? ${log.feeling}</p>
      <p>What did you wear? ${log.clothing}</p>
    </div>

    `)
}


function saveLog (log) {
  journal.push(log);
  localStorage.setItem("journal", JSON.stringify(journal));
}

var storedJournal= JSON.parse(localStorage.getItem("journal"));

for(var i=0; i<storedJournal.length; i++){
  var log = storedJournal[i]
  right.append(`
    <div class="journalCard">
      <p>Date:${log.day}</p>
      <p>How did it feel outside? ${log.feeling}</p>
      <p>What did you wear? ${log.clothing}</p>
    </div>
    `)
}

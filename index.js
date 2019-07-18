

var newDay = $('.newDayButton');
var container = $('.inputContainer');

newDay.on("click", addInputBox);

function addInputBox(){ //function to make input boxes appear (still working on it)
  container.append(`
    <div class ="log-card">
    <input type ="text"  placeholder="What day is it?" class="day">
    <input type="paragraph" placeholder="How did it feel outside today?" class="feeling">
    <input type="paragraph" placeholder="What'd you wear?" class="clothing">
    </div>
`);
  }

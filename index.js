// var weather = [
//   {
//     condition: 'sunny',
//     lowTemp: '70',
//     highTemp: '76',
//     date: 'Wednesday July 17th',
//     day: 'Monday'
//
//   },
//   {
//     condition: 'cloudy',
//     lowTemp: '67',
//     highTemp: '76',
//     date: 'Thursday July 18th',
//     day: 'Tuesday'
//   }
// ]
//
// var dayOne = {
//   condition: 'sunny',
//   lowTemp: '70',
//   highTemp: '76',
//   date: 'Wednesday July 17th',
//   day: 'Monday'
// }
//
// var dayTwo = {
//   condition: 'cloudy',
//   lowTemp: '67',
//   highTemp: '76',
//   date: 'Thursday July 18th',
//   day: 'Tuesday'
// }
//
// for (var i = 0; i < weather.length; i++) {
//   var condition = weather[i].condition
//   var lowTemp = weather[i].lowTemp
//   $('.paragraph').append()
//   $('.paragraph').text()
// }

var newDay = ${'.newDayButton'};
var container = ${'.inputContainer'};

newDay.on("click", addInputBox);

function addInputBox(){ //function to make input boxes appear (still working on it)
  container.append(`
    <div class ="log-card">
    <input type="paragraph" value="How did it feel outside today?" class="feeling">
    <input type="paragraph" value="What'd you wear?" class="clothing">
    </div>
`);
  }



// console.log("click");
// var cardContainer = $('.card-container');
// var submit = $('.submit-btn');
//
// submit.on("click", createNewUser);
//
// $('.card-container').on("click", ".delete-btn", deleteItem);
//
// function appendItem(newItem) {
//     cardContainer.append(`
//     <div class="to-do-card">
//       <p>${newItem}</p> <button class="delete-btn">delete</button>
//     </div>
//   `);
// }
//
// function createNewUser() {
//   var groceryItem = $('.newItem').val();
//   appendItem(groceryItem);
//   clearInputs();
// }
//
//
// function clearInputs() {
//   $('.newItem').val("");
// }
//
// function deleteItem(event){
//   event.target.parentNode.remove();
// }

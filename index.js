var tempContainer = $('.temp-container');
var clothesContainer2 = $('.clothes-container2');
var submit = $('.submit-btn');

submit.on("click", grabItems);

$('.clothes-container2').on("click", ".delete-btn", deleteItem);

function grabItems() {
  var clothing = $('.newItem').val();
  var temp=$('.newTemp').val();
  appendItems(clothing, temp);
  clearInput();
}

function appendItems(newItem, newTemp) {
    clothesContainer2.append(`
    <div class="clothes-card">
      <p>${newItem}</p> <button class="delete-btn">delete</button>
    </div>
  `);
}

function clearClothesInput() {
  $('.newItem').val("");
}

function deleteItem(event){
  event.target.parentNode.remove();
}


tempSubmit.on("click", grabTemp);

$('.temp-container').on("click", ".delete-btn", deleteItem);

function grabTemp() {
  var temp = $('.newTemp').val();
  appendTemp(temp);
  clearTempInput();
}

function appendTemp(newItem) {
    tempContainer.append(`
    <div class="temp-card">
      <p>${newItem}</p> <button class="delete-btn">delete</button>
    </div>
  `);
}

function clearTempInput() {
  $('.newItem').val("");
}

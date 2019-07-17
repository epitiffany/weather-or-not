var weather = [
  {
    condition: 'sunny',
    lowTemp: '70',
    highTemp: '76',
    date: 'Wednesday July 17th',
    day: 'Monday'

  },
  {
    condition: 'cloudy',
    lowTemp: '67',
    highTemp: '76',
    date: 'Thursday July 18th',
    day: 'Tuesday'
  }
]

var dayOne = {
  condition: 'sunny',
  lowTemp: '70',
  highTemp: '76',
  date: 'Wednesday July 17th',
  day: 'Monday'
}

var dayTwo = {
  condition: 'cloudy',
  lowTemp: '67',
  highTemp: '76',
  date: 'Thursday July 18th',
  day: 'Tuesday'
}

for (var i = 0; i < weather.length; i++) {
  var condition = weather[i].condition
  var lowTemp = weather[i].lowTemp
  $('.paragraph').append() // appened text to page
  $('.paragraph').text() // change text of paragraph
}

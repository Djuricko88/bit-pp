// Selecting One/Multiple Elements
// Create two unordered lists on the page.

// Create a function that selects the second list and applies a class that sets some background color to it.


function colorIt() {
  
  var body = document.querySelector('body');
  var bodyChildren = body.childNodes;

  var counter = 1;
  var secondList = null;

  bodyChildren.forEach(function (child) {
    if (child.localName == 'ul' && counter == 2) {
      secondList = child;
      counter++
    } else if (child.localName == 'ul') {
      counter++
    }
  })

 
  var addClassToSecUL = secondList.classList.add('red');
 
}
colorIt();

// Create a second function that, when triggered, selects all <li> elements on the page. 
// The function also sets a class that sets some bg color to every <li> element.

function selectLiElements(cssClass) {
  var allLiEl = document.querySelectorAll('li');


  allLiEl.forEach(function (li) {
    li.classList.add(cssClass)
  })


}
selectLiElements('green');

// Create one more unordered list and one more function


function transformThirdUlLiEl() {
  var thirdUlLi = document.querySelectorAll('ul:last-Of-Type>li');
  for (var i = 0; i < thirdUlLi.length; i++) {

    thirdUlLi[i].classList.remove('green')
    thirdUlLi[i].classList.add('blue')

    thirdUlLi[i].childNodes[0].nodeValue =
    thirdUlLi[i].childNodes[0].nodeValue.toUpperCase()
  }
  
}

transformThirdUlLiEl();
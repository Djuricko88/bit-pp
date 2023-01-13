

var messageElement = document.querySelector('#message');
var textAreaElement = document.querySelector('.chat-area');
var sendButton = document.querySelector('#button');


function appendMessage() {
 
  if (messageElement.value === '') {
    return;
  }
  // create time
  var day = new Date();
  var hours = day.getHours();
  var minutes = day.getMinutes();

  var currentTime = hours + ':' + (minutes > 9 ? minutes : '0' + minutes);
  // create new message bubble
  var newMessage = messageBubble(messageElement.value, currentTime);

  // add newMessage to chat area (textAreaElement)
  textAreaElement.appendChild(newMessage);

  // reset input text box
  messageElement.value = '';
}



function messageBubble(message, time) {

  // create outter div
  var messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container');

  // create text-container
  var textContainer = document.createElement('div');
  textContainer.classList.add('text-container');

  // create time-container
  var timeContainer = document.createElement('div');
  timeContainer.classList.add('time-container');

  // create new p tag with our message

  var messageParagraph = document.createElement('p');
  messageParagraph.classList.add('message-text');
  messageParagraph.textContent = message;

  // create new p tag with time
  var timeParagraph = document.createElement('p');
  timeParagraph.classList.add('message-time');
  timeParagraph.textContent = time;

  // add messageParagraph to textContainer
  textContainer.appendChild(messageParagraph);

  // add timeParagraph to timeContainer
  timeContainer.appendChild(timeParagraph);

  // add textContainer and timeContainer to messageContainer
  messageContainer.appendChild(textContainer);
  messageContainer.appendChild(timeContainer);


  return messageContainer;
}


// add click event on send button element
sendButton.onclick = appendMessage;

// add on key down event on input text box
messageElement.onkeydown = function (event) {
  if (event.code === 'Enter') {
    appendMessage()
  }
};



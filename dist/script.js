/** This should build a sentence and display it in the main browser window. */

var myStr = '',
first_part = 'I like to eat';

function GetSentence() {
  console.log('starting function');
  myStr = first_part;
  console.log('so far so good');
  for (var i = 0; i < 3; i++) {
    var x = ['apples', "bananas", 'cookies'];
    myStr = myStr + ' ' + x[i] + ' ';
    $('body')
      .find('h1')
      .text(myStr);
    console.log(myStr);
  }
}

GetSentence();

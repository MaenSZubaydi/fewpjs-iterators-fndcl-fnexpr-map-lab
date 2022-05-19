const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased (text){
  //return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
  const newText = text.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
  return newText;
}

const newTuts = tutorials.map(titleCased);

console.log(newTuts);

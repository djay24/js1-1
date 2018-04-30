/*jshint esversion: 6 */
// Take a number and return the square of that number (power of 2).
// If a non-number argument is passed into the function, alert NaN and prompt for another response
// In a second function, capitalize the first letter of a string and add a period (.) to the end of the string if it doesn't already end with a period
// Create a string that will flip the position of the first and second half of a string. For example, the string “abcdef” would be returned as “defabc”. Hint: use substring.
// BONUS: If you are bored by all that, write a function that checks if a given string is a palindrome.


//********************Part 1 Return Square of number***************
function squareRoot() {
  let number = parseInt(prompt('Please give me a number to square root.'));
  console.log (number);
  if (!isNaN(number)) {
    alert (Math.sqrt (number));
    } else {
      alert ("NaN Please enter number.");
    squareRoot();
  }
}
squareRoot ();

// ********************Part 2 and 3********************
function capString() {
  let phrase = (prompt('Type in promt\n\nthe cat stinks'));
  console.log(phrase);
  if (phrase === null) {
    alert('Please try agian.');
    capString();
  } else if (phrase != "" && !null) {
    let upper = phrase.charAt(0).toUpperCase() + phrase.slice(1); //charAt will return character of specific position
    if (phrase.indexOf('.') !== -1) {
      alert(`Period Found!\n${upper}`);
    } else {
      let period = `${upper}.`;
      // let upperPeriod = period.push('.');
      alert(period);
    }
  }
}
capString();

// ******************Part 3*****************
let str = 'abcdef';
alert (`Watch me change "${str}" right before your very eyes!`);

function yoda() {
  console.log(str);
  let split = str.length / 2 | 0;
  console.log(split);
  let split1 = str.substring(split);
  console.log(split1);
  let split2 = str.substring(0, split);
  console.log(split2);
  let newString = split1.concat(split2);
  alert(`voilà ${newString}`);
}
yoda();


// ******************Part 4*****************

function palindrome() {
  let str = prompt("Please type in a word to check if its a Palindrome");
  let strRegExp = /[\W_]/g;
  let strLower = str.toLowerCase().replace(strRegExp, '');
  console.log (strLower);
  let strReverse = strLower.split('').reverse().join('');
  console.log (strRegExp);
  alert (strReverse === strLower);
}

palindrome();


//end

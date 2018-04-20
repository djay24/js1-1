/*jshint esversion: 6 */

let birthday = new Date(prompt('Thank you for participating in my survey.\n\n Please enter your birth date', 'mm/dd/yyyy'));
year = birthday.getFullYear();
console.log(year);

let age = (2018 - year);
console.log(age);
//   if (age == null){
//   return false;
// }
  if (age < 18) {
  alert('I am so sorry you are not old enough to participate in this survey.');
} else if (age > 79) {
  alert('I am so sorry you are to old for this survey, but here what was happening  around 80 years ago.\n\nIn 1934, 80 years before 2014, the world was in the Great Depression, Hitler named himself Fuehrer of Germany, Mussolini was Prime Minister of Italy and Roosevelt was President of the United States. The continuing Midwest drought destroyed 35 million acres of farmland in Oklahoma, and President Roosevelt instituted public works programs to build roads, dams and bridges to create jobs. Unemployment was at 22 percent.');
} else {
  let rockBand = prompt('You are the perfect age for my survey!\n\nThe one and only question I for you is\n\nWhats the greatest rock band of all times?');

  console.log(rockBand.toLowerCase());

  if (rockBand.toLowerCase() == "led zeppelin", "led zepplin") {
    alert(`HATS OFF TO YOU MY FRIEND!\n\nLED ZEPPELIN IS THE GREATEST BAND EVER!`);
    window.location.href = 'http://www.ledzeppelin.com';
  } else {
    alert(`YOU MUST BE EXTREMELY DELUSIONAL!\n\n${rockBand.toUpperCase()} IS A MUSICAL JOKE!\n\nLED ZEPPELIN IS THE GREATEST BAND EVER!`);
    window.location.href = 'http://www.ledzeppelin.com';
  }
}

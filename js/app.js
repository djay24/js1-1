/*jshint esversion: 6 */

// 1  Employ a function that accepts two arguments: temperature and scale (either celcius or fahrenheit).
// 2  Display the temperature in an h3 with minimal styling.
// 3  When the user clicks on the h3, run the function to convert the temperature.
// 4  Display the converted temperature in the h3.


function calc(){
  let dropdown = document.getElementById("dropdown").value.toLowerCase();
  let temp = parseInt(document.getElementById("temp").value);
  let fahrenheit = parseInt((temp * 9/5) + 32);
  let celcius = parseInt((temp - 32) * 5/9);
  // console.log(dropdown);


  if (dropdown === "fahrenheit"){
    // console.log (fahrenheit);
    document.getElementById("answer").innerHTML = `The temperature in fahrenheit is ${fahrenheit} degrees`;
} else if(dropdown === "celcius"){
      // console.log (celcius);
      document.getElementById("answer").innerHTML = `The temperature in celcius is ${celcius} degrees`;
    }
}
calc ();

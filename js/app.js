/*jshint esversion: 6 */
console.log (document.forms.login.username.value);

document.forms.login.username.addEventListener ('click', e => {
  e.preventDefault();
  console.log(e.target.value)
})

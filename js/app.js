/*jshint esversion: 6 */



document.getElementById('submit').addEventListener('click', function ()  {
  let day = document.getElementById('day').value;
  let time = document.getElementById('time').value;
  let todo = document.getElementById('comment').value;
  todoItem = [day, time, todo];
  str = todoItem.toString();
  if (str) addItemTodo(str);

  // console.log(todoItem);
  // console.log(str);
  // console.log(todo);
  });

function addItemTodo (listItem) {
  let list = document.getElementById('Monday');
  let str = document.createElement('li');
  list.innerText = listItem;
  console.log(listItem);
  list.appendChild(str);
}

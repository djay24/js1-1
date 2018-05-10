/*jshint esversion: 6 */



document.getElementById('submit').addEventListener('click', function (e)  {
  e.preventDefault();
  let day = document.getElementById('day').value;
  let time = document.getElementById('time').value;
  let todo = document.getElementById('comment').value;
  let todoItem = `${time} ${todo}`
  console.log(todoItem);
  // todoItem = [time, todo];
  // str = todoItem.toString();
  if (todoItem) addItemTodo(todoItem);
  document.getElementById('comment').value = "";

  });

function addItemTodo (listItem) {
  let listTime = document.getElementById('Monday');
  let listComment = document.createElement('li');
  listComment.innerText = listItem;
  listTime.appendChild(listComment)
}

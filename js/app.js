/*jshint esversion: 6 */



document.getElementById('submit').addEventListener('click', function (e)  {
  e.preventDefault();
  let day = document.getElementById('day').value;
  let time = document.getElementById('time').value;
  let todo = document.getElementById('comment').value;
  let todoItem = `${time} ${todo}`;
  console.log(todoItem);

  if (todoItem) addItemTodo(todoItem);
  document.getElementById('comment').value = "";

  });

function addItemTodo (listItem) {
  //Get ul  and create li
  let listTime = document.getElementById('Monday');
  let listComment = document.createElement('li');
  listComment.innerText = listItem;

  //Add Font Awesome li Buttons
  deleteIcon = '<i class="fas fa-trash-alt"></i>';
  completeIcon = '<i class="fas fa-check-circle"></i>';

  let buttonBox = document.createElement('div');
  buttonBox.classList.add("buttonBox");

  let remove = document.createElement("button");
  remove.classList.add('remove');
  remove.innerHTML = deleteIcon;

  let complete = document.createElement("button");
  complete.classList.add('complete');
  complete.innerHTML = completeIcon;

  buttonBox.appendChild(complete);
  buttonBox.appendChild(remove);
  listComment.appendChild(buttonBox);
  listTime.appendChild(listComment);
}

/*jshint esversion: 6 */


// Create Submit Button and function
document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault();
  let day = document.getElementById('day').value;
  let time = document.getElementById('time').value;
  let todo = document.getElementById('comment').value;
  let todoItem = `${time} \u2002 ${todo}`;
  console.log(todoItem);

  if (todoItem) addItemTodo(todoItem);
  document.getElementById('comment').value = "";
});


//Get ul  and create li
function addItemTodo(listItem) {
  let listTime = document.getElementById('Monday');
  let listComment = document.createElement('li');
  listComment.innerText = listItem;
  listComment.classList.add('li-time');
  listComment.classList.add('li-completed');


  //Add Font Awesome li Buttons
  deleteIcon = '<i class="fas fa-trash-alt"></i>';
  completeIcon = '<i class="fas fa-check-circle"></i>';

  let listBox = document.createElement('div');
  listBox.classList.add("listBox");

  let remove = document.createElement("button");
  remove.classList.add('remove');
  remove.innerHTML = deleteIcon;


  // let completeBox = document.createElement('div');
  // listBox.classList.add("listBox");

  let complete = document.createElement("button");
  complete.classList.add('complete');
  complete.innerHTML = completeIcon;

  listBox.appendChild(complete);
  listBox.appendChild(remove);
  listComment.appendChild(listBox);
  listTime.appendChild(listComment);


  // Delete Button Function
  remove.addEventListener('click', deleteTodo);

  function deleteTodo() {
    let todoItem = listTime;
    listTime.removeChild(listComment);
    // console.log(todoItem.value);
  }


  // Complete Button Function
  complete.addEventListener('click', completeTodo);
  function completeTodo() {
    let moveComplete = listBox.parentNode;//leave alone
    let removeIcon = listBox;
    let ulComplete = document.getElementById('ulComplete');
    ulComplete.appendChild(moveComplete);
    moveComplete.removeChild(removeIcon);
    // listBox.classList.add("listBox");
    // remove.classList.add('remove');
    // remove.innerHTML = deleteIcon;
    // listBox.appendChild(remove);
    console.log(removeIcon);
    }

    // function removeElement(){
    //   removeIcon.parentNode.removeChild(complete);
    //
    // }

}

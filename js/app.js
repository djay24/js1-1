/*jshint esversion: 6 */




// Create Submit Button and function
document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault();
  let day = document.getElementById('day').value;
  let time = document.getElementById('time').value;
  let todo = document.getElementById('comment').value;
  let todoItem = `${time} \u2002 ${todo}`;
  if (todoItem) ;
  document.getElementById('comment').value = "";
  console.log (day);
});

console.log (day);
switch (day){
  case Monday:
  function addItemTodos(listItem) {
    let listTime = document.getElementById('Monday');
    let listComment = document.createElement('li');
    listComment.innerText = listItem;
    listComment.classList.add('li-time');
    listComment.classList.add('li-completed');
    console.log (day);


    //Add Font Awesome li Buttons
    deleteIcon = '<i class="fas fa-trash-alt"></i>';
    completeIcon = '<i class="fas fa-check-circle"></i>';

    let listBox = document.createElement('div');
    listBox.classList.add("listBox");

    let remove = document.createElement("button");
    remove.classList.add('remove');
    remove.innerHTML = deleteIcon;

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

    }
    // Complete Button Function
    complete.addEventListener('click', completeTodo);
    function completeTodo() {
      let moveComplete = listBox.parentNode;//leave alone
      let removeIcon = listBox;
      let ulComplete = document.getElementById('ulComplete');
      ulComplete.appendChild(moveComplete);
      moveComplete.removeChild(removeIcon);
      let CompletedBox = document.createElement('div');
      listBox.classList.add("listBox");
      let removeCompleted = document.createElement("button");
      removeCompleted.classList.add('remove');
      removeCompleted.innerHTML = deleteIcon;
    break;}}

}





//Get ul  and create li
// function addItemTodo(listItem) {
//   let listTime = document.getElementById('Monday');
//   let listComment = document.createElement('li');
//   listComment.innerText = listItem;
//   listComment.classList.add('li-time');
//   listComment.classList.add('li-completed');
//   console.log(day);
//
//
//   //Add Font Awesome li Buttons
//   deleteIcon = '<i class="fas fa-trash-alt"></i>';
//   completeIcon = '<i class="fas fa-check-circle"></i>';
//
//   let listBox = document.createElement('div');
//   listBox.classList.add("listBox");
//
//   let remove = document.createElement("button");
//   remove.classList.add('remove');
//   remove.innerHTML = deleteIcon;
//
//   let complete = document.createElement("button");
//   complete.classList.add('complete');
//   complete.innerHTML = completeIcon;
//
//   listBox.appendChild(complete);
//   listBox.appendChild(remove);
//   listComment.appendChild(listBox);
//   listTime.appendChild(listComment);
//
// // Delete Button Function
//   remove.addEventListener('click', deleteTodo);
//     function deleteTodo() {
//     let todoItem = listTime;
//     listTime.removeChild(listComment);
//   }

/*jshint esversion: 6 */

//Add Font Awesome li Buttons
deleteIcon = '<i class="fas fa-trash-alt"></i>';
completeIcon = '<i class="fas fa-check-circle"></i>';

// Create Submit Button and function
document.getElementById('submit').addEventListener('click', function(e) {
  e.preventDefault();
  let day = document.getElementById('day').value;
  let time = document.getElementById('time').value;
  let todo = document.getElementById('comment').value;
  let todoItem = `${time} \u2002 ${todo}`;
  console.log(todoItem);

  if (day == 'Monday') addItemTodo(todoItem);
  document.getElementById('comment').value = "";
    console.log(day);
  if (day == 'Tuesday') addItemTue(todoItem);
  document.getElementById('comment').value = "";
  if (day == 'Wednesday') addItemWed(todoItem);
  document.getElementById('comment').value = "";
  if (day == 'Thursday') addItemThur(todoItem);
  document.getElementById('comment').value = "";
  if (day == 'Friday') addItemFri(todoItem);
  document.getElementById('comment').value = "";
  if (day == 'Saturday') addItemSat(todoItem);
  document.getElementById('comment').value = "";
  if (day == 'Sunday') addItemSun(todoItem);
  document.getElementById('comment').value = "";
});


// ****************************Monday*******************************
function addItemTodo(listItem) {
  console.log(day.value);
  let listTime = document.getElementById('Monday');
  let listComment = document.createElement('li');
  listComment.innerText = listItem;
  listComment.classList.add('li-time');
  listComment.classList.add('li-completed');
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
    listTime.removeChild(listComment);}
  // Complete Button Function
  complete.addEventListener('click', completeTodo);
  function completeTodo() {
    let moveComplete = listBox.parentNode; //leave alone
    let removeIcon = listBox;
    let ulComplete = document.getElementById('ulComplete');
    ulComplete.appendChild(moveComplete);
    moveComplete.removeChild(removeIcon);
    let remove = document.createElement("button");
    remove.classList.add('remove-completed');
    remove.innerHTML = deleteIcon;
    moveComplete.appendChild(remove);
    // Delete Button Function
    remove.addEventListener('click', deleteTodo);
    function deleteTodo() {
      let finalRemove = moveComplete;
      ulComplete.removeChild(moveComplete);
    }
  }
}

// *****************************Tuesday***************************
function addItemTue(listItem) {
  console.log(day.value);
  let listTime = document.getElementById('Tuesday');
  let listComment = document.createElement('li');
  listComment.innerText = listItem;
  listComment.classList.add('li-time');
  listComment.classList.add('li-completed');
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
    listTime.removeChild(listComment);}
  // Complete Button Function
  complete.addEventListener('click', completeTodo);
  function completeTodo() {
    let moveComplete = listBox.parentNode; //leave alone
    let removeIcon = listBox;
    let ulComplete = document.getElementById('ulComplete');
    ulComplete.appendChild(moveComplete);
    moveComplete.removeChild(removeIcon);
    let remove = document.createElement("button");
    remove.classList.add('remove-completed');
    remove.innerHTML = deleteIcon;
    moveComplete.appendChild(remove);
    // Delete Button Function
    remove.addEventListener('click', deleteTodo);
    function deleteTodo() {
      let finalRemove = moveComplete;
      ulComplete.removeChild(moveComplete);
    }
  }
}

// *****************************Wednesday***************************
function addItemWed(listItem) {
  console.log(day.value);
  let listTime = document.getElementById('Wednesday');
  let listComment = document.createElement('li');
  listComment.innerText = listItem;
  listComment.classList.add('li-time');
  listComment.classList.add('li-completed');
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
    listTime.removeChild(listComment);}
  // Complete Button Function
  complete.addEventListener('click', completeTodo);
  function completeTodo() {
    let moveComplete = listBox.parentNode; //leave alone
    let removeIcon = listBox;
    let ulComplete = document.getElementById('ulComplete');
    ulComplete.appendChild(moveComplete);
    moveComplete.removeChild(removeIcon);
    let remove = document.createElement("button");
    remove.classList.add('remove-completed');
    remove.innerHTML = deleteIcon;
    moveComplete.appendChild(remove);
    // Delete Button Function
    remove.addEventListener('click', deleteTodo);
    function deleteTodo() {
      let finalRemove = moveComplete;
      ulComplete.removeChild(moveComplete);
    }
  }
}

// *****************************Friday***************************
function addItemFri(listItem) {
  console.log(day.value);
  let listTime = document.getElementById('Friday');
  let listComment = document.createElement('li');
  listComment.innerText = listItem;
  listComment.classList.add('li-time');
  listComment.classList.add('li-completed');
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
    listTime.removeChild(listComment);}
  // Complete Button Function
  complete.addEventListener('click', completeTodo);
  function completeTodo() {
    let moveComplete = listBox.parentNode; //leave alone
    let removeIcon = listBox;
    let ulComplete = document.getElementById('ulComplete');
    ulComplete.appendChild(moveComplete);
    moveComplete.removeChild(removeIcon);
    let remove = document.createElement("button");
    remove.classList.add('remove-completed');
    remove.innerHTML = deleteIcon;
    moveComplete.appendChild(remove);
    // Delete Button Function
    remove.addEventListener('click', deleteTodo);
    function deleteTodo() {
      let finalRemove = moveComplete;
      ulComplete.removeChild(moveComplete);
    }
  }
}

// *****************************Saturday***************************
function addItemSat(listItem) {
  console.log(day.value);
  let listTime = document.getElementById('Saturday');
  let listComment = document.createElement('li');
  listComment.innerText = listItem;
  listComment.classList.add('li-time');
  listComment.classList.add('li-completed');
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
    listTime.removeChild(listComment);}
  // Complete Button Function
  complete.addEventListener('click', completeTodo);
  function completeTodo() {
    let moveComplete = listBox.parentNode; //leave alone
    let removeIcon = listBox;
    let ulComplete = document.getElementById('ulComplete');
    ulComplete.appendChild(moveComplete);
    moveComplete.removeChild(removeIcon);
    let remove = document.createElement("button");
    remove.classList.add('remove-completed');
    remove.innerHTML = deleteIcon;
    moveComplete.appendChild(remove);
    // Delete Button Function
    remove.addEventListener('click', deleteTodo);
    function deleteTodo() {
      let finalRemove = moveComplete;
      ulComplete.removeChild(moveComplete);
    }
  }
}

// *****************************Sunday***************************
function addItemSun(listItem) {
  console.log(day.value);
  let listTime = document.getElementById('Sunday');
  let listComment = document.createElement('li');
  listComment.innerText = listItem;
  listComment.classList.add('li-time');
  listComment.classList.add('li-completed');
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
    listTime.removeChild(listComment);}
  // Complete Button Function
  complete.addEventListener('click', completeTodo);
  function completeTodo() {
    let moveComplete = listBox.parentNode; //leave alone
    let removeIcon = listBox;
    let ulComplete = document.getElementById('ulComplete');
    ulComplete.appendChild(moveComplete);
    moveComplete.removeChild(removeIcon);
    let remove = document.createElement("button");
    remove.classList.add('remove-completed');
    remove.innerHTML = deleteIcon;
    moveComplete.appendChild(remove);
    // Delete Button Function
    remove.addEventListener('click', deleteTodo);
    function deleteTodo() {
      let finalRemove = moveComplete;
      ulComplete.removeChild(moveComplete);
    }
  }
}

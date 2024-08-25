var taskInput = document.getElementById('taskInput');
var taskAdd = document.getElementById('taskAdd');
var taskList = document.getElementById('taskList');
function Click() {
    var tasktext = taskInput.value;
    if (tasktext === '') {
        return;
    }
    var listitem = document.createElement('li');
    var span = document.createElement('sapn');
    span.textContent = tasktext;
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    listitem.appendChild(span);
    listitem.appendChild(deleteButton);
    taskList.appendChild(listitem);
    taskInput.value = '';
    deleteButton.style.marginLeft = "30px";
    deleteButton.style.backgroundColor = "orange";
    deleteButton.style.fontSize = "20px";
    deleteButton.addEventListener('click', function (event) {
        var deleteButton = event.target;
        var listitem = deleteButton.parentElement;
        listitem.remove();
    });
}

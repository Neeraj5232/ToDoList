const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const taskAdd = document.getElementById('taskAdd') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

function Click(){
    const tasktext = taskInput.value;
    if(tasktext===''){
        return
    }

    const listitem:HTMLLIElement = document.createElement('li')
    const span:HTMLSpanElement = document.createElement('sapn')
    span.textContent=tasktext;
    const deleteButton:HTMLButtonElement = document.createElement('button')
    deleteButton.textContent="Delete"

    listitem.appendChild(span)
    listitem.appendChild(deleteButton)
    taskList.appendChild(listitem)
    taskInput.value=''
     deleteButton.style.marginLeft="30px"
     deleteButton.style.backgroundColor="orange"
     deleteButton.style.fontSize="20px"
     

    deleteButton.addEventListener('click', (event)=>{
        const deleteButton = event.target as HTMLButtonElement;
        const listitem = deleteButton.parentElement as HTMLLinkElement
        listitem.remove();
    });
}
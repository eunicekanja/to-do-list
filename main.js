'use strict'
//selectors
const todoInput=document.querySelector('.todo-input');
const todoBtn=document.querySelector('.todo-button')
const todoList=document.querySelector('.todo-list')
const todoContainer=document.querySelector('.todo-container')
const todoItems=['hello'];
const filterOption=document.querySelector('.filter-todo')
//event listeners on button and enter key
todoBtn.addEventListener('click',addTodo);
document.addEventListener('keypress',function(e){
    if(e.key==='Enter'){
        addTodo(e)
    }
})

//functions
function addTodo(e){
    e.preventDefault()
     //if todo is empty
    if(todoInput.value==='') return
    //const allItems=todoItems.concat(todoInput.value)
    //console.log(allItems)
    //const newHtml=`
    //<ul class="todo-list">
    //<div class="todo">
       // <li class="todo-item">${todoInput.value}</li>
       // <i class="fas fa-check"></i>
       // <i class="fas fa-times"></i>
   // </div>
    //</ul>
    //`
    //todoContainer.insertAdjacentHTML('afterend',newHtml)
    //todo div
    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo');
    //create list
    const newTodo=document.createElement('li');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //check button
    const completedBtn=document.createElement('button');
    completedBtn.innerHTML='<i class="fas fa-check"></i>';
    completedBtn.classList.add('complete-button')
    todoDiv.appendChild(completedBtn)
    //trash button
    const trashBtn=document.createElement('button');
    trashBtn.innerHTML='<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-button')
    todoDiv.appendChild(trashBtn)
    //append to do div to the list
    todoList.appendChild(todoDiv)

    //clear todo input value
    todoInput.value='';
    //delete todo
    trashBtn.addEventListener('click',function(e){
        todoList.removeChild(todoDiv)
        e.preventDefault();  
    })
    //complete button
    completedBtn.addEventListener('click',function(e){
        e.preventDefault();
        todoDiv.removeChild(trashBtn);
        newTodo.classList.add('completed')
    })
   function filterTodo(e){
       const todos=newTodo;
       const clicked=e.target.value;
       switch (clicked) {
        case 'all':
             todoDiv.style.display='flex';
             break;
           case 'marked':
               if(todos.classList.contains('completed')){
                   todoDiv.style.display='flex';
               }
               else todoDiv.style.display='none';
               break;
           case 'uncompleted':
               if(!todos.classList.contains('completed')){
                   todoDiv.style.display='flex';
               }
               else todoDiv.style.display='none';
     }
       //todos.forEach(function(todo){
           //switch (e.target.value) {
              // case 'all':
                  // todo.style.display='flex';
                  // break;
            //     case 'marked':
            //         if(todo.classList.contains('completed')){
            //             todo.style.display='flex';
            //         }
            //         else todo.style.display='none';
            //         break;
            //     case 'uncompleted':
            //         if(!todo.classList.contains('completed')){
            //             todo.style.display='flex';
            //         }
            //         else todo.style.display='none';
                
            //    default:
            //        break;
          // }
       //})
      // console.log(todos)
   }
   filterOption.addEventListener('click',filterTodo);
   //local storage
//    function saveStorage(todo){
//     let todoItem;
//     if(localStorage.getItem('todoItem')==='null'){
//         todoItem=[]
//     }
//     else {
//         todoItem=JSON.parse(localStorage.getItem('todoItem'))
//     }
//     todoItem.push(todo);
//     localStorage.setItem('todoItem',JSON.stringify(todoItem))
//    }
}



let todoarray=[]
renderTodolists()
function renderTodolists(){
    let todolisthtml=""
    for (let i=0;i<todoarray.length;i++){
        const todo=todoarray[i]
        const html=`<p>${todo} <button>Delete</button></p>`
        todolisthtml+=html
    }
    console.log(todolisthtml);
    document.querySelector(".js-todo-list").innerHTML=todolisthtml;
}
function add(){
    let input=document.querySelector(".js-element")
    let value=input.value
    console.log(value);
    todoarray.push(value)
    console.log((todoarray));
    input.value="";
    renderTodolists();
    
}
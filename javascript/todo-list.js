let todoarray=[]
function add(){
    let input=document.querySelector(".js-element")
    let value=input.value
    console.log(value);
    todoarray.push(value)
    console.log((todoarray));
    input.value="";
    
    
}
var inp=document.getElementById('input-box')
var todo=document.getElementById('list-container')

function addtask(){
if (inp.value===''){
    alert('write somethng')
    saveData()
}

else{
    var li=document.createElement('li')
    li.innerHTML=inp.value;
    todo.append(li)
    
    var span=document.createElement('span')
    span.innerHTML="\u00d7";
    li.append(span)

}
inp.value=''
saveData()

}
todo.addEventListener('click',function(e){
 if (e.target.tagName==='LI'){
    e.target.classList.toggle('ckecked')
    saveData()
 }
 else if (e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
    saveData()
 }
},false)
function saveData(){
    localStorage.setItem("data",todo.innerHTML);
}
function show(){
    todo.innerHTML=localStorage.getItem("data")
}
show();
// Add the Edit Button:


// Implement the code as in video but with one extra 'Edit' button in 'li'

const form = document.querySelector('form');

const fruit = document.querySelector('.fruits');
const li=document.querySelector('li');
for(let i=0;i<li.length;i++){
  const edit = document.createElement('button');
  edit.className = 'edit';
  const txt = document.createTextNode('edit')
  edit.appendChild(txt)
  li[i].appendChild(edit)
}
form.addEventListener('submit',function(event){
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add');
  const newLi = document.createElement('li');

  
 // newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button'

  
  const newText = document.createTextNode(fruitToAdd.value);
  newLi.appendChild(newText);
  newLi.className = 'fruit';

  const delbtn = document.createElement('button');
  const delbtntext=document.createTextNode('x');
  delbtn.appendChild(delbtntext)
  delbtn.className = 'delete-btn';
  newLi.appendChild(delbtn);
  fruit.appendChild(newLi)
  
})

fruit.addEventListener('click',function(event){
  if(event.target.classList.contains('delete-btn')){
    const del = event.target.parentElement;
    fruit.removeChild(del)
  }
})
const form = document.querySelector('form');
const filter = document.getElementById("filter");
const fruit = document.querySelector('.fruits');
const liElements = document.querySelectorAll('li');
const des = document.createElement('input')
des.type='text';
des.id='desc'
const btn = document.querySelector('button')
form.insertBefore(des,btn);

filter.addEventListener("keyup",function(event){
    const inp = event.target.value.toLowerCase();
    const item = document.getElementsByClassName("fruit");
    for(let i=0;i<item.length;i++){
        const curr = item[i].firstChild.textContent.toLowerCase();
        if(curr.indexOf(inp)===-1){
            item[i].style.display = "none"
        }else{
            item[i].style.display ="flex"
        }
    }
})

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const fruitToAdd = document.getElementById('fruit-to-add');
    const descInp = document.getElementById("desc")
    const newLi = document.createElement('li');
    const p = document.createElement('p');
   

    // newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button'


    const newText = document.createTextNode(fruitToAdd.value);
    
    const newdesc = document.createTextNode(descInp.value);
    
    p.appendChild(newdesc)
    p.style.fontStyle='italic'
    newLi.appendChild(newText);
    newLi.appendChild(p)
    newLi.className = 'fruit';



    const delbtn = document.createElement('button');
    const delbtntext = document.createTextNode('x');
    delbtn.appendChild(delbtntext)
    delbtn.className = 'delete-btn';
    newLi.appendChild(delbtn);
    fruit.appendChild(newLi)

})
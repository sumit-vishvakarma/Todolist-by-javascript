let inputs = document.getElementById('inp')
let text =  document.querySelector('.text')

function addclick(){
 if(inputs.value == ""){
   alert("please fill some details")
 }
 else{
    let newEl = document.createElement('ul')
    newEl.innerHTML = `${inputs.value} <i class="bi bi-trash"></i>`;

    text.appendChild(newEl)
    inputs.value == ""
    newEl.querySelector("i").addEventListener("click",remove)
    function remove(){
        newEl.remove()
    }
 }
}
const count = document.getElementById("count")
const numInrease = document.getElementById("increase")
const numDecrease = document.getElementById("decrease")
const numReset = document.getElementById("reset")

let num = 0

numInrease.addEventListener("click", onClick);

function onClick(){
  num = num +1
  count.innerText = num
}

numDecrease.addEventListener("click",()=>{
  num = num -1;
  count.innerText = num
})

numReset.addEventListener("click", function(){
  num = 0
  count.innerText = num
})
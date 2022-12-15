plus=document.querySelectorAll('.plus')
minus=document.querySelectorAll('.minus')
remove=document.querySelectorAll('.remove')
total=document.querySelector('.total')
console.log(total.innerHTML);

plus.forEach(el=>el.addEventListener('click',()=>{
   el.nextElementSibling.innerHTML++
   total.innerHTML=parseInt(total.innerHTML)+parseInt(el.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML)
}))

minus.forEach(el=>el.addEventListener('click',()=>{
   if (total.innerHTML>0) {total.innerHTML=parseInt(total.innerHTML)-parseInt(el.nextElementSibling.innerHTML)}
  if (el.previousElementSibling.innerHTML>0) {el.previousElementSibling.innerHTML--}
 }))

 remove.forEach(el=>el.addEventListener('click',()=>{
  el.parentElement.parentElement.remove()
 }))
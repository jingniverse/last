$(document).ready(function(){


const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
  });
});

 $('.plan').click(function(){
    $('.plan_popup').addClass('on')
 })
 $('.close').click(function(){
  $('.plan_popup').removeClass('on')
})

let btn = $('.btn_next2')
let btn2 = $('.btn_prev2')
let btn3 = $('.btn_next3')
let btn4 = $('.btn_prev3')
let train = $('.train2')
let train2 = $('.train3')

let count=0

btn.click(function(e){
    e.preventDefault()
    count++
    if(count>2){count=0}
     train.css('transform','translateX('+(-50*count)+'%)')
})
btn2.click(function(e){
  e.preventDefault()
  count--
  if(count<0){count=2}
   train.css('transform','translateX('+(-50*count)+'%)')
})

btn3.click(function(e){
  e.preventDefault()
  count++
  if(count>1){count=0}
   train2.css('transform','translateX('+(-50*count)+'%)')
})
btn4.click(function(e){
e.preventDefault()
count--
if(count<0){count=1}
 train2.css('transform','translateX('+(-50*count)+'%)')
})



})
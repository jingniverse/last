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

let icon_Status = false

$('.icon.nav-icon-5').click(function(){
  if(icon_Status==false){
    $('.nav').addClass('on')
    icon_Status = true

  }else{
    $('.nav').removeClass('on')
    icon_Status = false
  }

})

$('.nav>ul>li>a').click(function(){
  $('.nav').removeClass('on')
  $('.icon.nav-icon-5').removeClass('open')

  icon_Status = false

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
    if(count>3){count=0}
     train.css('transform','translateX('+(-25*count)+'%)')
})
btn2.click(function(e){
  e.preventDefault()
  count--
  if(count<0){count=3}
   train.css('transform','translateX('+(-25*count)+'%)')
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

$(".train2>li").click(function(){
    $(".train2>li").removeClass("on")
    $(this).addClass("on")
})
$(".train3>li").click(function(){
  $(".train3>li").removeClass("on")
  $(this).addClass("on")
})


//  let pu = false
// $(".train2>li").click(function(){
//   if(pu==false){
//     $(".train2>li").removeClass("on")
//     $(this).addClass("on")
//     pu = true

//   }else{
//     $(".train2>li").removeClass("on")
//     $(this).addClass("on")
//     pu = false
//   }
//   })

})

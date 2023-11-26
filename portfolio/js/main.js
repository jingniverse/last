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

})
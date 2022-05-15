//
$(document).ready(function(){
    const closeBtn = document.querySelector('.close')
const openBtn = document.querySelector('.open')
const mobileNav = document.querySelector('nav')
openBtn.addEventListener('click', function(){
$(this).css({display: "none"})
mobileNav.style.display = 'block'
})
closeBtn.addEventListener('click', function(){
    openBtn.style.display = 'block'
    mobileNav.style.display = 'none'
})
let btns = $('.btn')
let people = document.querySelectorAll('.people .person')
for(let i=0; i<btns.length; i++){
    btns[i].addEventListener('click', function(){
        $('.btn').css({backgroundColor: 'hsl(0, 0%, 100%)'})
        $(this).css({backgroundColor: 'hsl(12, 88%, 59%)'})
        for(let j=0;j<people.length; j++){
            people[j].style.display = 'none';
            if(j===i){
                people[j].style.display = 'block';
            }
        }

    })

}
let form = document.querySelector('form')
let field = document.querySelector('#email')
let error = document.querySelector('.error')
form.addEventListener('submit', function(e){
    if(field.value === ''){
        e.preventDefault()
        error.style.opacity = '1'
    }
});
field.addEventListener('focus', function(){
    error.style.opacity = '0'
});
})



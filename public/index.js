let u = document.querySelectorAll('.title')
let a =  document.querySelectorAll('.p')

for (let i = 0; i <=2 ; i++) {
    u[i].addEventListener('click',()=>{
        a[i].classList.toggle('on')
    })
    
}

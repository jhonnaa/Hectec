let u = document.querySelectorAll('.title')
let a =  document.querySelectorAll('.p')

for (let i = 0; i <=2 ; i++) {
    u[i].addEventListener('click',()=>{
        a[i].classList.toggle('on')
    })
    
}


const parrafos = document.querySelectorAll('.cont-parrafos')
const titles =  document.querySelectorAll('.title')
const servis = document.querySelector('.servis')
const clientes = document.querySelector('.my-projects')
const form = document.querySelector('.cont-form')

function aboutAnimation(entries){
    entries.forEach(entry => {
        const parrafo = entry.target.querySelector('.p')
        const title = entry.target.querySelector('.title')
        parrafo.classList.toggle('unset',entry.isIntersecting)
        title.classList.toggle('unset',entry.isIntersecting)

    });}

    function carruselAnimation(entries){
        entries.forEach(entry => {
            const title = entry.target.querySelector('.title')
            const carrusel = entry.target.querySelector('.cont-carrusel-servis')
            title.classList.toggle('unset',entry.isIntersecting)
            carrusel.classList.toggle('unset',entry.isIntersecting)
        
        });
    }


        function clientsAnimation(entries){
            entries.forEach(entry => {
                const title = entry.target.querySelector('.title')
                const client = entry.target.querySelector('.img-clients')
                title.classList.toggle('unset',entry.isIntersecting)
                client.classList.toggle('unset',entry.isIntersecting)
                
            });

}

function formAnimation(entries){
    entries.forEach(entry => {
        const title = entry.target.querySelector('.title')
        const form = entry.target.querySelector('.form')
        title.classList.toggle('unset',entry.isIntersecting)
        form.classList.toggle('unset',entry.isIntersecting)
        
    });

}


const options ={
    root: null,
    rootMargin: "0px",
    threshold: .25
}


const observerAbout = new IntersectionObserver(aboutAnimation, options);
const observerCarrusel = new IntersectionObserver(carruselAnimation, options);
const observerClients = new IntersectionObserver(clientsAnimation, options);
const observerForm = new IntersectionObserver(formAnimation, options);

parrafos.forEach(parrafo=>{
    observerAbout.observe(parrafo)
})

    observerCarrusel.observe(servis)
    observerClients.observe(clientes)
    observerForm.observe(form)

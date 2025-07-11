
const case1 = document.getElementById('case1');
const case2 = document.getElementById('case2');
const case3 = document.getElementById('case3');
const contenido = document.getElementById('main');
let router = {
    "/case1" : render,
    "/case2" : render2,
    "/case3" : render3
};  
case1.addEventListener("click", (e,)=>{
    e.preventDefault();
    let path = e.target.getAttribute("href");
    router[path]("case1")

})
case2.addEventListener("click", (e)=>{
    e.preventDefault();
    let path = e.target.getAttribute("href");
    router[path]("case2")
})
case3.addEventListener("click", (e)=>{
    e.preventDefault();
    let path = e.target.getAttribute("href");
    router[path]("case3")

})

function render (casees){
    main.innerHTML = `<h1>${casees}</h1>`
    window.location.hash = "#/home"
}
function render2 (casees){
    main.innerHTML = `<h1>${casees}</h1>`
    window.location.hash = "#/contact"
}
function render3 (casees){
    main.innerHTML = `<h1>${casees}</h1>`
    window.location.hash = "#/terms"
}


//con queryselector
// const selector = document.querySelectorAll("a");
// selector.addEventListener("click", (e) => {
//     e.preventDefault                                
// })


//El primer intento sin el router 

// const case1 = document.getElementById('case1');
// const case2 = document.getElementById('case2');
// const case3 = document.getElementById('case3');
// const contenido = document.getElementById('main')
// case1.addEventListener("click", (e,)=>{
//     e.preventDefault();
//     render("case1")
// })
// case2.addEventListener("click", (e)=>{
//     e.preventDefault();
//     render("case2")
// })
// case3.addEventListener("click", (e)=>{
//     e.preventDefault();
//     render("case3")
// })

// function render (casees){
//     main.innerHTML = `<h1>${casees}</h1>`
// }


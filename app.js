
const case1 = document.getElementById('case1');
const case2 = document.getElementById('case2');
const case3 = document.getElementById('case3');
const case4 = document.getElementById('case4');
const url = "http://localhost:3000/"
const contenido = document.getElementById('main');
let router = {
    "/case1" : render,
    "/case2" : render2,
    "/case3" : render3,
    "/case4" : render4
    
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
case4.addEventListener("click", (e,)=>{
    e.preventDefault();
    let path = e.target.getAttribute("href");
    router[path]("case4")

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
async function render4 (casees){
    const res = await fetch(`${url}users`);
    const data = await res.json();
    main.innerHTML = `    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      
    </tr>
  </thead>
   <tbody id="celda"></tbody>
   <button id="add" class="btn btn-success">agregar</button>
  `
    
    const celda =  document.getElementById('celda');
    data.forEach(user => {
        celda.innerHTML += `

    <tr>
      <th scope="row">${user.id}</th>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td><button class="btn btn-warning">editar</button></td>
      <td><button class="btn btn-danger">eliminar</button></td>
    </tr>
    
    


`   
    const botonAgregar = getElementById('add');
    botonAgregar.addEventListener('click',()=>{
        main.innerHTML = `
        
        <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`
    }) 
    });
    

    window.location.hash = "#/form"



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


//INTENTO DE LOS PARCEROS
// function render4 (casees){
//     main.innerHTML = `
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
//     <div class="container">
//     <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1">
//   </div>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
// </div>
// <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>`
//     window.location.hash = "#/form"
// }

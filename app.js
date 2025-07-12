//poner required y que se autocomplete que no deje actualizar vacio y asi tambien para agregar
const case1 = document.getElementById('case1');
const case2 = document.getElementById('case2');
const case3 = document.getElementById('case3');
const case4 = document.getElementById('case4');
const url = "http://localhost:3000/"
const contenido = document.getElementById('main');
let router = {
  "/case1": render,
  "/case2": render2,
  "/case3": render3,
  "/case4": render4

};
case1.addEventListener("click", (e) => {
  e.preventDefault();
  let path = e.target.getAttribute("href");
  router[path]("case1")

})
case2.addEventListener("click", (e) => {
  e.preventDefault();
  let path = e.target.getAttribute("href");
  router[path]("case2")
})
case3.addEventListener("click", (e) => {
  e.preventDefault();
  let path = e.target.getAttribute("href");
  router[path]("case3")

})
case4.addEventListener("click", (e) => {
  e.preventDefault();
  let path = e.target.getAttribute("href");
  router[path]("case4")

})


function render(casees) {
  main.innerHTML = `<h1>${casees}</h1>`
  window.location.hash = "#/home"
}
function render2(casees) {
  main.innerHTML = `<h1>${casees}</h1>`
  window.location.hash = "#/contact"
}
function render3(casees) {
  main.innerHTML = `<h1>${casees}</h1>`
  window.location.hash = "#/terms"
}
async function render4(casees) {
  const res = await fetch(`${url}users`);
  const data = await res.json();
  main.innerHTML = `    
<button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
  agregar
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Agregar Nuevo usuario</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form class="needs-validation">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" required>
            <div id="emailHelp" class="form-text">mensaje cualquiera</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" required>
          </div>
          
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cerrar</button>
        <button id="add" type="button" class="btn btn-primary">enviar</button>
      </div>
    </div>
  </div>
</div> 
  <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Email</th>
      
    </tr>
  </thead>
   <tbody id="celda"></tbody>

  `

  const celda = document.getElementById('celda');
  data.forEach(user => {
    celda.innerHTML += `

    <tr>
      <th scope="row">${user.id}</th>
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>    
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal${user.id}">
          Editar
        </button>

        <!-- Modal -->
        <div class="modal fade" id="editModal${user.id}" tabindex="-1" aria-labelledby="editModal${user.id}" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title edit" id="labeledit${user.id}">Editar Usuario</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Nuevo Nombre</label>
                    <input type="text" class="form-control" id="newName${user.id}" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Nuevo Email</label>
                    <input type="email" class="form-control" id="newEmail${user.id}">
                  </div>
                  
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cerrar</button>
                <button id="edit${user.id}" type="button" class="btn btn-primary">enviar</button>
              </div>
            </div>
          </div>
        </div> 
      </td>
      <td><button id="btnEliminar${user.id}" class="btn btn-danger">eliminar</button></td>
    </tr>
    
    


`;
//se pone esto para que se ejecute tambien cuando el boton este creado, el if y eso significa que sea verdadero osea truthi porque si estuviera vacio da undefined o null y seria falsie es por eso
 setTimeout(() => {
    const botonEditar = document.getElementById(`edit${user.id}`);
    if (botonEditar) {
      botonEditar.addEventListener("click", () => editarUsuario(user.id));
    }
  });
   setTimeout(() => {
    const botonEliminar = document.getElementById(`btnEliminar${user.id}`);
    if (botonEliminar) {
      botonEliminar.addEventListener("click", () => eliminarUsuario(user.id));
    }
  });
  });

   //evento boton agregar
  const botonAgregar = document.getElementById('add');

  botonAgregar.addEventListener('click', async (e) => {
    e.preventDefault();
    const inputName = document.getElementById('name').value;
    const inputEmail = document.getElementById('email').value;
    const newUser = {
      name: inputName,
      email: inputEmail
    }
    const send = await fetch(`${url}users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser)

    });
    if (!send.ok) {
      alert("Error al crear usuario")
      return;
    }

    render4();
  });

 





  window.location.hash = "#/form"



}

async function editarUsuario (id) {
  console.log("Editando usuario:", id);

  const inputNewName = document.getElementById(`newName${id}`).value;
  const inputNewEmail = document.getElementById(`newEmail${id}`).value;
  const updateUser = {
    name: inputNewName,
    email: inputNewEmail
  };
  const send = await fetch(`${url}users/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateUser)
  });
  if (!send.ok) {
    alert("No se pudo actualizar el usuario");
    return;
  }
  alert("Usuario actualizdo correctamente");
  render4();

}

async function eliminarUsuario (id) {
  const send = await fetch(`${url}users/${id}`, {
    method: "DELETE"
  });
  if (!send.ok) {
    alert("No se pudo eliminar el usuario");
    return;
  }
  alert("Usuario eliminado correctamente");
  render4();

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

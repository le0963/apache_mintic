var formulariox = document.getElementById("registro")
 formulariox.addEventListener("submit", (e)=>{
  e.preventDefault()
 console.log("funcionado")
 var nombrex = document.getElementById("nombre").value
 var apellidox = document.getElementById("apellido").value
 var documentox = document.getElementById("documento").value
 var avatarx = document.getElementById("avatar").value
 var emailx = document.getElementById("email").value
 var direccionx = document.getElementById("direccion").value
 var passwordx = document.getElementById("password").value
 var myHeaders = new Headers();
 myHeaders.append("accept", "application/json");
 myHeaders.append("Content-Type", "application/json");

 var raw = JSON.stringify({
   "nombre": nombrex,
   "apellido": apellidox,
   "documento": documentox,
   "avatar": avatarx,
   "email": emailx,
   "direccion": direccionx,
   "password": passwordx
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/users", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
 })

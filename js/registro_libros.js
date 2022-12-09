var formulariox = document.getElementById("registro")
 formulariox.addEventListener("submit", (e)=>{
  e.preventDefault()
 console.log("funcionado")
 var titulox = document.getElementById("titulo").value
 var autorx = document.getElementById("autor").value
 var iconox = document.getElementById("icono").value
 var editorialx = document.getElementById("editorial").value
 var idiomax = document.getElementById("idioma").value
 var preciox = document.getElementById("precio").value
 var myHeaders = new Headers();
 myHeaders.append("accept", "application/json");
 myHeaders.append("Content-Type", "application/json");

 var raw = JSON.stringify({
   "titulo": titulox,
   "autor": autorx,
   "icono": iconox,
   "editorial": editorialx,
   "idioma": idiomax,
   "precio": preciox,

    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8000/book", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
 })

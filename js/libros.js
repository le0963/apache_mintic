var app = new Vue({
  el:'#app',
  data:{
    message:'Hola misionTic 2022 !!!',
    info:[]
  },
  mounted(){
    axios.get("http://localhost:8000/book").then(respuesta=>this.info=respuesta.data)
    //axios.get("https://api.dailymotion.com/videos?channel=sport&limit=10").then(respuesta=>this.info=respuesta.data.list)
  },
  methods: {
  warn: function (id) {
    delete_book(id)
}}
});

function delete_book(id) {
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("http://localhost:8000/book/" +id , requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }

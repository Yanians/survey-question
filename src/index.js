import axios from 'axios';

const http = axios.create({
   baseURL: "https://evaluation-survey.herokuapp.com:9000",
   headers:{
    "Access-Control-Allowed-Method" : "POST, GET, OPTIONS, PUT, DELETE",
     "Access-Control-Allow-Headers" : "Content-Type, X-Auth-Token, Origin, Authorization",
                 "X-Requested-With" : "XMLHttpRequest",
                     "Content-type" : "application/json; charset=utf-8",
                    "Cache-Control" : "no-store, no-cache",
                           "Accept" : "application/json"
   }
   
  });

// const http = axios();


function asLi(item) {

 return $('<li>').text(item);
}
 
function showItem(item) {
 $('ul').append(asLi(item));
}
 
function showCars() {
   const cars = [];
   showItem('ford');
   return http.get('comments',{
    method:'GET'})
   .then(resp=>{
    console.log(resp.data);
    return resp.data;/*.forEach(c => showItem(c));
       showItem('toyota');*/
       // console.log(resp.json());
       // return resp.json();
       // return resp;
     }).then((data) => {
      // console.log(data)
       data.forEach(c => showItem(c));
     });
   showItem('honda');
}

document.addEventListener("DOMContentLoaded", function(){
 showCars();
});


function asLi(item) {

 return $('<li>').text(item);
}
 
function showItem(item) {
 $('ul').append(asLi(item));
}
 
function showCars() {
   const cars = [];
   showItem('ford');
   fetch('http://localhost:3000/cars').then(resp=>{
       showItem('toyota');
       // console.log(resp.json());
       return resp.json();
     }).then((data) => {
      console.log(data)
       data.forEach(c => showItem(c));
     });
   showItem('honda');
}

document.addEventListener("DOMContentLoaded", function(){
 showCars();
});

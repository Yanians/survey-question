
function computeTotal() {
 let total = 0;
 // console.log($("li"));
 $("li").each(() => {
   total = total+parseInt($("li").text());
   console.log(total);
 });
 $("#total").text(`Total: ${total}`);
}
 
document.addEventListener("DOMContentLoaded", function(){
 computeTotal();
});

(()=>{function t(t){$("ul").append(function(t){return $("<li>").text(t)}(t))}document.addEventListener("DOMContentLoaded",(function(){t("ford"),fetch("https://localhost:9000/cars").then((n=>(t("toyota"),n.json()))).then((n=>{console.log(n),n.forEach((n=>t(n)))})),t("honda")}))})();
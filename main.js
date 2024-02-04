// Dark mode
var icon = document.getElementById("icon");

icon.onclick = function(){
 document.body.classList.toggle("dark-theme")
 if(document.body.classList.contains("dark-theme")){
   icon.src = "image/sun icone.png" 
 }else{
   icon.src = "image/moon.icon.jpg"
 }
}








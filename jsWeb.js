var div = document.getElementById("bloqueInfo1"); 


div.addEventListener("click", function(e){
    alert("Hola");
    event.preventDefault();
    $(this).toggleClass("test");
};
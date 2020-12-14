window.onload = function(){  
    if ((sessionStorage.nombre != undefined) && (sessionStorage.password != undefined)) {
        document.getElementById("mensaje").innerHTML = "Hola  " + sessionStorage.nombre;
    } else {
        document.getElementById("datos").innerHTML = location.replace("/index.html");
    }
}
function logout(){
    sessionStorage.removeItem('nombre');
    sessionStorage.removeItem('password');
    location.replace("/index.html")
}
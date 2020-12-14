function guardarDatos() {
    sessionStorage.nombre = document.getElementById("nombre").value;
    sessionStorage.password = document.getElementById("password").value;
    location.replace("/home.html");
}

function recuperarDatos() {
    
}
window.onload = function(){  
    if ((sessionStorage.nombre != undefined) && (sessionStorage.password != undefined)) {
        //document.getElementById("datos").innerHTML = "Nombre: " + sessionStorage.nombre + " Password: " + sessionStorage.password;
        location.replace("/home.html");
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}
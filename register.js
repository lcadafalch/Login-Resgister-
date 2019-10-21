
// Funcion  push  al  HTTP y callback
function httpPost(url, callback, datos) {
    console.log("Ejecutando peticion a " + url)
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(JSON.parse(xmlHttp.responseText));
        }
        else if (xmlHttp.readyState == 4) {
            callback(JSON.parse(xmlHttp.responseText));
        }
    }
    xmlHttp.open("POST", url);
    xmlHttp.setRequestHeader("Content-Type", "application/json")
    xmlHttp.send(JSON.stringify(datos));

}

// funcion de register

function register(respuestaServidor) {

    if (respuestaServidor.error !== undefined) {
        // error
        alert(respuestaServidor.error)
    }
    else {
        alert("login efectuado. su token es" + respuestaServidor.token)
        // afirmativo funciona

    }

    console.log(respuestaServidor);
}


//EVENTO de enviar


let botonEnviar = document.querySelectorAll(".botonEnviar")[0]
botonEnviar.addEventListener("click", function () {

    // declarar elementos 

    let email = document.querySelectorAll(".email")[0].value;
    let password = document.querySelectorAll(".password")[0].value;

    let cliente = { "email": email, "password": password };

    httpPost("https://reqres.in/api/register", register, cliente);
    //Comparar el error 


}); 
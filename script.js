const caja_texto = document.querySelector(".campo-texto");
const caja_cambio = document.querySelector(".campo-respuesta");

// matriz del encriptador
//indices del 0, 1, 2, 3, 4
const matriz_texto = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];
// funcion que encripta
function textoParaEncriptar(){
    const texto = encriptado(caja_texto.value);
    caja_cambio.value = texto; // lleva el valor encriptado a la caja de respuesta
}

function encriptado(fraseEncriptada){
    for(let i =0; i < matriz_texto.length; i++){
        if(fraseEncriptada.includes(matriz_texto[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll( // funcion de remplazo
                matriz_texto[i][0],
                matriz_texto[i][1] //  cambia la matriz de arriba por la de abajo
            );
        }
    }
return fraseEncriptada; // me retorna la funcion para continar el ciclo
}

// funcion que desencripta

function textoParaDesencriptar(){
    const texto = desencriptado(caja_texto.value);
    caja_cambio.value = texto; // lleva el valor encriptado a la caja de respuesta
}

function desencriptado(fraseDesencriptada){
    for(let i =0; i < matriz_texto.length; i++){
        if(fraseDesencriptada.includes(matriz_texto[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll( // funcion de remplazo
                matriz_texto[i][1],
                matriz_texto[i][0] //  cambia la matriz de arriba por la de abajo
            );
        }
    }
return fraseDesencriptada; // me retorna la funcion para continar el ciclo
}

//funcion para copiar, borrar y pegar al otro textarea
function copiarBorrarPegar(){
    const origen = caja_cambio.value;
    caja_texto.value = origen;
    document.querySelector('.campo-respuesta').value = ''; 
           
}

// funcion para limpiar todos los textarea

function limpiar(){
    document.querySelector(".campo-texto").value = '';
    document.querySelector(".campo-respuesta").value = '';
}
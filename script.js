const pantalla = document.querySelector("#pantalla");
const botones = document.querySelectorAll("button");
const maximo = 25; // Longitud máxima para cada línea.
let contador = 0; // Contador de líneas

botones.forEach((btn) => {
    btn.onclick = () => {
         // Si se presiona la tecla C
        if (btn.id == "borrar") {
            pantalla.innerText = "";
            contador = 0;
        } else if (btn.id == "borrarUltimo") {  // Si se presiona la tecla DE
            let cadena = pantalla.innerText.toString();
            pantalla.innerText = cadena.substr(0, cadena.length - 1);
        } else if (btn.id == "igual" && pantalla.innerText == "") {  // Si se presiona la tecla = y no se ingresó nada
            pantalla.innerText = "Ingresar un valor";
            setTimeout(() => (pantalla.innerText = ""), 3000);
        } else if(btn.id == "igual" && pantalla.innerText != ""){ // Si se presiona la tecla = y se ingresaron valores
            let expresion = pantalla.innerText.replace(/\n/g, "").trim();
            pantalla.innerText = eval(expresion);            
        } else {    // Si se presionan teclas de números o símbolos
            // Agrega el carácter a la pantalla en la línea actual
            if (contador < maximo) {
                pantalla.innerText += btn.id;
                contador++;
            }
            // Si se alcanza la longitud máxima, agrega un salto de línea
            if (contador >= maximo) {
                pantalla.innerText += "\n";
                contador = 0;
            }
        }
    };
});


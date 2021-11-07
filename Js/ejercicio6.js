var numero = prompt("Introduce un número entero");

var resultado = parImpar(numero);
console.log("El número "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}
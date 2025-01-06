
function calcularPromedio(num1, num2, num3){
    return (num1 + num2 + num3)/3;
}

function determinarMayor(num1, num2){
    if(num1 > num2){
        return num1;
    }else {
        return num2;
    }
}

const confirmacionNumero = (numero) => typeof numero === 'number' && !isNaN(numero);


const esPar = (num1)=> num1 % 2 === 0 ? 'True' : 'False';
  
(function (a, b, c) {
    if (!confirmacionNumero(a) || !confirmacionNumero(b) || !confirmacionNumero(c)) {
        console.log('debe ingresar solo valores numèricos');
        return;
    }

    console.log('El promedio es: ' + calcularPromedio(a, b, c) + '; El numero mayor es:' + determinarMayor(a, b) + '; El primer número es par? ' + esPar(a));
}) (1, 'hola', 1); 


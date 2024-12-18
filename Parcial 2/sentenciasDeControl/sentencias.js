//**************************************************************************************************************************** 
//                                   |     SENTENCIAS DE CONTROL
//**************************************************************************************************************************** 


//IF/ ELSE


let numero = 10;
if (numero == 1){
    console.log("Numero 1");
}else if (numero == 2){
    console.warn("Numero 2");
}else if(numero == 3){
    console.warn("Numero 3");
}else{
    console.log("No es un numero");
}


//EJERCICIO REFERENTE A LAS ESTACIONES DEL AÑO
let mes = 4;
let estacion;

if(mes == 1 || mes == 2 || mes == 3){
    estacion = "Invierno";
}else if(mes == 4 || mes == 5 || mes == 6){
    estacion = "Otoño";
}else if(mes == 7 || mes == 8 || mes == 9){
    estacion = "Primavera";
}else if(mes == 10 || mes == 11 || mes == 12){
    estacion = "Verano";
}else{
    estacion = "No corresponde a una estacion";
}

console.warn(estacion);



//EJERCICIO CALCULAR HORA DEL DIA
// 6am - 11am -> Buenos días
// 12pm - 18pm -> Buenas tardes
// 19pm - 23pm -> Buenas noches
// 24am - 5am -> Durmiendo

let horaDia = 12;
let mensaje;

if(horaDia >= 6 && horaDia >=11){
    mensaje = "Buenos dias";
}else if(horaDia >= 12 && horaDia >=18){
    mensaje = "Buenas tardes";
}else if(horaDia >= 19 && horaDia >=23){
    mensaje = "Buenas noches";
}else if(horaDia = 24 ||  horaDia <=5){
    mensaje = "Durmiendo";
}else{
    mensaje = "No una hora correspondida";
}

console.warn(mensaje);



//EJERCICIO CON SWITCH
let mesE = 11;
let estacion1 = "estacion desconocida";

switch(mesE){
    case 1: case 2: case 3:
        estacion1 = "Invierno";
        break;
    case 4: case 5: case 6:
        estacion1 = "Otoño";
        break;
    case 7: case 8: case 9:
        estacion1 = "Primavera";
        break;
    case 10: case 11: case 12:
        estacion1 = "Vernao";
        break;
    default:
        estacion1 = "Valor incorrecto";
}

console.log(estacion1);
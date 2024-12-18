/************************************************************************************************************
 *                                             CICLOS
 ************************************************************************************************************/

//CICLO FOR
const heroes = ("Batman", "Superman", "Mujer Maravilla", "Aquaman");

console.warn("***** For tradicional *****");
for (let i = 0; i < heroes.length; i++){
    console.warn(heroes[i]);
}

console.warn("***** For in *****");
for (let i in heroes){
    console.warn(heroes[i]);
}

console.warn("***** For of *****");
for (let heroe of heroes){
    console.warn(heroes);
}



            //USOS DE LA DECLARACION FOR

            // uso FOR TRADICIONAL cuando necestio control total de los indices del array
            // uso FOR IN para el manejo de los objetos, es decir para iterar un objeto o los indices del array
            // uso FOR OF para iterar los valores directamente de un iterable (array, cadenas de tecto, string, map, set, nodelist)



            //CONTINUE Y EL BREAK DENTRO DE CICLO FOR
            for(let contador = 0; contador < 10; contador++){
                if(contador %2 != 0){
                    continue; //ir a la siguinete iteracion
                }
                console.log(contador);
            }


            const carros = ['ford', 'honda', 'mazda', 'toyota'];
            for(let contador2 = 0; contador2 < carros.length; contador2++){
                if(contador2 == 2){
                    continue; //ir a la siguinete iteracion, omite el mazda
                }
                console.log(carros[contador2]);
            }


//CICLOS WHILE
let i = 0;
while(carros[i]){
    if(i==1){
        i++;
        continue;
    }
    console.warn(carros[i]);
    i++
}
/************************************************************************************************************
 *                          Sistema Avanzado de Calificación y Registro de Estudiantes
 ************************************************************************************************************/

let estudiantes = [
    {nombre: 'Maria', calificaciones: [18, 17, 19, 20, 16]},
    {nombre: 'Juan', calificaciones: [15, 14, 16, 17, 18]},
    {nombre: 'Pedro', calificaciones: [12, 13, 14, 11, 15]},
    {nombre: 'Alison', calificaciones: [20, 19, 18, 20, 19]},
    {nombre: 'David', calificaciones: [16, 15, 17, 18, 16]},
    {nombre: 'Luis', calificaciones: [14, 15, 13, 12, 14]},
    {nombre: 'Estefano', calificaciones: [18, 19, 17, 16, 18]},
    {nombre: 'Naomi', calificaciones: [19, 20, 18, 17, 19]},
    {nombre: 'Nicoll', calificaciones: [20, 19, 18, 17, 16]},
    {nombre: 'Bryan', calificaciones: [14, 13, 15, 14, 16]}
];

let estadisticas = estudiantes.map(estud => {
    let promedio = estud.calificaciones.reduce((sum, calif) => sum + calif, 0) / estud.calificaciones.length;
    let maximo = estud.calificaciones.reduce((max, calif) => calif > max ? calif : max, estud.calificaciones[0]);
    let minimo = estud.calificaciones.reduce((min, calif) => calif < min ? calif : min, estud.calificaciones[0]);

    return {
        nombre: estud.nombre,
        promedio: promedio,
        maximo: maximo,
        minimo: minimo
    };
});

for (let estudiante of estadisticas) {
    if (estudiante.promedio >= 16) {
        estudiante.clasificacion = "excelente";
    } else if (estudiante.promedio >= 12) {
        estudiante.clasificacion = "bueno";
    } else if (estudiante.promedio >= 8) {
        estudiante.clasificacion = "aprobado";
    } else {
        estudiante.clasificacion = "reprobado";
    }
}

let mejorEstudiante = estadisticas.reduce((mejor, estud) => estud.promedio > mejor.promedio ? estud : mejor, estadisticas[0]);
let peorEstudiante = estadisticas.reduce((peor, estud) => estud.promedio < peor.promedio ? estud : peor, estadisticas[0]);


console.log("Reporte:");
for (let estudiante of estadisticas) {
    console.log(`Nombre: ${estudiante.nombre}`);
    console.log(`  Clasificación: ${estudiante.clasificacion}`);
    console.log(`  Promedio: ${estudiante.promedio.toFixed(2)}`);
    console.log(`  Máximo: ${estudiante.maximo}`);
    console.log(`  Mínimo: ${estudiante.minimo}`);
    console.log("--------------------------------------------------------------------------------------------");
}

console.log("Curso en general:");
console.log(`Mejor estudiante: ${mejorEstudiante.nombre} con promedio de ${mejorEstudiante.promedio.toFixed(2)}`);
console.log(`Peor estudiante: ${peorEstudiante.nombre} con promedio de ${peorEstudiante.promedio.toFixed(2)}`);

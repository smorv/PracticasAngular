
//Las interfaces son parecidas a una clase pero sin funcionamiento, en esta se especifican las reglas que
//quieres que cumpla un objeto para ser utilizada como un tipo de dato. 

//las interfaces no tiene una traducción literal en Javascript. Estas son sólo de typescript para representar
//el tipado de algunas cosas.

(() => {

    interface Xmen{
        nombre: string;
        edad: number;
        poder?:string;
    }
    //Se especifica que el objeto que se mencione debe tener la propiedad "nombre". Esta no es una forma
    //clara de expresarlo, si embargo dependiendo del problema, puede utilizarse.
    //es decir, xmen debe tener una propiedad "nombre" pero esto no es mantenible en el tiempo.

     /*const enviarMision = (xmen : {nombre : string}) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
     } */
     
     const enviarMision = (xmen : Xmen) => {
        console.log(`Enviando a ${xmen.nombre} a la misión`);
    }
     
    //Al especificarle el tipo de objeto, se pueden controlar las propiedades del objeto. 
     const wolverine:Xmen = {
         nombre : 'Logan',
         edad: 60
     }

     enviarMision(wolverine);
})();


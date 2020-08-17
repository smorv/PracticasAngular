//funcion anonima autoinvocaka en formato de flecha
(() => {

    const avenger = {
        nombre: 'Steve',
        clave: 'Capitán America',
        poder: 'Droga'
    }

    const {nombre} = avenger // transforma las propiedades de un objeto en variables independientes.

    const extraer = ({nombre, poder}: any) =>{
        console.log(nombre);
        console.log(poder);
    }

    extraer(avenger);


    const avengers: string[] = ['Thor', 'Ironman', 'Spiderman'];

    const [thor, ironman, spiderman] = avengers;
    

    const extraerArr = ([martillo, hombre, arana]: string[]) => {
        console.log(martillo);
        console.log(hombre);
        console.log(arana);
    }
    console.log(extraerArr(avengers));
})();
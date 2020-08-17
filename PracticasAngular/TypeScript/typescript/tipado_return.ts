(() => {

    //tipado del retorno d euna función.
    const sumar = (a:number , b:number): number => {
        return a + b;
    }

    const nombre = ():string => 'Hola Mundo';

    const obtenerSalario = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('Hola Mundo');
        });        
    }
    obtenerSalario().then(a => console.log(a.toUpperCase()));

})();


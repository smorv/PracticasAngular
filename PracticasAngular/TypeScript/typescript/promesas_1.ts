//Los promesas sirven para ejecutar codigo sin bloquear el código de mi aplicación
(() => {
    console.log('Inicio');
    const prom1 = new Promise((resolve , reject) => {

        setTimeout(() => {
            //resolve(' Se terminó el timeout');
            reject(' Se terminó el timeout');
        }, 1000);
    }); //Las promesas no tienen una forma de traducirse directamente al ECMA 5 sin una librería. //Que en angular ya se encuentra implementada

    prom1
        .then( mensaje  => console.log(mensaje))
        .catch( error => console.warn( error));
                                                            

    console.log('Fin');
})();
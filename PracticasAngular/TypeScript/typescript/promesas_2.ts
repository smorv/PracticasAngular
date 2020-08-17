//Los promesas sirven para ejecutar codigo sin bloquear el código de mi aplicación
(() => {
    const retirarDinero = (montoRetirar: number): Promise<number> /*Tipar return*/ =>{
        let dineroActual = 1000;

        return new Promise((resolve , reject)=>{
            if(montoRetirar > dineroActual){
                reject('No hay dinero suficiente');
            }
            else{
                dineroActual -= montoRetirar;
                resolve(dineroActual);
            }
        });
    }

    retirarDinero(52100)
        .then(montoActual =>console.log(`Me queda ${montoActual}`))
        .catch(err  => console.warn(err));
})();
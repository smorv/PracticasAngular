//Template Literal
(function(){

    function getEdad(){
        return 100+100+300-33;
    }

    const nombre = 'Fernando';
    const apellido = 'Herrera';
    const edad = 33;

    //const salida =  `${nombre} ${apellido} ( ${edad + 100} )`;
    const salida =  `${nombre} ${apellido} ( ${getEdad()} )`;

    console.log(salida);
    
})();
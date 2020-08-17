(function(){
    let miFuncion = function(a: string){
        return a.toUpperCase();
    }
    
    let miFuncionF = (a:string) => a.toUpperCase();

    //console.log( miFuncion('Normal'));
    //console.log(miFuncionF('Flecha'));


    const sumarN = function(a:number , b:number){
        return a + b;
    }
    const sumarF = (a:number, b:number) => a + b;
//Las funciones de flecha no modifican el ambito de un this. 
    const hulk = {
        nombre: 'Hulk',
        smash(){
            /*setTimeout(function(){
                console.log(`${this.nombre} smash!!!`);
            }, 1000);*/
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
        }
    }
    hulk.smash();
})();
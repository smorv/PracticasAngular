(() => {
    //Las clases con camelcase
    class Avenger{
      
        /* nombre:string;
        equipo: string;
        nombreReal: string;

        pudePelear:boolean;
        peleasGanadas:number; */

        //Se ejecuta cuando se crea una nueva instancia del objeto
        constructor(public nombre:string,
                    public equipo: string,
                    public nombreReal?: string,
                    public puedePelear: boolean = true,
                    public peleasGanadas: number = 0){}
        }

    

    const antman = new Avenger('Antman', 'Capi');
    console.log(antman);
   
})();


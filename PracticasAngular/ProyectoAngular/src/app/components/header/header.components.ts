//Se agrega el decorador de clases
import{Component} from '@angular/core';

//Aquí se especifican las configuraciones de un componente
@Component({
    //El selector hace referencia al nombre de como llamarlo cuando se necesite ser usado
    selector: 'app-header',
    //Cuando son pocas línes puede escribir el html directamnte, si ya son muchas lineas se acostumbra generar un archivo
    template: `<h1>Header component</h1>`
})


export class HeaderComponent{  

}
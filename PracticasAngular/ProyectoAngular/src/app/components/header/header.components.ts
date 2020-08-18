//Se agrega el decorador de clases
import{Component} from '@angular/core';

//Aquí se especifican las configuraciones de un componentes
@Component({
    //Es el selector hace referencia al nombre de como llamarlo cuando se necesite usarlo
    selector: 'app-header',
    //Cuanso son pocas línes puede escribir el html directamnte, si ya son muchas lineas se acostumbra generar un archivo
    template: `<h1>Header component</h1>`
})


export class HeaderComponent{  
    
}
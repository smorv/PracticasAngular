//Se agrega el decorador de clases
import{Component} from '@angular/core';

//Aquí se especifican las configuraciones de un componente
@Component({
    //El selector hace referencia al nombre de como llamarlo cuando se necesite ser usado
    selector: 'app-header',
    //Cuando son pocas línes puede escribir el html directamnte, si ya son muchas lineas se acostumbra generar un archivo
    templateUrl: './header.components.html'
})

//Export es mencionar a la clase que puede ser utilizadodesde cualquier lugar.
export class HeaderComponent{  

}
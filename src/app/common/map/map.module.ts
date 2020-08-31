import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import {MapService} from './map.service';

@NgModule({
  declarations: [
  	MapComponent
  ],
  exports:[
  	MapComponent
  ],
  imports: [
  
  ],
  providers: [MapService]
})
export class MapModule { }

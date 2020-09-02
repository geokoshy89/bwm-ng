import {NgModule} from '@angular/core';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
import { Daterangepicker } from 'ng2-daterangepicker';
import {RentalService} from './shared/rental.service';
import {RouterModule,Routes} from '@angular/router';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import {NgPipesModule} from 'ngx-pipes';
import {UpperCasePipe} from '../common/pipes/upppercase.pipe';
import {MapModule}  from '../common/map/map.module';
import {AuthGuard} from '../auth/shared/auth.guard';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';

const routes:Routes=[
  {path:'rentals',component:RentalComponent,
   children:[
     {path:'',component:RentalListComponent},
     {path:':rentalId',component:RentalDetailComponent,canActivate:[AuthGuard]}
   ]}
];
@NgModule({
 declarations:[
   RentalComponent,
    RentalListComponent,
  RentalListItemComponent,
  RentalDetailComponent,
  UpperCasePipe,
  RentalDetailBookingComponent],
 imports:[CommonModule,
RouterModule.forChild(routes),
NgPipesModule,
    MapModule,
    Daterangepicker
],
 providers:[RentalService]
})
export class RentalModule{


}

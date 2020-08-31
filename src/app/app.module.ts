import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import {RentalModule} from './rental/rental.module';
import {HttpClientModule} from '@angular/common/http';
const routes:Routes=[
  {path:'',redirectTo:'/rentals',pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    RentalModule,
    HttpClientModule
    //wEKQKUVLfrmi2nGA4OPoy6H0vkQpj8cZ
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

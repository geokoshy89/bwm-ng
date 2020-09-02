import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './shared/auth.service';
import {TokenInterceptor} from './shared/token.interceptor';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthGuard} from './shared/auth.guard';
const routes:Routes=[
  {path:'register',component:RegisterComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]}
]
@NgModule({
  declarations:[
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports:[
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    AuthService,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ]
})
export class AuthModule{

}

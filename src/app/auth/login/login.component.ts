import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'bwm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  errors:any[]=[];
  notifyMessage:string='';
  constructor(private fb:FormBuilder,
              private auth:AuthService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
    this.route.params.subscribe((params)=>{
      if(params['registered']==='success'){
        debugger;
        this.notifyMessage='You have been successfully registered.Please login';
      }
    })
  }

  initForm(){
    this.loginForm=this.fb.group({
      email:['',[Validators.required,
                 Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['',Validators.required]
    })
  }

  isInvalidInput(fieldName:string){
    return this.loginForm.controls[fieldName].invalid &&
    (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  isInputRequired(fieldName:string){
    return this.loginForm.controls[fieldName].errors.required;
  }

  login(){
    this.auth.login(this.loginForm.value).subscribe(
      (authToken)=>{
        console.log(`Authentication successfull ${authToken}`);
        this.router.navigate(['/rentals']);
      },
      (errorResponse)=>{
        this.errors=errorResponse.error.errors;
      });
  }

}

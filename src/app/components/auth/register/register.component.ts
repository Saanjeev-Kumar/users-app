import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username = new FormControl('',[
    Validators.required,
    Validators.email,
  ]);
  password =new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    Validators.pattern( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*?]{6,}$/)

  ]);
  confirmpassword=new FormControl('',[
    Validators.required,
    Validators.minLength(6),
    Validators.pattern( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*?]{6,}$/)
    // Validators.ConfirmPasswordValidator("password","confirmpassword")
  ]);
  gender=new FormControl('', Validators.required);
	married=new FormControl(false);

  cityList: any = ['coimbatore', 'Bangalore', 'Mumbai']

  city=new FormControl('',[
    Validators.required
  ]);

  phoneno=new FormControl('',[
    Validators.required,
    Validators.pattern("^[0-9]*$"),
    Validators.minLength(10),
    Validators.maxLength(10)


  ])




  registerForm:FormGroup;

  constructor(private fb:FormBuilder) {
   this.registerForm= this.fb.group({
      username:this.username,
      password:this.password,
      confirmpassword:this.confirmpassword,
      gender:this.gender,
      married:this.married,
      city:this.city,
      phoneno:this.phoneno,
    },
    {
      validator:this.ConfirmPasswordValidator("password","confirmpassword")
    }
    );
  }

  onRegister(){
    console.log(this.registerForm);
  }
  ConfirmPasswordValidator(controlName:string,matchingControlName:string)
{
  return (formGroup: FormGroup) => {
    let control=formGroup.controls[controlName];
    let matchingControl=formGroup.controls[matchingControlName]
    // if(matchingControl.errors  && !matchingControl.errors.ConfirmPasswordValidator){
    //   return;
    // }
    if(control.value !==matchingControl.value){
      matchingControl.setErrors({passwordMismatch:true});
    }
    else{
      matchingControl.setErrors(null);
    }
  }
}

  ngOnInit(): void {
  }

}

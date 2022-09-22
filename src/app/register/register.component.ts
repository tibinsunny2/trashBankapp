import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

// for register form group
registerForms=this.fb.group({
  account:['',[Validators.required,Validators.pattern('[0-9]*')]],
  password:['',[Validators.required,Validators.pattern('[0-9]*')]],
  username:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
})
  constructor(private ds:BankService,private route:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    var username=this.registerForms.value.username
    var account=this.registerForms.value.account
    var password=this.registerForms.value.password
    var amount
   const result=this.ds.register(username,account,password,amount)
   if(result){
    alert('the registration completed successfully !!!!!!!!!!!!!!!!')
this.route.navigateByUrl('')
   }
   else{
    alert('the user already exist')
   }
  }

}

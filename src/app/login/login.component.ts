import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFroms = this.fb.group({
    account: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    password: ['',[Validators.required,Validators.pattern('[0-9]*')]],
  })
  constructor(private ds: BankService, private route: Router, private fb: FormBuilder) {
    this.ds.getDetails()
   }

  ngOnInit(): void {
  }
  login() {
    var account = this.loginFroms.value.account
    var password = this.loginFroms.value.password
    const result = this.ds.login(account, password)
    if (result) {
      alert('login successfull........!!!!')
      this.route.navigateByUrl('/dashbord')
    }
    else {
      alert('give valide datas.............!!!!')
      this.route.navigateByUrl('')
    }
  }
}

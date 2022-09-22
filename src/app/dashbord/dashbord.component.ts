import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  //   account = ''
  // amount = ''
  // password = ''
  // // for the withdrawal logic
  // account1 = ''
  // amount1 = ''
  // password1 = ''// for the deposite logic

  // ....................................

// declaring variable for the date and time of the system
systemDetails:any

  // reactive form model for deposite
  depositeForms = this.fb.group({
    account: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  })

  // reactive form for withdraw
  withdrawForms = this.fb.group({
    account1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    password1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  })
  // deining the variable to hold the username
  user: any
  acno:any

  constructor(private ds: BankService, private route: Router, private fb: FormBuilder) {
    this.user = localStorage.getItem('currentUser')
    this.systemDetails = new Date
  }

  ngOnInit(): void {
    if (!localStorage.getItem('currentAccount')) {
      alert('pleace login')
      this.route.navigateByUrl('')
    }
  }

  // deposite logic function

  deposite() {
    var account = this.depositeForms.value.account
    var password = this.depositeForms.value.password
    var amount = this.depositeForms.value.amount
    const result = this.ds.deposite(account, password, amount)
    if (result) {
      alert('THE AVAILABLE BALANC IS.......' + result)
    }
  }

  // withdrawel logic function

  withdraw() {
    var account = this.withdrawForms.value.account1
    var password = this.withdrawForms.value.password1
    var amount = this.withdrawForms.value.amount1
    const result = this.ds.withdraw(account, password, amount)
    if (result) {
      alert('THE AVAILABLE BALANC IS.......' + result)
    }
  }

  // for the history function
  history() {
    this.route.navigateByUrl('transaction')
  }
  logout() {
    //  remove account number and currentUSername from the localstorage
    localStorage.removeItem('currentUser')
    localStorage.removeItem('currentAccount')
    // navigate towards login page
    this.route.navigateByUrl('')
  }
  delete() {
        this.acno=JSON.parse(localStorage.getItem('currentAccount')||'')
  }
  noDelete(){
    this.acno=''
  }

}

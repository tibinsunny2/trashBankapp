import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  // defining the variables for the user name display

  DataService: any = {
    1000: { account: 1000, username: 'TIBIN', password: 1234, amount: 1000, transaction: [] },
    1001: { account: 1001, username: 'TEENA', password: 12345, amount: 1002, transaction: [] },
    1002: { account: 1002, username: 'TINU', password: 12346, amount: 1003, transaction: [] },
    1003: { account: 1003, username: 'SUNNY', password: 12347, amount: 1004, transaction: [] },
    1004: { account: 1004, username: 'ELSAMMA', password: 12348, amount: 1005, transaction: [] },
    1005: { account: 1005, username: 'ELIZABETH', password: 12349, amount: 1006, transaction: [] }
  }
  userDetailse: any
  currentUser: any
  currentAccount: any
  currentAmount: any
  creditAmount: any
  constructor() { }

  // permanently storing datas to the LOCALSTORAGE
  saveDetails() {
    // 1st saving the database if it has any value
    localStorage.setItem('dataBase', JSON.stringify(this.DataService))
    //   currentUser
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    // currentAccount
    localStorage.setItem('currentAccount', JSON.stringify(this.currentAccount))
    // currentAmount
    localStorage.setItem('currentAmount', JSON.stringify(this.currentAmount))
  }
  // to get items from the local storage
  getDetails() {
    // checking is there any database
    if (localStorage.getItem('dataBase')) {

      // assigning the database from the localstorage to the class variable userDetails
      this.userDetailse = JSON.parse(localStorage.getItem('dataBase') || '')
      // get the current user
      if (localStorage.getItem('currentUser')) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '')
      }
      // get current account number
      if (localStorage.getItem('currentAccount')) {
        this.currentAccount = JSON.parse(localStorage.getItem('currentAccount') || '')
      }
    }
  }
  // for register internal functions

  register(username: any, account: any, password: any, amount: any) {
    let DataService = this.DataService
    if (account != '') {
      if (account == DataService[account]) {
        return false
      }
      else {
        DataService[account] = {
          account,
          username,
          password,
          amount: 0,
          transaction: [],
        }
        console.log(DataService);

        return true
      }
    }
    else {
      alert('give the informations.........!!!!!!!!!!!!!')
      return false
    }


  }
  // for login internal functions

  login(account: any, password: any) {
    let DataService = JSON.parse(localStorage.getItem('dataBase')||'')
    if (account != '') {
      if (account in DataService) {
        if (password == DataService[account]['password']) {
          this.currentUser = DataService[account]['username']
          this.currentAccount = account
          this.currentAmount = DataService[account]['amount']
          this.saveDetails()
          return true
        }
        else {
          alert('password incurrect')
          return false
        }
      }
      else {
        alert('user doesnt exist........!!!!!')
        return false
      }
    }
    else {
      alert('empty info not allowed....!!!!')
      return false
    }
  }

  // for the transaction purposes
  // deposite functions
  deposite(account: any, password: any, amount: any) {
    let DataService = this.DataService
    var money = parseInt(amount)
    if (account in DataService) {
      if (password == DataService[account]['password']) {
        DataService[account]['amount'] += money
        this.creditAmount = DataService[account]['amount']
        console.log(DataService[account]['amount']);
        DataService[account]['transaction'].push({
          type: 'CREDIT',
          amount
        })
        console.log(DataService[account]['transaction']);

        alert(`${amount}....deposited`)
        this.saveDetails()

        return (DataService[account]['amount'])

      }
      else {
        this.creditAmount = 0
        return this.creditAmount
      }
    }
  }

  // for witdraw function

  withdraw(account: any, password: any, amount: any) {
    let DataService = this.DataService
    var money = parseInt(amount)
    if (money <= DataService[account]['amount']) {
      if (account in DataService) {
        if (password == DataService[account]['password']) {
          DataService[account]['amount'] -= money
          DataService[account]['transaction'].push({
            type: 'DEBIT',
            amount
          })
          alert(`${amount}...debited from your account`)
          this.saveDetails()

          return (DataService[account]['amount']);
        }
      }
      else {
        alert('insufficient balance.....check your balance')
      }
    }
  }

  balance(account: any) {
    return this.DataService[account]['amount']
  }
  getransacton(account: any) {
    console.log(this.DataService[account]['transaction']);
    return this.DataService[account]['transaction']
  }
  delete(acno: any) {

  }
}

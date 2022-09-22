import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactionS:any
  account:any
  constructor(private ds:BankService,private route:Router) {
    this.account=this.ds.currentAccount
  this.transactionS=this.ds.getransacton(this.account)
  console.log(this.transactionS);
  
    }
  ngOnInit(): void {
  }


}

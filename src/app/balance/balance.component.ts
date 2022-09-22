import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
userName:any
Amount:any
creditAmount:any
  constructor(private ds:BankService,private route:Router) {
    this.userName=this.ds.currentUser
    this.Amount=this.ds.currentAmount
    this.creditAmount=this.ds.creditAmount
   }

  ngOnInit(): void {
  }
home(){
  this.route.navigateByUrl('dashbord')
}
}

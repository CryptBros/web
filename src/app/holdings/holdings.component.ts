import { Component, OnInit } from '@angular/core';

import { Balance } from '../models/Balance';
import { BalanceService } from '../services/balance.service';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent implements OnInit {
  balances: Balance[] = [];
  address: string = "GBH25RYXAEDKPZUIMC5VJBKNYRUULY5B2LH5NVG6Q3RZPHK5KPFBZX7T";

  constructor(private balanceService: BalanceService) { }

  getBalances() {
    this.balanceService.getBalances(this.address).subscribe(balances => this.balances = balances);
  }

  ngOnInit() {
    this.getBalances();
  }

}

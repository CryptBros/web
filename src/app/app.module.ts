import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BalanceService } from './services/balance.service';

import { AppComponent } from './app.component';
import { HoldingsComponent } from './holdings/holdings.component';

@NgModule({
  declarations: [
    AppComponent,
    HoldingsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [BalanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

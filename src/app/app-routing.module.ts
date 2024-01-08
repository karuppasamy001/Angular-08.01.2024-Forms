import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { DisplayComponent } from './display/display.component';
import { SellComponent } from './sell/sell.component';
import { BillingComponent } from './billing/billing.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'BuyProduct', component: BuyComponent },
  { path: 'SellProduct', component: SellComponent },
  { path: 'Billing', component: BillingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

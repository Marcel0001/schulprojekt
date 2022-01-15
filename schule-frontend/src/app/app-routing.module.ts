import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'kunden', component: CustomersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

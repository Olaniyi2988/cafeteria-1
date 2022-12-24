import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { LayoutComponent } from "./dashboard/layout/layout.component";
import { TicketsPanelComponent } from "./dashboard/tickets-panel/tickets-panel.component";
import { WalletComponent } from "./dashboard/wallet/wallet.component";
import { SettingsComponent } from "./dashboard/settings/settings.component";


const routes: Routes = [
  {path:'login', component:LoginComponent },
  {path:'', component:LoginComponent },
  {path:'register', component:RegisterComponent },
  {path:'dashboard', component:LayoutComponent,children:[
    {path:'',component:TicketsPanelComponent},
    {path:'wallet',component:WalletComponent},
    {path:'settings',component:SettingsComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

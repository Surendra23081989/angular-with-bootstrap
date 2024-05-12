import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OthersComponent } from './others/others.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'buttons', component:ButtonsComponent},
  {path:'cards', component:CardsComponent},
  {path:'colors', component:ColorsComponent},
  {path:'borders', component:BordersComponent},
  {path:'animations', component:AnimationsComponent},
  {path:'others', component:OthersComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'forgot-password', component:ForgotComponent},
  {path:'blank-page', component:BlankPageComponent},
  {path:'tables', component:TablesComponent},
  {path:'charts', component:ChartsComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
exports: [RouterModule]
})
export class AppRoutingModule { }

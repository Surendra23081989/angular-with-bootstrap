import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HeadingComponent } from './heading/heading.component';
import { MonthlyCardComponent } from './monthly-card/monthly-card.component';
import { AnnualyCardComponent } from './annualy-card/annualy-card.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { PendingRequestCardComponent } from './pending-request-card/pending-request-card.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { LogoutModalComponent } from './logout-modal/logout-modal.component';
import { IllustrationComponent } from './illustrations/illustration/illustration.component';
import { ApproachComponent } from './illustrations/approach/approach.component';
import { ProjectComponent } from './projects/project/project.component';
import { ColorSystemComponent } from './projects/color-system/color-system.component';
import { ShowByNamePipe } from './show-by-name.pipe';
import { HighlightedDirective } from './highlighted.directive';
import { HttpClientModule } from '@angular/common/http';
import { AuthorGridComponent } from './author-grid/author-grid.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
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
import { BlankPageComponent } from './blank-page/blank-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    HeadingComponent,
    MonthlyCardComponent,
    AnnualyCardComponent,
    TaskCardComponent,
    PendingRequestCardComponent,
    AreaChartComponent,
    PieChartComponent,
    FooterComponent,
    ProjectsComponent,
    IllustrationsComponent,
    LogoutModalComponent,
    IllustrationComponent,
    ApproachComponent,
    ProjectComponent,
    ColorSystemComponent,
    ShowByNamePipe,
    HighlightedDirective,
    AuthorGridComponent,
    FormsComponent,
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OthersComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    NotFoundComponent,
    BlankPageComponent,
    DashboardComponent,
    TablesComponent,
    ChartsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

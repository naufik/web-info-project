import {RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SoonComponent } from './soon/soon.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LoggedHeaderComponent } from './logged-header/logged-header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: SoonComponent },
  { path: 'home', component: LandingComponent },
  { path: 'main', component: MainpageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SoonComponent,
    LandingComponent,
    HeaderComponent,
    LoginComponent,
    LoggedHeaderComponent,
    MainpageComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

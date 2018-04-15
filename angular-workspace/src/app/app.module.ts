import {RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SoonComponent } from './soon/soon.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: SoonComponent },
  { path: 'home', component: LandingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SoonComponent,
    LoginComponent,
    LandingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

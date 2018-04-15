import {RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SoonComponent } from './soon/soon.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ListitemComponent } from './listitem/listitem.component';

const routes: Routes = [
  { path: '', component: SoonComponent },
  { path: 'home', component: LandingComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SoonComponent,
    LandingComponent,
    HeaderComponent,
    LoginComponent,
    ListitemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

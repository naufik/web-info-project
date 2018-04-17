import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SoonComponent } from './soon/soon.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooditemComponent } from './fooditem/fooditem.component';
import { LoggedHeaderComponent } from './logged-header/logged-header.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ListitemComponent } from './listitem/listitem.component';
import { SettingsComponent } from './settings/settings.component';
import { FridgeComponent } from './fridge/fridge.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ListcontainerComponent } from './listcontainer/listcontainer.component';
import { FridgeitemComponent } from './fridgeitem/fridgeitem.component';

const routes: Routes = [
  { path: '', component: SoonComponent },
  { path: 'home', component: LandingComponent },
  { path: 'main', component: MainpageComponent },
  { path: 'fridge', component: FridgeComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'groceries', component: GroceryListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SoonComponent,
    LandingComponent,
    HeaderComponent,
    LoginComponent,
    FooditemComponent,
    LoggedHeaderComponent,
    MainpageComponent,
    ListitemComponent,
    SettingsComponent,
    FridgeComponent,
    GroceryListComponent,
    ItemListComponent,
    ListcontainerComponent,
    FridgeitemComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

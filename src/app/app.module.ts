import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipeeComponent } from './recipee/recipee.component';
import { RecipeeDetailsComponent } from './recipee/recipee-details/recipee-details.component';
import { RecipeeListComponent } from './recipee/recipee-list/recipee-list.component';
import { ShoppingeditComponent } from './shoppinglist/shoppingedit/shoppingedit.component';
import { RecipeeItemComponent } from './recipee/recipee-list/recipee-item/recipee-item.component';
import { DropdownDirective } from './dropdown.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppinglistComponent,
    ShoppingeditComponent,
    RecipeeComponent,
    RecipeeDetailsComponent,
    RecipeeListComponent,
    RecipeeItemComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

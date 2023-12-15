import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {EffectsModule, provideEffects} from '@ngrx/effects';
import {provideStore, StoreModule} from "@ngrx/store";
import {CoreModule} from "./utils/core.module";
import {CartEffects} from "./core/store/cart.effects";
import { CartListComponent } from './cart-list/cart-list.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "./environment/environment.prod";
import {cartReducer} from "./core/store/cart.reducer";
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule,
    StoreModule.forRoot(),
    EffectsModule.forRoot([CartEffects]),
    CoreModule,
    StoreDevtoolsModule.instrument({
      name: 'NgRx Demo2 App',
      logOnly: environment.production
    })
  ],
  providers: [provideStore(),
    provideEffects(CartEffects),],
  bootstrap: [AppComponent]
})
export class AppModule { }

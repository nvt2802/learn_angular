import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import {cartReducer} from "../core/store/cart.reducer";
import {CartEffects} from "../core/store/cart.effects";

@NgModule({
  imports: [
    StoreModule.forFeature('feature_cart', cartReducer),
    EffectsModule.forFeature([CartEffects])
  ]
})
export class CoreModule {}

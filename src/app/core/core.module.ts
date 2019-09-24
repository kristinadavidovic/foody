import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// store
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreRoutingModule } from './routing/core-routing/core-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    CoreRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}

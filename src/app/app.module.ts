import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompareEffects, reducers, metaReducers } from './state';
import { ApiRequestMakerService } from './services/api-request-maker.service';
import { AppRoutingModule } from './app-routing.module';
import { StarshipComparatorComponent } from './components/starship-comparator/starship-comparator.component';
import { PersonComparatorComponent } from './components/person-comparator/person-comparator.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    StarshipComparatorComponent,
    PersonComparatorComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([CompareEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    NgbModule
  ],
  providers: [
    ApiRequestMakerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

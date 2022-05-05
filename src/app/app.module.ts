import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DatepickerMinMaxExampleComponent } from './datepicker-min-max-example/datepicker-min-max-example.component';
import { MaterialsUiModule } from './materials-ui/materials-ui.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    DatepickerMinMaxExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

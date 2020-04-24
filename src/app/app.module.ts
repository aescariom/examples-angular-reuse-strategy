import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ResultComponent } from './result/result.component';
import { CustomReuseStrategy } from './custom_reuse.strategy';
import { RouteReuseStrategy } from '@angular/router';
import { FilterSaveComponent } from './filter-save/filter-save.component';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ResultComponent,
    FilterSaveComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide : RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

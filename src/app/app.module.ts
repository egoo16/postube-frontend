import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImportModule } from './import.module';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImportModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

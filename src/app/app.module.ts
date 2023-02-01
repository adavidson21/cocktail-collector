import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './modules/home/home.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { DrinkDeckComponent } from './modules/drink-deck/drink-deck.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, DrinkDeckComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpService } from './shared/services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DrinkDeckComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-4qe8jcd2chd0ppuo.us.auth0.com',
      clientId: 'YC4CV4Rsk10ftwP1pvoYh3uqsA1QDsfU',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}

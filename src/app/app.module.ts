import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
// import { NgxCaptchaModule } from 'ngx-captcha';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { MininavComponent } from './mininav/mininav.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PrivacyComponent } from './privacy/privacy.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { TermsComponent } from './terms/terms.component';
import { GeotechnicalComponent } from './geotechnical/geotechnical.component';
import { GeophysicalComponent } from './geophysical/geophysical.component';
import { DrillingComponent } from './drilling/drilling.component';
import { ConstructionComponent } from './construction/construction.component';
import { ForensicComponent } from './forensic/forensic.component';
import { ServicesComponent } from './services/services.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    HeaderComponent,
    MininavComponent,
    FooterComponent,
    PrivacyComponent,
    DisclaimerComponent,
    TermsComponent,
    GeotechnicalComponent,
    GeophysicalComponent,
    DrillingComponent,
    ConstructionComponent,
    ForensicComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    // NgxCaptchaModule
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: environment.recaptcha.siteKey,
    } as RecaptchaSettings,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ConstructionComponent } from './construction/construction.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { DrillingComponent } from './drilling/drilling.component';
import { ForensicComponent } from './forensic/forensic.component';
import { GeophysicalComponent } from './geophysical/geophysical.component';
import { GeotechnicalComponent } from './geotechnical/geotechnical.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ServicesComponent } from './services/services.component';
import { TermsComponent } from './terms/terms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'aboutus', component: AboutusComponent },

  { path: 'contactus', component: ContactusComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'disclaimer', component: DisclaimerComponent },


  { path: 'terms', component: TermsComponent },

  { path: 'services', component: ServicesComponent },

  { path: 'geotechnical', component: GeotechnicalComponent },

  { path: 'geophysical', component: GeophysicalComponent },
  { path: 'drilling', component: DrillingComponent },
  { path: 'construction', component: ConstructionComponent },

  { path: 'forensic', component: ForensicComponent },

  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: '**', redirectTo: 'home', pathMatch: 'full' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',

  }), BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

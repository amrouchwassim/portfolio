import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RealisationComponent } from './components/realisation/realisation.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'studio', component:ServicesComponent},
  {path: 'service', component:AboutComponent},
  {path: 'realisation', component:RealisationComponent},
  {path: 'contact', component:ContactComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RealisationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/* import { FormGroup, FormControl } from '@angular/forms'; */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardWarningsComponent } from './Components/card-warnings/card-warnings.component';

import { ProfileEditorComponent } from './Components/profile-editor/profile-editor.component';

import { NavbarComponent } from './Global/navbar/navbar.component';
import { HotlineComponent } from './Global/hotline/hotline.component';
import { TestimonialsComponent } from './Components/testimonials/testimonials.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { InfoComponent } from './Components/info/info.component';
import { HomeComponent } from './Pages/Public/home/home.component';
import { OrganizationsComponent } from './Pages/Public/organizations/organizations.component';

import { LoginComponent } from './Pages/Public/login/login.component';
import { SignUpComponent } from './Pages/Public/sign-up/sign-up.component';
// import { HomeModule } from './modules/home/home.module';
// import { ModulesModule } from './modules/modules.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { CardPreventionComponent } from './Components/card-prevention/card-prevention.component';




@NgModule({
  declarations: [
    AppComponent,
    CardWarningsComponent,
    ProfileEditorComponent,
    NavbarComponent,
    HotlineComponent,
    TestimonialsComponent,
    StatisticsComponent,
    InfoComponent,
    HomeComponent,
    OrganizationsComponent,
    LoginComponent,
    SignUpComponent,
    CardPreventionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    // HomeModule,
    // ModulesModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}





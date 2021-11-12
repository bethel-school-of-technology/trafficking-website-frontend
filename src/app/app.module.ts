/* import { FormGroup, FormControl } from '@angular/forms'; */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardWarningsComponent } from './Components/card-warnings/card-warnings.component';
import { CardPreventionComponent } from './Components/card-prevention/card-prevention.component';
import { ProfileEditorComponent } from './Components/profile-editor/profile-editor.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HotlineComponent } from './Components/hotline/hotline.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { InfoComponent } from './Components/info/info.component';
import { ConnectComponent } from './connect/connect.component';
import { HomeComponent } from './Pages/Public/home/home.component';
import { OrganizationsComponent } from './Pages/Public/organizations/organizations.component';
import { LoginComponent } from './Pages/Public/login/login.component';
import { SignUpComponent } from './Pages/Public/sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    CardWarningsComponent,
    CardPreventionComponent,
    ProfileEditorComponent,
    NavbarComponent,
    HotlineComponent,
    TestimonialsComponent,
    StatisticsComponent,
    InfoComponent,
    ConnectComponent,
    HomeComponent,
    OrganizationsComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}





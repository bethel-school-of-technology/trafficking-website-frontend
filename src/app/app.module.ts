/* import { FormGroup, FormControl } from '@angular/forms'; */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardWarningsComponent } from './Components/card-warnings/card-warnings.component';
import { CardPreventionComponent } from './Components/card-prevention/card-prevention.component';
import { ProfileEditorComponent } from './Components/profile-editor/profile-editor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotlineComponent } from './hotline/hotline.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { InfoComponent } from './info/info.component';
import { ConnectComponent } from './connect/connect.component';


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
    ConnectComponent
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





import { NgModule } from '@angular/core';
/* import { FormGroup, FormControl } from '@angular/forms'; */
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardWarningsComponent } from './Components/card-warnings/card-warnings.component';
import { CardPreventionComponent } from './Components/card-prevention/card-prevention.component';
import { ProfileEditorComponent } from './Components/profile-editor/profile-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    CardWarningsComponent,
    CardPreventionComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

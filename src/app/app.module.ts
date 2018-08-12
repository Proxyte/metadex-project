import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AgmCoreModule } from '@agm/core';
import { PropertyModule } from './property/property.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RatingComponent } from './rating/rating.component';
import { DataService } from './data.service';
import { PreviewComponent } from './preview/preview.component';
import { PreresultComponent } from './preresult/preresult.component';
import { LogincompanyComponent } from './logincompany/logincompany.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginCompComponent,
    LoginComponent,
    RegistrationComponent,
    RatingComponent,
    PreviewComponent,
    PreresultComponent,
    LogincompanyComponent,
  ],
  imports: [
    BrowserModule,
    PropertyModule,
    AppRoutingModule,
      BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCAhOddJIjOHDKSKgyIjBuGHvDrUsGwD84'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

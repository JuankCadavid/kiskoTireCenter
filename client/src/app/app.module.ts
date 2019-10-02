import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KtcSpanishComponent } from './components/kioskoTireCenter/ktc-spanish/ktc-spanish.component';
import { KtcEmglishComponent } from './components/kioskoTireCenter/ktc-english/ktc-emglish.component';

// PrimeNG
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';

//Carousel
import { OwlModule } from 'ngx-owl-carousel';


//Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    KtcSpanishComponent,
    KtcEmglishComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropdownModule,
    RouterModule,
    NgbModule,
    FieldsetModule,
    OwlModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

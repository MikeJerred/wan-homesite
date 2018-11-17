import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg';

import { SharedModule } from '~/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AccordionModule.forRoot(),
        InlineSVGModule.forRoot(),

        SharedModule,
        AppRoutingModule
    ],
    providers: [
        { provide: 'Window', useValue: window }
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}

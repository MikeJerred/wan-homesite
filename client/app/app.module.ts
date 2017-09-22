import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { RouterConfig } from './app.routes';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(RouterConfig)
     ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
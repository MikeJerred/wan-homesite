import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmptyComponent } from './views/empty/empty.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { PortfoliosComponent } from './views/portfolios/portfolios.component';

@NgModule({
    declarations: [
        AppComponent,
        EmptyComponent,
        HeaderComponent,
        HomeComponent,
        PortfolioComponent,
        PortfoliosComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        NgbModule.forRoot(),
        LocalStorageModule.withConfig({
            prefix: 'app',
            storageType: 'localStorage',
            notifyOptions: {
                setItem: true
            }
        }),
        Ng2PageScrollModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

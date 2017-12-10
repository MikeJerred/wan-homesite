import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmptyComponent } from './views/empty/empty.component';
import { HomeComponent } from './views/home/home.component';
import { Design1Component } from './views/design/individual/design.1.component';
import { DesignPortfolioComponent } from './views/design/portfolio/design-portfolio.component';
import { PhotographyPortfolioComponent } from './views/photography/portfolio/photography-portfolio.component';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        EmptyComponent,
        HomeComponent,
        Design1Component,
        DesignPortfolioComponent,
        PhotographyPortfolioComponent,
        SiteHeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TabsModule.forRoot(),
        LocalStorageModule.withConfig({
            prefix: 'app',
            storageType: 'localStorage',
            notifyOptions: {
                setItem: true
            }
        }),
        AppRoutingModule
    ],
    providers: [
        { provide: 'Window', useValue: window }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from './views/empty/empty.component';
import { HomeComponent } from './views/home/home.component';
import { Design1Component } from './views/design/individual/design.1.component';
import { DesignPortfolioComponent } from './views/design/portfolio/design-portfolio.component';
import { PhotographyPortfolioComponent } from './views/photography/portfolio/photography-portfolio.component';

const routeConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'designs',
        component: DesignPortfolioComponent
    },
    {
        path: 'design/1',
        component: Design1Component
    },
    {
        path: 'photographs',
        component: PhotographyPortfolioComponent
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routeConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

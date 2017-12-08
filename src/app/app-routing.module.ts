import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from './views/empty/empty.component';
import { HomeComponent } from './views/home/home.component';
import { Portfolio1Component } from './views/portfolio/portfolio.1.component';
import { PortfoliosComponent } from './views/portfolios/portfolios.component';

const routeConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'portfolios',
        component: PortfoliosComponent
    },
    {
        path: 'portfolio/1',
        component: Portfolio1Component
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

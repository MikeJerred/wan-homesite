import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from './views/empty/empty.component';
import { HomeComponent } from './views/home/home.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
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
        path: 'portfolio/:id',
        component: PortfolioComponent
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

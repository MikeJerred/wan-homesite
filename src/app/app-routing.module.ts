import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EmptyComponent } from './views/empty/empty.component';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { SwitchComponent } from './views/switch/switch.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { PortfoliosComponent } from './views/portfolios/portfolios.component';

const routeConfig: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', component: HeaderComponent, outlet: 'header' }
        ]
    },
    {
        path: 'portfolios',
        component: PortfoliosComponent,
        children: [
            { path: '', component: EmptyComponent, outlet: 'header' }
        ]
    },
    { path: 'portfolio/:id', component: PortfolioComponent },
    { path: '', component: SwitchComponent, outlet: 'switch' },
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

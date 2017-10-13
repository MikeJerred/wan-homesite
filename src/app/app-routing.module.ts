import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './views/header/header.component';
import { HomeComponent } from './views/home/home.component';

const routeConfig: Routes = [
    { path: '', component: HeaderComponent, outlet: 'header' },
    { path: 'home', component: HomeComponent },
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

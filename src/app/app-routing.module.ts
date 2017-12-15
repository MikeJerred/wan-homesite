import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomeModule } from 'home/home.module';
//import { DesignModule } from 'design/design.module';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'design', loadChildren: 'design/design.module#DesignModule' },
    { path: 'photography', loadChildren: 'photography/photography.module#PhotographyModule' },
    { path: '**', component: PageNotFoundComponent, data: { animation: 'page-not-found' } }
];

@NgModule({
    imports: [
        HomeModule,
        //DesignModule,
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

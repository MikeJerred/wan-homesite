import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Design1Module } from './design-1/design-1.module';
import { Design2Module } from './design-2/design-2.module';
// import { Design3Module } from './design-3/design-3.module';
// import { Design4Module } from './design-4/design-4.module';
import { DesignPortfolioComponent } from './portfolio/design-portfolio.component';

const routes: Routes = [
    { path: '', component: DesignPortfolioComponent }
];

@NgModule({
    imports: [
        Design1Module,
        Design2Module,
        // Design3Module,
        // Design4Module,
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class DesignRoutingModule {}

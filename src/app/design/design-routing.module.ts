import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Design1Module } from './design-1/design-1.module';
import { DesignPortfolioComponent } from './portfolio/design-portfolio.component';

const routes: Routes = [
    { path: '', component: DesignPortfolioComponent }
];

@NgModule({
    imports: [
        Design1Module,
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class DesignRoutingModule {}

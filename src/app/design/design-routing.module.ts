import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignButtonWildeModule } from './design-button-wilde/design-button-wilde.module';
import { DesignNestedShapesModule } from './design-nested-shapes/design-nested-shapes.module';
import { DesignMjerredModule } from './design-mjerred/design-mjerred.module';
import { DesignBlackhawkModule } from './design-blackhawk/design-blackhawk.module';
import { DesignPortfolioComponent } from './portfolio/design-portfolio.component';

const routes: Routes = [
    { path: '', component: DesignPortfolioComponent, data: { animation: 'design-portfolio' } }
];

@NgModule({
    imports: [
        DesignButtonWildeModule,
        DesignNestedShapesModule,
        DesignMjerredModule,
        DesignBlackhawkModule,
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class DesignRoutingModule {}

import { NgModule } from '@angular/core';

import { SharedModule } from '~/shared/shared.module';
import { DesignRoutingModule } from './design-routing.module';
import { DesignPortfolioComponent } from './portfolio/design-portfolio.component';

@NgModule({
    imports: [
        SharedModule,
        DesignRoutingModule
    ],
    declarations: [
        DesignPortfolioComponent
    ]
})
export class DesignModule {}

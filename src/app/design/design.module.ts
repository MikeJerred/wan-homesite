import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { SharedModule } from 'shared/shared.module';
import { Design1Module } from './design-1/design-1.module';
import { DesignRoutingModule } from './design-routing.module';
import { DesignPortfolioComponent } from './portfolio/design-portfolio.component';

@NgModule({
    imports: [
        AccordionModule.forRoot(),
        SharedModule,
        Design1Module,
        DesignRoutingModule
    ],
    declarations: [
        DesignPortfolioComponent
    ]
})
export class DesignModule {}

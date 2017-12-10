import { NgModule } from '@angular/core';

import { SharedModule } from 'shared/shared.module';
import { PhotographyRoutingModule } from './photography-routing.module';
import { ArchitecturePortfolioComponent } from './architecture/architecture-portfolio.component';
import { StreetPortfolioComponent } from './street/street-portfolio.component';

@NgModule({
    imports: [
        SharedModule,
        PhotographyRoutingModule
    ],
    declarations: [
        ArchitecturePortfolioComponent,
        StreetPortfolioComponent
    ]
})
export class PhotographyModule {}

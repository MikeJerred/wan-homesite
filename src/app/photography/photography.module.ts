import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';

import { SharedModule } from 'shared/shared.module';
import { PhotographyRoutingModule } from './photography-routing.module';
import { ArchitecturePortfolioComponent } from './architecture/architecture-portfolio.component';
import { StreetPortfolioComponent } from './street/street-portfolio.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MobileGalleryComponent } from './mobile-gallery/mobile-gallery.component';

@NgModule({
    imports: [
        ModalModule.forRoot(),
        SharedModule,
        PhotographyRoutingModule
    ],
    declarations: [
        ArchitecturePortfolioComponent,
        StreetPortfolioComponent,
        GalleryComponent,
        MobileGalleryComponent
    ]
})
export class PhotographyModule {}

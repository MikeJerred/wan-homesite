import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { SideLinkComponent } from './side-link/side-link.component';
import { SiteHeaderComponent } from './site-header/site-header.component';

@NgModule({
    imports: [ CommonModule, RouterModule ],
    declarations: [
        FooterComponent,
        SideLinkComponent,
        SiteHeaderComponent
    ],
    exports: [
        FooterComponent,
        SideLinkComponent,
        SiteHeaderComponent,
        CommonModule,
        FormsModule
    ]
})
export class SharedModule {}

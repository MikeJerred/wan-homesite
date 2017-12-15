import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';

import { BannerLinkComponent } from './banner-link/banner-link.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SideLinkComponent } from './side-link/side-link.component';
import { SiteHeaderComponent } from './site-header/site-header.component';

@NgModule({
    imports: [ CommonModule, HttpClientModule, RouterModule, InlineSVGModule ],
    declarations: [
        BannerLinkComponent,
        FooterComponent,
        MenuComponent,
        SideLinkComponent,
        SiteHeaderComponent
    ],
    exports: [
        BannerLinkComponent,
        FooterComponent,
        MenuComponent,
        SideLinkComponent,
        SiteHeaderComponent,
        CommonModule,
        HttpClientModule,
        FormsModule,
        InlineSVGModule
    ]
})
export class SharedModule {}

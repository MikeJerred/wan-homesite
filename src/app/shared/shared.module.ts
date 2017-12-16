import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { AccordionModule } from 'ngx-bootstrap';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { BannerLinkComponent } from './banner-link/banner-link.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { SideLinkComponent } from './side-link/side-link.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';

import { LayoutService } from './layout.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        InlineSVGModule,
        AccordionModule,
        NgxPageScrollModule
    ],
    declarations: [
        BannerLinkComponent,
        FooterComponent,
        MenuComponent,
        SideLinkComponent,
        SiteHeaderComponent,
        TabsComponent,
        TabComponent
    ],
    providers: [
        LayoutService
    ],
    exports: [
        BannerLinkComponent,
        FooterComponent,
        MenuComponent,
        SideLinkComponent,
        SiteHeaderComponent,
        TabsComponent,
        TabComponent,

        CommonModule,
        HttpClientModule,
        FormsModule,
        InlineSVGModule
    ]
})
export class SharedModule {}

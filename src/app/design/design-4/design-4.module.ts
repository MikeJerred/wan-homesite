import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SharedModule } from 'shared/shared.module';
import { Design4Component } from './design-4.component';
import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
import { DesignTabDesignComponent } from './tab-design/tab-design.component';

const routes: Routes = [
    { path: '4', component: Design4Component, data: { animation: 'design-4' } }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxPageScrollModule
    ],
    declarations: [
        Design4Component,
        DesignTabDiscoveryComponent,
        DesignTabDesignComponent
    ],
    exports: [ RouterModule ]
})
export class Design4Module {}

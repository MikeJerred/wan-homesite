import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'shared/shared.module';
import { Design1Component } from './design-1.component';
import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
import { DesignTabWireframeComponent } from './tab-wireframe/tab-wireframe.component';

const routes: Routes = [
    { path: '1', component: Design1Component }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        Design1Component,
        DesignTabDiscoveryComponent,
        DesignTabWireframeComponent
    ],
    exports: [ RouterModule ]
})
export class Design1Module {}

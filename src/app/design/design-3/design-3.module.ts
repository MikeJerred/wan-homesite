import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'shared/shared.module';
import { Design3Component } from './design-3.component';
import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
import { DesignTabWireframeComponent } from './tab-wireframe/tab-wireframe.component';

const routes: Routes = [
    { path: '3', component: Design3Component, data: { animation: 'design-3' } }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        Design3Component,
        DesignTabDiscoveryComponent,
        DesignTabWireframeComponent
    ],
    exports: [ RouterModule ]
})
export class Design3Module {}

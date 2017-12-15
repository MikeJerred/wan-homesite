import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'shared/shared.module';
import { Design1Component } from './design-1.component';
import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
import { DesignTabWireframeComponent } from './tab-wireframe/tab-wireframe.component';
import { DesignTabTestingComponent } from './tab-testing/tab-testing.component';
import { DesignTabDesignComponent } from './tab-design/tab-design.component';

const routes: Routes = [
    { path: '1', component: Design1Component, data: { animation: 'design-1' } }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        Design1Component,
        DesignTabDiscoveryComponent,
        DesignTabWireframeComponent,
        DesignTabTestingComponent,
        DesignTabDesignComponent
    ],
    exports: [ RouterModule ]
})
export class Design1Module {}

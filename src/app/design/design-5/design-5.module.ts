import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '~/shared/shared.module';
import { Design5Component } from './design-5.component';
// import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
// import { DesignTabWireframeComponent } from './tab-wireframe/tab-wireframe.component';
// import { DesignTabTestingComponent } from './tab-testing/tab-testing.component';
// import { DesignTabDesignComponent } from './tab-design/tab-design.component';

const routes: Routes = [
    { path: '5', component: Design5Component, data: { animation: 'design-5' } }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        Design5Component
        // DesignTabDiscoveryComponent,
        // DesignTabWireframeComponent,
        // DesignTabTestingComponent,
        // DesignTabDesignComponent
    ],
    exports: [ RouterModule ]
})
export class Design5Module {}

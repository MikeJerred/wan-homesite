import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'shared/shared.module';
import { Design2Component } from './design-2.component';
// import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
// import { DesignTabWireframeComponent } from './tab-wireframe/tab-wireframe.component';
// import { DesignTabTestingComponent } from './tab-testing/tab-testing.component';
// import { DesignTabDesignComponent } from './tab-design/tab-design.component';

const routes: Routes = [
    { path: '2', component: Design2Component }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        Design2Component
        // DesignTabDiscoveryComponent,
        // DesignTabWireframeComponent,
        // DesignTabTestingComponent,
        // DesignTabDesignComponent
    ],
    exports: [ RouterModule ]
})
export class Design2Module {}

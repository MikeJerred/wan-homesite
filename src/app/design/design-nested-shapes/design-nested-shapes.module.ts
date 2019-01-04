import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '~/shared/shared.module';
import { DesignNestedShapesComponent } from './design-nested-shapes.component';
// import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
// import { DesignTabWireframeComponent } from './tab-wireframe/tab-wireframe.component';
// import { DesignTabTestingComponent } from './tab-testing/tab-testing.component';
// import { DesignTabDesignComponent } from './tab-design/tab-design.component';

const routes: Routes = [
    { path: '2', component: DesignNestedShapesComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DesignNestedShapesComponent
        // DesignTabDiscoveryComponent,
        // DesignTabWireframeComponent,
        // DesignTabTestingComponent,
        // DesignTabDesignComponent
    ],
    exports: [ RouterModule ]
})
export class DesignNestedShapesModule {}

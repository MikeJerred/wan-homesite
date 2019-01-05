import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '~/shared/shared.module';
import { DesignMjerredComponent } from './design-mjerred.component';
// import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
// import { DesignTabWireframeComponent } from './tab-wireframe/tab-wireframe.component';
// import { DesignTabTestingComponent } from './tab-testing/tab-testing.component';
// import { DesignTabDesignComponent } from './tab-design/tab-design.component';

const routes: Routes = [
    { path: 'mjerred', component: DesignMjerredComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        DesignMjerredComponent
        // DesignTabDiscoveryComponent,
        // DesignTabWireframeComponent,
        // DesignTabTestingComponent,
        // DesignTabDesignComponent
    ],
    exports: [ RouterModule ]
})
export class DesignMjerredModule {}

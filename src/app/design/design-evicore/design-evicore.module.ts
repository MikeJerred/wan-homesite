import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SharedModule } from '~/shared/shared.module';
import { DesignEvicoreComponent } from './design-evicore.component';
import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
import { DesignTabWireframeComponent } from './tab-wireframe/tab-wireframe.component';

const routes: Routes = [
    { path: 'evicore', component: DesignEvicoreComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxPageScrollModule
    ],
    declarations: [
        DesignEvicoreComponent,
        DesignTabDiscoveryComponent,
        DesignTabWireframeComponent
    ],
    exports: [ RouterModule ]
})
export class DesignEvicoreModule {}

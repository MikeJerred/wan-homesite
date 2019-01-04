import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SharedModule } from '~/shared/shared.module';
import { DesignButtonWildeComponent } from './design-button-wilde.component';
import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
import { DesignTabWireframeComponent } from './tab-wireframe/tab-wireframe.component';
import { DesignTabTestingComponent } from './tab-testing/tab-testing.component';
import { DesignTabDesignComponent } from './tab-design/tab-design.component';

const routes: Routes = [
    { path: '1', component: DesignButtonWildeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgxPageScrollModule,

        SharedModule
    ],
    declarations: [
        DesignButtonWildeComponent,
        DesignTabDiscoveryComponent,
        DesignTabWireframeComponent,
        DesignTabTestingComponent,
        DesignTabDesignComponent
    ],
    exports: [ RouterModule ]
})
export class DesignButtonWildeModule {}

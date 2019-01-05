import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SharedModule } from '~/shared/shared.module';
import { DesignLloydsComponent } from './design-lloyds.component';
import { TabResearchComponent } from './tab-research/tab-research.component';
import { TabWireframeComponent } from './tab-wireframe/tab-wireframe.component';
import { TabDesignComponent } from './tab-design/tab-design.component';

const routes: Routes = [
    { path: '7', component: DesignLloydsComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgxPageScrollModule,

        SharedModule
    ],
    declarations: [
        DesignLloydsComponent,
        TabResearchComponent,
        TabWireframeComponent,
        TabDesignComponent
    ],
    exports: [ RouterModule ]
})
export class DesignLloydsModule {}

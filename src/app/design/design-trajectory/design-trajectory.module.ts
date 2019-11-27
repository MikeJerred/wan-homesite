import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SharedModule } from '~/shared/shared.module';
import { DesignTrajectoryComponent } from './design-trajectory.component';
import { TabResearchComponent } from './tab-research/tab-research.component';
import { TabDesignComponent } from './tab-design/tab-design.component';
import { TabTestingComponent } from './tab-testing/tab-testing.component';


const routes: Routes = [
    { path: '9', component: DesignTrajectoryComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgxPageScrollModule,

        SharedModule
    ],
    declarations: [
        DesignTrajectoryComponent,
        TabResearchComponent,
        TabDesignComponent,
        TabTestingComponent,
      
    ],
    exports: [ RouterModule ]
})
export class DesignTrajectoryModule {}

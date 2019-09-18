import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SharedModule } from '~/shared/shared.module';
import { DesignSleepComponent } from './design-sleep.component';
import { TabResearchComponent } from './tab-research/tab-research.component';
import { TabPrototypeComponent } from './tab-prototype/tab-prototype.component';
import { TabDesignComponent } from './tab-design/tab-design.component';
import { TabTestingComponent } from './tab-testing/tab-testing.component';
import { TabDemonstrationComponent } from './tab-demonstration/tab-demonstration.component';

const routes: Routes = [
    { path: '8', component: DesignSleepComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgxPageScrollModule,

        SharedModule
    ],
    declarations: [
        DesignSleepComponent,
        TabResearchComponent,
        TabPrototypeComponent,
        TabDesignComponent,
        TabTestingComponent,
        TabDemonstrationComponent
    ],
    exports: [ RouterModule ]
})
export class DesignSleepModule {}

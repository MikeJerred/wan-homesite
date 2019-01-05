import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SharedModule } from '~/shared/shared.module';
import { DesignDeathComponent } from './design-death.component';
import { TabResearchComponent } from './tab-research/tab-research.component';
import { TabPrototypeComponent } from './tab-prototype/tab-prototype.component';
import { TabDesignComponent } from './tab-design/tab-design.component';
import { TabDemonstrationComponent } from './tab-demonstration/tab-demonstration.component';

const routes: Routes = [
    { path: '6', component: DesignDeathComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgxPageScrollModule,

        SharedModule
    ],
    declarations: [
        DesignDeathComponent,
        TabResearchComponent,
        TabPrototypeComponent,
        TabDesignComponent,
        TabDemonstrationComponent
    ],
    exports: [ RouterModule ]
})
export class DesignDeathModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SharedModule } from '~/shared/shared.module';
import { DesignStarbucksComponent } from './design-starbucks.component';
import { TabResearchComponent } from './tab-research/tab-research.component';
import { TabPrototypeComponent } from './tab-prototype/tab-prototype.component';
import { TabDesignComponent } from './tab-design/tab-design.component';
import { TabDemonstrationComponent } from './tab-demonstration/tab-demonstration.component';

const routes: Routes = [
    { path: '10', component: DesignStarbucksComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgxPageScrollModule,

        SharedModule
    ],
    declarations: [
        DesignStarbucksComponent,
        TabResearchComponent,
        TabPrototypeComponent,
        TabDesignComponent,
        TabDemonstrationComponent
    ],
    exports: [ RouterModule ]
})
export class DesignStarbucksModule {}

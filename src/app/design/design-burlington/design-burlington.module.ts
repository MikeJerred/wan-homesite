import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SharedModule } from '~/shared/shared.module';
import { DesignBurlingtonComponent } from './design-burlington.component';
import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
import { DesignTabDesignComponent } from './tab-design/tab-design.component';

const routes: Routes = [
    { path: '11', component: DesignBurlingtonComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxPageScrollModule
    ],
    declarations: [
        DesignBurlingtonComponent,
        DesignTabDiscoveryComponent,
        DesignTabDesignComponent
    ],
    exports: [ RouterModule ]
})
export class DesignBurlingtonModule {}

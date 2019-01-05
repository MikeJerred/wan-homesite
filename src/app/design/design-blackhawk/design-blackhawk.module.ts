import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SharedModule } from '~/shared/shared.module';
import { DesignBlackhawkComponent } from './design-blackhawk.component';
import { DesignTabDiscoveryComponent } from './tab-discovery/tab-discovery.component';
import { DesignTabDesignComponent } from './tab-design/tab-design.component';

const routes: Routes = [
    { path: 'blackhawk', component: DesignBlackhawkComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        NgxPageScrollModule
    ],
    declarations: [
        DesignBlackhawkComponent,
        DesignTabDiscoveryComponent,
        DesignTabDesignComponent
    ],
    exports: [ RouterModule ]
})
export class DesignBlackhawkModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { SharedModule } from '~/shared/shared.module';
import { DesignSoundComponent } from './design-sound.component';
import { TabResearchComponent } from './tab-research/tab-research.component';
import { TabDesignComponent } from './tab-design/tab-design.component';



const routes: Routes = [
    { path: '13', component: DesignSoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        NgxPageScrollModule,

        SharedModule
    ],
    declarations: [
        DesignSoundComponent,
        TabResearchComponent,
        TabDesignComponent,
        
      
    ],
    exports: [ RouterModule ]
})
export class DesignSoundModule {}

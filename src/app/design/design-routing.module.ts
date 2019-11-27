import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignButtonWildeModule } from './design-button-wilde/design-button-wilde.module';
import { DesignNestedShapesModule } from './design-nested-shapes/design-nested-shapes.module';
import { DesignMjerredModule } from './design-mjerred/design-mjerred.module';
import { DesignBlackhawkModule } from './design-blackhawk/design-blackhawk.module';
import { DesignStarbucksModule } from './design-starbucks/design-starbucks.module';
import { DesignDeathModule } from './design-death/design-death.module';
import { DesignLloydsModule } from './design-lloyds/design-lloyds.module';
import { DesignSleepModule } from './design-sleep/design-sleep.module';
import { DesignTrajectoryModule } from './design-trajectory/design-trajectory.module';
import { DesignBurlingtonModule } from './design-burlington/design-burlington.module';
import { DesignSoundModule } from './design-sound/design-sound.module';
import { UxComponent } from './ux/ux.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
    { path: 'ux', component: UxComponent, data: { animation: 'design-portfolio-ux' } },
    { path: 'ui', component: UiComponent, data: { animation: 'design-portfolio-ui' } }
];

@NgModule({
    imports: [
        DesignButtonWildeModule,
        DesignNestedShapesModule,
        DesignMjerredModule,
        DesignBlackhawkModule,
        DesignStarbucksModule,
        DesignDeathModule,
        DesignLloydsModule,
        DesignSleepModule,
        DesignTrajectoryModule,
        DesignBurlingtonModule,
        DesignSoundModule,
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class DesignRoutingModule {}

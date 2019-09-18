import { NgModule } from '@angular/core';

import { SharedModule } from '~/shared/shared.module';
import { DesignRoutingModule } from './design-routing.module';
import { UxComponent } from './ux/ux.component';
import { UiComponent } from './ui/ui.component';

@NgModule({
    imports: [
        SharedModule,
        DesignRoutingModule
    ],
    declarations: [
        UxComponent,
        UiComponent
    ]
})
export class DesignModule {}

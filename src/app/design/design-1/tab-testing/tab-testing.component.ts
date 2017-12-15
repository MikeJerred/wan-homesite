import { Component, HostBinding } from '@angular/core';
import { trigger } from '@angular/animations';

import { tabAnimations } from '../design-1.component';

@Component({
    selector: 'app-design-tab-testing',
    templateUrl: './tab-testing.component.html',
    styleUrls: ['./tab-testing.component.scss'],
    animations: [ trigger('tab', tabAnimations) ]
})
export class DesignTabTestingComponent {
    @HostBinding('@tab') tab = true;
}

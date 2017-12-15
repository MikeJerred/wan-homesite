import { Component, HostBinding } from '@angular/core';
import { trigger } from '@angular/animations';

import { tabAnimations } from '../design-4.component';

@Component({
    selector: 'app-design-tab-design',
    templateUrl: './tab-design.component.html',
    styleUrls: ['./tab-design.component.scss'],
    animations: [ trigger('tab', tabAnimations) ]
})
export class DesignTabDesignComponent {
    @HostBinding('@tab') tab = true;
}

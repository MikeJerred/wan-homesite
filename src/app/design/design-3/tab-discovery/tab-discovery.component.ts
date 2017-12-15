import { Component, HostBinding } from '@angular/core';
import { trigger } from '@angular/animations';

import { tabAnimations } from '../design-3.component';

@Component({
    selector: 'app-design-tab-discovery',
    templateUrl: './tab-discovery.component.html',
    styleUrls: ['./tab-discovery.component.scss'],
    animations: [ trigger('tab', tabAnimations) ]
})
export class DesignTabDiscoveryComponent {
    @HostBinding('@tab') tab = true;
}

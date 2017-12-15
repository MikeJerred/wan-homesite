import { Component, HostBinding } from '@angular/core';
import { trigger } from '@angular/animations';

import { tabAnimations } from '../design-3.component';

@Component({
    selector: 'app-design-tab-wireframe',
    templateUrl: './tab-wireframe.component.html',
    styleUrls: ['./tab-wireframe.component.scss'],
    animations: [ trigger('tab', tabAnimations) ]
})
export class DesignTabWireframeComponent {
    @HostBinding('@tab') tab = true;
}

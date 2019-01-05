import { Component } from '@angular/core';
import { AnimationMetadata, animate, style, transition } from '@angular/animations';

import { LayoutService } from '~/shared/layout.service';

export const tabAnimations: AnimationMetadata[] = [
    transition(':leave', [
        style({ position: 'absolute', top: 0, left: 0, right: 0, opacity: 1 }),
        animate('1s ease-in-out', style({ opacity: 0 }))
    ]),
    transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in-out', style({ opacity: 1 }))
    ])
];

@Component({
    templateUrl: './design-lloyds.component.html',
    styleUrls: ['./design-lloyds.component.scss']
})
export class DesignLloydsComponent {
    public selectedTab = 0;
    public isMobile = false;

    constructor(layoutService: LayoutService) {
        layoutService.isMobile$().subscribe(value => {
            this.isMobile = value;
        });
    }
}

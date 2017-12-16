import { AnimationEntryMetadata, Component, HostBinding } from '@angular/core';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

import { LayoutService } from 'shared/layout.service';

const menuAnimations: AnimationEntryMetadata = [
    transition(':leave', [
        style({ position: 'fixed', top: 0, left: 0, right: 0 }),
        query('.bg-left', style({ transform: 'translateX(0)' }), { optional: true }),
        query('.bg-right', style({ transform: 'translateX(0)' }), { optional: true }),
        query('.bg-top', style({ transform: 'translateY(0)' }), { optional: true }),
        query('.bg-bottom', style({ transform: 'translateY(0)' }), { optional: true }),
        group([
            query('.bg-left', animate('1s ease-in-out', style({ transform: 'translateX(-65vw)' })), { optional: true }),
            query('.bg-right', animate('1s ease-in-out', style({ transform: 'translateX(65vw)' })), { optional: true }),
            query('.bg-top', animate('1s ease-in-out', style({ transform: 'translateY(-65vh)' })), { optional: true }),
            query('.bg-bottom', animate('1s ease-in-out', style({ transform: 'translateY(65vh)' })), { optional: true })
        ])
    ]),
    transition(':enter', [
        style({ position: 'fixed', top: 0, left: 0, right: 0 }),
        query('.bg-left', style({ transform: 'translateX(-65vw)' }), { optional: true }),
        query('.bg-right', style({ transform: 'translateX(65vw)' }), { optional: true }),
        query('.bg-top', style({ transform: 'translateY(-65vh)' }), { optional: true }),
        query('.bg-bottom', style({ transform: 'translateY(65vh)' }), { optional: true }),
        group([
            query('.bg-left', animate('1s ease-in-out', style({ transform: 'translateX(0)' })), { optional: true }),
            query('.bg-right', animate('1s ease-in-out', style({ transform: 'translateX(0)' })), { optional: true }),
            query('.bg-top', animate('1s ease-in-out', style({ transform: 'translateY(0)' })), { optional: true }),
            query('.bg-bottom', animate('1s ease-in-out', style({ transform: 'translateY(0)' })), { optional: true })
        ])
    ])
];

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    animations: [ trigger('menuAnimations', menuAnimations) ]
})
export class MenuComponent {
    @HostBinding('@menuAnimations') menuAnimations = true;

    public isMobile = false;

    constructor(layoutService: LayoutService) {
        layoutService.isMobile$().subscribe(value => {
            this.isMobile = value;
        });
    }
}

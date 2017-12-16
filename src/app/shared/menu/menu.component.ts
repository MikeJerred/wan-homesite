import { AnimationEntryMetadata, Component, HostBinding } from '@angular/core';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

const menuAnimations: AnimationEntryMetadata = [
    transition(':leave', [
        style({ position: 'fixed', top: 0, left: 0, right: 0 }),
        query('.bg-right', style({ transform: 'translateX(0)' })),
        query('.bg-left', style({ transform: 'translateX(0)' })),
        group([
            query('.bg-right', animate('1s ease-in-out', style({ transform: 'translateX(65vw)' }))),
            query('.bg-left', animate('1s ease-in-out', style({ transform: 'translateX(-65vw)' })))
        ])
    ]),
    transition(':enter', [
        style({ position: 'fixed', top: 0, left: 0, right: 0 }),
        query('.bg-right', style({ transform: 'translateX(65vw)' })),
        query('.bg-left', style({ transform: 'translateX(-65vw)' })),
        group([
            query('.bg-right', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
            query('.bg-left', animate('1s ease-in-out', style({ transform: 'translateX(0)' })))
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
}

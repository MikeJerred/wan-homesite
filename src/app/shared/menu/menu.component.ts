import { AnimationEntryMetadata, Component, HostBinding } from '@angular/core';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

const menuAnimations: AnimationEntryMetadata = [
    transition(':leave', [
        style({ position: 'fixed', top: 0, left: 0, right: 0 }),
        query('.bg-right', style({ transform: 'translateX(0)' })),
        query('.bg-left', style({ transform: 'translateX(0)' })),
        group([
            query('.bg-right', animate('1s ease-in-out', style({ transform: 'translateX(100vw)' }))),
            query('.bg-left', animate('1s ease-in-out', style({ transform: 'translateX(-100vw)' })))
        ])
    ]),
    transition(':enter', [
        style({ position: 'fixed', top: 0, left: 0, right: 0 }),
        query('.bg-right', style({ transform: 'translateX(100vw)' })),
        query('.bg-left', style({ transform: 'translateX(-100vw)' })),
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

    isLeftExpanded = false;
    isRightExpanded = false;

    public toggleLeft(): void {
        this.isLeftExpanded = !this.isLeftExpanded;

        if (this.isLeftExpanded)
            this.isRightExpanded = false;
    }

    public toggleRight(): void {
        this.isRightExpanded = !this.isRightExpanded;

        if (this.isRightExpanded)
            this.isLeftExpanded = false;
    }
}

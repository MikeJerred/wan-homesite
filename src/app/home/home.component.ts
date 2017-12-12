import { AnimationEntryMetadata, Component, EventEmitter, HostBinding, HostListener, Inject } from '@angular/core';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


const routeAnimation: AnimationEntryMetadata =
    trigger('routeAnimation', [
        transition(':leave', [
            style({ position: 'absolute', top: 0, left: 0, 'z-index': 50 }),
            query('.bg-right', style({ transform: 'translateX(0)', 'z-index': 100 })),
            query('.bg-left', style({ transform: 'translateX(0)', 'z-index': 100 })),
            group([
                query('.bg-right', animate('0.5s ease-in-out', style({ transform: 'translateX(100vw)' }))),
                query('.bg-left', animate('0.5s ease-in-out', style({ transform: 'translateX(-100vw)' })))
            ])
        ]),
        transition(':enter', [
            style({ position: 'absolute', top: 0, left: 0, 'z-index': 50 }),
            query('.bg-right', style({ transform: 'translateX(100vw)', 'z-index': 100 })),
            query('.bg-left', style({ transform: 'translateX(-100vw)', 'z-index': 100 })),
            group([
                query('.bg-right', animate('0.5s ease-in-out', style({ transform: 'translateX(0)' }))),
                query('.bg-left', animate('0.5s ease-in-out', style({ transform: 'translateX(0)' })))
            ])
        ])
    ]);

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [ routeAnimation ]
})
export class HomeComponent {
    @HostBinding('@routeAnimation') routeAnimation = 'home';

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

import { Component, EventEmitter, HostListener, Inject } from '@angular/core';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


const baseAnimation =
    trigger('baseAnimation', [
            transition('home => *', [
                query(':enter', style({ position: 'absolute', top: 0, left: 0 })),
                query(':leave', [
                    style({  }),
                    animate('500ms', style({  }))
                ])
            ])
    ]);

@Component({
    providers: [],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [ baseAnimation ]
})
export class HomeComponent {
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

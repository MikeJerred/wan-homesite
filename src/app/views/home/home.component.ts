import { Component, EventEmitter, HostListener, Inject } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Component({
    providers: [],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
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

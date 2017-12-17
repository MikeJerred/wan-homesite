import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-mobile-gallery',
    templateUrl: './mobile-gallery.component.html',
    styleUrls: ['./mobile-gallery.component.scss'],
    animations: [
        trigger('image', [
            state('previous', style({ opacity: 0 })),
            state('current', style({ opacity: 1 })),
            state('next', style({ opacity: 0 })),
            transition('previous <=> current', animate('1s ease-in-out')),
            transition('next <=> current', animate('1s ease-in-out')),
            transition('current => void', animate('1s ease-in-out', style({ opacity: 0 }))),
        ])
    ]
})
export class MobileGalleryComponent implements OnInit {
    @Input() public images: string[];

    public currentIndex = 0;

    ngOnInit() {
    }

    public previous(): void {
        if (this.currentIndex === 0)
            this.currentIndex = this.images.length - 1;
        else
            this.currentIndex--;
    }

    public next(): void {
        if (this.currentIndex >= this.images.length - 1)
            this.currentIndex = 0;
        else
            this.currentIndex++;
    }

    public getImageState(index: number): string {
        if (index === this.currentIndex)
            return 'current';

        const previousIndex = this.currentIndex === 0
            ? this.images.length - 1
            : this.currentIndex - 1;
        if (index === previousIndex)
            return 'previous';

        const nextIndex = this.currentIndex >= this.images.length - 1
            ? 0
            : this.currentIndex + 1;
        if (index === nextIndex)
            return 'next';

        return 'reset';
    }
}

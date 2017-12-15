import { Component, EventEmitter, Input, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    animations: [
        trigger('image', [
            state('previous', style({ opacity: 0 })),
            state('current', style({ opacity: 1 })),
            state('next', style({ opacity: 0 })),
            transition('previous <=> current', animate('1s ease-in-out')),
            transition('next <=> current', animate('1s ease-in-out'))
        ])
    ]
})
export class GalleryComponent {
    @Output() close = new EventEmitter<boolean>();

    @Input() public images: string[];
    @Input() public currentIndex = 0;

    public keyPressed($event: KeyboardEvent) {
        switch ($event.key) {
            case 'ArrowLeft':
                this.previous();
                $event.preventDefault();
                break;
            case 'ArrowRight':
            case ' ':
                this.next();
                $event.preventDefault();
                break;
            case 'Escape':
                this.close.next(true);
                break;
        }
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

        return 'void';
    }
}

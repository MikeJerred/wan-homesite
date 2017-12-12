import { Component, Input } from '@angular/core';
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
    //@Input('images') images: string[];
    public images = [
        '/assets/photographs/architecture/1.jpg',
        '/assets/photographs/architecture/2.jpg',
        '/assets/photographs/architecture/3.jpg',
        '/assets/photographs/architecture/4.jpg'
    ];

    public currentIndex = 0;

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

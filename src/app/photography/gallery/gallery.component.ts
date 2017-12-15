import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs/Observable';

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
export class GalleryComponent implements OnInit {
    @Output() close = new EventEmitter<boolean>();

    @Input() public images: string[];
    @Input() public setIndex: Observable<number>;

    public currentIndex = 0;
    private reset = {
        previous: false,
        current: false,
        next: false
    };

    ngOnInit() {
        this.setIndex.subscribe(value => {
            this.reset = {
                previous: true,
                current: true,
                next: true
            };
            this.currentIndex = value;
        });
    }

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
        if (index === this.currentIndex) {
            if (this.reset.current) {
                this.reset.current = false;
                return 'reset';
            }
            return 'current';
        }

        const previousIndex = this.currentIndex === 0
            ? this.images.length - 1
            : this.currentIndex - 1;
        if (index === previousIndex) {
            if (this.reset.previous) {
                this.reset.previous = false;
                return 'reset';
            }
            return 'previous';
        }

        const nextIndex = this.currentIndex >= this.images.length - 1
            ? 0
            : this.currentIndex + 1;
        if (index === nextIndex) {
            if (this.reset.next) {
                this.reset.next = false;
                return 'reset';
            }
            return 'next';
        }

        return 'reset';
    }
}

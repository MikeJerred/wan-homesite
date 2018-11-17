import { Component, OnInit } from '@angular/core';
import { AnimationMetadata, animate, query, style, trigger, transition } from '@angular/animations';
import { Subject } from 'rxjs';

import { LayoutService } from '~/shared/layout.service';

const fadeIn: AnimationMetadata[] = [
    transition('* <=> *', [
        query(':enter', style({ opacity: 0 })),
        query(':enter', animate('2s ease-in-out', style({ opacity: 1 })))
    ])
];

@Component({
    templateUrl: './architecture-portfolio.component.html',
    styleUrls: ['./architecture-portfolio.component.scss'],
    animations: [
        trigger('imageAnimation', fadeIn)
    ]
})
export class ArchitecturePortfolioComponent implements OnInit {
    public currentIndex = new Subject<number>();
    public isMobile = false;
    public images = [
        '/assets/photographs/architecture/1-high.jpg',
        '/assets/photographs/architecture/2.jpg',
        '/assets/photographs/architecture/3-high.jpg',
        '/assets/photographs/architecture/4-high.jpg',
        '/assets/photographs/architecture/5-high.jpg',
        '/assets/photographs/architecture/6-high.jpg',
        '/assets/photographs/architecture/7-high.jpg',
        '/assets/photographs/architecture/8-high.jpg'
    ];
    public canShowMore: boolean;
    public show: boolean[];
    public get showCount(): number {
        return this.show.filter(x => !!x).length;
    }

    constructor(layoutService: LayoutService) {
        layoutService.isMobile$().subscribe(value => {
            this.isMobile = value;
        });
    }

    ngOnInit(): void {
        this.show = this.images.map((_, index) => index < 4);
        this.canShowMore = this.images.length > 4;
    }

    public imageClick(index: number, ref: any): void {
        if (!this.isMobile) {
            this.currentIndex.next(index);
            ref.show();
        }
    }

    public loadMore(): void {
        let index = this.show.findIndex(x => !x);

        if (index > -1) {
            this.show[index] = true;
            this.show[index + 1] = true;
            this.show[index + 2] = true;
            this.show[index + 3] = true;
        }

        index = this.show.findIndex(x => !x);

        if (index <= -1) {
            this.canShowMore = false;
        }
    }
}

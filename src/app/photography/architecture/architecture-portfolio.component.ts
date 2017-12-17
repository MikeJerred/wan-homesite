import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LayoutService } from 'shared/layout.service';

@Component({
    templateUrl: './architecture-portfolio.component.html',
    styleUrls: ['./architecture-portfolio.component.scss']
})
export class ArchitecturePortfolioComponent implements OnInit {
    public currentIndex = new Subject<number>();
    public isMobile = false;
    public images = [
        '/assets/photographs/architecture/1.jpg',
        '/assets/photographs/architecture/2.jpg',
        '/assets/photographs/architecture/3.jpg',
        '/assets/photographs/architecture/4.jpg',
        '/assets/photographs/architecture/5.jpg',
        '/assets/photographs/architecture/6.jpg',
        '/assets/photographs/architecture/7.jpg',
        '/assets/photographs/architecture/8.jpg'
    ];
    public canShowMore: boolean;
    public show: boolean[];

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

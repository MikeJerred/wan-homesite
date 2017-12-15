import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
    templateUrl: './architecture-portfolio.component.html',
    styleUrls: ['./architecture-portfolio.component.scss']
})
export class ArchitecturePortfolioComponent {
    public currentIndex = new Subject<number>();

    public images = [
        '/assets/photographs/architecture/1.jpg',
        '/assets/photographs/architecture/2.jpg',
        '/assets/photographs/architecture/3.jpg',
        '/assets/photographs/architecture/4.jpg'
    ];
}

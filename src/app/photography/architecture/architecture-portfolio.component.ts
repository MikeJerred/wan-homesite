import { Component } from '@angular/core';

@Component({
    templateUrl: './architecture-portfolio.component.html',
    styleUrls: ['./architecture-portfolio.component.scss']
})
export class ArchitecturePortfolioComponent {
    public currentIndex = 0;

    public images = [
        '/assets/photographs/architecture/1.jpg',
        '/assets/photographs/architecture/2.jpg',
        '/assets/photographs/architecture/3.jpg',
        '/assets/photographs/architecture/4.jpg'
    ];
}

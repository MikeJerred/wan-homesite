import { Component } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
    providers: [],
    templateUrl: './street-portfolio.component.html',
    styleUrls: ['./street-portfolio.component.scss']
})
export class StreetPortfolioComponent {
    public currentIndex = new Subject<number>();

    public images = [
        '/assets/photographs/street/1.jpg',
        '/assets/photographs/street/2.jpg',
        '/assets/photographs/street/3.jpg',
        '/assets/photographs/street/4.jpg'
    ];
}

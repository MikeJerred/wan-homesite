import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    providers: [],
    templateUrl: './photography-portfolio.component.html',
    styleUrls: ['./photography-portfolio.component.scss']
})
export class PhotographyPortfolioComponent {
    @Input() id: number;
}

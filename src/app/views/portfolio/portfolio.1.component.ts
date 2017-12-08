import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    providers: [],
    templateUrl: './portfolio.1.component.html',
    styleUrls: ['./portfolio.1.component.scss']
})
export class Portfolio1Component {
    @Input() id: number;

    selectedTab = 0;
}

import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    providers: [],
    templateUrl: './design-1.component.html',
    styleUrls: ['./design-1.component.scss']
})
export class Design1Component {
    selectedTab = 0;
}

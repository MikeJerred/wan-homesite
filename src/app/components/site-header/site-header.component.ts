import { Component, HostListener, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'app-site-header',
    providers: [],
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent {
    constructor(@Inject('Window') private window: Window) {
    }

    isScrolled = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = this.window.scrollY > 0;
    }
}

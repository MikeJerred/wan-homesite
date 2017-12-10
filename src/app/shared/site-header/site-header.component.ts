import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-site-header',
    providers: [],
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent {
    constructor(
        @Inject('Window') private window: Window,
        public router: Router) {
    }

    isScrolled = false;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = this.window.scrollY > 0;
    }
}

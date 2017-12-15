import { Component, HostListener, Inject } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';

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

        router.events.subscribe(x => {
            if (x instanceof ActivationStart) {
                this.menuOpen = false;
            }
        });
    }

    public isScrolled = false;
    public menuOpen = false;

    public getInvert(): boolean {
        return this.router.isActive('/photography', false);
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = this.window.scrollY > 0;
    }
}

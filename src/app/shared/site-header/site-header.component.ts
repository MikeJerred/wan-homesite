import { Component, HostBinding, HostListener, Inject } from '@angular/core';
import { ActivationStart, Router } from '@angular/router';

@Component({
    selector: 'app-site-header',
    templateUrl: './site-header.component.html',
    styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent {
    @HostBinding('class.is-scrolled') public isScrolled = false;
    @HostBinding('class.invert') get isInverted() {
        return this.getInvert();
    }
    public menuOpen = false;

    constructor(
        @Inject('Window') private window: Window,
        public router: Router) {

        router.events
            .filter(evt => evt instanceof ActivationStart)
            .subscribe(evt => {
                this.menuOpen = false;
            });
    }

    public getInvert(): boolean {
        return this.router.isActive('/photography', false);
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.isScrolled = this.window.scrollY > 0;
    }
}

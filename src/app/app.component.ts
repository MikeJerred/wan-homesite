import { AnimationEntryMetadata, Component, OnInit } from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';
import { NavigationStart, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';

const homeSplit: AnimationEntryMetadata = [
    query(':leave', style({ position: 'fixed', top: 0, left: 0, right: 0, 'z-index': 100 }), { optional: true }),
    query(':enter', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    query('.bg-right', style({ transform: 'translateX(0)' })),
    query('.bg-left', style({ transform: 'translateX(0)' })),
    group([
        query('.bg-right', animate('1s ease-in-out', style({ transform: 'translateX(65vw)' }))),
        query('.bg-left', animate('1s ease-in-out', style({ transform: 'translateX(-65vw)' })))
    ])
];
const homeJoin: AnimationEntryMetadata = [
    query(':leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }), { optional: true }),
    query(':enter', style({ position: 'fixed', top: 0, left: 0, right: 0, 'z-index': 100 })),
    query('.bg-right', style({ transform: 'translateX(65vw)' })),
    query('.bg-left', style({ transform: 'translateX(-65vw)' })),
    group([
        query('.bg-right', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
        query('.bg-left', animate('1s ease-in-out', style({ transform: 'translateX(0)' })))
    ])
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('routerAnimation', [
            transition('null => home', []),
            transition('home => *', homeSplit),
            transition('* => home', homeJoin)
        ])
    ]
})
export class AppComponent implements OnInit {

    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    constructor(private router: Router, private location: Location) {}

    ngOnInit(): void {
        this.location.subscribe(evt => {
            this.lastPoppedUrl = evt.url;
        });

        this.router.events
            .filter(evt => evt instanceof NavigationStart)
            .filter((evt: NavigationStart) => evt.url !== this.lastPoppedUrl)
            .subscribe(evt => {
                this.yScrollStack.push(window.scrollY);
            });

        this.router.events
            .filter(evt => evt instanceof NavigationEnd)
            .subscribe((evt: NavigationEnd) => {
                if (evt.url === this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else if (evt.url !== '/home') {
                    window.scrollTo(0, 0);
                }
            });
    }

    public getRouteTransition(outlet: RouterOutlet) {
        return outlet.activatedRouteData['animation'] || 'null';
    }
}

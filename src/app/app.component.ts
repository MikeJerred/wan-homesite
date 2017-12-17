import { AnimationEntryMetadata, Component, OnInit } from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';
import { NavigationStart, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { animate, group, query, state, style, transition, trigger } from '@angular/animations';
import { timeout } from 'q';

const homeSplit: AnimationEntryMetadata = [
    query(':leave', style({ position: 'fixed', top: 0, left: 0, right: 0, 'z-index': 100 }), { optional: true }),
    query(':enter', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    query('.bg-left', style({ transform: 'translateX(0)' }), { optional: true }),
    query('.bg-right', style({ transform: 'translateX(0)' }), { optional: true }),
    query('.bg-top', style({ transform: 'translateY(0)' }), { optional: true }),
    query('.bg-bottom', style({ transform: 'translateY(0)' }), { optional: true }),
    group([
        query('.bg-left', animate('1s ease-in-out', style({ transform: 'translateX(-65vw)' })), { optional: true }),
        query('.bg-right', animate('1s ease-in-out', style({ transform: 'translateX(65vw)' })), { optional: true }),
        query('.bg-top', animate('1s ease-in-out', style({ transform: 'translateY(-65vh)' })), { optional: true }),
        query('.bg-bottom', animate('1s ease-in-out', style({ transform: 'translateY(65vh)' })), { optional: true })
    ])
];
const homeJoin: AnimationEntryMetadata = [
    query(':leave', style({ position: 'absolute', top: 0, left: 0, right: 0 }), { optional: true }),
    query(':enter', style({ position: 'fixed', top: 0, left: 0, right: 0, 'z-index': 100 })),
    query('.bg-left', style({ transform: 'translateX(-65vw)' }), { optional: true }),
    query('.bg-right', style({ transform: 'translateX(65vw)' }), { optional: true }),
    query('.bg-top', style({ transform: 'translateY(-65vh)' }), { optional: true }),
    query('.bg-bottom', style({ transform: 'translateY(65vh)' }), { optional: true }),
    group([
        query('.bg-left', animate('1s ease-in-out', style({ transform: 'translateX(0)' })), { optional: true }),
        query('.bg-right', animate('1s ease-in-out', style({ transform: 'translateX(0)' })), { optional: true }),
        query('.bg-top', animate('1s ease-in-out', style({ transform: 'translateY(0)' })), { optional: true }),
        query('.bg-bottom', animate('1s ease-in-out', style({ transform: 'translateY(0)' })), { optional: true })
    ])
];

const slideLeft: AnimationEntryMetadata = [
    query(':leave', style({ position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateX(0)' }), { optional: true }),
    query(':enter', style({ position: 'fixed', top: 0, left: 0, right: 0, transform: 'translateX(100vw)', 'z-index': 100 })),
    group([
        query(':leave', animate('1s ease-in-out', style({ transform: 'translateX(-70vw)' })), { optional: true }),
        query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
    ])
];

const slideRight: AnimationEntryMetadata = [
    query(':leave', style({ position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateX(0)' }), { optional: true }),
    query(':enter', style({ position: 'fixed', top: 0, left: 0, right: 0, transform: 'translateX(-100vw)', 'z-index': 100 })),
    group([
        query(':leave', animate('1s ease-in-out', style({ transform: 'translateX(70vw)' })), { optional: true }),
        query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
    ])
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('routerAnimation', [
            transition('void => *', []),
            transition('null => *', []),
            transition('home => *', homeSplit),
            transition('* => home', homeJoin),
            transition('design-2 => design-1', slideLeft),
            transition('design-3 => design-1', slideLeft),
            transition('design-3 => design-2', slideLeft),
            transition('design-4 => design-1', slideLeft),
            transition('design-4 => design-2', slideLeft),
            transition('design-4 => design-3', slideLeft),
            transition('photography-street => photography-architecture', slideLeft),
            transition('* => *', slideRight)
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
                    setTimeout(() => window.scrollTo(0, 0), 1000);
                }
            });
    }

    public getRouteTransition(outlet: RouterOutlet) {
        return outlet.activatedRouteData['animation'] || 'null';
    }
}

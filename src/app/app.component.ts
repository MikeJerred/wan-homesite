import { Component, Inject, OnInit } from '@angular/core';
import { NavigationStart, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {
    AnimationEvent, AnimationMetadata,
    animate, animateChild, group, query, style, transition, trigger
} from '@angular/animations';
import { PageScrollConfig } from 'ngx-page-scroll';
import { filter } from 'rxjs/operators';

const before: AnimationMetadata[] = [
    style({
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden'
    }),
    query(
        ':enter, :leave',
        style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh'
        })),
    query(':enter', style({ 'z-index': 1000, overflow: 'hidden' })),
    query(':leave', style({ 'z-index': 500, overflow: 'visible' })),
    query(
        ':enter > *',
        style({
            position: 'absolute',
            top: '-{{enterScroll}}px',
            width: '100%'
        })),
    query(
        ':leave > *',
        style({
            position: 'absolute',
            top: '-{{leaveScroll}}px',
            width: '100%'
        }))
];

const homeSplit = before.concat([
    query(':enter', style({ 'z-index': 500 })),
    query(':leave', style({ 'z-index': 1000 })),
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
]);
const homeJoin = before.concat([
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
]);

const slideLeft = before.concat([
    query(':enter', style({ transform: 'translateX(100vw)' })),
    query(':leave', animateChild()),
    group([
        query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
        query(':leave', animate('1s ease-in-out', style({ transform: 'translateX(-70vw)'})))
    ]),
    query(':enter', animateChild())
]);

const slideRight = before.concat([
    query(':enter', style({ transform: 'translateX(-100vw)' })),
    query(':leave', animateChild()),
    group([
        query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
        query(':leave', animate('1s ease-in-out', style({ transform: 'translateX(70vw)' })))
    ]),
    query(':enter', animateChild())
]);

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('routerAnimation', [
            transition('void <=> *', []),
            transition('null <=> *', []),
            transition('home => *', homeSplit),
            transition('* => home', homeJoin),
            transition('design-5 => design-1', slideRight),
            transition('design-2 => design-1', slideRight),
            transition('design-2 => design-5', slideRight),
            transition('design-3 => design-1', slideRight),
            transition('design-3 => design-5', slideRight),
            transition('design-3 => design-2', slideRight),
            transition('design-4 => design-1', slideRight),
            transition('design-4 => design-5', slideRight),
            transition('design-4 => design-2', slideRight),
            transition('design-4 => design-3', slideRight),
            transition('photography-street => photography-architecture', slideRight),
            transition('design-portfolio <=> photography-architecture', slideRight),
            transition('* => *', slideLeft)
        ])
    ]
})
export class AppComponent implements OnInit {
    private previousTrigger: 'imperative' | 'popstate' | 'hashchange';
    private previousUrl: string;
    private nextUrl: string;
    private scrollYValues: { [key: string]: number } = {};

    constructor(
        @Inject('Window') private window: Window,
        private router: Router) {

        PageScrollConfig.defaultDuration = 500;

        if ('scrollRestoration' in history)
            history.scrollRestoration = 'manual';

        router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        this.router.events
            .pipe(filter(evt => evt instanceof NavigationStart))
            .subscribe((evt: NavigationStart) => {
                // this.pageLoadedService.setPageLoaded(false);

                this.previousTrigger = evt.navigationTrigger;

                if (this.previousUrl)
                    this.scrollYValues[this.previousUrl] = window.scrollY;
            });

        this.router.events
            .pipe(filter(evt => evt instanceof NavigationEnd))
            .subscribe((evt: NavigationEnd) => {
                this.nextUrl = evt.url;
            });
    }

    public animationDone(event: AnimationEvent): void {
        const scrollTo = this.previousTrigger === 'popstate'
            ? this.scrollYValues[this.nextUrl] || 0
            : null;

        setTimeout(() => {
            if (scrollTo)
                this.window.scrollTo(0, scrollTo);

            // this.pageLoadedService.setPageLoaded(true);
        }, 0);

        this.previousUrl = this.nextUrl;
        this.nextUrl = null;
        this.previousTrigger = null;
    }

    public getRouteTransition(outlet: RouterOutlet): string | { value: string, params: {} } {
        if (outlet && outlet.isActivated && outlet.activatedRoute
            && outlet.activatedRoute.snapshot && outlet.activatedRoute.snapshot.url) {

            return {
                value: outlet.activatedRouteData['animation'] || 'null',
                params: {
                    enterScroll: this.previousTrigger === 'popstate'
                        ? this.scrollYValues[this.nextUrl] || 0
                        : 0,
                    leaveScroll: this.scrollYValues[this.previousUrl] || 0
                }
            };
        }

        return 'null';
    }
}

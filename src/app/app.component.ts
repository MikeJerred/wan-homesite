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

const homeSplit = [
    ...before,
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
];

const homeJoin = [
    ...before,
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

const slideLeft = [
    ...before,
    query(':enter', style({ transform: 'translateX(100%)' })),
    query(':leave', animateChild()),
    group([
        query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
        query(':leave', animate('1s ease-in-out', style({ transform: 'translateX(-70vw)'})))
    ]),
    query(':enter', animateChild())
];

const slideRight = [
    ...before,
    query(':enter', style({ transform: 'translateX(-100%)' })),
    query(':leave', animateChild()),
    group([
        query(':enter', animate('1s ease-in-out', style({ transform: 'translateX(0)' }))),
        query(':leave', animate('1s ease-in-out', style({ transform: 'translateX(70vw)' })))
    ]),
    query(':enter', animateChild())
];

const designRegex = /^design\/(\d+)$/;
const blogRegex = /^blog\/(\d+)$/;

function getDirection(fromState: string, toState: string): 'left' | 'right' | null {
    if (blogRegex.test(fromState) && designRegex.test(toState))
        return 'left';

    if (designRegex.test(fromState) && blogRegex.test(toState))
        return 'right';

    if (blogRegex.test(fromState) && blogRegex.test(toState))
        return +blogRegex.exec(fromState)[1] > +blogRegex.exec(toState)[1]
            ? 'right'
            : 'left';

    if (designRegex.test(fromState) && designRegex.test(toState))
        return +designRegex.exec(fromState)[1] > +designRegex.exec(toState)[1]
            ? 'right'
            : 'left';

    if (blogRegex.test(fromState) || designRegex.test(fromState))
        return 'right';

    if (blogRegex.test(toState) || designRegex.test(toState))
        return 'left';

    return null;
}

export function isDirectionRight(fromState: string, toState: string): boolean {
    return getDirection(fromState, toState) === 'right';
}

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
            transition('photography-street => photography-architecture', slideRight),
            transition('photography-street => design-portfolio', slideRight),
            transition('photography-architecture => design-portfolio', slideRight),
            transition('photography-street => blog-portfolio', slideRight),
            transition('photography-architecture => blog-portfolio', slideRight),
            transition('design-portfolio => blog-portfolio', slideRight),
            transition(isDirectionRight, slideRight),
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

            const path = outlet.activatedRoute.pathFromRoot.length > 0
                ? outlet.activatedRoute.pathFromRoot
                    .map(route => route.snapshot.url.length > 0
                        ? route.snapshot.url
                            .map(segment => segment.path)
                            .filter(segment => !!segment)
                            .reduce((acc, next) => `${acc}/${next}`)
                        : null)
                    .filter(url => !!url)
                    .reduce((acc, next) => `${acc}/${next}`)
                : null;

            const animation = outlet.activatedRouteData['animation'] || path || 'home';

            return {
                value: animation || 'null',
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

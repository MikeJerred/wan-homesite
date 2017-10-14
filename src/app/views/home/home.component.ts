import { Component, EventEmitter, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as $ from 'jquery';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';
import { FidelityService } from '../../services/fidelity.service';


@Component({
    providers: [FidelityService],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    isLofi$: BehaviorSubject<boolean>;
    whoAreYou: string;
    whyAreYouHere: string;
    lastScrollPos = 0;
    scrollTicking = false;

    //@ViewChild('question1') question1: ElementRef;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private pageScrollService: PageScrollService,
        private fidelityService: FidelityService) {

        this.isLofi$ = this.fidelityService.isLofi$;
    }

    scrollToQuestion2() {
        const listener = new EventEmitter<boolean>();
        const pageScrollInstance = PageScrollInstance.newInstance({
            document: this.document,
            scrollTarget: '#question2',
            pageScrollDuration: 500,
            pageScrollFinishListener: listener
        });

        this.pageScrollService.start(pageScrollInstance);
    }

    scrollTick(scrollY: number) {
        if (this.isLofi$.value) {
            $('#question1').css('opacity', 1);
            $('#question2').css('opacity', 1);
            return;
        }

        const halfScreenHeight = window.innerHeight / 2;
        const viewportCenter = scrollY + halfScreenHeight;

        const q1Center = $('#question1').offset().top + $('#question1').height() / 2;
        const q1Distance = Math.abs(viewportCenter - q1Center);
        $('#question1').css(
            'opacity',
            q1Distance > halfScreenHeight
                ? 0
                : 1 - (q1Distance / halfScreenHeight));

        const q2Center = $('#question2').offset().top + $('#question2').height() / 2;
        const q2Distance = Math.abs(viewportCenter - q2Center);
        $('#question2').css(
            'opacity',
            q2Distance > halfScreenHeight
                ? 0
                : 1 - (q2Distance / halfScreenHeight));
    }

    @HostListener('window:scroll', ['$event']) public windowScrolled($event: Event) {
        this.lastScrollPos = window.scrollY;

        if (!this.scrollTicking) {
            window.requestAnimationFrame(() => {
                this.scrollTick(this.lastScrollPos);
                this.scrollTicking = false;
            });

            this.scrollTicking = true;
        }
    }
}

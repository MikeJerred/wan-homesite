import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FidelityService } from '../../services/fidelity.service';

@Component({
    providers: [FidelityService],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    isLofi$: BehaviorSubject<boolean>;
    whoAreYou: string;

    constructor(private fidelityService: FidelityService) {
        this.isLofi$ = this.fidelityService.isLofi$;
    }
}

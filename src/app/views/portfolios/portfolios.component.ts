import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FidelityService } from '../../services/fidelity.service';

@Component({
    providers: [FidelityService],
    templateUrl: './portfolios.component.html',
    styleUrls: ['./portfolios.component.scss']
})
export class PortfoliosComponent {
    isLofi$: BehaviorSubject<boolean>;

    constructor(private fidelityService: FidelityService) {
        this.isLofi$ = this.fidelityService.isLofi$;
    }
}

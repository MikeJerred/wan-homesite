import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { FidelityService } from '../../services/fidelity.service';

@Component({
    providers: [FidelityService],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
    @Input() id: number;

    isLofi$: BehaviorSubject<boolean>;

    constructor(private fidelityService: FidelityService) {
        this.isLofi$ = this.fidelityService.isLofi$;
    }
}

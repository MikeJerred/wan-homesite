import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPortfolioComponent } from './portfolio/blog-portfolio.component';

import { Week1SensoryMap } from './single-blog/week1-sensory-map.component';

const routes: Routes = [
    { path: '', component: BlogPortfolioComponent, data: { animation: 'design-portfolio' } },

    { path: '1', component: Week1SensoryMap }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class BlogRoutingModule {}

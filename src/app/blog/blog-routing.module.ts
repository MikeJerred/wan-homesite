import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPortfolioComponent } from './portfolio/blog-portfolio.component';

import { Week1SensoryMapComponent } from './single-blog/week1-sensory-map.component';
import { Week2Component } from './single-blog/week2-ux-of-conversation.component';
import { Week3Component } from './single-blog/week3-ux-of-conversation.component';
import { Week4Component } from './single-blog/week4-ux-of-conversation.component';
import { Week5Component } from './single-blog/week5-ux-of-space.component';
import { Week6Component } from './single-blog/week6-ux-of-space.component';
import { Week7Component } from './single-blog/week7-ux-of-time.component';
import { Week8Component } from './single-blog/week8-ux-of-time.component';
import { Week9Component } from './single-blog/week9-ux-of-death.component';
import { Week10Component } from './single-blog/week10-ux-of-death.component';

const routes: Routes = [
    { path: '', component: BlogPortfolioComponent, data: { animation: 'blog-portfolio' } },

    { path: '1', component: Week1SensoryMapComponent },
    { path: '2', component: Week2Component },
    { path: '3', component: Week3Component },
    { path: '4', component: Week4Component },
    { path: '5', component: Week5Component },
    { path: '6', component: Week6Component },
    { path: '7', component: Week7Component },
    { path: '8', component: Week8Component },
    { path: '9', component: Week9Component },
    { path: '10', component: Week10Component }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class BlogRoutingModule {}

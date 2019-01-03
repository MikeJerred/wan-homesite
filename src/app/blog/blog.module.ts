import { NgModule } from '@angular/core';

import { SharedModule } from '~/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPortfolioComponent } from './portfolio/blog-portfolio.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

import { Week1SensoryMapComponent } from './single-blog/week1-sensory-map.component';
import { Week2Component } from './single-blog/week2-ux-of-conversation.component';
import { Week3Component } from './single-blog/week3-ux-of-conversation.component';
import { Week4Component } from './single-blog/week4-ux-of-conversation.component';
import { Week5Component } from './single-blog/week5-ux-of-space.component';
import { Week6Component } from './single-blog/week6-ux-of-space.component';
@NgModule({
    imports: [
        SharedModule,
        BlogRoutingModule
    ],
    declarations: [
        BlogPortfolioComponent,
        SingleBlogComponent,

        Week1SensoryMapComponent,
        Week2Component,
        Week3Component,
        Week4Component,
        Week5Component,
        Week6Component,
    ]
})
export class BlogModule {}

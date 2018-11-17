import { NgModule } from '@angular/core';

import { SharedModule } from '~/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPortfolioComponent } from './portfolio/blog-portfolio.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

import { Week1SensoryMapComponent } from './single-blog/week1-sensory-map.component';

@NgModule({
    imports: [
        SharedModule,
        BlogRoutingModule
    ],
    declarations: [
        BlogPortfolioComponent,
        SingleBlogComponent,

        Week1SensoryMapComponent
    ]
})
export class BlogModule {}

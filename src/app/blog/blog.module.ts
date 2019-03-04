import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SharedModule } from '~/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { UnitMenuComponent } from './unit-menu/unit-menu.component';
import { Unit1MenuComponent } from './unit-1/unit1-menu.component';
import { Unit2MenuComponent } from './unit-2/unit2-menu.component';
import { Unit3MenuComponent } from './unit-3/unit3-menu.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';

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
import { Week17Component } from './single-blog/week17-collaborative-project.component';
import { Week18Component } from './single-blog/week18-collaborative-project.component';
import { Week19Component } from './single-blog/week19-collaborative-project.component';
@NgModule({
    imports: [
        SharedModule,
        CarouselModule.forRoot(),
        BlogRoutingModule
    ],
    declarations: [
        UnitMenuComponent,
        SingleBlogComponent,
        Unit1MenuComponent,
        Unit2MenuComponent,
        Unit3MenuComponent,

        Week1SensoryMapComponent,
        Week2Component,
        Week3Component,
        Week4Component,
        Week5Component,
        Week6Component,
        Week7Component,
        Week8Component,
        Week9Component,
        Week10Component,
        Week17Component,
        Week18Component,
        Week19Component,
    ]
})
export class BlogModule {}

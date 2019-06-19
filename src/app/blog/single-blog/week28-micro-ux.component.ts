import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 28 - Prototyping" duration="Project duration: 23rd April - 17th June, 2019" team="Team: Reina Yuan, Timmy Maiello, Yijia Sun, Wan Li" [previous]="{ name: 'Week 27 - Interim presentation', link: ['/blog', 27], extend: 300 }" [next]="{ name: 'Week 29 - Volunteering at UX London', link: ['/blog', 29], extend: 340 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro5/sketch.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro5/sketch2.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        

            <p>After our mid-term presentation at made by many, both my team and Deepika’s team were uncertain of what ideas we could develop. So, we spent a few hours brainstorming together see if there’s any opportunity to combine the two directions together. Their subject was a shared kitchen and we are focused on bee friendly activities, we listed some elements down in each idea and tried to see if we can find any overlapping areas. One of our initial thought was to add a bee friendly garden in the shared kitchen, people plant a variety of bee friendly crops and can use them as fresh ingredients in the shared kitchen. The issue is that it’s difficult to find a big enough space that serves both purposes. In the end, we realised it might add more complication to combine the two.</p>

            <img style="width:100%" src="/assets/blog/micro5/meeting.jpg">
            <img style="width:100%" src="/assets/blog/micro5/sketch3.jpg">


        </div>
    </div>


    <div class="row justify-content-center">
    <div class="col-9">

            <h4>Prototyping</h4>


            <p>We developed two ideas for prototyping. The first one is more of a physical object in a world where honey is a rare product people use it as a luxury accessory and as a medium for transaction. The second one is an application that interactions on social media platforms must be earned through doing bee friendly behaviors. To save time, we split in a pair of two to develop both ideas in parallel. Timmy and Reina experimented with different types of container for transporting honey, Yijia and I worked on the application.</p>         

            <img style="width:100%" src="/assets/blog/micro5/bee.png">
            <figcaption>Different types of containers we experimented with.</figcaption>

            <img style="width:100%" src="/assets/blog/micro5/ia.jpg">
            <figcaption>Bee threatening factors and what could an individual do corresponding to each factor.</figcaption>

        </div>
    </div>




    <div class="row justify-content-center">
        <div class="col-9">



            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>Design: all<br>
            Sketch: Timmy<br>
            Presentation content: Yijia, Reina<br>
            Presentation visualisation: Timmy<br>


            
    </div>
</div>




</div>
</app-blog>
`
})
export class Week28Component {}
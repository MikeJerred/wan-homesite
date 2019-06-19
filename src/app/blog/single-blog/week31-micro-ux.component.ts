import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 31 - Final design" duration="Project duration: 23rd April - 17th June, 2019" team="Team: Reina Yuan, Timmy Maiello, Yijia Sun, Wan Li" [previous]="{ name: 'Week 30 - Plant-to-plant workshop', link: ['/blog', 30], extend: 320 }" >

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro8/pack.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro8/app.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        

            <p>The final design was a framework of services that promotes bee friendly actions and products. Our aim was to highlight the hidden value exchange between human and bees. Addressing the subject in a hierarchical structure reduced the complexity we faced at the individual level, which allowed for a simpler and more practical outcome.</p>

            <h4>Building a narrative</h4>

            <img style="width:100%" src="/assets/blog/micro8/ministry.png">
            <img style="width:100%" src="/assets/blog/micro8/letter.png">

            <p>We speculated the consequence of how the world will be when bees went extinct, so our audience can better understand the strong value bees contribute to our society. We will have a lot less food to consume due to the decline in pollination, and human are recruited as pollinators to replace bees. We did a role play in our presentation to demonstrate the consequence of bees extinction in the future. </p>

            <img style="width:100%" src="/assets/blog/micro8/paper.jpg">
            <figcaption>Making beesaving paper with pollinator friendly seeds.</figcaption>

            <img style="width:100%" src="/assets/blog/micro8/paper2.jpg">
          

            <img style="width:100%" src="/assets/blog/micro8/pre.jpg">
          

            <p>We created a series of services and products to save bees from organisational to individual level. </p>

            <img style="width:100%" src="/assets/blog/micro8/1.jpg">
            <img style="width:100%" src="/assets/blog/micro8/2.jpg">

            <img style="width:100%" src="/assets/blog/micro8/3.jpg">

            <p>Below is the concept video to show how our services and products work on a micro level.</p>

            <iframe class="mx-auto d-block" width="100%" height="625" src="https://www.youtube.com/embed/B5lXHNqITgk?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


        </div>
    </div>




    <div class="row justify-content-center">
        <div class="col-9">



            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>Paper: Reina, Wan<br>
            Concept video: Reina, Yijia<br>
            App: Wan<br>
            Presentation content: all<br>
            Presentation visualisation: Timmy<br>


            
    </div>
</div>




</div>
</app-blog>
`
})
export class Week31Component {}
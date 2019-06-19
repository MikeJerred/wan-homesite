import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 27 - Interim presentation" duration="Project duration: 23rd April - 17th June, 2019" team="Team: Reina Yuan, Timmy Maiello, Yijia Sun, Wan Li" [previous]="{ name: 'Week 26 - Physical models', link: ['/blog', 26], extend: 270 }" [next]="{ name: 'Week 28 - Prototyping', link: ['/blog', 28], extend: 240 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro4/mm.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro4/bee2.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        
            <h4>Visit at Bee Urban</h4>

            <p>We had a tutorial with both John and Eva. They both liked our area of study but can understand why we struggled. John suggested that we should conduct more field research such as observing beekeeping activities and talking to beekeepers to seek inspiration. One of our current idea is to use honey to substitute money as a system of value exchange. However, we want to find a more interesting angle than simply designing a desirable habitat for human to keep bees in exchange for honey. Several events related to the beekeeping societies are set later in the year. Luckily, we found a honeybee-centric social enterprise called BeeUrban at Kennington Park with a day of volunteering activities around beekeeping. We went there on Thursday and spoke to the beekeepers and other enthusiasts there. Our main task was to help them making the wax frames for their beehives. None of us had done any similar work so it will very interesting to have the hands-on experience. The lady in charge Lesley gave us some introduction on the work distribution in a beehive, what is good for bees and how we can help bees. Some of which we knew from desk research but many more beyond. Below are some of our findings:</p>

            <ul>
            <li>Raw honey has no expiry date.</li>
            <li>The sweater honey is much easier to crystallise.</li>
            <li>40% honey sold in British shops is not honey at all.</li>
            <li>There are more bees in the city than in the countryside due to the lack of biodiversity and pesticide. </li>
            </ul>

        </div>
    </div>

    <div class="row">
    <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/micro4/bee.jpg">
        <figcaption>A collectin of bee samples and related products at BeeUrban.</figcaption>
    </div>
    <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/micro4/bee.png">
        <figcaption>Us making the wax frames for the beehives.</figcaption>
    </div>
    </div>

    <div class="row justify-content-center">
    <div class="col-9">

            <h4>Speed dating</h4>
            <p>After our visit, we went back to university and started to work on some ideation of what our product/service might be. We did speed dating to quickly test our ideas with some classmates.</p>      
            <img style="width:100%" src="/assets/blog/micro4/ideas.jpg">    


        </div>
    </div>


    <div class="row justify-content-center">
    <div class="col-9">

            <h4>Reflection-on-action</h4>

            <p>Due to the time constraint, we did not allow ourselves to formally synthsise the research data. Like constructing a building without a solid foundation, we were unable to forge connections between seemingly unrelated issues in a meaningful way and had difficulties to form the next course of action for ideation. Without getting the information out we lost the opportunity to organise information and identify patterns collectively. As a result, the ideas we came up were fairly superfacial.</p>
      
          
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">



            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>Field research: all<br>
            Speed dating: all<br>
            Presentation content: Yijia, Reina<br>
            Presentation visualisation: Timmy<br>


            
    </div>
</div>




</div>
</app-blog>
`
})
export class Week27Component {}
import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="The UX of Urban Space Part 1" duration="Project duration: 22nd October - 2nd November, 2018" team="Team: George Darbyshire, Ivy Wong, Wan Li, Patrick Bull, Yuhan Mao"[previous]="{ name: 'The UX of Conversation Part 3', link: ['/blog', 4], extend: 300 }" [next]="{ name: 'The UX of Urban Space Part 2', link: ['/blog', 6], extend: 300 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/space/space1.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/space/space2.jpg">
        </div>
    </div>
        
    <div class="row justify-content-center">
        <div class="col-9">
                <h4>Research</h4>
        
                <p>Initially, we wanted to observe a unique place or human behaviour such as what people do at fast food joints, or people exercising on the street. After discussion, some of the places we were interested in were not necessarily easy for observation within the project time. The Starbucks in Holborn opposite the British Museum was our final choice as it attracts students, tourists and office workers. We expected people to be friendlier and more approachable for interviews in coffee shops and the variety of people would provide us with noteworthy insights.</p>
        
                <p>We researched the shop in advance and knew it had two floors, to be most efficient for a full day observation four of us were split in two groups. Patrick and I observed the shop from 8:30 to 14:00 with one person upstairs and the other downstairs, Yuhan and Ivy carried on in the same way until 19:00. We recorded as much information as we could about each person that came in, our data includes biological information, activities, behaviours, sitting placement and duration in the shop. We also conducted about 10 interviews in total, most of them were there to grab a drink/food either before or after visiting the British Museum.</p>
                
                <p>We put all the data in one spreadsheet and applied the AEIOU analysis framework. Some patterns were closer to our assumptions than others, morning was a peak time for office workers just buying coffee and leaving whereas lunchtime had more families and friends. From the sitting plan we drew, most families preferred to sit downstairs on the big sofa area. Other noticeable patterns including several visitors who came to use the toilet without any purchase throughout the day, and visitors who just came in to use the space to eat their own food during lunchtime. The total head count for the day was around 500 people, we scaled the numbers down proportionally in our model.</p>

        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/space/floorplan2.jpg">
            <figcaption>Floorplan and seating arrangements of the upstairs.</figcaption>
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/space/floorplan1.jpg">
            <figcaption>Floorplan and seating arrangements of the downstairs.</figcaption>
        </div>
    </div>
               
        
    <div class="row justify-content-center">
        <div class="col-9">
                <h4>Experimentation part 1</h4>
        
                <p>In the first model, we focused on showing the sitting arrangements of different groups, the duration and people’s behaviour when they were in the shop. Please see below some images of our making process.</p>
        
        </div>
    </div>
       
    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/space/ivy.jpg">
            <figcaption> Ivy used different coloured balls to represent different groups of people and placed them on a rough floor plan of the place to show their preferred sitting areas.</figcaption>
         </div>
         <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/space/yuhan.jpg">
            <figcaption> Yuhan used coffee spray to show how long people stayed, where the darker the coffee mark means the longer they stayed and vice versa.</figcaption>
        </div>
        <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/space/wan.jpg">
        <figcaption> I collected some used Starbucks paper cups and used them to show people’s behaviours in the shop.</figcaption>
     </div>
     <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/space/patrick.jpg">
        <figcaption> Patrick provided us with the statistics for each category needed.</figcaption>
    </div>
    </div>

</div>
</app-blog>
`
})
export class Week5Component {}
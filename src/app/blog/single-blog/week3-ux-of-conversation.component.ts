import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="The UX of Conversation Part 2" duration="Project duration: 10th October - 19th October, 2018" team="Team: Coco Li, Elaine Zhang, Wan Li, Yuhan Mao" [previous]="{ name: 'The UX of Conversation Part 1', link: ['/blog', 2], extend: 270 }" [next]="{ name: 'The UX of Conversation Part 3', link: ['/blog', 4], extend: 270 }">
    <div class="col-12">


        <div class="row">
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/conversation/sketch1.jpg">
            </div>
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/conversation/sketch2.jpg">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-9">
                <h4>Experimentation</h4>

                <p>Based on the research findings, we decided to focus on helping international students to understand better in the academic environment. Our first thought was to create a machine that helps students to practice listening to academic articles, and to get used to different accents and speeds of speaking.</p>

                <p>We used speed dating for idea generation, below are some sketches outlining how and where the conversation happens between the machine and the student in order to help the student improve their listening and speaking:</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <figure>
                    <img style="width:100%" src="/assets/blog/conversation/social.jpg">
                    <figcaption>Encourage and suggest social activities to users. Credit: Elaine Zhang</figcaption>
                </figure>
            </div>
            <div class="col-sm-6">
                <figure>
                    <img style="width:100%" src="/assets/blog/conversation/gamify.jpg">
                    <figcaption>Gamify the learning process, by providing virtual rewards as a reward for achieving learning goals. Credit: Elaine Zhang</figcaption>
                </figure>
            </div>

            <div class="col-sm-6">
                <figure>
                    <img style="width:100%" src="/assets/blog/conversation/encourage.jpg">
                    <figcaption>Practice speaking with the student outside of the classroom and encourage engagement in real life situations. Credit: Elaine Zhang</figcaption>
                </figure>
            </div>
            <div class="col-sm-6">
                <figure>
                    <img style="width:100%" src="/assets/blog/conversation/rewards.jpg">
                    <figcaption>Provide money as a reward for achieving learning goals. Credit: Elaine Zhang</figcaption>
                </figure>
            </div>
        </div>
    
        <div class="row justify-content-center">
            <div class="col-9">
                <p>We presented the sketches to some students and asked them to imagine themselves in the situations created in the storyboards. Below is a summary of the feedbacks we had:</p>

                <ul>
                <li>In some scenarios, students are passive learners which might help initially, but it is hard to use persistently. </li>
                <li>The conversations we created are not natural enough to mimic a realistic environment.</li>
                <li>The scenarios only considered ideal scenarios, what would the machine do when students don’t want to engage?</li>
                <li>The storyboards covered too many areas, the focus is unclear e.g. Suggest social activities.</li>
                </ul>

                <p>We also asked students what they think would be the best way to help them, most of them said they would like to practice or work together with other people. They feel the learning experience is more positive and encouraged within a group environment or with another human. This finding made us wonder would a chatbot be as useful as we want it to be in this case? Are we trying to force a specific solution on the problem? </p>

            </div>
        </div>

       

       
       
    </div>
</app-blog>
`
})
export class Week3Component {}
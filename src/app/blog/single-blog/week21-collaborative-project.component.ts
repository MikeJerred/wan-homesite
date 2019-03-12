import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 21 - Collaborative project" duration="Project duration: 8th Feburary - 13th March, 2019" team="Team: Reina Yuan, Wan Li" [previous]="{ name: 'Week 20 - Collaborative project', link: ['/blog', 20], extend: 300 }" >

<div class="col-12">

        
    <div class="row justify-content-center">
        <div class="col-9">

                <h4>Preparation for the presentation</h4>

                <p>We wanted to make a video to demonstrate how our model would look and feel in real life but was concerned about the timing. We both decided to make it in the end because we thought it would bring the narrative alive and communicate our vision to the audience more clearly. The conversation with Paul, one of our guest lectures, gave us confidence and useful tips, for instance, he introduced the concept of front card and end card and helped us to plan how to distribute the time for a 1 minute vidoe.</p>

                <carousel [noPause]="false" [interval]="0">

                <slide>
                <img src="/assets/blog/collaborative5/paul.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">Our quick storyboards for the video.</div>
                </slide>

                <slide>
                <img src="/assets/blog/collaborative5/paul2.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">Notes from our tutorial with Paul.</div>
                </slide>
          
                </carousel>

                <p>We did video shooting in the 3D table top photography studio for a few hours to produce enough footage for our 1-minute video. We had to use our phone for the videos due to the lack of professional equipment that is small enough to get into our model to shoot the angles from the inside. The quality of the result was enough to demonstrate the idea, but we would love to have them in higher quality in the future. We really enjoyed the video making process, it helped us to visualise and consider how users could interacte with the installation</p>

                <carousel [noPause]="false" [interval]="0">

                <slide>
                <img src="/assets/blog/collaborative5/video1.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">Shooting for how the installation would look like from the outside during the night.</div>
                </slide>

                <slide>
                <img src="/assets/blog/collaborative5/video3.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">There will be lights inside of the installation at night.</div>
                </slide>

                <slide>
                    <img src="/assets/blog/collaborative5/video5.jpg" alt="first slide" style="display: block; width: 100%;">
                    <div class="carousel-caption">How the inside of the installation would look like in the day at the flower stage.</div>
                </slide>
                <slide>
                <iframe class="mx-auto d-block" width="100%" height="625" src="https://www.youtube.com/embed/-BAGdJybeUo?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="carousel-caption">The final outcome of our video.</div>
                </slide>
          
                </carousel>

                <p>We also drew sketches of how the installation would fit inside of the garden, because we wanted to use different visual elements to create a more comprehensive and realistic understanding of our design.</p>
                
                <carousel [noPause]="false" [interval]="0">

                    <slide>
                        <img src="/assets/blog/collaborative5/sketch.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Version 1</div>
                    </slide>
                    <slide>
                        <img src="/assets/blog/collaborative5/sketch2.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Version 2</div>
                    </slide>
              
                </carousel>

                <h4>Preparation for project report</h4>

                <p>Our installation shows the 5 stages of plants life cycle. We thought the metaphor of the cycle could be applied to our entire design process. Therefore, I planned our report in the same way as a plant grows from seed to fruit representing the stages of our process. For instance, the seed stage correlates the beginning of our project when we visited the garden.</p>

                <img src="/assets/blog/collaborative5/report.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>Sketch to see if our design process can be connected with plants life cycle at every stage.</figcaption>

                <h4>Presentation</h4>

                <p>Please see below the recording of our presentation. </p>

                <iframe class="mx-auto d-block" width="100%" height="625" src="https://www.youtube.com/embed/-BAGdJybeUo?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <p>We both did well in the presentation, we explained everything we planned in time. One thing we could improve is to not stand in front of the screen while we explaining so the audience can read the text in our presentation.</p>

                <p>We had some good feedback from both the tutors and Chelsea physic garden:</p>

                <ul>
                <li>The aesthetics of the installation goes well with the garden.</li>
                <li>Plants life cycle is an important subject but always forgotten by people.</li>
                <li>Aliastair and John recommended to look into the institute of light weight structure, so it could be produced temporarily and cheaply.</li>
                <li>The choice of Hawthorn is nice as it has lots of meaning in British culture and medicinal use.</li>
                </ul>

                <h4>Collaborative and / or Independent Professional Working</h4>

                <p>Reina and I worked on the video shooting together, she did most of the video editing. I worked on the text for both the presentation and the report, she worked on the visual design.</p>








                


                


        </div>
    </div>







</div>
</app-blog>
`
})
export class Week21Component {}
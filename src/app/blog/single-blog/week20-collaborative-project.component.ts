import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 20 - Collaborative project" duration="Project duration: 8th Feburary - 13th March, 2019" team="Team: Reina Yuan, Wan Li" [previous]="{ name: 'Week 19 - Collaborative project', link: ['/blog', 19], extend: 300 }" [next]="{ name: 'Week 21 - Collaborative project', link: ['/blog', 21], extend: 300 }" >

<div class="col-12">

        
    <div class="row justify-content-center">
        <div class="col-9">

                <h4>Prototype making process</h4>
                <p>The key component in our prototype is the taurus tunnel divided in 5 sections to represent different stages of the life cycle. Our first task was to work out how to make the shape with paper. We tried a few different methods and searched online but couldn’t get our desired result. Aliastair and John suggested to use vacuum forming machine in the workshop. It would to be a more efficient way than our original plan, so we decided to do it this way but had to wait until the 3D workshop opens on Monday.</p>
                
                <carousel [noPause]="false" [interval]="0">

                    <slide>
                        <img src="/assets/blog/collaborative4/plan1.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Our sketches on how to make a taurus shaped tunnel for our model.</div>
                    </slide>
                    <slide>
                        <img src="/assets/blog/collaborative4/plan2.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Our notes from the 3D workshop on how to use vacuum forming machine to make this shape.</div>
                    </slide>
              
                </carousel>

                <P>In the meantime, we just made a paper model to see how it looks. The result was surprisingly better than we expected, and it looked like a flower from a bird eye view. Inspired by the paper model, we decided to make the installation into a flower shape where each piece is separate to create a half open space to invite viewers step inside. The inside of each piece remains the same as original to represent the 5 stages of the plant’s life cycle. We left the sound element out in the model because of the time constraint of this project, but we would love to add it back if we had more time.</P>

                <carousel [noPause]="false" [interval]="0">

                <slide>
                    <img src="/assets/blog/collaborative4/model1.jpg" alt="first slide" style="display: block; width: 100%;">
                    <div class="carousel-caption">We made the paper model while waiting for the 3D workshop opens again.</div>
                </slide>
                <slide>
                    <img src="/assets/blog/collaborative4/model2.jpg" alt="first slide" style="display: block; width: 100%;">
                    <div class="carousel-caption">We planned how the texture and color should roughly be inside of each stage.</div>
                </slide>

                <slide>
                <img src="/assets/blog/collaborative4/model3.jpg" alt="first slide" style="display: block; width: 100%;">
                <div class="carousel-caption">We did a few experiments with different shapes and materials.</div>
                </slide>

                <slide>
                    <img src="/assets/blog/collaborative4/model4.jpg" alt="first slide" style="display: block; width: 100%;">
                    <div class="carousel-caption">Our final design of how the model should look like from the outside.</div>
                </slide>
          
            </carousel>

                <p>Please see below a fast-forward video of our model making process.</p>

                <div class="row">
                <div class="col-12">
                    <iframe class="mx-auto d-block" width="100%" height="625" src="https://www.youtube.com/embed/_41nfWHY27o?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                </div>
                
                <h4>Collaboration with the expert</h4>

                <p>We conferred with Tessanna after we finished the model. She gave us great suggestions which we were able to evaluate against our prototype. For instance, she reminded us the effect of seasons on plants. We thought our installation could be a great opportunity to showcase plants that are not currently in season. She also mentioned that plants can be quite different in the day and during the night. We incorporated this in our video later by showing light and shade changes inside of the installation with the effect of sun light, and how it looked from the outside during the night with lights coming out from inside of the installation.</p>

                <p>She also suggested a few amazing books to us:
                The Hidden Geometry of Flowers: Living Rhythms, Form and Number by Keith Critchlow and The Scent Trail: An Olfactory Odyssey by Celia Lyttelton</p>                

                <h4>Collaborative and / or Independent Professional Working</h4>

                <p>Both Reina and I worked on the model making but she painted the model as she's much better at drawing. I had the call with our collaborator alone because she wasn't available at the times Reina and I worked together.</p>








                


                


        </div>
    </div>







</div>
</app-blog>
`
})
export class Week20Component {}
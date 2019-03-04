import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 19 - Collaborative project" duration="Project duration: 8th Feburary - 13th March, 2019" team="Team: Reina Yuan, Wan Li" [previous]="{ name: 'The UX of Death Part 1', link: ['/blog', 9], extend: 250 }" >

<div class="col-12">

        
    <div class="row justify-content-center">
        <div class="col-9">

                <h4>Round table discussion</h4>
                <p>After the visit, we came up with a few new ideas.</p>

                <carousel [noPause]="false" [interval]="0">
                    <slide>
                        <img src="/assets/blog/collaborative3/idea1.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">A game machine always displays a random plant with its medicinal use and other information as the user pushes the trigger.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative3/idea2.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">A black box where the user can't see the plants but can touch and smell.</div>
                    </slide>

                    <slide>
                        <img src="/assets/blog/collaborative3/idea3.jpg" alt="first slide" style="display: block; width: 100%;">
                        <div class="carousel-caption">Looking at the world through the lens of a plant where the viewer can see how the plant grew from seed to fruit, and how it's been used by human. Ideally, the growth fhe plant life cycle can be in sync with human life cycle but depending on which plant we choose.</div>
                    </slide>
                </carousel>

                <p class="carousel-margin-2">We presented these ideas in our round table at the class, below are some of the feedbacks we had on each idea:</p>
                <ul>
                <li>The tiger machine idea might be intriguing but not enough for people to find out the real garden.</li>
                <li>Do we have any target user?</li>
                <li>The box idea doesn’t contain more information about the plant</li>
                <li>More specific on the plant aspects</li>
                <li>How would we record individual plants nowadays, and how would we share it?</li>
                </ul>
                <p>We took all the feedback on board and used them as a guidance for our future ideas.</p>

                <h4>Collaboration with the expert</h4>

                <p>We planned to speak to our collaborator <a href="http://www.tessanna-insite.co.uk/cv.html#">Tessanna Hoare</a> (a professional gardener and artist) and ask her a list of questions we prepared before we develop more ideas. Unfortunately, she was busy preparing for an exhibition and had to arrange a time with her for the following week. From this, we learnt that we should have made the plan with her more in advance as collaborators who are outside of the university environment often have busy schedules. The earlier we planned and set a time for the discussion the more likely we would be able to achieve it.</p>

                <h4>Prototype development & reflection</h4>

                <p>Therefore, we started to developing our ideas before speaking to our collaborator. Below are our two main ideas and our reflection on them.</p>

                <h5> Idea 1</h5>

                <p>A digital system that allows users find matching plants based on its medicinal usage. The user input his/her age and gender, and the system shows matching plants that’s used to cure common diseases for that age group. The interface will humanise plant profiles in a Facebook/Tinder alike style for engagement and familiarity.<.p>

                <img src="/assets/blog/collaborative3/idea4.jpg" alt="first slide" style="display: block; width: 100%;">

                <h5>Feedback from Alaistair</h5>

                <p>It is good to piggyback on existing application but feels more like a one liner and not strong enough to develop into a full idea.</p>

                <h5>What we did</h5>

                <p>We created a few screen designs of this application to try out the idea. Originally, we envisaged to have a machine with this functionality in the garden. If it’s one machine, it can only allow one person use it at a time. So, we thought creating a smart phone application would be the most convenient.</p>
                
                <img src="/assets/blog/collaborative3/app.jpg" alt="first slide" style="display: block; width: 100%;">

                <h5>Reflection</h5>

                <p>As we worked on the app design, we thought this design have many limitations. The Facebook/Tinder alike interface style would only be engaging to people who are familiar with it. It would not appeal to children and the elderly as much because they are not the target uses of those applications.</p>

                <h5>Idea 2</h5>

                <p>A physical installation allows the audience to step inside of a particular plant, the installation is divided into 5 stages representing life cycle of the plant. The viewer will experience each stage of the plant life cycle in terms of its texture through touch, living condition through lighting and its medicinal use through sound. Also, the sound tells a narrative of how human life cycle is intertwined with plant life cycle.</p>

                <img src="/assets/blog/collaborative3/idea5.jpg" alt="first slide" style="display: block; width: 100%;">

                <h5>Feedback from Alaistair</h5>

                <p>It is a poetic idea to connect human life cycle with plant life cycle, but we need to think about where it would be and how could the idea be executed.</p>

                <h5>What we did</h5>

                <p>We did some planning on how to make the prototype to demonstrate this idea.</p>

                <img src="/assets/blog/collaborative3/plan.jpg" alt="first slide" style="display: block; width: 100%;">

                <p>We used the 5 stages of a plant life cycle as the basis of our installation. After some literature review, we chose hawthorn as the representing plant. However, this installation could be used as a framework to represent any plant that the garden desires. The installation is supposed to be a taurus shaped tunnel that allows people to go inside and experience the texture and colour of the plant at each stage of its life cycle.</p>

                <img src="/assets/blog/collaborative3/location.jpg" alt="first slide" style="display: block; width: 100%;">

                <p>We also planned the placement of the installation. We thought the little square where the statue is inside of the garden could be a potential spot for this. The installation can be built surrounding the statue. We used this location as a basis for our initial design.</p>

                <h5>Reflection</h5>

                <p>The final design is intended to be a real life size installation that allows people to walk inside. It is crucial for us to make a clear demonstration in our presentation to the client. We might need to create a short video or images to show the final result to supplement the prototype.</p>









                


                


        </div>
    </div>







</div>
</app-blog>
`
})
export class Week19Component {}
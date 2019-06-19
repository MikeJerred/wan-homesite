import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 26 - Physical models" duration="Project duration: 23rd April - 17th June, 2019" team="Team: Reina Yuan, Timmy Maiello, Yijia Sun, Wan Li" [previous]="{ name: 'Week 25 - Field research', link: ['/blog', 25], extend: 270 }" [next]="{ name: 'Week 27 - Interim presentation', link: ['/blog', 27], extend: 300 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro3/exhibition.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro3/exhibition2.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        
            <h4>Stanley Kubrick exhibition</h4>

            <p>On the weekend, I went to see the Stanley Kubrick exhibition at Design Museum. The exhibition was structured by each film in a chronological order. Within each film, the narrative was explained through a variety of media including sketches, props, photography and footage. Both the space and the materials are organised in a very clear and concise way. I was amazed by the amount of research the director conduct prior before working on each film. The same discipline should also be applied to our work.</p>

            <h4>Presentation feedback</h4>
        
            <p>After our presentation, we reflected on the following feedbacks:</p>
            <ul>
            <li>When analysing our findings, we need to be aware of the value-action gap.</li>
            <li>Decide on what form of the system of exchange could be in terms of environmental value. Eg, carbon trading.</li>
            <li>Narrow down to a more specific location or scenario might help. </li>
            </ul>

            <h4>Literature review</h4>

            <p>In our tutorial with John, Timmy mentioned he saw an article about how we should decide which endangered species are more important to save from extinction. We thought it could be interesting area to explore, what would the value system be based on in order to be used as a measurement for saving endangered species?</p>

            <p>In New Zealand, the threatened species algorithm was deployed by the department of conservation in 2017 to create the list of 150 priority species, which had been intended to become government policy. The formal name for this approach is "systematic conservation planning, but it can be thought of as a ‘triage index’ algorithm that combines ‘value’, ‘biodiversity’ and ‘success rate’.</p>

            <p>Another example is the Zoological Society of London’s EDGE scheme prioritises phylogenetically distinct mammals, which have long branches of evolutionary tree. They score every species in a taxonomic group according to the amount of unique evolutionary history it represents (Evolutionary Distinctiveness, or ED), and its conservation status (Global Endangerment, or GE).  They then combine these scores to give each species an EDGE score. Those with highest EDGE scores are the priority species.</p>

            <h4>Physical model</h4>

            <p>After understanding some scientific frameworks of how species are valued as endangered, we realised it is quite different from how we judge the importance of a species in our daily life. To us, probabilities are often assessed informally through the perceived distance to a target event. So, we often assign more values to species that are closer to us than the ones that might truly be valuable to the ecosystem. We also wanted to show the chain effect it could cause to the entire system when the species went extinct. Our model was inspired by the Rose Goldberg machine, we thought a simple version of it would be an efficient demonstration of our concept.</p>
        </div>
    </div>

    <div class="row">
    <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/micro3/sketch1.jpg">
        <figcaption>Our sketches of how to make the model.</figcaption>
    </div>
    <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/micro3/sketch2.jpg">
        <figcaption>How do rabbits affect the ecosystem.</figcaption>
    </div>
    </div>

    <div class="row justify-content-center">
    <div class="col-9">


            <p>We looked at video examples of how to structure a Goldberg machine. There are many sophisticated and intricate structures such a machine could have; however, we had a few restrictions in mind which is limited time and portability. These restrictions helped us to decide quickly on using a cardboard box as the container, everything goes inside of it. The box is divided in two sections, one side for an animal that is close to us but not endangered, the other side for an animal not as close but more endangered. Within each side, it contains parts where if this species is removed, what other factors will be affected.</p>          


        </div>
    </div>


    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro3/model2.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/micro3/model3.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
    <div class="col-9">

            <h4>Reflection-in-action</h4>

            <p>The machine was harder to build than it first seemed. It took us some time to trial and error how to make the different parts for the ball to roll down. The angle, the weight of the ball, the size of the gap, and how one thing triggers the next are all the problems we faced and adjusted till it worked. Please see below of how it works.</p>
      
            <img style="width:50%" src="/assets/blog/micro3/model2.gif"><img style="width:50%" src="/assets/blog/micro3/model.gif">

            <p>The making of this physical model was fun and forced us to think about the production side of things we otherwise wouldn’t if only designing. The same principle works in both physical build as well as digital. It is like what it says in the “What is it like to be a bat?” article, until you are in the position of that being, you cannot fully understand what their experience will be from that point of view.</p>
          
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">



            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>Research: all<br>
            Model making: all<br>
            Presentation content: Timmy, Wan<br>
            Presentation visualisation: Timmy<br>


            
    </div>
</div>

<div class="row justify-content-center">
<div class="col-9">



    <h3>References</h3>
    <p>Michener, C.D., 2000. The bees of the world (Vol. 1). JHU press.</p>
    <p>House of Commons Library (2017) The UK bee population. Available at: https://researchbriefings.parliament.uk/ResearchBriefing/Summary/CDP-2017-0226 (Accessed: 7th May, 2019).</p>
    <p>EDGE (2019) What is EDGE? Available at: https://www.edgeofexistence.org/what-is-edge/ (Accessed: 7th May, 2019).</p>



    
</div>
</div>



</div>
</app-blog>
`
})
export class Week26Component {}
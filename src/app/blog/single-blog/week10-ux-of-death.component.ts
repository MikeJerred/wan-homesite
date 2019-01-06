import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="The UX of Death Part 2" duration="Project duration: 19th November - 30th November, 2018" team="Team: Tiffany Chau, Yuhan Mao, Wendy Chen, Wan Li" [previous]="{ name: 'The UX of Death Part 1', link: ['/blog', 9], extend: 250 }" >

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/death/death7.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/death/death8.jpg">
        </div>
    </div>
        
    <div class="row justify-content-center">
        <div class="col-9">
                <h4>Experimentation part 2</h4>
        
                <p>For the final presentation, we were required to prototype a digital intervention that enhances a positive end of life experience. Based on the research, a positive experience of a stillbirth means the mourning process is facilitated and the parents were supported through the bereavement. Parents often repress their feelings because it feels like no one understands or even acknowledges their loss. </p>

                <p>‘The death of a baby, whether at birth or in the weeks or months immediately afterwards, is no less a death than any other. it's no less significant, no less important, no less heartbreaking than the death of an older child or an adult. It is certainly different, but it is not a lesser event.’ (Kohner and Henley, 2004)</p>

                <p>Our vision was to create something that makes everyone feel the baby has truly lived and existed so when it’s gone the painfulness and sorrow from the bereaved parents are unspeakable. Hopefully the audiences could understand them better and provide the support and time they needed for as long as they needed afterwards. </p>

                <p>Alistair’s lecture on narrative inspired us to design the experience like telling a story. Initially, the story was created from the parents’ perspective, it mimics the entire experience from discovering the pregnancy, to expecting and preparing for the baby, and at the end discovering the death of the baby. Please see below the initial sketching of our story:</p>

        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/death/death1.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/death/death2.jpg">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
                <p>We will use objects such as a pregnancy test or baby’s scan.
                We wanted to create a baby room with the objects that parents would prepare during the pregnancy using VR technology.
                We will use a heart rate monitor to represent the death of the baby.</p>

                <p>However, after consulting our classmate Patrick who specialises in VR, we realised it’s not feasible for us who have very basic VR knowledge to create a realistic baby room within two days. So, we need to think of something to replace the middle part.</p>

                <p>We thought of our first model, the box with the balloon inside represented when the death happened in the mother’s womb. What if we change the perspective from the parents to the baby? The audiences could be the baby inside of the mother’s womb listening to the outside world. We created a few scenarios with scripts representing some phases of the pregnancy. We recorded the conversations between the characters, Tiffany created the audio track with some sound effects to create a feeling that it’s inside of the mother’s womb. Yuhan suggested the idea of creating a giant plastic bag for the audiences to stay inside which represents the mother’s womb. Wendy had the idea of using the baby scan as a ticket for entering this experience. Please see below a video of the whole experience from our presentation.</p>
                
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <iframe class="mx-auto d-block" width="100%" height="625" src="https://www.youtube.com/embed/Uf-Ode5OGhc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>


    <div class="row justify-content-center">
        <div class="col-9">
            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>The collaboration between my team was very smooth, not only did we have great ideas individually but also inspired and pushed each other to come up with better ideas. My main responsibility included idea generation, planning, creating PowerPoint, and model making with Yuhan.</p>

        </div>
    </div>


    <div class="row justify-content-center">
        <div class="col-9">
                <h4>What we learnt</h4>
                <p>Unlike the second project, we were not too hung up by the digital intervention and problem solving. The use of design thinking really allowed us to think of the bigger picture rather than peeking through the lens of a problem.</p>

                <p>Creating a direct solution such as a better training programme for the doctors and nurses to facilitate the mourning process or some system to encourage the parent’s communicating with others after losing the child occurred to us initially. However, they all felt too facile after we understood the problem from many different aspects in our research. Any problem is part of larger whole, and that the solution is likely to require understanding the entire system. (Norman, 2010) In other words, the failure in helping the parents to mourn is not only the problem of the obstructions, nurses, friends and families but also how the entire society perceive such an event. People who have not experienced such a loss tend to underestimate the effect it has on the parents, so it is hard for the parents to find emotional support from people close to the event and the extended social circle. Thus, solving the problem from one aspect is not enough to help the situation. </p>
        
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
                 <h3>Reference list</h3>
                <p>Kohner, N. and Henley, A. (2004). When a baby dies. London: Routledge.</p>

                <p>Norman, D. (2010) Design Thinking: A Useful Myth. Available at: https://www.core77.com/posts/16790/design-thinking-a-useful-myth-16790 (Accessed: 10th December 2018).</p>


        </div>
    </div>
       

</div>
</app-blog>
`
})
export class Week10Component {}
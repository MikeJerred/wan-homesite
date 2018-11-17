import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 1 - Sensory map" duration="Project duration: 3rd October - 5th October, 2018"[previous]="{ name: 'foo', link: ['blog', 1] }" [next]="{ name: 'bar', link: ['blog', 2] }">
    <div class="col-12">


        <div class="row">
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/sensorymap/cable car.jpg">
            </div>
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/sensorymap/greenwich tunnel.jpg">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-9">
                <h4>Research</h4>
                <p>When we visited both Greenwich foot tunnel and Amirates cable car, we didn't have a specific idea for the project in mind. My partner Wendy and I agreed to experience and collect as much information as we could at both locations and try to come up with ideas afterwards. We walked through the tunnel several times focusing on slightly different sensory elements. For example, the smell of the place was very damp, the sound was amplified and echoing, there were many cyclists despite of the no cycling signs. etc. We also conducted a few semi structured interviews with the passengers which gave us more insights of the place from different perspectives. For example, tourists found walking here pleasant and relaxing as they like the idea of walking in a tunnel that is under water, whereas regular users pointed out that it can be dangerous at peak time due to the high volume of cyclists.</p>

                <p>After the initial research, we were inspired by how our feet felt the difference in pressure when traveling through both places. In the foot tunnel, the pressure on our feet were changing while we walked through due to the uneven surface of the floor. In the cable car the experience slightly varied because we didn't walk or stand in the carriage, but our entire body felt subtle swings while we travelled from one side to the other. We wanted to demonstrate this change in pressure experienced by our body through a visual sensory map for both places. </p>

                <h4>Expirementation</h4>
                <p>Our plan was to use paint the bottom of our shoes, so it can leave coloured marks on the floor demonstrating the change in pressure. For example, the foot print would be darker when the pressure is harder due to the slope on the floor, and in lighter colour when it's the opposite. However, the same approach can’t be applied to demonstrate our cable car experience because we didn't stand up or walk around in the carriage. We also didn’t want to leave paint marks on the floor as both places are public space. With these constraints in mind, our idea evolved to using a painted ball rather than foot print to create marks on a big piece of paper on the floor.</p>

                <p>We prepared some materials for our map creation and went back to both locations to create our map. Below are some images and a video showing our process.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <figure>
                    <img style="width:100%" src="/assets/blog/sensorymap/process1.jpg">
                    <figcaption>We taped 3 piece of A1 paper together vertically to create one long piece of paper to lay on the floor.</figcaption>
                </figure>
            </div>
            <div class="col-sm-6">
                <figure>
                    <img style="width:100%" src="/assets/blog/sensorymap/process2.jpg">
                    <figcaption>We brushed the watercolour on the ball and dropped it from one end of the paper, let it roll naturally on the slopes to create some coloured trace on the paper.</figcaption>
                </figure>
                </div>
        </div>

        <div class="row">
                <div class="col-12">
                    <iframe class="mx-auto d-block" width="100%" height="625" src="https://www.youtube.com/embed/wqml4FHvsiE?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
        </div>

        <div class="row justify-content-center">
        <div class="col-9">
                <h4>What we learnt</h4>
                <p>We were unfamiliar with the concept of embodied experience so didn't realise such a requirement was part of the brief. On the day John reminded us the presentation needs to have an experience that allow people to interact with. We panicked a little but soon thought of a way to add interaction. We put some paint on the wheels of a chair and invited our classmates to sit on it to create colourful marks on the floor. The fact that we had to change our presentation in a short period of time was stressful but also a valuable learning experience. Not everything will go exactly as planned so we should always be prepared to adopt and alter our designs for unforeseeable changes.</p>

                <p>Another valuable point I learnt from this project was that designs doesn't have to be problem solving. After the map was created, we felt like we need to create a scenario where this design can be applied in real life. Our concept was to create a space that allows mobility impaired people to charge their wheelchair, to socialise and to create artworks using wheelchairs. The feedback from our class suggested that it feels instrumental and patronising to force this experience in such a scenario. It could just be a fun thing to do. The design should ‘solve problems’ thinking put constraint on our thinking, so we imagined a problem for ourselves to solve and added our design as a solution. Instead of trying to find ‘solutions’ to problems, we should think about creating responses to problems. Andrew Salituri (2017) <i>Design is not problem solving</i></p>

                <h4>Collaborative and / or Independent Professional Working</h4>
                <p>Despite of it being the first project, Wendy and I had complimentary skill set allowed us to work efficiently while enjoying our collaboration. One of my responsibility was to create the structure and copy content for our presentation, while Wendy produced the illustration and video.</p>
                &nbsp;

                <h3>Reference list</h3>
                <p>Andrew Salituri (2017) <i>Design is not Problem Solving</i>. Available at: https://medium.com/@salituri/design-is-not-problem-solving-bace64318d56 (Accessed date: 15th Nov 2018).</p>
            </div>
        </div>

    </div>
</app-blog>
`
})
export class Week1SensoryMapComponent {}

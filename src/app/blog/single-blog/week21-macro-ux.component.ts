import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 19 - Interaction design" duration="Project duration: 14th January - 11th March, 2019" team="Team: Patrick Bull, Wendy Chen, Jordy Tam, Wan Li" [previous]="{ name: 'Week 18 - Experience mapping', link: ['/blog', 20.2], extend: 300 }" [next]="{ name: 'Week 20 - Testing & improvements', link: ['/blog', 22], extend: 340 }">

<div class="col-12">

    <div class="row justify-content-center">
        <div class="col-9">

            <p>We analysed why our Chun Li model at mid-term presentation worked well in order to find a similar strategy for our final design. The model was successful not only because of the clear message in the story but also the playfulness in the way the story is told. Therefore, we want to apply the same thinking for our final design, creating something as simple and clear to communicate the imbalance of sleep and waking life caused by menstrual sleep.</p>

            <h4>Initial concepts</h4>

            <img style="width:100%" src="/assets/blog/macro6/sketch1.jpg">

            <p>Eva mentioned the Menstruation Machine project to us, it is brilliant at making men experience menstruation, in a way this is close to what we want to achieve but we need to be more focused on sleep than menstruation itself. The main difficulties female face during menstrual sleep are pain and fear of leaking, we cannot cause physical pain to the viewers so what we left is the fear of leaking. Looking at the interview transcriptions, we noticed females had to do lots of extra things in order to fall asleep during menstruation. It is almost like a hard journey from the time they decided to go to bed and when they fall asleep. For the male viewers to feel more like they are the menstruating female, we want to use VR with a first person’s view so when they look down on themselves, they will see a female body. Therefore, our first idea was to create a VR game where the viewer becomes the menstruating female and must complete all the tasks before she can reach the bed. </p>

            <img style="width:100%" src="/assets/blog/macro6/sketch2.jpg">

            <p>Inspired by Metaphor we live by, we tried to represent the same journey using different environment in a forest setting to convey the emotional changes at each stage before they trying to fall asleep. This will also be a VR experience due to the same reasons.</p>

            <h4>Experiments</h4>

            <p>With both ideas above, we wanted to integrate some physical experience with the VR experience. For instance, when the user needs to make a hot water bottle in the VR, they would feel something warm physically in real life. Patrick is great at VR, but he doesn’t know how to link it with physical elements. We consulted with Antoine, he thought we can create the VR without the physical experience in 2-3 weeks, but would need a few more weeks to add that in. There are only two weeks left so we decided to just create the VR experience and do it well.</p>

        </div>
    </div>


    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro6/prototype1.jpg">
            <figcaption>A quick prototype of the "spikes" and "river" experience.</figcaption>
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro6/prototype2.jpg">
            <figcaption>We tried to see what physical element could be added to represent the pain.</figcaption>
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">


            <p>Antoine also thought using a forest to represent the whole journey might be a bit too abstract. We took his feedback into consideration, and just picked out the two elements that represents the most obvious feelings. We did a few tests with quick prototypes to see if people can understand our concept. Wendy draw a quick story board of the night where the girl struggled to fall asleep, and the rest of us did a basic model using paper and plastic bag creating some spikes and a ‘river’ to represent the pain and the feeling of unbalance in the next day.</p>

            <h4>Testing</h4>

            <p>We created an “L” shaped display area where the storyboards were hanging on the wall, as they read the story they approach at the end of the corridor. They were instructed to go through the “spikes” and the “river” as they turned to the second part. Most people understood the storyboard well, but they got confused at the second part due to the sudden transition. They didn’t feel much pain when seeing the paper “spikes”, whereas the “river” and the small bridge did make them feel a little of being unbalanced. John thought the storyboards could be nice illustrated books, Jordy suggested we could do a pop-up book.</p>

            <iframe class="mx-auto d-block" width="100%" height="460" src="https://www.youtube.com/embed/Zzt_QoqXFf8?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <figcaption>One of our testing with a student from interaction design.</figcaption>

            <h4>1st iteration</h4>

            <p>After all the feedbacks and experiments, our idea has evolved to use an illustrated pop-up book to tell the story of the night where the girl struggled to sleep, and to use a VR experience to represent the unbalance in her waking life of the next day. Please see below for demonstration.</p>

            <iframe class="mx-auto d-block" width="100%" height="460" src="https://www.youtube.com/embed/V5TTWMP4Zco?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <figcaption>An overview of each scene in the pop-up book.</figcaption>

            <iframe class="mx-auto d-block" width="100%" height="460" src="https://www.youtube.com/embed/pwg2U7UDa6k?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <figcaption>From the "river" prototype, we extracted the part that creates unbalanced feeling and changed it to walking through a rope in our VR experience.</figcaption>

        </div>
    </div>



    <div class="row justify-content-center">
        <div class="col-9">

            <h4>App interface prototype</h4>

            <p>I also worked on the app interface to show the integration with Dreem. Initially, we felt there’s nothing in the existing Dreem app can help to either reduce the pain or to stop the leaking. After conducting some online research around existing period products, Livia caught my attention. It is a little device that sends sends stimulating pulses from the surface of the skin to the nerve strands, preventing pain signals from reaching the brain. Currently, this product is not specifically connected with sleep and it sends out a constant signal until it’s turned off. What if a similar product is integrated with the Dreem headband? The headband detects when you trying to fall asleep and the pain relief device is triggered if any sign of pain is detected.</p>

            <p>We tried to build a connection between the exhibition and the app interface by creating a similar unbalanced feeling. I wanted to create an animation at the intro screen where it detects user’s movement through the gyroscope sensor in mobile devices. I wasn’t sure if this effect was achievable without extensive coding, after some research I managed to find a prototype software called ProtoPie that happens to provide such interactions and triggers without coding. Please see below a demonstration.</p>

            <iframe class="mx-auto d-block" width="100%" height="460" src="https://www.youtube.com/embed/B7sCn4oWE9Q?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

           

          
        </div>
    </div>


    <div class="row justify-content-center">
        <div class="col-9">



            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>VR experience: Patrick<br>
            Illustration: Wendy <br>
            Pop-up book: Wendy, Jordy, Wan<br>
            App interface: Wan<br>
            Presentation: Wan</p>

            <h3>Reference list</h3>

            <p>Lakoff, G. and Johnson, M., 2008. Metaphors we live by. University of Chicago press.</p>



            
    </div>
</div>



</div>
</app-blog>
`
})
export class Week21Component2 {}
import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 20 - Testing & improvements" duration="Project duration: 14th January - 11th March, 2019" team="Team: Patrick Bull, Wendy Chen, Jordy Tam, Wan Li" [previous]="{ name: 'Week 19 - Interaction design', link: ['/blog', 21.2], extend: 300 }" [next]="{ name: 'Week 21 - Final presentation', link: ['/blog', 23], extend: 290 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/testing1.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/testing2.png">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
        
            <p>After our presentation last week, we had a clear vision of what we need to be improved. We also conducted more testing sessions with LCC students outside of MA UX just to test if viewers can understand our story without knowing too much about the project. We purposely chose more male candidates for testing because they are the main target for this campaign. We recorded all the testing sessions, summarised all feedbacks into a few main points and made improvements accordingly. </p>

        </div>
    </div>


    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/before1.jpg">
            <figcaption>Feedback: The illustration style is cute but can be confused with girlhood experience. </figcaption>
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/after1.jpg">
            <figcaption>Improvement: Although this was not a common problem to all viewers, we recreated all the illustrations in a more mature style to avoid any confusion.</figcaption>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/before2.JPG">
            <figcaption>Feedback: Some pages are interactive and some are not.</figcaption>
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/after2.jpeg">
            <figcaption>Improvement: Jordy redesigned and rebuilt the interactions for all pages.</figcaption>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/before3.JPG">
            <figcaption>Feedback: There is no sign of how to trigger the interaction.</figcaption>
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/after3.jpg">
            <figcaption>Improvement: We added annotation for each scene to instruct the interaction.</figcaption>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/before4.JPG">
            <figcaption>Feedback: The colour of the illustration might not be suitable to target male audience.</figcaption>
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/after4.jpg">
            <figcaption>Improvement: Again, this was not an issue for everyone, but we adapted the color palette from Dreem to create a more neutral style and closer connection to the brand.</figcaption>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/before5.jpg">
            <figcaption>Feedback: The transition between the night (pop-up book) and day (VR experience) is unclear and sudden. Jumping from one visual style to another breaks the consistency and makes it harder for the audience to understand the story.</figcaption>
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro7/after5.jpg">
            <figcaption>Improvement: Wendy created the same illustration style in both the interactive pieces and VR experience to create consistency.</figcaption>
        </div>
    </div>


    <div class="row justify-content-center">
        <div class="col-9">
            <h4>Other improvements</h4>

            <p>We planned to use sound in the VR experience to enhance the immersion and narrative but didn’t have enough time last week. This week, we created a script for a short story representing how the girl felt in the next day. We asked our classmate Daniella to help us make the recording as we felt her voice was very suitable for this character.</p>

            <p>We also changed the presentation format from pop up books to flat interactive pieces. We had a piece of text to go with each scene, however, it was difficult for people to see both the illustration and the text at the same time because we put them as the cover of each pop-up piece. Changing to a flat format allowed the viewers to look at both easily.</p>


        </div>
    </div>



    <div class="row justify-content-center">
        <div class="col-9">

            <h4>App interface design</h4>

            <img style="width:100%" src="/assets/blog/macro7/dreem.png">

            <p>The feedback on the app interface was that it was unclear how menstrual sleep relates to Dreem products through the app interface. To better identify our design opportunities with the current Dreem system, I went through their website thoroughly and summarized the information structure to as much details as we could find. I marked all the potential areas we could add the element of menstrual sleep. Last week, we knew roughly what we could do but the information is scattered. After this exercise, we had more clarity on where we can add new functionality and how.</p>

            <img style="width:100%" src="/assets/blog/macro7/livia.png">
            <figcaption>A rendered image to demonstrate how the new product Dreem Pulse can be integrated with other Dreem products on their website.</figcaption>

            <p>It was not difficult to add additional self-assessment and training programs relates to menstrual sleep in Dreem coach because the structure already exists. We took the liberty to add a new hardware into the ecosystem which we named it Dreem Pulse. It is the pain relief device that can reduce period pain triggered by the stage of your sleep. We created a rendered image to show how it could look like on their website to provide a more realistic feeling. This element is also added as a major functionality in the app interface. The current interface only has 3 navigation items on the bottom, we added Dreem Pulse in here so users can access it as easy as the headband. </p>

            <iframe class="mx-auto d-block" width="100%" height="460" src="https://www.youtube.com/embed/qXO9cjL9FAQ?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <figcaption>I created the app interface to add menstrual sleep elements seemlessly in the current Dreem branding. The highlight is that if someone was assessed with menstrual sleep difficulties, her monthly sleep report will be broken down regarding to her menstrual cycle. </figcaption>

           

          
        </div>
    </div>


    <div class="row justify-content-center">
        <div class="col-9">



            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>VR experience: Patrick<br>
            Illustration: Wendy <br>
            Pop-up book: Wendy, Jordy, Wan<br>
            App interface: Wan<br>
            Testing: All</p>



            
    </div>
</div>



</div>
</app-blog>
`
})
export class Week22Component {}
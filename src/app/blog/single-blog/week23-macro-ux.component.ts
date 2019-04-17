import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 21 - Final presentation" duration="Project duration: 14th January - 11th March, 2019" team="Team: Patrick Bull, Wendy Chen, Jordy Tam, Wan Li" [previous]="{ name: 'Week 20 - Testing & improvements', link: ['/blog', 22], extend: 330 }" >

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro8/exhibition.png">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro8/exhibition2.png">
        </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">

        <h4>Reflection on the final presentation</h4>
        
            <p>Due to the equipment required by our VR experience, we had to plan and negotiate to use the space at the Creative Technology Lab instead of our classroom. To create a continuity in our design, we planned a “U” shaped route for our viewers. They start by looking at the interactive pieces hanging on the wall and take a turn at the end to enter the VR experience.</p>


            <p>In the previous presentation, when the whole class looking at the exhibition creates a crowd for queue. We decided to divide the audience into two groups at the final presentation, one of which stayed with me to hear the presentation on the app interface when the other went to the exhibition side. They switched once both parts ended.</p>

            <p>We had positive feedback from VentureThree and our classmates. They were impressed that we managed to present our design outcomes on both increasing the awareness and the product itself.</p>

            <img style="width:100%" src="/assets/blog/macro8/cut.jpg">

            <p>We learnt that advanced arrangement and consultation with the venue would be advantageous and ensure a more efficient exhibition organisation. For instance, we used vinyl cut for all the display text. However, we were told by the staff it is not permitted to stick anything other than masking tape on the wall in the creative lab. Although we quickly changed the plan to put all the text on paper and then use masking tape to stick them on the wall, we could’ve saved some time if we checked in the first place. </p>

            <p>Overall, I learnt a lot in this project through the collaboration with my teammates. Each of us had our own strengths and weakness, but we worked together to overcome the difficulties.</p>

        </div>
    </div>



    <div class="row justify-content-center">
        <div class="col-9">



            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>VR experience: Patrick<br>
            Illustration: Wendy <br>
            Interactive pieces: Wendy, Jordy, Wan<br>
            App interface: Wan<br>
            Presentation content: Wan</p>



            
    </div>
</div>



</div>
</app-blog>
`
})
export class Week23Component {}
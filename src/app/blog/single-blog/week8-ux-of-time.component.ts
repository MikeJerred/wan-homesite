import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="The UX of Time Part 2" duration="Project duration: 5th November - 16th November, 2018" team="Team: Constance Ip, Daniela Navaes, Deepika Grover, Nat Di Pasquale, Wan Li" [previous]="{ name: 'The UX of Time Part 1', link: ['/blog', 7], extend: 230 }" [next]="{ name: 'The UX of Death Part 1', link: ['/blog', 9], extend: 230 }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/time/timekeeper.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/time/3.jpg">
        </div>
    </div>
        
    <div class="row justify-content-center">
        <div class="col-9">
                <h4>Experimentation</h4>
        
                <p>In the first research, most participants mentioned they would spend the last moments of their lives being with people they care. When it comes to our daily routines in the second research, we spend a lot of time with and on our smartphones. What can we say about the quality of the time spent on those devices? How much of that time is spend doing something that is considered “valuable”? When we want to measure how much time people spend communicating with others in a smartphone environment, that behaviour comes down to communicating with people via instant messaging or video/voice calling. We were curious of how much time people spend on their phone for such activities, thus our timekeeper was created for this purpose. </p>

                <p>We asked participants to measure their time in their smartphones after a meal and for the 3 subsequent hours. They would put one ball inside a bag every time they picked up their phones: a pink ball if picking up the phone was for communicating directly with other people via messaging or calling, and a white ball if it was for anything else. We gave this time keeper to 10 participants and we had these results back. </p>

                <p>After this exercise, we realised that only tracking the smartphone behaviours didn’t give us a full perspective of people’s communication through other channels. For example, the participant might have fewer pink balls in the bag because he is at a party talking to people in person. We could’ve asked the participants to do this exercise with all communication channels not just smartphone.</p>

                <p>For the final presentation, we were inspired by common expressions like "time flew by", or "it took forever to do this". Such expressions represent our perception of time that not only refer to the duration but also to the quality of it. The impression that time goes fast when we're doing something highly enjoyable, immersive or stressful, as well as it seems to drag down when we're bored, is an experience that we've all had at some point. But what defines the quality of an experience and how time is perceived is highly personal. It depends on the value that we attribute to the activity that we're engaged in. </p>

                <p>We imagined a scenario where you could see how others perceive their time. At first it could be just out of curiosity, but then what if you could use that to reflect upon how you are using your own time? Please see below a short demonstration.</p>
                
        </div>
    </div>

    <div class="row">
        <div class="col-12">
            <iframe class="mx-auto d-block" width="100%" height="625" src="https://www.youtube.com/embed/jhDAB0N6LXk?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
    </div>

    <div class="row justify-content-center">
        <div class="col-9">
    
            <p>As you can see, our setting is in a distant future when the experience of technology supposedly will be more and more seamless. Our concept shows the subjectivity of the value of time using speed and color saturation. We often express how we value time saying how it’s flying or moving slow and how when we use colors to emote heightened emotions, be them good or bad. We also considered some limitations of the project. This could be available through a wearable device, an embodied device, or triggered by brainwaves in relation to a specific environment set up to read them. It could also be an experimental train experience in the future, provoking self-awareness and reflection on their value of time, allowing people to compare their perception of time with others. </p>

            <h4>What we learnt</h4>

            <p>In this project, we spent a bit too much time on the research and left little time for the actual timekeeper design. This could’ve been eliminated with better planning in the beginning stage of the project. Also, our role play was too abstract that the audience struggled to understand our concept. We were a little concerned this might be the case when practised and tested with one user. We should conduct more tests to make sure the concept was clearly communicated through the story.</p>

            <h4>Collaborative and / or Independent Professional Working</h4>

            <p>Sound: Constance, Daniela, Wan
            <br>Props: all
            <br>Script writing: all
            <br>Acting: all</p>
    
         </div>
    </div>
       

</div>
</app-blog>
`
})
export class Week8Component {}
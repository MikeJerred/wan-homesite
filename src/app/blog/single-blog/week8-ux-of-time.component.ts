import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="The UX of Time Part 2" duration="Project duration: 5th November - 16th November, 2018" team="Team: Constance Ip, Daniela Navaes, Deepika Grover, Nat Di Pasquale, Wan Li" [previous]="{ name: 'The UX of Time Part 1', link: ['/blog', 7], extend: 230 }" [next]="{ name: 'bar', link: ['blog', 2] }">

<div class="col-12">

    <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/time/1.jpg">
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/time/2.jpg">
        </div>
    </div>
        
    <div class="row justify-content-center">
        <div class="col-9">
                <h4>Experimentation</h4>
        
                <p>In the first research, most participants mentioned they would spend the last moments of their lives being with people they care. When it comes to our daily routines in the second research, we spend a lot of time with and on our smartphones. What can we say about the quality of the time spent on those devices? How much of that time is spend doing something that is considered “valuable”? When we want to measure how much time people spend communicating with others in a smartphone environment, that behaviour comes down to communicating with people via instant messaging or video/voice calling. We were curious of how much time people spend on their phone for such activities, thus our timekeeper was created for this purpose. Please see below an image of our timekeeper.</p>
                
        </div>
    </div>

    <div class="row">
    <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/time/map.jpg">
    </div>
    <div class="col-sm-6">
        <img style="width:100%" src="/assets/blog/time/map2.jpg">
    </div>
    </div>

    <div class="row justify-content-center">
    <div class="col-9">
            <p>My teammates thought the common phrase ‘Time is money’ could be interesting to explore. Based on this, Nat designed a monopoly alike game to test out people’s perception towards time and money. The objective was to observe people’s behaviour in relation to time as a currency. The game had three rounds and the player were given a stack of money to play with. There were three houses, CONSUME, INVEST and HELP which people can play in. In the first round, the participant was instructed to play the money in any house they want with the money in hand. The second round, they were asked to play spend money on the houses again, but the money switched to their life time. The last round, the same rules applied but we added two paper walls closing towards them meaning their end of life is approaching. We ran this game with 7 participants in different age and gender, please see below for an example:</p>

    </div>
    </div>

    <div class="row">
        <div class="col-12">
            <iframe class="mx-auto d-block" width="100%" height="625" src="https://www.youtube.com/embed/qnmc0yaGsV4?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    


    <div class="row justify-content-center">
        <div class="col-9">
        
                <p>After analysing the videos, we found when money was the currency, people were more inclined to put it in invest, because people wanted to make more money with what they had. Regardless of the option chosen, most participants would spend the last moments of their lives being with their friends and families. We wondered if people were so keen on spending their last moments with loved ones, is this what’s the most valuable to them? With this question in mind, we conducted experience sampling with a questionnaire aiming to find out how people perceive productive/unproductive time in their daily life. We had 9 responses back in both digital and physical form. From the responses, we found that people defined productivity as money, achieving higher goals, finishing tasks on time, gaining knowledge, giving knowledge, spending time with family, and improvement. Unproductive time was defined by procrastinating, not having a purpose, time spent on transport, gossiping. While we can’t exactly substitute productive time with valuable time, this activity gave us insights into what people truly valued when given a specific time constraint, and that was the people and relationships in their lives.</p>
        
        </div>
    </div>
       

</div>
</app-blog>
`
})
export class Week8Component {}
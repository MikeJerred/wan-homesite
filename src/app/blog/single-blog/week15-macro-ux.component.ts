import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Week 15 - Field research - Part 1" duration="Project duration: 14th January - 11th March, 2019" team="Team: Patrick Bull, Wendy Chen, Jordy Tam, Wan Li" [previous]="{ name: 'Week 14 - Macro UX - Desk research', link: ['/blog', 14], extend: 340 }" [next]="{ name: 'Week 15 - Field research - Part 2', link: ['/blog', 16], extend: 300 }">

<div class="col-12">

    <div class="row justify-content-center">
        <div class="col-9">
                <h4>Online questionnaire</h4>

                <p>We had done an online questionnaire to gather general opinions on sleep which we felt gave us a few interesting opinions and amusing quotes for example, someone felt sleep was their father. We choose the online survey platform Typeform to conduct our research, because its user interface is more friendly than others which could potentially help us increase our response rate. We had about 100 responses but from advisement are not going to be using the data for concrete evidence to push our idea onward.</p>

                <h4>1st round interviews</h4>
        
                <p>Last week, we went to the John Lewis (beddings department) in Oxford Circus and a Dreams store in central London for Guerrilla interviews. We chose these two locations because we thought being in a store that sells sleep related products would encourage people to talk about their sleep with us more naturally. We interviewed 10 people and found that most people are very aware on how sleep affects their waking life and vice versa. They are aware of certain habits such as drinking coffee and alcohol have a negative effect on their sleep, doing more physical activities such as exercise have a positive impact. However, only the ones have a consistent bad quality sleep are prepared to change the habit for a better sleep.</p>

                <p>Most people acknowledged the knock-on effect of a bad night sleep, it goes into a cycle like bad sleep > grumpy the next day > must take some stimulants to get through the day > however it may lead to another bad sleep > and so forth. The cycle adjusts itself after about a week or so depending on the person.</p>

                <h4>Reflection-in-action</h4>

                <p>Despite both of us went to central London stores, Jordy had to join me at Oxford Circus due to no customer in the store he visited. We learnt to choose our interview locations more carefully in the future.</p>
        </div>
</div>

            <div class="row">
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/macro2/shop.jpeg">
                <figcaption>The shop that was completely empty.</figcaption>
            </div>
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/macro2/transcript.png">
                <figcaption>Transcripts of our first round inverviews.</figcaption>
            </div>
            </div>

<div class="row justify-content-center">
<div class="col-9">

                <h4>Self-observations</h4>

                <p>We also wanted to make some observations of people sleeping but it was difficult to get participants who would willingly record themselves or allow us to observe them sleeping. So, the 4 of us decided to record our own sleeping to see if there’s any interesting pattern. Here are some of our findings:</p>

                <ul>
                <li>We kept the light on for the recording which disturbed our sleep throughout the night.</li>
                <li>We felt like being watched.</li>
                <li>3.	It's becoming a habit to play with my phone before bed due to the time difference with some friends in China.</li>
                </ul>

                <img style="width:100%" src="/assets/blog/macro2/sleep.png">
                <figcaption>Wendy analysed her sleep in details.</figcaption>

                <p>In addition to prove our assumption that the frequent usage of smart phones has a negative impact on our sleep, this experiment also made us realise that lighting and the sense of privacy can affect our sleeping quality. We understand the data cannot be used to represent a large population, but it was an interesting experiment.</p>
                
        </div>
</div>


    <div class="row justify-content-center">
        <div class="col-9">

                <h4>Competitor analysis</h4>

                <p>Since Dreem has the functionality of sleep tracking, we wanted to observe some alternative sleep trackers that are on the market, Sleepcycle appears to be popular among the select group we asked however the data it provides is not even close to 100% accurate, as it just tracks your movements using the accelerometer in your phone to assume when you’re deeper in sleep or more awake. We also tried apple sleep tracker which had a similar result. The findings from our own observation correlates with one of the question in our questionnaire “Do you use any sleep trackers/technology interventions?”, most answer were no, and some people who used to use them stopped because they found the data either not interesting or can’t actually help to improve their sleep. </p>

                
        </div>
    </div>

        <div class="row">
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro2/tracker1.png">
            <figcaption>Varied results over 7 days of using a free tracker.</figcaption>
        </div>
        <div class="col-sm-6">
            <img style="width:100%" src="/assets/blog/macro2/tracker2.png">
            <figcaption>Accuracy is closer match to real-time data.</figcaption>
        </div>
        </div>


    <div class="row justify-content-center">
        <div class="col-9">
            <h4>Collaborative and / or Independent Professional Working</h4>
            <p>Jordy and I conducted the initial user interviews, we all worked on the transcriptions afterwards. Each of us recorded one night sleep, Wendy did a detailed analysis of her recording. Jordy and Patrick each tried out a differnt sleep tracker.</p>

        </div>
    </div>





</div>
</app-blog>
`
})
export class Week15Component {}
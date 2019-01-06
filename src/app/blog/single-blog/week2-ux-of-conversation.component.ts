import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="The UX of Conversation Part 1" duration="Project duration: 10th October - 19th October, 2018" team="Team: Coco Li, Elaine Zhang, Wan Li, Yuhan Mao" [previous]="{ name: 'The UX of Conversation Part 1', link: ['/blog', 1], extend: 300  }" [next]="{ name: 'The UX of Conversation Part 2', link: ['/blog', 3], extend: 300  }">
    <div class="col-12">


        <div class="row">
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/conversation/blog1.jpg">
            </div>
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/conversation/blog2.jpg">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-9">
            <h4>First idea</h4>

            <p>Our first idea was to improve the communication between doctors and patients in China, there has been a rising tension between the two parties because of some medical incidents exposed by the media. One aspect of the communication is the difficulty for patients to understand medical terminologies and conditions. We imagined some scenarios for AEIOU research method, for example our ‘bot’ will listen to the conversation while the doctor examines the patient, the ‘bot’ will explain terminologies in layman terms whenever the patient doesn’t understand. There was a struggle when we created the scenarios for AEIOU due to the lack of observation and understanding of this situation. After some research on the AEIOU method, we discovered that it is a framework that helps researchers to organize and analyse data collected from other observational methods such as notes and interviews. Chang (2017) It was suddenly obvious to us why we struggled in the first place. After some discussion, we decided to move on to a topic that allows easy observation and data collection.</p>

            <h4>Research</h4>

            <p>Language barrier could be a difficulty for non-native English-speakers like us who are studying and living in an English-speaking country. Inspired by our own experience, we observed some interactions and conversations between our classmates and lecturers during classes. We conducted five semi-structured interviews with non-English speaking students and one interview with a teacher who teaches English in our university.</p>

            <p>Applying the AEIOU framework to our data provided us with the opportunity to dive deeper in the situation from the five aspects, as well as mapping the relationships between them. Before an international student could come to study at LCC, they need to pass an English level test called IELTS. This test consists of four main sections: listening, speaking, reading and writing. From our interviews, most students found listening and speaking more challenging than reading and writing. They said it’s because reading and writing allowed them to work at their own speed, whereas listening and speaking requires instant understanding and feedback.</p> 

            <p>Also, students said they are more willing to engage in a conversation with someone in English when they can understand what the other person said. In a lecture, they tend to remain silent even if they don’t understand something. The reasons for not understanding can vary depending on their individual level, the ones below are some we discovered from the interviews:</p>

            <ul>
            <li>didn’t know the meaning of a single word; </li>
            <li>if more than one or two words are unfamiliar, they could miss out the whole sentence; </li>
            <li>didn’t understand the context;  </li>
            <li>the speed of the person speaking; </li>
            <li>the accent of the person speaking; </li>
            </ul>

            <p>From our observation, we noticed when students don’t understand the meaning of a single word choose to either use a translation tool or ask a nearby classmate to help. “I think it would appear too stupid to ask the teacher the meaning of a single word, I’d rather wait and ask some more important questions.” quote from an interviewee. </p>

            <p>When students don’t understand more than one word or the context, it’s less likely for them to understand the entire sentence or section. The speed and accent of the person talking can also lead to the same result. Several of our interviewees said they start to lose focus in the class and remain silence when situations like these happen. Therefore, many international students appear quiet and not engaged in the class and group discussion.</p>

            <p>From the teachers’ perspective, they know the general level of everyone but can’t always tell if someone understood something or not if no questions are asked. It is difficult for them to guess the students level of understanding when there’s no response to their questions. The silence doesn’t always mean the same thing.</p>

            <h3>Reference List</h3>

            <p>Chang, W. (2017) AEIOU. Available at: http://dlrtoolkit.com/aeiou/ (Accessed: 13th Oct).</p>
            </div>
        </div>

       

       
       
    </div>
</app-blog>
`
})
export class Week2Component {}
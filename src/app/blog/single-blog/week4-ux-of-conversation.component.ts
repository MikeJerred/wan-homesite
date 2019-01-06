import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="The UX of Conversation Part 3" duration="Project duration: 10th October - 19th October, 2018" team="Team: Coco Li, Elaine Zhang, Wan Li, Yuhan Mao" [previous]="{ name: 'The UX of Conversation Part 2', link: ['/blog', 3], extend: 300 }" [next]="{ name: 'The UX of Urban Space Part 1', link: ['/blog', 5], extend: 300 }">
    <div class="col-12">


        <div class="row">
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/conversation/show1-copy.png">
            </div>
            <div class="col-sm-6">
                <img style="width:100%" src="/assets/blog/conversation/show2-copy.png">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-9">
                <h4>Iteration</h4>

                <p>The feedbacks made us reconsider the output of our design. Our aim was to help to improve the experience during face – to – face conversations between tutors and students who cannot understand more than 50% of lectures. Instead of a chatbot that replaces humans in the conversation, the machine should be a facilitator to encourage the conversation between humans because most students showed a strong interest in practicing with other people. For the teachers, the design should help them to understand when and where the students don’t understand during the lecture, so they can provide appropriate support.  </p>

                <p>Our new concept was to create an immersive classroom system consisting of an instant transcription display with note taking features, and a signal light. When students can’t keep up with the lecturers’ speed, they can read the transcription and mark where they don’t understand. This will help them to remember what problem they had and ask more specific questions. Each student can take notes independently and choose the visibility to public or teacher only. When many students marked questions about a certain section, the signal light will change colour to notify the teacher. Below is a role play to demonstrate how this concept could work.</p>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
            <iframe width="100%" height="625" src="https://www.youtube.com/embed/ORrCVX18N-o?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
            
        <div class="row justify-content-center">
            <div class="col-9">
                <h4>What we learnt</h4>

                <p>One of our mistakes in this project was not understanding the research methods properly before we chose a topic. We had to change the topic half way through once we realised it was unachievable. Secondly, our approach to the project was predominately led by the solution of creating a chatbot because the brief was to create a conversation between machines and human. Our thinking process was dominated by how we can create a chatbot that allows this type of conversation to happen, which might or might not be the most appropriate solution. Later in the project, we managed to abandon the idea of a chatbot after analysing the findings from our research. It allowed us to think from a wider perspective, but it is still not enough. If we had more time, we could explore how to improve this experience from an earlier stage.</p>

                <h4>Collaborative and / or Independent Professional Working</h4>
                <p>Illustrations: Elaine</p>
                <p>Props: Elaine, Yuhan</p>
                <p>Presentation PowerPoint: Coco, Wan</p>
                <p>Role play script: Wan</p>
                
 
                

            </div>
        </div>

       

       
       
    </div>
</app-blog>
`
})
export class Week4Component {}
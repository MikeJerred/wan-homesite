import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Co-design workshop - part 1" [previous]="{ name: 'Ideation, prototyping & testing', link: ['/blog', 42], extend: 300 }" [next]="{ name: 'Co-design workshop - part 2', link: ['/blog', 44], extend: 280 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp12/workshop.jpeg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

           

            <p>Tiffany and Yae Jin are working with a Korean photographer Jin Sun Park, the plan was to enhance viewer’s emotional resonance with photography through multisensory design. We organised co-design workshops with both the photographer and some potential visitors to understand the needs and opinions from both sides. </p>

            <h4>Workshop preparation</h4>

            <p>Initially, we planned to apply the shuffle brainstorming method Tiffany created as the main activity for the workshops. The method involves four rounds of sketching, at the end of each round the sketch gets passed on to the next person. Later on, we discovered this method already exists and it's called brainsketching (Van Der Lugt, 2002).</p>

            <p><b>Round 1</b> - Create a concept that utilizes multisensory elements to enhance the viewing experience of the selected photo. 
            <br><b>Round 2</b> - Develop the concept further.   
            <br><b>Round 3</b> - Identify constraints and limitations. 
            <br><b>Round 4</b> - Find solutions for the constraints.  </p>
            <p> We did a practice session with the photographer using this method and it was very useful and encouraging collaboration.</p>        

            <carousel [noPause]="false" [interval]="0">
            <slide>
                <img src="/assets/blog/fmp12/stone.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>Jin Son selected this photo for us to practice the brainsketching method.</figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/idea1.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>The development process of Jin Sun's concept.</figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/idea2.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>The development process of Yae Jin's concept.</figcaption>            
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/idea3.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>The development process of my concept.</figcaption>   
            </slide>
            
            <slide>
            <img src="/assets/blog/fmp12/idea4.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>The development process of Tiffany's concept.</figcaption>  
            </slide>

            </carousel>

            <p>However, I was concerned the participants in the visitor workshop from non-design background might not be as familiar with sketching and might feel intimidated. Inspired by “Towards a multisensory storming”, I suggested we could introduce some multisensory activities to help them with what sensory elements could be associated with the viewing experience of photographs. Tiffany and I planned for the visitor’s workshop as below, we sourced the materials and recruited the participants. </p>

            <h4>Workshop plan</h4>
            
            <p><b>Purpose:</b> to understand how visitors' connect multisensory design with the image viewing experience in an exhibition context.</p>
            <p><b>Participants:</b> we invited 4 participants with 3 working professionals and 1 design student, 3 male and 1 female.</p>
            <p><b>Schedule:</b> (Estimated time: 2hrs)</p>
            <ol>
            <li>Project background introduction (5min)</li>
            <li>Multisensory storming activities:</li>
                <ul>
                <li><b>Vision</b> – wear Google cardboard glasses and find the object described in the room. (5min) This exercise was aimed at simulating vision impairments in order to sensitize the possibility to use multisensory design to increase accessibility. (Caon, 2018)</li>
                <li><b>Smell & touch</b> - smell 3 different odours and select one matches the most with the fabrics provided and why. (5min) From this excercise, we want to see how people trying to connect different senses together.</li>
                <li><b>Touch</b> - touch an object with blindfold on and guess what it is. (8min)</li>
                <li><b>Taste</b> - eat 3 different flavoured chocolate and guess what flavours they are. (Caon, 2018) (5min)</li>
                <li><b>Sound & touch</b> - listen to a soundtrack and use play doh to express feelings. (5 min)</li>
                </ul>
            <li>Present the selected photo to participants. Ask them what do they think the photo is trying to communicate? What does it make you think of? (5min-10min)</li>
            <li>Tell participants the meaning intended by the photographer. (5min)</li>
            <li>Introduce the shuffle brainstorming method and ask participants to create multisensory design for the photo. (5min each round + discussion time)</li>
            </ol>
            
            <h4>Workshop with the photographer</h4>

            <p>After the plan, we thought the same workshop structure could be used with the photographer. </p>

            <p><b>Multisensory storming</b></p>

            <carousel [noPause]="false" [interval]="0">
            <slide>
                <img src="/assets/blog/fmp12/vision.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption><b>Vision</b> - both Jin Son and Yae Jin were instructed to find an object in the room. They both thought it was a difficult task because everything is so blurred behind the cardboard glasses. It's an unusual experience for people with good eye sight</figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/smell.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption><b>Smell & touch</b> - we used the smell of star anise, mango perfume and bleach for this excercise. For harsh and artificial smell, they tried to find a fabric with similar attributes. </figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/touch.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption><b>Touch</b> - Jin Son was given a dog model and Yae Jin was give a hot water bottle. While Jin Son was quite relaxed and happy to touch and guess the object, Yae Jin was quite scared before even touching the object due to the lack of sight.</figcaption>            
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/taste.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>They were given 3 flavours (coffee, Turkish delight, chilli) of chocolates to guess what flavours they are. They were only able to guess the chilli flavour but not the other two. They felt the coffee flavour was very familiar but couldn't tell, neither of them had tried Turkish delight before so didn't know the flavour.</figcaption>   
            </slide>
            
            <slide>
            <img src="/assets/blog/fmp12/sound.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption> <audio controls><source  src="/assets/blog/fmp12/cave.mov" type="audio/mpeg"></audio>
            They used play doh to experess their feelings of the soundtrack above. Both of them tried to use the play doh to mimic the rythem and tempo of the water dripping sound.</figcaption>  
            </slide>

            </carousel>
            

            <p><b>Feedback:</b> They thought the activities were interesting and could be helpful for participants with non-design background to warm up for the brainstorming later. However, they suggested to remove the touch for object recognition and taste chocolate activities as they seem to be less relevant than other activities. </p>

            <p><b>Photo selection</b></p>

            <p>Jin Son wanted us to use multisensory design for her latest body of work that discusses the feminist braless movement in Korea, but only one photo will be completed before our submission date. Originally, we were going to design just for one photo. John suggested that if only one photo is used, we should analyse the semiotics and dive deep in the subject matter the photo represents. Our interest is to use multisensory design to enhance viewing experience of photography rather than feminist movements. Therefore, we decided to design 3 multisensory experiences for 3 different sets of Jin Son’s images. </p>

            <carousel [noPause]="false" [interval]="0">
            <slide>
                <img src="/assets/blog/fmp12/shadow.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption><b>Nude without nudity</b> - were constructed to create strong contrasting light and shadow on a braless female figure in a domestic environment. Inspired by Sulli, a K-pop celebrity who was famous for speaking out on women’s rights and other issues. She was a representative figure in rebelling against how women should be dressed in public. The image wishes to elicit a discussion on how the female body should be perceived by the public.</figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/sal.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption><b>Ah I’m trapped in Sal</b> - was trying to express the stressful and addictive nature of guilty pleasures. The image uses chocolate to represent things that brings us guilty pleasure in life. While rationally we are concerned about the health implications and weight gaining of such products, but still can’t stop eating them. It’s a constant battle between guilt and pleasure.</figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/flower.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption><b>Perinnial</b> - the photographer thought the process of trimming flowers to fit in to a vase is like being an ideal type of woman. The vase is the standard and frame that a woman needs to fit in. It is regarded as a ‘safe’ place because it is what society wants. However, in order to fit the vase, you need to give up some of my true self; thus, it results as hating, blaming, hurting, and losing myself. The misogynic incidents happening to women make me more careful than others because I am a woman. Being a woman is amazing, but at the same time, it is sad because it is hard for me to be out of the frame of a ‘woman’. While society sees a man as a human, a woman us sees as a woman.</figcaption>
            </slide>
            </carousel>

            <p><b>Brainsketching</b></p>

            <p>We used brainsketching to generate ideas for the last two sets of images, we left the first set for the visitor’s co-design workshop.</p>

            <p><b>Set 2 - Ah I’m trapped in Sal</b></p>

            <carousel [noPause]="false" [interval]="0">
            <slide>
                <img src="/assets/blog/fmp12/sal1.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption><b>Tiffany’s idea</b> - visitors wear a jumpsuit that is filled with chocolate and go into a closed transparent room which represents when we are trapped in the desire of guilty pleasure. There will be small air holes releases chocolate smell in the room. The photos will be displayed on the wall inside of the room. 
                <br><b>Limitations</b> - size of the transparent room, size of the jumpsuit, chocolate filled in the jumpsuit will not be in liquid form under room temperature. </figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/sal2.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption><b>Jin Son’s idea</b> – visitors wear a layered flesh like clothes to represent the heaviness of guilty pleasures. A river made of chocolate across the room to create a strong smell.
            <br><b>Limitations</b> – how to keep chocolate remain liquid form for the river, not possible to find a space that allows us to build a chocolate river. </figcaption>            
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/sal3.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption><b>My idea</b> - give visitors a small piece of chocolate to hold in their hand before they enter the room. They need to keep the chocolate in their hand, the chocolate slowly melts in their hand as they look through the photos. Using body temperature and touch, it’s trying to create the feeling of guilty pleasure that we cannot escape. A white canvas will be placed at the end which people can wipe the chocolate off, which could be an interesting artwork itself.
            <br><b>Limitations</b> – people might be reluctant to hold the chocolate in their hand and let it melt.  
            </figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/sal4.jpg" alt="first slide" style="display: block; width: 100%;">
            </slide>
            
            <slide>
            <img src="/assets/blog/fmp12/sal5.jpg" alt="first slide" style="display: block; width: 100%;">
            </slide>

            </carousel>

            <p><b>Set 3 - Perinnial</b></p>

            <carousel [noPause]="false" [interval]="0">
            <slide>
                <img src="/assets/blog/fmp12/flower1.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption><b>Tiffany’s idea</b> - the artwork will be connected to a visitor's body, the artwork is not hanging straight and the visitor will have to adjust his body to balance the photo in a good viewing position.
                <br><b>Limitations</b> - how do we connect the visitor physically with the photo? It might require too much space. </figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/flower2.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption><b>Yae Jin’s idea</b> – the floor will be covered in dried flower petals that reflects what's in the photos, when they walk over the petals it triggers some sound.
            <br><b>Limitations</b> – this idea seemed to be quite achievable. </figcaption>            
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/flower3.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption><b>My idea</b> - there will be a foam board in a vase shape in front of the photo, visitors have to fit in there to go pass it, some harsh sound will be triggered if their body touched the edges inside of the shape.
            <br><b>Limitations</b> – it might take too much space.
            </figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp12/sal4.jpg" alt="first slide" style="display: block; width: 100%;">
            </slide>
            
            <slide>
            <img src="/assets/blog/fmp12/sal5.jpg" alt="first slide" style="display: block; width: 100%;">
            </slide>

            </carousel>

            <h4>Work distribution</h4>
            <p><br>Workshop: Tiffany, Yae Jin, Wan</p>


          

            <h3>References</h3>
            <p>Caon, M., Angelini, L., Abou Khaled, O., Mugellini, E. and Matassa, A., 2018, May. Towards multisensory storming. In Proceedings of the 2018 ACM Conference Companion Publication on Designing Interactive Systems (pp. 213-218). ACM.</p>

            <p>Van Der Lugt, R., 2002. Brainsketching and how it differs from brainstorming. Creativity and innovation management, 11(1), pp.43-54.</p>

          

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp12Component {}
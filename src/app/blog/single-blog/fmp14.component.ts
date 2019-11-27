import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Prototyping & testing" [previous]="{ name: 'Co-design workshop - part 2', link: ['/blog', 44], extend: 280 }" [next]="{ name: 'Video shooting & model making', link: ['/blog', 46], extend: 320 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp14/hero.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

           

            <p>After all the co-design workshops, we have decided to develop the following ideas for each set of photos. </p>
      

            <h4>Prototyping & testing for image set 1</h4>          

            <carousel [noPause]="false" [interval]="0">

            <slide>
                <img src="/assets/blog/fmp14/shadow.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>The idea is that we create a mini window frame attached to a light source placed next to the photographs. This projected a similar light and shadow to the one displayed in the photo on the viewer’s body as they walked closer to the photo. It conveyed the idea that everyone could be the target of social judgement, exposed under the light, and trapped in the prison of public attention.</figcaption>
            </slide>
            <slide>
                <img src="/assets/blog/fmp14/lighting.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>We borrowed different lightings from the kit room to try what's the best to create the shadow we needed. However, after we tried with a few different options we realised these big lights are good for producing defused lighting where shadows are eliminated. </figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp14/lighting3.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>We experimented to use the flashlight on our phone and that worked out better than other lights. So we decided to use this for our testings.</figcaption>
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp14/prep.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>I worked on the soundtrack that goes with each set of photos.</figcaption>
                    
            </slide>

            <slide>
            <img src="/assets/blog/fmp14/testing1.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>User testing of this idea.</figcaption>
                    
            </slide>

            </carousel>

            <p><b>Soundtrack</b></p>

            <p>We used the soundtrack below for our testing, visitors reported it feels a bit too long so we made it shorter. </p>

            <audio controls>
            <source  src="/assets/blog/fmp14/shadow.mp3" type="audio/mpeg">
            </audio>

            <p><b>User feedback</b></p>
            <p>Users were generally the lighting and set up for this image, although they were uncertain of the meaning behind the images, they can tell the shadows from the images were reproduced on them. They also reported the beeping sound at the end was annoying. For the testing, we only had one light source which creates the shadow on the visitor. However, we realised the environment is too dark to see the images properly, so we will add another light source just to shine extra lights on the images to improve this.</p>
            

            <h4>Prototyping & testing for image set 2</h4>          

            <carousel [noPause]="false" [interval]="0">

            <slide>
            <img src="/assets/blog/fmp14/slime.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>This idea is to recreate the feeling of guilty pleasure in an abstract form using sound and touch in conjunction with the images. We want to use some sticky material that the viewers could touch and play with while viewing the images. The sound of someone eating junk food was played in the background. The texture of the material should resemble a guilty pleasure; enjoyable but sticky and hard to get rid of. The sound of someone eating chocolate, crisps and drinking coke attempted to remind viewers of the guilty pleasures they have in their own life.</figcaption>
            
            </slide>

            
            <slide>
                <img src="/assets/blog/fmp14/testing2.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>We bought slightly different materials to test which one users prefer the most. This image shows the testing using slime.  </figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp14/testing3.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>This image shows the testing with artificial sand.</figcaption>
            
            </slide>

            </carousel>

            <p><b>Soundtrack</b></p>

            <p>Users generally thought the sound went quite well with the touch experience. </p>

            <audio controls>
            <source  src="/assets/blog/fmp14/slime.mp3" type="audio/mpeg">
            </audio>

            <p><b>User feedback</b></p>
            <p>Users reported that they liked the whole experience, they prefered the texture of slime over the play sand. However, they thought the color of the silver slime indicated something different to the rest of the experience. They suggested brown might be more matching. We wanted to have quite a lot of slime to create a sink in and hard to escape feeling so we decided to make our own brown slime. </p>

            <carousel [noPause]="false" [interval]="0">

            <slide>
            <img src="/assets/blog/fmp14/slime1.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>Yae Jin had experience of making slime before so she found an online tutorial for us to follow. We mixed PVA glue, contact lense solution, brown acrylic paint and bicarbonate of soda.</figcaption>
            
            </slide>

            
            <slide>
                <img src="/assets/blog/fmp14/slime2.jpg" alt="first slide" style="display: block; width: 100%;">
               
            </slide>

            <slide>
            <img src="/assets/blog/fmp14/slime3.jpg" alt="first slide" style="display: block; width: 100%;">
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp14/slime4.jpg" alt="first slide" style="display: block; width: 100%;">
            
            </slide>

            </carousel>

            <h4>Prototyping & testing for image set 3</h4>          

            <carousel [noPause]="false" [interval]="0">

            <slide>
            <img src="/assets/blog/fmp14/flower.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>The idea is to fill the floor with petals. As the viewer walked over them, the sound of vases cracking and breaking played to create a contrast between what they touched and what they heard. We challenged viewers’ expectations through the incongruence between vision, touch and sound. </figcaption>
            
            </slide>

            
            <slide>
                <img src="/assets/blog/fmp14/flower2.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>We bought a bag of drid petals and spead them in a thin layer on the ground in front of the photo. When viewers step on them we matually played the vase cracking sound as though their steps triggered the sound. </figcaption>
            </slide>

            </carousel>

            <p><b>Soundtrack</b></p>

            <p>Originally, I used glass cracking sound that's mixed together with glass breaking sound. After user testing, users reported that they think the cracking sound is more like leaves cracking. It doesn't create as strong impact as the glass breaking sound. Therefore, we decided to mainly use the glass breaking sound.</p>

            <audio controls>
            <source  src="/assets/blog/fmp14/cracking.mp3" type="audio/mpeg">
            </audio>

            <p>We also did a testing session with another idea for this set. This idea was to create a space like the vase, the photos were placed inside of the vase. Viewers have to get inside of the vase like how you fit in social standards. Users prefered the idea above than this one, so we didn't carry on develop it.

            <img src="/assets/blog/fmp14/flower3.jpg" alt="first slide" style="display: block; width: 100%;">
            
            <h4>Work distribution</h4>
            <p><br>Prototyping: Tiffany, Yae Jin, Wan
            <br>Testing: Tiffany, Yae Jin, Wan
            <br>Sound: Wan</p>

        </div>
    </div>







</div>
</app-blog>
`
})
export class Fmp14Component {}
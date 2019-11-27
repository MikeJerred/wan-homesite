import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Video shooting & model making" [previous]="{ name: 'Prototyping & testing', link: ['/blog', 45], extend: 280 }" [next]="{ name: 'Final design', link: ['/blog', 47], extend: 150 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp15/hero.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

           

            <p>Due to the constraint of space available, we realised that it would be difficult to actually create our multisensory design in an exhibition setting. Therefore, we decided to use concept videos and physical models to demonstrate our idea.</p>
      

            <h4>Shooting for concept video</h4>          

            <carousel [noPause]="false" [interval]="0">

            <slide>
                <img src="/assets/blog/fmp15/video2.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>We used the space in my house and set it up like an exhibition for the video shooting. We used the same wall and changed the images and settings to the next ones as one shooting is done. </figcaption>
            </slide>
            <slide>
                <img src="/assets/blog/fmp15/video1.jpg" alt="first slide" style="display: block; width: 100%;">
               
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/video3.jpg" alt="first slide" style="display: block; width: 100%;">
            
            
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

            <h4>Prototypig for models</h4> 

            <p>We used cardboard boxes to create a prototype for our models. We planned to use wood for the real model.</p>       

            <carousel [noPause]="false" [interval]="0">

            <slide>
                <img src="/assets/blog/fmp15/model3.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>The box on the top is the model for set 1 images, the box on the left is for set 2 and on the right is for set 3.</figcaption>
            </slide>
            <slide>
                <img src="/assets/blog/fmp15/model2.jpg" alt="first slide" style="display: block; width: 100%;">
               
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/model1.jpg" alt="first slide" style="display: block; width: 100%;">
            
            </slide>

            <slide>

            <img src="/assets/blog/fmp15/model6.jpg" alt="first slide" style="display: block; width: 100%;">
        
            </slide>
            <slide>
                <img src="/assets/blog/fmp15/model4.jpg" alt="first slide" style="display: block; width: 100%;">
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/model5.jpg" alt="first slide" style="display: block; width: 100%;">
            
            </slide>


            </carousel>

            <h4>Model making</h4> 

            <p>After the show meeting we modified the models to fit within the given space. We planned to make 3 separate boxes that can be placed together. This way is more flexible than our original plan.</p>  

            <carousel [noPause]="false" [interval]="0">

            <slide>
                <img src="/assets/blog/fmp15/box.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>Originally, we were going to buy some ready chopped wood from the art shop. </figcaption>
            </slide>
            <slide>
                <img src="/assets/blog/fmp15/sketch.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>After speaking to the technicians in the 3D workshop, we returned those materials and made our own from scratch which was much cheaper.</figcaption>
               
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/box3.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>We made 3 equal sized cube boxes 30cm x 30cm x 30cm and glued all the sides together.</figcaption>
            
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/box4.jpg" alt="first slide" style="display: block; width: 100%;">
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/paiting.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>We painted all the exterior white and interior in different colors that matched with the exhibiting photos.</figcaption>
            
            </slide>

            </carousel>

            <h4>Arduino</h4> 

            <p>For image set 1 nude without nudity the sound and lighting are triggered by the viewers as they go closer to the photos. And for set 3 perinnial, the sound of vase breaking is triggered as viewers walk on the petals. For these 2 models we needed to use Arduino to trigger these elements. Yae Jin had more experience working with Arduino previously, so she worked on the Arduino while Tiffany and I made the boxes. We helped with soldering and some other small parts once we finished with the boxes.</p>  

            <carousel [noPause]="false" [interval]="0">

            <slide>
                <img src="/assets/blog/fmp15/sketch2.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>Yae Jin sketched out how the Arduino parts should be integrated within the model. </figcaption>
            </slide>
            <slide>
                <img src="/assets/blog/fmp15/sketch1.jpg" alt="first slide" style="display: block; width: 100%;">
               
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/arduino.jpg" alt="first slide" style="display: block; width: 100%;">
            
            
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/arduino2.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>The sound and lighting for set 1 are triggered by this slider. </figcaption>
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/arduino5.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>We made some finger sized shoes for set 3, visitors can put their fingers in the shoes and walk over the petals. A pressure sensor is attached to the bottom of the shoe which will trigger the sound as they move.</figcaption>
            
            </slide>


            <slide>
            <img src="/assets/blog/fmp15/arduino3.jpg" alt="first slide" style="display: block; width: 100%;">
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/arduino4.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>Jin Sun came to visit and we finished the soldering together.</figcaption>
            
            </slide>
            </carousel>


            <h4>Integration</h4> 

            <p>After Yae Jin finished with the Arduino, we started the integration between Arduino and the boxes. </p>  

            <carousel [noPause]="false" [interval]="0">

            <slide>
                <img src="/assets/blog/fmp15/acrylic.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>We made an acrylic box to keep the slime in for set 3. </figcaption>
            </slide>
            <slide>
                <img src="/assets/blog/fmp15/acrylic2.jpg" alt="first slide" style="display: block; width: 100%;">
               
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/windows.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>We did a few experiments with cardboard for the shape that creates shadow in set 1. But the shadow wasn't as harsh as we wanted. We created different sized laser cut window shapes to try out which one works the best. </figcaption>
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/shoe.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>We also painted the shoes for set 3.</figcaption>
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/integration.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>Placing the light inside the model for set 1.</figcaption>
            
            </slide>


            <slide>
            <img src="/assets/blog/fmp15/integration2.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>Testing the lights and shadow position for set 1.</figcaption>
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/integration3.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>This installation is made inside of the model to create the shadow on visitors. We had to cover the light in a box like this becuase it was much brighter than we expected in a dark environment.</figcaption>
            
            </slide>

            <slide>
            <img src="/assets/blog/fmp15/integration4.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>Jin Sun came to visit and we finished the soldering together.</figcaption>
            
            </slide>
            </carousel>

            <h4>Work distribution</h4>
            <p>Video shooting: Tiffany, Wan
            <br>Video editing: Tiffany
            <br>Prototyping: Tiffany, Wan
            <br>Model making: Tiffany, Yae Jin, Wan
            <br>Arduino: Yae Jin</p>

        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp15Component {}
import { Component } from '@angular/core';

@Component({
    styleUrls: ['./shared.scss'],
    template: `
<app-blog title="Co-design workshop - part 2" [previous]="{ name: 'Co-design workshop - part 1', link: ['/blog', 43], extend: 300 }" [next]="{ name: 'Prototyping & testing', link: ['/blog', 45], extend: 240 }">

<div class="col-12">

    <div class="row">
       
            <img style="width:100%" src="/assets/blog/fmp13/workshop.jpg">
  
        
    </div>

    <div class="row justify-content-center">
        <div class="col-xs-10 col-md-9">

           

            <p>Tiffany and I were responsible for organising the co-design workshop with potential visitors. We invited 4 participants, 3 male working professional and 1 female student. We selected participants who don’t know each other to reduce peer pressure or influence. The workshop started with multisensory storming activities followed by the shuffle design method.</p>

            <h4>Multisensory storming</h4>

            <p>We removed 2 acitivities from the original plan based on the feedback from the photographer. The acitivity for vision was easy and good as a warm up, the other 2 activities were aimed to see how stimuli in two different modalities influence participants perception.</p>
            <p><b>Activity 1 - Vision</b>: wear Google cardboard glasses and find the object described in the room.</p>

            <img src="/assets/blog/fmp13/glasses.png" alt="first slide" style="display: block; width: 100%;">
            
            <p>Participants' thoughts on the experience</p>
            <div class="container table">
                <div class="row">
                    <div class="col-3"><b>Participant 1</b></div>
                    <div class="col-3"><b>Participant 2</b></div>
                    <div class="col-3"><b>Participant 3</b></div>
                    <div class="col-3"><b>Participant 4</b></div>
                </div>
                <div class="row">
                    <div class="col-3">(After the experience) I can’t see clearly with the glasses. And I don’t know how far things are, and I had to like (moving the arms) to reach the space by my hands, and to touch how far the things are, using the hands to feel the distance.</div>

                    <div class="col-3">(Looking at the computer mouse with the glasses on) Oh that’s really weird, that’s like a weird reflection and it’s like cells. I don’t know it’s like a weird light reflects on here or something.
                    <br>(After the experience) It’s like looking through the shower glass. It’s like being like a fly or something. It’s hard to see stuff.</div>
           
                    <div class="col-3"> (Just put on the glasses) I don’t even know where the door is.
                    <br>(Searching for the door) I really... can’t see shit. 
                    <br>(Picked up the wrong object) What the fuck is this?
                    <br>(Pointing at the window) Oh I see the window.
                    <br>(After the experience) It’s like a different exp. I feel like what if I’m blind, that will be horrible. And exciting as well being like, and finding my glasses in the end it’s like yasss! A sense of achievement.</div>

                    <div class="col-3">(While wearing the glasses) I can’t see anything.
                    <br>(After the experience) I can’t even see anything. It’s kind of blocks. And it’s confusing. And it’s kind of like lab rat.</div>
               
                    </div>
            </div>
            
            

            <p><b>Activity 2 - Smell & touch</b> - smell 3 different odours and select one matches the most with the fabrics provided and why.</p>

            <carousel [noPause]="false" [interval]="0">
            <slide>
                <img src="/assets/blog/fmp13/smell.jpg" alt="first slide" style="display: block; width: 100%;">
            </slide>

            <slide>
            <img src="/assets/blog/fmp13/odours.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>3 odours – star anise, washing powder and mango perfume.</figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp13/fabrics.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>7 fabrics - rubber fabric, polyester, denim, hessian, pleated lame, metallic silk, PVC leatherette.</figcaption>        
            </slide>

            </carousel>

            <p><b>The results</b></p>

            <div class="container table">
                <div class="row">
                    <div class="col-3"></div>
                    <div class="col-3"><b>Odour 1 - star anise</b></div>
                    <div class="col-3"><b>Odour 2 - washing powder</b></div>
                    <div class="col-3"><b>Odour 3 - mango perfume</b></div>
                    
                </div>
                <div class="row">
                    <div class="col-3"><b>Participant 1</b></div>

                    <div class="col-3">
                    <img src="/assets/blog/fmp13/m.jpg" alt="first slide" style="display: block; width: 100%;">
                    <br>I think it smells like a cooking stuff. When I was cooking I always put something has this kind of smell. I think it’s a kind of leaves, and I choose the fabric that feels dried and rough.</div>
        
                    <div class="col-3"> 
                    <img src="/assets/blog/fmp13/s.jpg" alt="first slide" style="display: block; width: 100%;">
                    <br>I think it smells like the soap you use to wash your hands after going to the toilet. And I chose this fabric because it feels soft and kind of feels like tissue.</div>

                    <div class="col-3">
                    <img src="/assets/blog/fmp13/r.jpg" alt="first slide" style="display: block; width: 100%;">
                    <br>The smell is quite strong, and awful. And it also feels like a cheap perfume. So I just chose a fabric that has a cheap quality.</div>
                    
                </div>

                <div class="row">
                <div class="col-3"><b>Participant 2</b></div>

                <div class="col-3">
                <img src="/assets/blog/fmp13/h.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>I think it smells like a star anise, and I don’t know, this fabric kind of feels like the smell a little bit. I don’t know, the fabric kind of feel hard and the smell is like rough somehow, it’s not like smooth.</div>
    
                <div class="col-3"> 
                <img src="/assets/blog/fmp13/r.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>I feel like the smells like a candle and the surface of this fabric it’s kind of like a waxy feeling.</div>

                <div class="col-3">
                <img src="/assets/blog/fmp13/l.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>I feel like it’s like a concentrated, like chemically sort of smell. It’s kind of like artificial. So I picked this fabric because it feels like fake and artificial.</div>
                
                </div>

                <div class="row">
                <div class="col-3"><b>Participant 3</b></div>

                <div class="col-3">
                <img src="/assets/blog/fmp13/p.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>The smell is like liquoricely found in some sweets, I thought this fabric is pretty jazzy and it reminded of me the sweets that is like Liquorice tube, and its sort of texture like the same.</div>
    
                <div class="col-3"> 
                <img src="/assets/blog/fmp13/s.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>It smells like Febreze, the stuff that you spray on clothes or you put like fabric softener. So I thought this is sort of material I would spray Febreze on.</div>

                <div class="col-3">
                <img src="/assets/blog/fmp13/l.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>I don’t know.. I smelled it before but I don’t know what it is. I have no idea. I’m so confused. But it smells a bit like I’m thinking the stuff my parents use to spray the table and clean it. And this the idea is this shiny leather to clean the table. That’s why I chose this one.</div>
                
                </div>

                <div class="row">
                <div class="col-3"><b>Participant 4</b></div>

                <div class="col-3">
                <img src="/assets/blog/fmp13/l.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>It’s a quite fruity spirit kind of smell, and this fabric feels like the skin of the fruit.</div>
    
                <div class="col-3"> 
                <img src="/assets/blog/fmp13/s.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>It feels like the liquid you put in your washing machine, to make your clothes smoother. And this fabric is kind of smooth. </div>

                <div class="col-3">
                <img src="/assets/blog/fmp13/r.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>It’s not a pleasant smell, and this is not a pleasant fabric either so. And that smell is also a bit like alcohol, and this fabric is something you wanna wipe the puke up.</div>
                
                </div>
            </div>

            <p><b>Activity 3 - Sound & touch</b> - listen to a soundtrack and use play doh to express feelings.</p>

            <img src="/assets/blog/fmp13/doh.gif" alt="first slide" style="display: block; width: 100%;">

            <p><b>The results</b></p>

            <div class="container table">
            <div class="row">
                <div class="col-3"><b>Participant 1</b></div>
                <div class="col-3"><b>Participant 2</b></div>
                <div class="col-3"><b>Participant 3</b></div>
                <div class="col-3"><b>Participant 4</b></div>
                
            </div>
            <div class="row">
                <div class="col-3"><img src="/assets/blog/fmp13/mao.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>So I imagined I was in a cave, very deep and I’m in the middle of the cave. The whole environment is like it has a lot of holes and after raining there are lots of rain drop into the it. I felt lonely and cold in this environment. </div>

                <div class="col-3">
                <img src="/assets/blog/fmp13/mike.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>I feel like it was a pipe with like water dripping off the pipe and to like a puddle. I tried to make it like drip down from a pipe but then it’s kind of I’ll have to hold it so it’s not really...</div>
    
                <div class="col-3"> 
                <img src="/assets/blog/fmp13/sam.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>I also thought it was like a sound of an environment like a cave. I can sort of hear the coldness and humidity because of the echo and water dripping. That’s why I was slowly sticking these in it’s like rain drop.</div>

                <div class="col-3">
                <img src="/assets/blog/fmp13/harry.jpg" alt="first slide" style="display: block; width: 100%;">
                <br>I can hear water dripping, so this is like the water. There you go. It’s blue as well!</div>
                
            </div>
            </div>

            <h4>Brainsketching</h4>
            
            <p>After the multisensory storming activities, we asked participants to design a multisensory experience for the photo below. Despite of not knowing each other before the workshop and came from non-design background, the participants collaborated really well with each other through this approach. </p>

            <carousel [noPause]="false" [interval]="0">
            <slide>
                <img src="/assets/blog/fmp13/shadow2.jpeg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>The photograph they are designing for.</figcaption>
            </slide>

            <slide>
                <img src="/assets/blog/fmp13/workshop2.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>Participants developing each other's ideas.</figcaption>
            </slide>
            </carousel>
            
            <p><b>Round 1</b> - designing a multi-sensory experience for the photograph.</p>

            <carousel [noPause]="false" [interval]="0">
            <slide>
                <img src="/assets/blog/fmp13/round1a.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>I think the photo can be placed on the floor, and the people go in to the room there will be spot lights shooting on the photo. Like kind of like the shadow and the sunlights that were in the photo. The room is completely dark, the only light will be the spot lights. Some pictures might be in the dark, when people walk on the pictures, they might get the feeling of the artists - some people live in the dark while the others don’t, and they wanna fight for getting our from the darkness. And the sound you played earlier, one of the inspiration was actually came from that, it’s like the water dripping down, the spot lights also shooting to the picture to create the lonely feeling.</figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp13/round1b.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>I was thinking to have a dark room with spot lights on the top. And these kind of light metal kind of sheets suspended from the strings. So to approach the photo you’ll have to walk through these and it’s a little bit like a maze, you’ll get kind of a feeling of being trapped. And there will have a shadow are projected from the light, they’ll project the shadows on the ground. And you’ll come through them and see the photo. There will be like a cold kind of like metals so like you’ll go through them and touch them.</figcaption>
            </slide>

            <slide>
            <img src="/assets/blog/fmp13/round1c.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>I think it should be the same colours as the room, also the room should be cold. I think it should be shadows. So the lights are coming down, and the lights are blocked in the way that those shadows come from away from the photo. They are in the room by themselves organically. And the photos itself becomes sort of a real thing and maybe you can recreate that shadow on yourself. I was thinking it could be a breeze so it will be blend through the room to make it feel quite cold. Cos the photo feels quite cold to get you in to the mood of the photo. It feels like hiding herself, and the lights and shadow and the messiness of the room feel quite cold, and unfriendly and like sadness. There could be an ambient sound always going on. It could be sound of her and her room, sound like float boards or you know or a sound of a normal room. You know like background sound, like rain or something that you might hear inside her room. So you really be taken into her world, and maybe all the floor of the studio could be messy. It’s difficult to walk through because is in a mess, and the stuff might be obstacles, like she is trying to pass through the obstacles. And maybe it could be a section where those shadows on the wall being recreated, and you could do that yourself, recreate the photos and there’s a mirror that you can see yourself like she seeing herself.</figcaption>            
            </slide>

            <slide>
            <img src="/assets/blog/fmp13/round1d.jpg" alt="first slide" style="display: block; width: 100%;">
            <figcaption>So it will be in a dark room with spot light coming from the above. And there will a cell around the photo cos there was the shadow of the window at the picture. And there will be rubbish around the cell to create that messy background of the picture. And it will smell like an old library because I was looking at the picture I feel like it looks like an old studio.</figcaption>   
            </slide>

            </carousel>
            

            <p><b>Round 2</b> - developing each other's idea.</p>

            <carousel [noPause]="false" [interval]="0">
                <slide>
                    <img src="/assets/blog/fmp13/round2a.jpg" alt="first slide" style="display: block; width: 100%;">
                    <figcaption>So like harry said, his idea was at the cell bar. My idea is putting the picture in a bird cage. Because her room is quite small, also her power is quite small. I wanna use a bird as a metaphor. The picture could be in the bird cage and we can play some sound of a bird. We can use her concept but to improve her idea to make it stronger.</figcaption>
                </slide>

                <slide>
                <img src="/assets/blog/fmp13/round2b.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>I thought of this when you enter the room, visually you will see like a spots on the painting, the spot lights. And everything else is just complete darkness. So I thought maybe we can arrange them so they will like follow a path (clockwise), and you’ll naturally follow them. I thought at the start the photo will be normal, but when you follow them, they will progress, and at some point they will like being upside down or something. And eventually they would come back to the beginning, and just to kind of giving a sense of confusion of going on this pathway, and suppose to be some resolution of that but then automatically you will kind of come back. That feeling of completion of something. The photos are all the same and they are all on the floor like this but I just wanna arrange them in a circular path, and then change how you look at the photo.</figcaption>
                </slide>

                <slide>
                <img src="/assets/blog/fmp13/round2c.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>I love the idea of the metal things up here. I think that could be cold air blowing in and these metals would be quite cold to touch and you’ll have to push on them to get through. And it’s like a maze and last when you get to, it’s hanging and it’s clear. And you see through it And also all of these that are hanging they all create the shadow that was on the photo on the photo itself. That could be another light making the shadow projected on the photo. You don’t really know what’s going on, you don’t know what’s happening until you walk through all these and see the photo. Or maybe you could see the picture through a window.</figcaption>            
                </slide>

                <slide>
                <img src="/assets/blog/fmp13/round2d.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>Before you get into the room, I’ll put a cell bar here. So you’ll have to physically go into the cage. It’s like you’ll have to get into the photographer’s life or something. And then the photo will be the size of an average person. And then there will be a shadow next to the picture so that you can take picture with it. I just wanna recreate the scenario as realistic as possible, so there might be a table, some rubbish and something we can physically, actually recreate the picture with yourself in.</figcaption>   
                </slide>

            </carousel>

            <p><b>Round 3 & 4</b> - we introduced the constraint of space. They had to imagine that the work will be exhibited within the space of 1.5m x 1.5m. We asked participants to think what other issues might occur with their design  and thinking about how to resolve the constraints and limitations.</p>

            <carousel [noPause]="false" [interval]="0">
                <slide>
                    <img src="/assets/blog/fmp13/round3a.jpg" alt="first slide" style="display: block; width: 100%;">
                    <figcaption>So I think I have same idea with D, I’ll have a box but the inside is mirror. The image is here (little square). When people look into the box, the image can be there. Through the reflection, visitors might see many images in the space.</figcaption>
                </slide>

                <slide>
                <img src="/assets/blog/fmp13/round3b.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>I think it doesn’t have to change much, you go inside to the bird cage and it’s like the room. And I think it will be more claustrophobic because it’s so small. It kind of work in a small space. I was thinking to add the library smell, and because no limit to the vertical space you can have a ladders that you have in a library.</figcaption>
                </slide>

                <slide>
                <img src="/assets/blog/fmp13/round3c.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>I have a few ideas. Basically you would go in and you’ll be at the box. And there will be microscopes maybe, or different types of binoculars or whatever, and each one is fixed on one of the photos inside, so it’s like a black box with tiny images, and you will look through different types of zooming in devices and you’ll see each image. Or maybe on the tripod you’ll be able to move to each one. Or you can walk into a room, with a headphone playing some ambient and then with some sort of device you would look through the box to see the images. Or just be set up be exactly like that, you’ll be wearing something that you can only have a close vision, you gotta look around for the images. It could be different images putting at the space. So it could be an experience that you looking for the photos and focusing on the zoomed bit.</figcaption>            
                </slide>

                <slide>
                <img src="/assets/blog/fmp13/round3d.jpg" alt="first slide" style="display: block; width: 100%;">
                <figcaption>Because of the constraints of the space, obviously you cannot still recreate the experience you have. So I thought was to have a box here, and then you can put your head in. There will be two curtains to avoid __. So instead of you passing through the obstacles, the obstacles will be blocks on the photos but it still create the shadow in the picture.</figcaption>   
                </slide>

            </carousel>

            <h4>Work distribution</h4>
            <p><br>Workshop: Tiffany, Wan</p>
           
          


        </div>
    </div>








</div>
</app-blog>
`
})
export class Fmp13Component {}
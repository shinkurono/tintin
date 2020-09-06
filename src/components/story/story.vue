<template>
  <body>
    <link href='https://fonts.googleapis.com/css?family=Courgette' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Miniver' rel='stylesheet'>
    <div class="story">
      <div id="banner">
        <img id="storybanner" src="../../assets/topBanner.jpg" width="100%">
        <img id="ezlink" src="../../assets/ribbon1.png">
      </div>
      <div id='intro'>
        <div id="introtext">
          When we are ill, we see the doctor.  When we broke our glasses, we made a trip to fix it.  These tasks that we take for granted could be a challenging one for our needy seniors who are wheel-chair bound, ill, low income and with little/no family support.
        </div>
      </div>
      <div id="slideshow">
        <b-carousel
        id="carousel-1"
        :interval="4000"
        fade
        controls
        indicators
        background="black"
        img-width="20"
        img-height="30"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://i.imgur.com/S4v6lZE.jpg"><p>President Halimah Yacob handing out masks to Blossom Seeds' beneficiaries, supported by Youth Corps Singapore</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/774NWHz.jpg"><p>Beneficiary expressing gratitude to President Halimah for the gift of masks</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/9lZqaji.jpg"><p>Blossom Seeds Volunteers taking a selfie with President Halimah</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/tV50WJ8.jpg"><p>Group photo of Youth Corps Singapore members who came to help out</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/enV9on6.jpg"><p>Medical Escort & Transport Service supporting frail and needy seniors for medical appointments at hospitals</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/aNYWmzy.jpg"><p>Senior Management express heartfelt gratitude to President Halimah for gracing the event</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/MFQNaBN.jpg"><p>President Halimah engaging in small talk with beneficiaries</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/Kwjulno.jpg"><p>Blossom Seeds celebrates the successful handing out of masks to the elderly</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/kRqqgVW.jpg"><p>Distribution of daily necessities by the community to the the elderly</p></b-carousel-slide>
        </b-carousel>
      </div>
        <div id="GOH">
          <div id="GOHPhoto">
            <img src="../../assets/oykmp.png" id="OYK">
          </div>
          <div id="GOHIntro">
            <div id="GOHheader">Guest of Honour</div>
            Mr Ong Ye Kung<br>
            Minister for Transport and Grassroots Advisor to Sembawang GRC (Sembawang Central)
          </div><br>
          <div id="GOHmessage">
            In light of the ongoing Covid-19 pandemic, Blossom Seeds continue to assist these needy seniors by making essential services, such as their Medical Escort & Transport service (MET) readily available to them.
          </div>
        </div> 
      <div id ='aboutFD'>
        <div id="title">About Flag Day 2020<br>
        <img src='../../assets/3dscia.com.url.png' id = 'underline'></div>
      </div>
      <div id='streamevent'>
        <div id='streamtxt'>
        All our fundraising events have to be cancelled for 2020. For the first time, Blossom Seeds is organising an inaugural flag day to raise funds on social media.<br><br>
        Flag off time	: 7 November 2020, Saturday, 9am<br>
        Guest of Honour	: Mr Ong Ye Kung, <br>
        Minister for Transport & Adviser to Sembawang GRC (Sembawang Central)<br>
        Venue	: <a href='https://www.facebook.com/BlossomSeeds' target="_blank">Facebook</a>/Blossom Seeds
        </div>
      </div>
      <div id='register'>

      </div>
      <div id ='covidprep'>
        <div id="title">Support towards Needy Seniors in COVID-19<br>
        <img src='../../assets/3dscia.com.url.png' id = 'underline'></div>
      </div>
      <div id="covidmessage">
        Medical appointments and treatments could not be postponed.  For our senior beneficiaries who are already at risk of social isolation, COVID-19 puts them in greater risk.  Our service to the Seniors continued throughout the Circuit Breaker.
      </div>
      <div id="aboutUs">
        <div id='title'>Our Story<br>
        <img src='../../assets/3dscia.com.url.png' id = 'underline'></div>
        <div id='video'>
          <!-- <iframe id="videoiframe" width="80%" src="https://www.youtube.com/embed/23riEOmDOgM" frameborder="0" allowfullscreen></iframe> -->
        </div>
      </div>
      <div id='descriptions'>
        <div id='comments'>
          <div id='comment1'>
            <img class='comment' src='../../assets/comment1.png'>
            <div class='text'>
            "I will not fly (commit suicide) because don’t want to let them (BSL) down who take care of us since 2015"</div>
          </div>
          <div id='comment2'>
            <div class='text'>
            "Blossom Seeds has provided me with so much kindness and help. I no longer feel lonely and have more friends to talk to."</div>
            <img class='comment' src='../../assets/comment2.png'>
          </div>
          <div id='comment3'>
            <img class='comment' src='../../assets/comment3.png'>
            <div class='text'>
              "With the help of BSL, I am able to carry out my daily activities happily instead of being confined to my house. Without them, I will not be happy."
            </div>
          </div>
        </div>
        <div id='donationEffect'>
          <div id='effectHeader'>Your donations will help us :</div>
          <ul>
            <li>Supports our beneficiaries to receive treatment for their medical condition</li>
            <li>Supports our beneficiaries with necessities such as getting a haircut, fixing their glasses and annual spring cleaning</li>
            <li>Helps our beneficiaries to stay connected with the community and reduce the risk of social isolation and emotional distress</li>
            <li>Allows the family member to work and not disrupting the income stream of the already low-income family</li>
            <li>Encourages our beneficiaries to stay active by bringing them to our centre for activities or outings</li>
          </ul>
        </div>
      </div>
      <div id="aboutbsl">
        <div id="title">About Blossom Seeds Limited<br>
        <img src='../../assets/3dscia.com.url.png' id = 'underline'></div>
        <div id='aboutus'>
        <div id="abouttext">
          Singapore would not be where we are today without the strong foundation laid down by our seniors and it is with gratitude that we aspire to serve them in their golden years.
          <br><br>
          Blossom Seeds Limited (BSL) was initially set up by volunteers from BW Monastery (Singapore) to support the needy seniors.  The charity was registered as a company limited by guarantee in February 2013 and obtained charity status in April 2016 from the Ministry of Social and Family Development (MSF). It was later approved as an Institution of Public Character (IPC) on 1 February 2017. We also became a full member of National Council of Social Service (NCSS) in December 2016.
        </div>
      </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: 'App',
  display: "Our Story",
  props: {
    msg: String
  },
  data: function() {
    return {
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart(slide) {
      slide == slide;
      this.sliding = true
    },
    onSlideEnd(slide) {
      slide == slide;
      this.sliding = false
    }
  },
  // NOTE: Commented this out for performance:
  // - If we need to change a video after some date, it's better to change the
  //   source code & deploy again, rather than using JavaScript on client's
  //   browser to recompute the video src.
  // mounted: function () {
  //   var now = new Date();
  //   // //Change the date here, add more dates if required
  //   var deadline = new Date("August 20, 2020 00:00:00");
  //   if (now.valueOf() >= deadline.valueOf()) {
  //     var videoIframeTag = document.getElementById("videoiframe");
  //     videoIframeTag.src = "https://www.youtube.com/embed/23riEOmDOgM";
  //   }
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type:circle;
}
a {
  color: #42b983;
}

#bannerTitle {
  font-size: 7vw;
  font-family: 'Courgette';
  top:30%;
  font-weight: 900;
}
#bannerSubtitle {
  font-family: "Miniver";
  font-size: 4vw;
  top:70%;
  padding-bottom: 10vw;
}
#banner {
  text-align: center;
  position: relative;
  display: inline-block;
  width: 100%;
}

#banner .titletext {
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  left:0;
  right: 0;
  text-align: center;
}
#title {
  font-family:  'Courgette';
  font-weight: lighter;
  font-size: 3vw;
  text-align: center;
}
#underline {
  width: 40vw;
  height: 2vw;
  object-fit: cover;
  margin-bottom: 2vw;
}

#OYK {
  border-radius: 50%;
  width: 25vw;
  height: 25vw;
}

#GOHPhoto {
  display: inline-block;
  width: 42.5%;
  text-align: right;
  padding-right: 2.5vw;
}

#GOHIntro {
  display: inline-block;
  width: 45%;
  text-align: left;
  padding-left: 2.5vw;
  font-size: 1.75vw;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  position: relative;
  padding-bottom: 5vw;
  padding-top: 5vw;
}

#GOHheader {
  font-weight:650;
  padding-bottom: 1vw;
  font-size: 2vw;
}

#GOHmessage {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.75vw;
  width: 60%;
  margin-left: 19.5vw;
  margin-right: 19.5vw;
  padding-bottom: 3.5vw;
  text-align: justify;
  line-height: 3.5vw;
  padding-top:3vw;
}
#video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* The height of the item will now be 56.25% of the width. */
}
#video iframe {
  position: absolute;
  width: 80%;
  height: 100%;
  left: 10%;
  top: 0;
}
#bannerTop {
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 2vw;
  padding: 1vw;
}
#msflogo {
  height: 30vh;
  width: auto;
  object-fit: cover;
  margin: 1vw;
  border: 2px solid black;
}

#aboutFD {
  padding-top: 2.5vw;
}

.comment {
  width:15vw;
  height:15vw;
  border-radius: 50%;
  display: inline-block;
}

#comments .text {
  display: inline-block;
  width: 60%;
  padding-left: 2vw;
  padding-right: 2vw;
}
#comments {
  display: inline-block;
  padding-left:6vw;
  width: 50%;
  margin-bottom: 2vw;
  margin-top: 4vw;
}
#donationEffect {
  display: inline-block;
  position: absolute;
  width: 50%;
  font-size: 2vw;
  line-height: 4vw;
  padding-right: 6vw;
}

#comment1 .text {
  margin-left: 2vw;
  padding-top: 2vw;
}

#comment1 .comment {
  margin-top: -4vw;
}

#comment2 .text {
  padding-top: 4vw;
}

#comment2 .comment {
  margin-top: -6vw;
}

#comment3 .text {
  padding-top: 4vw;
  margin-left: 2vw;
}

#comment3 .comment {
  margin-top: -8vw;
}

#slideshow {
  padding-left: 10vw;
  padding-right: 10vw;
}

#carousel-1 .carousel-item{
  height: auto;
  width: 90vw;
}

#comments .text {
  font-size: 1.5vw;
}

#effectHeader {
  font-weight: 625;
  margin-bottom: 1vw;
}

#donationEffect li{
  font-size: 1.5vw;
}

#covidprep {
  margin-top: 2vw;
}

#carousel-1 p {
  position: absolute;
  left: 20%;
  bottom: 5%;
  text-align: center;
  width: 60%;
  font-size: 1.5vw;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.01px;
  font-weight: 525;
  background: rgb(138,43,226, 0.3);
}

body {
  background-color: #f1f1f1;
}

a:hover {
  text-decoration: none;
  color:#428e83;
}

#intro {
  margin-left: 9.5vw;
  margin-right: 9.5vw;
  padding-top: 2.5vw;
  padding-bottom: vw;
}

#introtext {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.75vw;
  text-align: justify;
  line-height: 3vw;
  padding-bottom: 3vw;
}

#aboutus {
  margin-left: 17.5vw;
  margin-right: 17.5vw;
  padding-top: 2.5vw;
  padding-bottom: 2.5vw;
}

#abouttext {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.75vw;
  text-align: justify;
  line-height: 3.2vw;
}

#aboutbsl #title {
  margin-top:3vw;
}

#streamevent {
  text-align: center
}
#streamtxt{
  font-size: 2vw;
  padding-left: 19.5vw;
  padding-right: 19.5vw;
  text-align:justify;
  line-height: 3.5vw;
}

#covidmessage {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.75vw;
  width: 60%;
  margin-left: 19.5vw;
  margin-right: 19.5vw;
  padding-bottom: 3.5vw;
  text-align: justify;
  line-height: 3.5vw;
}

#ezlink {
  height:10vw;
  display: inline-block;
}

#monastery {
  height:20vw;
  padding-left: 10vw;
}

#partnersimg {
  padding-left: 15.5vw;
  padding-right:15.5vw;
}

#ezlink {
  height: 15%;
  width: 70%;
}
</style>
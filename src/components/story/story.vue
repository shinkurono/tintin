<template>
  <body>
    <link href='https://fonts.googleapis.com/css?family=Courgette' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Miniver' rel='stylesheet'>
    <div class="story">
      <div id="banner">
        <img id="storybanner" src="../../assets/storybanner.png" width="100%">
        <div id="bannerTitle" class="titletext">
          Blossom Seeds
          <br>Flag Day 2020
        </div>
        <div id="bannerSubtitle" class="titletext">~A Compassionate Journey Made Possible~</div>
      </div>
      <div id ='covidprep'>
        <div id="title">Preparation against COVID-19 Pre-Circuit Breaker<br>
        <img src='../../assets/3dscia.com.url.png' id = 'underline'></div>
      </div>
      <div id="slideshow">
        <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ababab"
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
        <b-carousel-slide img-src="https://i.imgur.com/E6B8NVh.jpg"><p>Senior Management express heartfelt gratitude to President Halimah for gracing the event</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/f4mrcnp.jpg"><p>President Halimah engaging in small talk with beneficiaries</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/RiEyFFG.jpg"><p>Blossom Seeds celebrates the successful handing out of masks to the elderly</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/yuta9Kk.jpg"><p>Distribution of daily necessities by the community to the the elderly</p></b-carousel-slide>
        </b-carousel>
      </div>
        <div id ='aboutFD'>
          <div id="title">About Flag Day 2020<br>
          <img src='../../assets/3dscia.com.url.png' id = 'underline'></div>
        </div>
        <div id="GOH">
          <div id="GOHPhoto">
            <img src="../../assets/oykmp.png" id="OYK">
          </div>
          <div id="GOHIntro">
            <div id="GOHheader">Guest of Honour</div>
            Mr Ong Ye Kung<br>
            Minister of Transport and Grassroots Advisor to Sembawang GRC (Sembawang Central)
          </div><br>
          <img src='../../assets/flowerside.png' id='flowerleft'>
          <div id="GOHmessage">
            In light of the ongoing Covid-19 pandemic Blossom Seeds has not forgotten the vulnerable elderly community in need of support. Through our fund-raising campaign Flag Day 2020, we wish to continue assisting needy seniors during this trying time by making essential services, such as our Medical Escort & Transport (MET) service readily available to them. We greatly appreciate your support in our continued efforts to keep the elderly in our community safe, healthy and happy!
          </div>
          <img src='../../assets/flowerside.png' id='flowerright'>
        </div> 
      <div id="stream">
        Saturday, 7 November 2020 @ 9am<br>
        Join us for our livestream on <a href='https://www.facebook.com/BlossomSeeds' target="_blank">Facebook</a>
      </div>
      <div id="aboutUs">
        <div id='title'>About Blossom Seeds<br>
        <img src='../../assets/3dscia.com.url.png' id = 'underline'></div>
        <div id='video'></div>
      </div>
      <div id='descriptions'>
        <div id='comments'>
          <div id='comment1'>
            <img class='comment' src='../../assets/comment1.png'>
            <div class='text'>
            "I will not fly (commit suicide) because don’t want to let them (BLS) down who take care of us since 2015"</div>
          </div>
          <div id='comment2'>
            <div class='text'>
            "Blossom Seeds has provided me with so much kindness and help. I no longer feel lonely and have more friends to talk to."</div>
            <img class='comment' src='../../assets/comment2.png'>
          </div>
          <div id='comment3'>
            <img class='comment' src='../../assets/comment3.png'>
            <div class='text'>
              "With the help of BLS, I am able to carry out my daily activities happily instead of being confined to my house. Without them, I will not be happy."
            </div>
          </div>
        </div>
        <div id='donationEffect'>
          <div id='effectHeader'>Your donations will help us :</div>
          <ul>
            <li>Make the Medical Escort & Transport services readily available to transport seniors to hospitals for medical appointments</li>
            <li>Conduct events such as goodie bag distributions to hand out essential items such as groceries and other househild items to needy seniors</li>
            <li>Introduce a wider range of activities and workshops to help the elderly maintain their physical health and mental well-being</li>
          </ul>
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
  mounted: function () {
    var video;
    var now = new Date();
    //Change the date here, add more dates if required
    var deadline = new Date("August 20, 2020 00:00:00");
    if (now.valueOf() < deadline.valueOf()) {
      video =
      //Change the links of the video here
        '<iframe width="750vw" height="425vw" src="https://www.youtube.com/embed/UGPrHj1nPt0" frameborder="0" allowfullscreen></iframe>';
    } else {
      video =
      //Change the links of the video here
        '<iframe width="750vw" height="425vw" src="https://www.youtube.com/embed/23riEOmDOgM" frameborder="0" allowfullscreen></iframe>';
    }
    //Add additional links if needed
    var videoTag = document.getElementById("video");
    videoTag.innerHTML = video;
  },
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
  height: 5vw;
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
  padding-bottom: 15vw;
}

#GOHheader {
  font-weight:650;
  padding-bottom: 1vw;
  font-size: 2vw;
}

#flowerleft {
  display:inline-block;
  width:10%;
}

#GOHmessage {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.75vw;
  width: 60%;
  margin-left: 9.5vw;
  margin-right: 9.5vw;
  padding-bottom: 5vw;
  text-align: justify;
  line-height: 3.5vw;
  display: inline-block;
}

#flowerright {
  display: inline-block;
  width:10%;
}

#stream {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 3vw;
  text-align: center;
  padding-bottom: 5vw;
  margin-top:-22.5vw;
}

#video {
  text-align: center;
  padding-bottom: 2.5vw;
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

#storybanner {
  filter: opacity(30%);
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
  max-height: 80vh;
  height: auto;
  width: 90vw;
  top:-10vh;
}

#comments .text {
  font-size: 1.5vw;
}

#effectHeader {
  font-weight: 625;
  margin-bottom: 3vw;
}

#donationEffect li{
  margin-bottom: 2vw;
}

#covidprep {
  margin-top: 2vw;
}

#carousel-1 p {
  position: absolute;
  left:11.75%;
  text-align: center;
  width: 60%;
  font-size: 1.25vw;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.01px;
  font-weight: 525;
  background: rgb(138,43,226, 0.3);
}

body {
  background-color: #ebebeb;
}

a:hover {
  text-decoration: none;
  color:#428e83;
}
</style>
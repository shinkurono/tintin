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
        <b-carousel-slide img-src="https://i.imgur.com/S4v6lZE.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/774NWHz.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/9lZqaji.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/tV50WJ8.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/enV9on6.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/E6B8NVh.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/f4mrcnp.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/RiEyFFG.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/yuta9Kk.jpg"></b-carousel-slide>
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
            Minister of Education and Grassroots Advisor to Sembawang GRC
          </div>
          <div id="GOHmessage">
            In light of the ongoing Covid-19 Pandemic, Blossom Seeds has not forgotten those in need and we are currently driving a fund-raising campaign for the xxx. We hope to...
          </div>
        </div> 
      <div id="stream">
        Saturday, 7 November 2020 @ 9am<br>
        Join us for our livestream on Facebook
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
            <div id='text'>
            "I will not fly (commit suicide) because don’t want to let them (BLS) down who take care of us since 2015"</div>
          </div>
          <div id='comment2'>
            <div id='text'>
            "Blossom Seeds has provided me with so much kindness and help. I no longer feel lonely and have more friends to talk to."</div>
            <img class='comment' src='../../assets/comment2.png'>
          </div>
          <div id='comment3'>
            <img class='comment' src='../../assets/comment3.png'>
            <div id='text'>
              "With the help of BLS, I am able to carry out my daily activities happily instead of being confined to my house. Without them, I will not be happy."
            </div>
          </div>
        </div>
        <div id='donationEffect'>
          Your donations will help us...<br>
          <ul>
            <li>Make the MET services readily available to transport seniors to hospitals for medical appointments</li>
            <li>Conduct events such as goodie bag distributions to hand out essential items such as groceries and other househild items to needy seniors</li>
          </ul>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
var video = '<iframe width="750vw" height="425vw" src="https://www.youtube.com/embed/kKybPEgRkIc" frameborder="0" allowfullscreen></iframe>';
var date = new Date();
var deadline = new Date('August 09, 2020 00:00:00');
if (date.getUTCMonth() >= deadline.getMonth() 
&& date.getUTCFullYear() >= deadline.getFullYear() 
&& date.getUTCDate() >= deadline.getDate()) {
  video = '<iframe width="750vw" height="425vw" src="https://www.youtube.com/embed/lMZfAJfYoFY" frameborder="0" allowfullscreen></iframe>';
}
function loaded() {
  var res = document.getElementById('video');
  res.insertAdjacentHTML('beforeend', video);
}
document.addEventListener("DOMContentLoaded", loaded);
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
  }
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
  width: 50%;
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

#GOHmessage {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.5vw;
  width: 80%;
  padding-left: 20vw;
  padding-bottom: 5vw;
}

#stream {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 3vw;
  text-align: center;
  padding-bottom: 5vw;
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

#comments #text {
  display: inline-block;
  width: 60%;
  padding-left: 2vw;
  padding-right: 2vw;
}
#comments {
  display: inline-block;
  padding-left:1vw;
  width: 50%;
  margin-bottom: 2vw;
  margin-top: 4vw;
}
#donationEffect {
  display: inline-block;
  position: absolute;
  width: 50%;
  font-size: 2.5vw;
  line-height: 4vw;
}

#comment1 #text {
  margin-left: 2vw;
  padding-top: 2vw;
}

#comment1 .comment {
  margin-top: -4vw;
}

#comment2 #text {
  padding-top: 4vw;
}

#comment2 .comment {
  margin-top: -6vw;
}

#comment3 #text {
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
</style>
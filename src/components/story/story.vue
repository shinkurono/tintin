<template>
  <body>
    <link href='https://fonts.googleapis.com/css?family=Courgette' rel='stylesheet'>
    <link href='https://fonts.googleapis.com/css?family=Miniver' rel='stylesheet'>
    <div class="story">
      <div id="banner">
        <div id="bannerTitle">
          Blossom Seeds
          <br>Flag Day 2020
        </div>
        <div id="bannerSubtitle">~A Compassionate Journey Made Possible~</div>
      </div>
      <div id="slideshow">
        <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
        <!-- Text slides with image -->
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            >
          </template>
        </b-carousel-slide>

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
            a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide>
      </b-carousel>
        </div>
        <div id ='aboutFD'>
          <div id="title">About Flag Day 2020<br>
          <img src='../../assets/3dscia.com.url.png' id = 'underline'></div>
        </div>
        <div id="GOH">
          <div id="GOHPhoto">
            <img src="../../assets/Ong-Ye-Kung.jpg" id="OYK">
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
        </div>
        <div id='donationEffect'>
        </div>
      </div>
      <div id='bottomBanner'>
        <div id='bannerTop'>Administered By:
        </div>
        <img src="../../assets/msflogo.jpg" id="msflogo">
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
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#bannerTitle {
  font-size: 7vw;
  font-family: 'Courgette';
  padding-top: 10vw;
  padding-bottom: 1vw;
  font-weight: 900;
}
#bannerSubtitle {
  font-family: "Miniver";
  font-size: 4vw;
  padding-bottom: 10vw;
}
#banner {
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
  width: 20vw;
  height: 25vw;
  border: 1px solid black;
}

#GOHPhoto {
  display: inline-block;
  width: 40%;
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

#bottomBanner {
  height: 40vh;
  background-color:blueviolet;
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
</style>
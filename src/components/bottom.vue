<template>
    <div id='bottomBanner'>
        <div id='bannerTop'>
            <div class="header-tabs">
                <span class="header-tab"><router-link to="/story"><a>Our Story</a></router-link></span>            
                <span class="header-tab" id='donate'><router-link to="/donate"><a>Donate</a></router-link></span>
                <span class="header-tab"><router-link to="/contact"><a>Contact Us</a></router-link></span>
                <span class="header-tab"><a href='https://www.blossomseeds.sg/'>Our Home Website</a></span>
            </div>
        </div>
        <img src="../assets/bottom.png" id="msflogo">
        <div id='othercontact'>+65 6259-8614   •   105 Canberra Street, #02-01/06, S(750105)   •   UEN: 201304904N</div>
    </div>
</template>

<script>
export default {
  name: 'App',
  display:"favePay",
  props: {
    msg: String
  },
  /*data: function(){
      return "our contact info"
  }*/
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
span {
    padding: 1%;
    padding-top: 1vh;
    display: inline-block;
    text-decoration: none;
}
a {
    color: #ffffff;
    font-size: 1.75vw;
    text-decoration: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
}

a:hover {
    color:#ababab;
    text-decoration: none;
}

#bottomBanner {
  background-color:blueviolet;
}

#othercontact {
    color: #ffffff;
    font-size: 1.75vw;
    text-decoration: none;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
    padding-top: 1vw;
    padding-bottom: 1vw;
}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>
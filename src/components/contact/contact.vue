<template>
  <div class="ourcontact">
    <div id='contactTitle'>Contact Us</div>
    <div id='contactinfo'>
      <h1>Center General Hotline :</h1>
      <div class='text'>+65 6259 8614</div>
      <h1>Centre Service Hours :</h1>
      <div class='text'>(Mon- Fri) 9am - 6pm</div>
      <h1>Our centres</h1>
      <div class='text'><a href='https://www.blossomseeds.sg/contact-us'>Go to our main website to see where our centres are loacted!</a></div>
    </div>
    <div id='emailinfo'>
      <h1>Facebook :</h1>
      <div class='text'><a href="https://www.facebook.com/BlossomSeeds">Blossom Seeds</a></div>
      <h1>CEO, Ms Ong Siew Chin :</h1>
      <div class='text'>siewchin.ong@blossomseeds.sg</div>
      <h1>Director, Cheng Yau Tong :</h1>
      <div class='text'>yautong.cheng@blossomseeds.sg</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  display:"Contact Us",
  props: {
    msg: String
  },
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

#places {
  width:50%;
  text-align: left;
  padding-left: 3vw;
}

h1 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 2.5vw;
  padding-bottom: 2vw;
  text-align: left;
  padding-left: 3vw;
}

#contactTitle {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 4.5vw;
  text-align: left;
  margin: 3vw;
}

.text {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 2vw;
  font-weight: 700;
  text-align: left;
  padding-left: 4.5vw;
  padding-bottom: 3vw;
  color:darkmagenta;
}

#contactinfo {
  width:50%;
  display: inline-block;
}

.ourcontact {
  text-align: left;
}

#emailinfo {
  width:50%;
  display: inline-block;
  position:absolute;
}
</style>
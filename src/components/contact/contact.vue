<template>
  <div class="ourcontact">
    <div id='contactTitle'>Contact Us</div>
    <div id='places'>
      <h1>Address:</h1>
      <p>Main Office:</p>
      <div class='address'>105 Canberra Street, #02-01/06, Singapore 750105</div>
      <div class='directions'>Take Bus 883 from Sembawang or Yishun MRT Station</div>
      <p>Aljunied Branch Office:</p>
      <div class='address'>12 Aljunied Road, KH Plaza, #03-02, Singapore, 389801</div>
      <div class='directions'>Within 5 mins walking distance from Aljunied MRT Station</div>
      <p>Woodlands Branch Office:</p>
      <div class='address'>1 Woodlands drive 16, BW Monastery, Singapore 737764</div>
      <div class='directions'>Take Bus 901 from Woodlands MRT Station</div>
    </div>
    <div id='map'>

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
  font-size: 4vw;
  padding-bottom: 2vw;
}

#contactTitle {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 6vw;
  text-align: left;
  margin: 3vw;
  padding-bottom: 2vw;
}

p {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  margin-bottom: 1vw;
  font-size: 2vw;
  color: white;
  background-color: darkmagenta;
  padding: 0.25vw;
}

.address {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size:2vw;
  font-weight: 600;
  padding-bottom: 0.5vw;
}

.directions {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 1.5vw;
  margin-bottom:1vw;
}

#map {
  width: 50%;
}
</style>
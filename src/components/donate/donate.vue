<template>
  <div>
    <div class="donate">
      <img alt="Donation amount" src="../../assets/BlossomMET.jpeg" height="500px" width="100%">
      <div id ="current" class="text">
        We aim to raise a total of
      </div>
      <div id = "amount" class = "text">${{amount}}</div>
    </div>
    <options></options>
  </div>
</template>

<script>
import options from './options';
//Change this for the total amount donated thus far
var amount = 600000;
var amountString = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export default {
  name: 'App',
  display: "Donate to us!",
  props: {
    msg: String
  },
  data : function() {
    return {
      amount: amountString,
    }
  },
  components: {
    options : options,
  }
  /*data : function() {
      return "Here is how to donate"
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.donate {
  position: relative;
  display: inline-block;
  width:100%;
}
.donate .text{
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  left:0;
  right: 0;
  text-align: center;
  width: 75%;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
#current {
  font-size: 4.5vw;
  top: 25%;
  color: white;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 1.5px;
}

#amount {
  top: 60%;
  font-size: 7vw;
  color:purple;
  font-weight: bold;
  -webkit-text-stroke: white;
  -webkit-text-stroke-width: 1.5px;
}


img {
  object-fit:cover;
  filter: grayscale(70%) blur(3px);
}

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

body {
  background-color: #ebebeb;
}
</style>
<template>
  <div class="paylah">
    <div class="QRcode">
        <div id="title">PayNow</div>
    </div>
    <div id="QR">
        <img alt="PayNow QR code" src="../../assets/paynow.png">
    </div>
    <div class="rebate">
        <div id="title">Tax Rebate</div>
    </div>
    <div id="rebateInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  display:"PayLah",
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
.QRcode {
    text-align: left;
}
.rebate {
    text-align: left;
}
#title {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 3vw;
    text-align: center;
    padding: 2.7vw;
    margin-top: 4vw;
    margin-bottom: 4vw; 
    display: inline-block;
    width: 35%;
    background-color: plum;
    border: 0.1vw;
    border-color: black;
    border-style: solid;
}
img {
  width: 30%;
  height: auto;
  border: 0.1vw;
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
</style>
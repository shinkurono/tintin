<template>
  <div class="wechat">
    <div class="QRcode">
        <div id="title">WeChat</div>
    </div>
    <div id="QR">
        <img alt="WeChat QR code" src="../../assets/wechat.png">
    </div>
    <div class="rebate">
        <div id="title">Tax Rebate</div>
    </div>
    <div id="rebateInfo">Please help us fill in the form by clicking on the link below to help us keep track of the total donated amount! If you need a tax rebate, do indicate in the last question of the form as well. Thank you!</div>
    <a href='https://forms.gle/uYRjhNgYCVnvAbWz7' id='formLink'  target="_blank">Donation and Contact Information</a>
    <br><br><br>
  </div>
</template>

<script>
export default {
  name: 'App',
  display:"WeChat",
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

a:hover {
  text-decoration: none;
  color:#428e83;
}
.wechat {
  background-color: #ebebeb;
}

#rebateInfo {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 2vw;
  width: 85%;
  padding-left:15vw;
  padding-bottom: 2vw;
}

#formLink {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 2.5vw;
  font-weight: 750;
}
</style>
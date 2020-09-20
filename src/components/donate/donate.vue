<template>
  <div>
    <div class="donate">
      <div id="languageSwitcher">
        <span id="cnbutton" class="langbutton">中文</span>
        <span id="enbutton" class="langbutton">English</span>
      </div>
      <div style="overflow:hidden;">
        <img id="img-background" alt="Donation amount" src="../../assets/BlossomMET.jpeg" />
      </div>
      <div id="text-aim" class="text"></div>
      <div id="amount" class="text">${{amount}}</div>
    </div>
    <div id="div-for-qr-code">
      <span id="text-for-qr-code"></span>
      <!-- <br />
      <span style>Please proceed to with a donation option, fill in the form below and submit.</span>-->
    </div>
    <!-- <div>
      <table style="margin:auto;">
        <tr>
          <td style="text-align:center;padding:2vw;">
            <img class="img-qr-code" style="width:35vw;" src="../../assets/paynow.png" />
            <br />
            <span style="font-size: 4vw;">PayNow</span>
          </td>
          <td style="text-align:center;padding:2vw;">
            <img class="img-qr-code" style="width:35vw;" src="../../assets/favepay.png" />
            <br />
            <span style="font-size: 4vw;">favePay</span>
          </td>
        </tr>
        <tr>
          <td style="text-align:center;">
            <img class="img-qr-code" style="width:35vw;" src="../../assets/qrcode_ezlink.png" />
            <br />
            <span style="font-size: 4vw;">EZ-Link</span>
          </td>
          <td style="text-align:center;">
            <img class="img-qr-code" style="width:35vw;" src="../../assets/wechat.png" />
            <br />
            <span style="font-size: 4vw;">WeChat</span>
          </td>
        </tr>
        <tr>
          <td style="text-align:center;">
            <a href="https://www.giving.sg/blossom-seeds-limited_6157389/journeymadepossible">
              <span style="font-size: 4vw;">Giving.sg</span>
            </a>
          </td>
        </tr>
      </table>
    </div>-->

    <!-- <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSeDEoWdqONgXk5paIfXW7Meb8xp8J71rDbTo8dFzq-khzaWUQ/viewform?embedded=true"
      width="100%"
      height="1320"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >Loading...</iframe>-->
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdr2mlTVXj31ZFHmxvfzj8B_LHzYqewLNO9_nY0Gdtk5YLYiw/viewform?embedded=true"
      width="100%"
      height="4600"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >Loading…</iframe>
    <!-- <options></options> -->
  </div>
</template>

<script>
// import options from "./options";
//Change this for the total amount donated thus far
var amount = 600000;
var amountString = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function translate() {
  const lg = localStorage.getItem("language");
  if (lg == "en") {
    document.getElementById("enbutton").style.fontWeight = "bold";
    document.getElementById("enbutton").style.backgroundColor =
      "lightgoldenrodyellow";
    document.getElementById("cnbutton").style.fontWeight = "normal";
    document.getElementById("cnbutton").style.backgroundColor = "transparent";
    document.getElementById("text-our-story").innerHTML = "Our Story";
    document.getElementById("text-donate").innerHTML = "Donate";
    document.getElementById("text-contact-us").innerHTML = "Contact Us";
    document.getElementById("text-our-home-website").innerHTML =
      "Our Home Website";
    document.getElementById("text-aim").innerHTML =
      "We aim to raise a total of";
    document.getElementById("text-for-qr-code").innerHTML =
      "** Note: For QR code DONATION, please work in buddy with computer or a partner. **";
  } else {
    document.getElementById("cnbutton").style.fontWeight = "bold";
    document.getElementById("cnbutton").style.backgroundColor =
      "lightgoldenrodyellow";
    document.getElementById("enbutton").style.fontWeight = "normal";
    document.getElementById("enbutton").style.backgroundColor = "transparent";
    document.getElementById("text-our-story").innerHTML = "我们的故事";
    document.getElementById("text-donate").innerHTML = "捐款";
    document.getElementById("text-contact-us").innerHTML = "联络我们";
    document.getElementById("text-our-home-website").innerHTML = "福善的主页";
    document.getElementById("text-aim").innerHTML = "我们的筹款目标";
    document.getElementById("text-for-qr-code").innerHTML =
      "** 注意：如果用二维码捐款，请使用电脑或让朋友帮忙扫码。**";
  }

  document.getElementById(
    "text-bottom-our-story"
  ).innerHTML = document.getElementById("text-our-story").innerHTML;
  document.getElementById(
    "text-bottom-donate"
  ).innerHTML = document.getElementById("text-donate").innerHTML;
  document.getElementById(
    "text-bottom-contact-us"
  ).innerHTML = document.getElementById("text-contact-us").innerHTML;
}

export default {
  name: "App",
  display: "Donate to us!",
  props: {
    msg: String,
  },
  data: function () {
    return {
      amount: amountString,
    };
  },
  // components: {
  //   options: options,
  // },
  /*data : function() {
      return "Here is how to donate"
  }*/
  mounted: function () {
    var creatbtnCn = document.querySelector("#cnbutton");
    var creatbtnEn = document.querySelector("#enbutton");
    creatbtnCn.addEventListener("click", function () {
      localStorage.setItem("language", "cn");
      translate();
    });
    // button language english
    creatbtnEn.addEventListener("click", function () {
      localStorage.setItem("language", "en");
      translate();
    });

    translate();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* HACK!! */
.langbutton {
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  padding-left: 1vw;
  padding-right: 1vw;
  margin-right: 1vw;
  background-color: lightgoldenrodyellow;
}
#languageSwitcher {
  position: absolute;
  z-index: 10;
  font-size: 2vw;
  padding-right: 5%;
  padding-bottom: 10px;
  transform: translate(80vw, -120%);
}

.donate {
  position: relative;
  display: inline-block;
  width: 100%;
}
.donate .text {
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
  width: 75%;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
#text-aim {
  font-size: 4.5vw;
  top: 25%;
  color: white;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 1.5px;
}

#amount {
  top: 60%;
  font-size: 7vw;
  color: purple;
  font-weight: bold;
  -webkit-text-stroke: white;
  -webkit-text-stroke-width: 1.5px;
}

#div-for-qr-code {
  margin-left: 9.5vw;
  margin-right: 9.5vw;
  padding-top: 2.5vh;
  padding-bottom: 2.5vh;
  text-align: center;
}
#text-for-qr-code {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  /* font-size: 1.75vw; */
  font-size: large;
  font-weight: bold;
  color: darkblue;
  /* line-height: 3vw; */
  /* padding-bottom: 3vw; */
}

/* .img-qr-code {
  width: 30%;
  height: auto;
  border: 0.1vw;
} */

#img-background {
  width: 100%;
  height: auto;
  margin-top: -20%;
  margin-bottom: -20%;
  object-fit: cover;
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
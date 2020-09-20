<template>
  <div class="ourcontact">
    <div id="languageSwitcher">
      <span id="cnbutton" class="langbutton">中文</span>
      <span id="enbutton" class="langbutton">English</span>
    </div>
    <div id="text-contact-title"></div>
    <div id="contactinfo">
      <h1 id="text-general-hotline-title"></h1>
      <div class="text">+65 6259 8614</div>
      <h1 id="text-service-hours-title"></h1>
      <div id="text-service-hours" class="text"></div>
      <h1 id="text-our-centres-title"></h1>
      <div class="text">
        <a id="text-our-centres" href="https://www.blossomseeds.sg/contact-us"></a>
      </div>
    </div>
    <div id="emailinfo">
      <h1 id="text-facebook-title"></h1>
      <div class="text">
        <a id="text-facebook" href="https://www.facebook.com/BlossomSeeds"></a>
      </div>
      <h1 id="text-ceo-title"></h1>
      <div class="text">siewchin.ong@blossomseeds.sg</div>
      <h1 id="text-director-title"></h1>
      <div class="text">yautong.cheng@blossomseeds.sg</div>
    </div>
  </div>
</template>

<script>
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
    document.getElementById("text-contact-title").innerHTML = "Contact Us";
    document.getElementById("text-general-hotline-title").innerHTML =
      "Center General Hotline:";
    document.getElementById("text-service-hours-title").innerHTML =
      "Centre Service Hours:";
    document.getElementById("text-service-hours").innerHTML =
      "(Mon- Fri) 9am - 6pm";
    document.getElementById("text-our-centres-title").innerHTML =
      "Our Centres:";
    document.getElementById("text-our-centres").innerHTML =
      "Centre list in the main website";
    document.getElementById("text-facebook-title").innerHTML = "Facebook:";
    document.getElementById("text-facebook").innerHTML = "Blossom Seeds";
    document.getElementById("text-ceo-title").innerHTML =
      "CEO, Ms Ong Siew Chin:";
    document.getElementById("text-director-title").innerHTML =
      "Director, Cheng Yau Tong:";
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
    document.getElementById("text-contact-title").innerHTML = "联络我们";
    document.getElementById("text-general-hotline-title").innerHTML =
      "中心热线：";
    document.getElementById("text-service-hours-title").innerHTML =
      "中心服务时间：";
    document.getElementById("text-service-hours").innerHTML =
      "(星期一至五) 早上六点 至 下午六点";
    document.getElementById("text-our-centres-title").innerHTML = "服务中心：";
    document.getElementById("text-our-centres").innerHTML =
      "福善主页的中心目录";
    document.getElementById("text-facebook-title").innerHTML = "面簿：";
    document.getElementById("text-facebook").innerHTML = "福善";
    document.getElementById("text-ceo-title").innerHTML =
      "首席执行官翁秀卿女士：";
    document.getElementById("text-director-title").innerHTML =
      "主管郑有众先生：";
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
  display: "Contact Us",
  props: {
    msg: String,
  },
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
  width: 50%;
  text-align: left;
  padding-left: 3vw;
}

h1 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 2.5vw;
  padding-bottom: 2vw;
  text-align: left;
  padding-left: 3vw;
}

#text-contact-title {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 4.5vw;
  text-align: left;
  margin: 3vw;
}

.text {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 2vw;
  font-weight: 700;
  text-align: left;
  padding-left: 4.5vw;
  padding-bottom: 3vw;
  color: darkmagenta;
}

#contactinfo {
  width: 50%;
  display: inline-block;
}

.ourcontact {
  position: relative;
  display: inline-block;
  width: 100%;
}

#emailinfo {
  width: 50%;
  display: inline-block;
  position: absolute;
}

.ourcontact {
  background-color: #ebebeb;
  background-image: url("../../assets/contactbg.png");
}
</style>
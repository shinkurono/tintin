<template>
<body>
  <link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css?family=Miniver" rel="stylesheet" />

  <div class="story">
    <div id="languageSwitcher">
      <span id="cnbutton" class="langbutton">中文</span>
      <span id="enbutton" class="langbutton">English</span>
    </div>
    <div id="donate-button" class="overlay">
      <a id="donate-button-a" href="/donate">
        <img id="donate-image-cn" class="donate-image" src="../../assets/image_donate_now_cn.png" />
        <img id="donate-image-en" class="donate-image" src="../../assets/image_donate_now_en.png" />
      </a>
    </div>
    <div id="banner">
      <img id="storyBannerEn" src="../../assets/topBanner-en.jpg" width="100%" />
      <img id="storyBannerCn" src="../../assets/topBanner-cn.jpg" width="100%" />
      <div id="div-for-qr-code">
        <span id="text-for-qr-code"></span>
      </div>
      <!-- https://www.w3schools.com/howto/howto_css_image_text.asp -->
      <div style="position:relative;text-align:center;color:white;">
        <img style="width:70%;height:15%;" src="../../assets/ribbon-blank.png" />
        <div
          id="text-ribbon-1"
          style="position:absolute;top:33%;left:50%;transform:translate(-50%,-50%);font-size:1.85vw;line-height:1.3;"
        ></div>
        <div
          id="text-ribbon-2"
          style="position:absolute;top:85%;left:50%;transform:translate(-50%,-50%);font-size:1.75vw;font-weight:bold;line-height:1.3;color:#003399;"
        ></div>
      </div>
      <div style="height:1vh;"></div>
    </div>
    <div id="intro">
      <div id="introtext"></div>
    </div>
    <div id="slideshow">
      <b-carousel
        id="carousel-1"
        :interval="4000"
        fade
        controls
        indicators
        background="black"
        img-width="20"
        img-height="30"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://i.imgur.com/IsIjeE9.jpg">
          <!-- <p>President Halimah engaging in small talk with beneficiaries</p> -->
        </b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/TF8SwHM.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/FlQADY7.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/ByqJdCj.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/iaBREnTh.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/gXXzZ4Gh.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/stkcyfmh.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/6los8pfh.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/INAQ2mEh.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/LudW996h.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/Zn2SFtbh.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/bWPWD57h.jpg"></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/cGR94SKh.jpg"></b-carousel-slide>
        <!-- <b-carousel-slide img-src="https://i.imgur.com/S4v6lZE.jpg"><p>President Halimah Yacob handing out masks to Blossom Seeds' beneficiaries, supported by Youth Corps Singapore</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/774NWHz.jpg"><p>Beneficiary expressing gratitude to President Halimah for the gift of masks</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/9lZqaji.jpg"><p>Blossom Seeds Volunteers taking a selfie with President Halimah</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/tV50WJ8.jpg"><p>Group photo of Youth Corps Singapore members who came to help out</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/enV9on6.jpg"><p>Medical Escort & Transport Service supporting frail and needy seniors for medical appointments at hospitals</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/aNYWmzy.jpg"><p>Senior Management express heartfelt gratitude to President Halimah for gracing the event</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/MFQNaBN.jpg"><p>President Halimah engaging in small talk with beneficiaries</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/Kwjulno.jpg"><p>Blossom Seeds celebrates the successful handing out of masks to the elderly</p></b-carousel-slide>
        <b-carousel-slide img-src="https://i.imgur.com/kRqqgVW.jpg"><p>Distribution of daily necessities by the community to the the elderly</p></b-carousel-slide>-->
      </b-carousel>
    </div>
    <div id="GOH">
      <div id="GOHPhoto" style="padding-top:2vh;">
        <img src="../../assets/oykmp.png" id="OYK" />
      </div>
      <div id="GOHIntro">
        <div id="GOHheader">
          <span id="text-goh">Guest of Honour</span>
        </div>
        <span id="text-goh-intro"></span>
      </div>
      <br />
      <div id="text-goh-message"></div>
    </div>
    <div id="aboutFD">
      <div class="title">
        <span id="text-about-flag-day"></span>
        <br />
        <img src="../../assets/3dscia.com.url.png" id="underline" />
      </div>
    </div>
    <div id="streamevent">
      <div id="text-stream"></div>
    </div>
    <div id="register"></div>
    <div id="covidprep">
      <div class="title">
        <span id="text-support-towards-needy"></span>
        <br />
        <img src="../../assets/3dscia.com.url.png" id="underline" />
      </div>
    </div>
    <div id="text-covid-message"></div>
    <div id="aboutUs">
      <div class="title">
        <span id="text-section-our-story"></span>
        <br />
        <img src="../../assets/3dscia.com.url.png" id="underline" />
      </div>
      <div id="video">
        <!-- Note: Video should be preprocessed for streaming: https://superuser.com/a/438471/462430 -->
        <!-- <iframe src="https://drive.google.com/file/d/11Sa--vhcddjtZyXt8foKdDXnfLK4EJK2/preview" width="640" height="480"></iframe> -->
        <!-- <iframe id="videoiframe" width="560" height="315" src="https://www.youtube.com/embed/gYQUVp47gZs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
        <!-- <iframe id="videoiframe" width="560" height="315" src="https://www.youtube.com/embed/E86ygqR79lU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
        <iframe
          id="videoiframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PL7lDpUpxcvmUhW1Wru1BByUkX_wknoRFV&loop=1"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div id="descriptions">
      <div id="comments">
        <div id="comment1">
          <img class="comment" src="../../assets/comment1.png" />
          <div id="text-comment-1" class="text"></div>
        </div>
        <div id="comment2">
          <div id="text-comment-2" class="text"></div>
          <img class="comment" src="../../assets/comment2.png" />
        </div>
        <div id="comment3">
          <img class="comment" src="../../assets/comment3.png" />
          <div id="text-comment-3" class="text"></div>
        </div>
      </div>
      <div id="donationEffect">
        <div id="effectHeader">
          <span id="text-donation-effect-list"></span>
        </div>
        <ul>
          <li>
            <span id="text-donation-effect-list-1"></span>
          </li>
          <li>
            <span id="text-donation-effect-list-2"></span>
          </li>
          <li>
            <span id="text-donation-effect-list-3"></span>
          </li>
          <li>
            <span id="text-donation-effect-list-4"></span>
          </li>
          <li>
            <span id="text-donation-effect-list-5"></span>
          </li>
        </ul>
      </div>
    </div>
    <div id="aboutbsl">
      <div class="title">
        <span id="text-about-bsl"></span>
        <br />
        <img src="../../assets/3dscia.com.url.png" id="underline" />
      </div>
      <div id="aboutus">
        <div id="abouttext">
          <span id="text-about-bsl-content"></span>
        </div>
      </div>
    </div>
  </div>
</body>
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
    document.getElementById("storyBannerEn").style.display = "inline";
    document.getElementById("storyBannerCn").style.display = "none";
    document.getElementById("donate-image-en").style.display = "inline";
    document.getElementById("donate-image-cn").style.display = "none";
    document.getElementById("introtext").innerHTML =
      "When we are ill, we see the doctor.  When we broke our glasses, we made a trip to fix it.  These tasks that we take for granted could be a challenging one for our needy seniors who are wheel-chair bound, ill, low income and with little/no family support.";
    document.getElementById("text-goh").innerHTML = "Guest of Honour";
    document.getElementById("text-goh-intro").innerHTML =
      "Mr Ong Ye Kung<br />Minister for Transport and Grassroots Advisor to Sembawang GRC (Sembawang Central)";
    document.getElementById("text-goh-message").innerHTML =
      "In light of the ongoing Covid-19 pandemic, Blossom Seeds continue to assist these needy seniors by making essential services, such as their Medical Escort &amp; Transport service (MET) readily available to them.";
    document.getElementById("text-stream").innerHTML =
      "All our fundraising events have to be cancelled for 2020. For the first time, Blossom Seeds is organising an inaugural flag day to raise funds on social media.<br /><br />Flag off time : 7 November 2020, Saturday, 9am<br />Guest of Honour : Mr Ong Ye Kung,<br />Minister for Transport &amp Adviser to Sembawang GRC (Sembawang Central)<br />Venue : <a href='https://www.facebook.com/BlossomSeeds' target='_blank'>Blossom Seeds Facebook</a>";
    document.getElementById("text-about-flag-day").innerHTML =
      "About Flag Day 2020";
    document.getElementById("text-support-towards-needy").innerHTML =
      "Support towards Needy Seniors in COVID-19";
    document.getElementById("text-covid-message").innerHTML =
      "Medical appointments and treatments could not be postponed. For our senior beneficiaries who are already at risk of social isolation, COVID-19 puts them in greater risk. Our service to the Seniors continued throughout the Circuit Breaker.";
    document.getElementById("text-section-our-story").innerHTML = "Our Story";
    document.getElementById("text-comment-1").innerHTML =
      "&ldquo;I will not fly (commit suicide) because don’t want to let them (BSL) down who take care of us since 2015.&rdquo;";
    document.getElementById("text-comment-2").innerHTML =
      "&ldquo;Blossom Seeds has provided me with so much kindness and help. I no longer feel lonely and have more friends to talk to.&rdquo;";
    document.getElementById("text-comment-3").innerHTML =
      "&ldquo;With the help of BSL, I am able to carry out my daily activities happily instead of being confined to my house. Without them, I will not be happy.&rdquo;";
    document.getElementById("text-donation-effect-list").innerHTML =
      "Your donations will help us:";
    document.getElementById("text-donation-effect-list-1").innerHTML =
      "Supports our beneficiaries to receive treatment for their medical condition";
    document.getElementById("text-donation-effect-list-2").innerHTML =
      "Supports our beneficiaries with necessities such as getting a haircut, fixing their glasses and annual spring cleaning";
    document.getElementById("text-donation-effect-list-3").innerHTML =
      "Helps our beneficiaries to stay connected with the community and reduce the risk of social isolation and emotional distress";
    document.getElementById("text-donation-effect-list-4").innerHTML =
      "Allows the family member to work and not disrupting the income stream of the already low-income family";
    document.getElementById("text-donation-effect-list-5").innerHTML =
      "Encourages our beneficiaries to stay active by bringing them to our centre for activities or outings";
    document.getElementById("text-about-bsl").innerHTML =
      "About Blossom Seeds Limited";
    document.getElementById("text-about-bsl-content").innerHTML =
      "Singapore would not be where we are today without the strong foundation laid down by our seniors and it is with gratitude that we aspire to serve them in their golden years.<br /><br />Blossom Seeds Limited (BSL) was initially set up by volunteers from BW Monastery (Singapore) to support the needy seniors. The charity was registered as a company limited by guarantee in February 2013 and obtained charity status in April 2016 from the Ministry of Social and Family Development (MSF). It was later approved as an Institution of Public Character (IPC) on 1 February 2017. We also became a full member of National Council of Social Service (NCSS) in December 2016.";
    document.getElementById("text-ribbon-1").innerHTML =
      "First 500 to donate more than S$200 via the<br />EZ-Link Wallet will receive an EZ-Charm as a<br />token of appreciation.";
    document.getElementById("text-ribbon-2").innerHTML =
      "EZ-Link app users also stand to earn<br />EZ-Link Rewards points for every $0.10<br />donated!";
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
    document.getElementById("storyBannerEn").style.display = "none";
    document.getElementById("storyBannerCn").style.display = "inline";
    document.getElementById("donate-image-en").style.display = "none";
    document.getElementById("donate-image-cn").style.display = "inline";
    document.getElementById("introtext").innerHTML =
      "我们生病了，要去看医生；我们眼镜摔坏了时，要去修理。这些我们认为理所当然的事， 对于那些以轮椅代步， 患病和低收入且几乎没有家庭支持的老年人，却是具很大的挑战性。";
    document.getElementById("text-goh").innerHTML = "主宾";
    document.getElementById("text-goh-intro").innerHTML =
      "王乙康部长<br />交通兼三巴旺集选区议员";
    document.getElementById("text-goh-message").innerHTML =
      "在新冠肺炎疫情持续的情况下，福善继续通过提供必要的服务（例如为他们提供医疗护送服务（MET））来帮助这些有需要的老年人。";
    document.getElementById("text-stream").innerHTML =
      "由于我们2020年度所有的筹款活动都必须取消，所以福善首次举办网上售旗日活动，这也是我们首次在社交媒体上筹集资金。<br /><br />挥旗时间：2020年11月7日，星期六，上午9点<br />主宾：王乙康先生<br />交通兼三巴旺集选区议员<br />地点：<a href='https://www.facebook.com/BlossomSeeds' target='_blank'>福善面簿</a>";
    document.getElementById("text-about-flag-day").innerHTML = "关于售旗日2020";
    document.getElementById("text-support-towards-needy").innerHTML =
      "支持新冠肺炎大流行期间的贫困老人";
    document.getElementById("text-covid-message").innerHTML =
      "我们深知对于那些年长且面临社会隔离风险的老年人，复诊和治疗都是不能退迟的，新冠肺炎让他们面临更大的风险。因此，在整个阻断措施实施过程中，我们的团队跟义工们不顾自己的安危，坚持继续为老年人提供义务送诊服务。";
    document.getElementById("text-section-our-story").innerHTML = "我们的故事";
    document.getElementById("text-comment-1").innerHTML =
      "&ldquo;我不会飞（跳楼自杀），因为不想让自2015年以来照顾我们的人（福善）失望。&rdquo;";
    document.getElementById("text-comment-2").innerHTML =
      "&ldquo;福善给予我很多爱心和帮助。我不再感到孤独，有更多的朋友可以聊天。&rdquo;";
    document.getElementById("text-comment-3").innerHTML =
      "&ldquo;在福善的帮助下，我能够愉快地开展日常活动，而不再空对四壁，没有他们，我的生活将暗淡无望。&rdquo;";
    document.getElementById("text-donation-effect-list").innerHTML =
      "您的捐款将帮助我们：";
    document.getElementById("text-donation-effect-list-1").innerHTML =
      "支持我们受益的老年人得到妥当的医药治疗";
    document.getElementById("text-donation-effect-list-2").innerHTML =
      "为我们的老年人提供必须的支持，例如理发，修理眼镜和进行年度大扫除活动";
    document.getElementById("text-donation-effect-list-3").innerHTML =
      "帮助我们的老年人与社区保持联系，减少社交孤立和情绪困扰的风险";
    document.getElementById("text-donation-effect-list-4").innerHTML =
      "让低收入家庭的成员继续工作，减少对家庭的收入来源的影响";
    document.getElementById("text-donation-effect-list-5").innerHTML =
      "鼓励老年人保持活跃，将他们带到我们的中心进行对身心有益活动或带他们郊游";
    document.getElementById("text-about-bsl").innerHTML = "福善简介";
    document.getElementById("text-about-bsl-content").innerHTML =
      "没有前辈奠定的坚实基础，新加坡就没有繁荣的今天，我们感恩地希望在可以在前辈们的黄金岁月里为他们服务。<br /><br />福善（BSL）最初是由吉祥宝聚寺的义工们创立的，宗旨是为有需要的老年人提供服务。 我们在2013年2月注册为担保有限公司，2016年4月获得社会和家庭发展部（MSF）的慈善机构的资格，并于2017年2月1日被批准为公益机构（IPC）。我们也于2016年12月成为全国社会服务理事会（NCSS）的正式成员。";
    document.getElementById("text-ribbon-1").innerHTML =
      "首500位通过EZ-Link钱包捐款额超过200新元<br/>的善心人士将获赠小饰品EZ-Charm。";
    document.getElementById("text-ribbon-2").innerHTML =
      "EZ-Link应用程序用户每捐出0.10新元，<br/>即可获得一个EZ-Link奖励积分！";
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
  display: "Our Story",
  props: {
    msg: String,
  },
  data: function () {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      slide == slide;
      this.sliding = true;
    },
    onSlideEnd(slide) {
      slide == slide;
      this.sliding = false;
    },
  },
  // NOTE: Commented this out for performance:
  // - If we need to change a video after some date, it's better to change the
  //   source code & deploy again, rather than using JavaScript on client's
  //   browser to recompute the video src.
  mounted: function () {
    // var now = new Date();
    // //Change the date here, add more dates if required
    // var deadline = new Date("August 20, 2020 00:00:00");
    // if (now.valueOf() >= deadline.valueOf()) {
    var index = Math.floor(3 * Math.random());
    var videoIframeTag = document.getElementById("videoiframe");
    videoIframeTag.src =
      "https://www.youtube.com/embed/videoseries?list=PL7lDpUpxcvmUhW1Wru1BByUkX_wknoRFV&loop=1&index=" +
      index;
    console.log(videoIframeTag.src);

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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: circle;
}
a {
  color: #42b983;
}

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

/* TODO: More sophisticated detection possible!
 * https://stackoverflow.com/questions/15303172/can-i-do-image-orientation-detection-with-html-or-css
 */
.donate-image {
  width: 10vw;
}

/* https://tympanus.net/codrops/2013/11/07/css-overlay-techniques/ */
/* Technique #4 */
.overlay {
  position: fixed;
  bottom: 10vh;
  right: 6vw;
  z-index: 10;
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

#bannerTitle {
  font-size: 7vw;
  font-family: "Courgette";
  top: 30%;
  font-weight: 900;
}
#bannerSubtitle {
  font-family: "Miniver";
  font-size: 4vw;
  top: 70%;
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
  z-index: 99;
  margin: 0 auto;
  left: 0;
  right: 0;
  text-align: center;
}
.title {
  font-family: "Courgette";
  font-weight: lighter;
  font-size: 3vw;
  text-align: center;
}
#underline {
  width: 40vw;
  height: 2vw;
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
  width: 45%;
  text-align: left;
  padding-left: 2.5vw;
  font-size: 1.75vw;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  position: relative;
  padding-bottom: 5vw;
  padding-top: 5vw;
}

#GOHheader {
  font-weight: 650;
  padding-bottom: 1vw;
  font-size: 2vw;
}

#text-goh-message {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.75vw;
  width: 60%;
  margin-left: 19.5vw;
  margin-right: 19.5vw;
  padding-bottom: 3.5vw;
  text-align: justify;
  line-height: 3.5vw;
  padding-top: 3vw;
}
#video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 45%;
}
#video iframe {
  position: absolute;
  width: 80%;
  height: 100%;
  left: 10%;
  top: 0;
}
#bannerTop {
  color: white;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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

.comment {
  width: 15vw;
  height: 15vw;
  border-radius: 50%;
  display: inline-block;
}

#comments .text {
  display: inline-block;
  width: 60%;
  padding-left: 2vw;
  padding-right: 2vw;
}
#comments {
  display: inline-block;
  padding-left: 6vw;
  width: 50%;
  margin-bottom: 2vw;
  margin-top: 4vw;
}
#donationEffect {
  display: inline-block;
  position: absolute;
  width: 50%;
  font-size: 2vw;
  line-height: 2;
  padding-top: 4vh;
  padding-right: 6vw;
}

#comment1 .text {
  margin-left: 2vw;
  padding-top: 2vw;
}

#comment1 .comment {
  margin-top: -4vw;
}

#comment2 .text {
  padding-top: 4vw;
}

#comment2 .comment {
  margin-top: -6vw;
}

#comment3 .text {
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

#carousel-1 .carousel-item {
  height: auto;
  width: 90vw;
}

#comments .text {
  font-size: 1.5vw;
}

#effectHeader {
  font-weight: 625;
  margin-bottom: 1vw;
}

#donationEffect li {
  font-size: 1.5vw;
}

#covidprep {
  margin-top: 6vh;
}

#carousel-1 p {
  position: absolute;
  left: 20%;
  bottom: 5%;
  text-align: center;
  width: 60%;
  font-size: 1.5vw;
  -webkit-text-stroke: black;
  -webkit-text-stroke-width: 0.01px;
  font-weight: 525;
  background: rgb(138, 43, 226, 0.3);
}

body {
  background-color: #f1f1f1;
}

a:hover {
  text-decoration: none;
  color: #428e83;
}

#intro {
  margin-left: 9.5vw;
  margin-right: 9.5vw;
  padding-top: 2.5vw;
  padding-bottom: vw;
}

#introtext {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.75vw;
  text-align: justify;
  line-height: 3vw;
  padding-bottom: 3vw;
}

#aboutus {
  margin-left: 17.5vw;
  margin-right: 17.5vw;
  padding-top: 2.5vw;
  padding-bottom: 2.5vw;
}

#abouttext {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.75vw;
  text-align: justify;
  line-height: 3.2vw;
}

#aboutbsl #title {
  margin-top: 3vw;
}

#streamevent {
  text-align: center;
}
#text-stream {
  font-size: 2vw;
  padding-left: 19.5vw;
  padding-right: 19.5vw;
  text-align: justify;
  line-height: 3.5vw;
}

#text-covid-message {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 1.75vw;
  width: 60%;
  margin-left: 19.5vw;
  margin-right: 19.5vw;
  padding-bottom: 3.5vw;
  text-align: justify;
  line-height: 3.5vw;
}

#monastery {
  height: 20vw;
  padding-left: 10vw;
}

#partnersimg {
  padding-left: 15.5vw;
  padding-right: 15.5vw;
}
</style>
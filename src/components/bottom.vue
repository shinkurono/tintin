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
        <table class="bottom_table">
            <tr class="bottom_tr">
                <td class="bottom_td">Administered by</td>
                <td class="bottom_td">Member of</td>
                <td class="bottom_td">Sponsored by</td>
            </tr>
            <tr>
                <td><img style="width: 18vw;" src="../assets/logo_msf.jpg" /></td>
                <td><img style="width: 17vw;" src="../assets/logo_ncss.png" /></td>
                <td><img style="width: 12vw; padding-right: 3vw;" src="../assets/logo_bwmonastery.png" /><img style="width: 12vw;" src="../assets/logo_ezlink.png" /></td>
            </tr>
            <tr class="bottom_tr">
                <td span="3" class="bottom_td">Supported by</td>
            </tr>
            <tr class="bottom_tr">
                <td colspan="3">
                    <img style="width: 15vw; padding-right: 6vw;" src="../assets/logo_canberrass.png" />
                    <img style="width: 9vw; padding-bottom: 5px;" src="../assets/logo_assyafaahmosque.png" />
                    <img style="width: 35vw; padding-left: 10vw;" src="../assets/decorative-pixabay-abstract.png" />
                </td>
            </tr>
        </table>
        <div id='othercontact'>+65 6259-8614 • 105 Canberra Street, #02-01/06, S(750105) • UEN: 201304904N</div>
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
  padding-left: 5%;
  padding-right: 5%;
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

.bottom_table {
    width: 89vw;
    font-size: 1.5vw;
    border-color: 0px;
    background-color: white;
}

/* .bottom_tr {
} */

.bottom_td {
    padding: 5px 0px 5px 0px;
    margin: 0px;
}

</style>

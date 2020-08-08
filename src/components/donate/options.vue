<template>
    <div class="donations">
        <div id ="title">
            Donation Options
        </div>
        <div id="options">
            <nav>
                <div class="donation-tabs">
                    <span class="donation-tab"><router-link to="/paynow"><a>PayNow</a></router-link></span>            
                    <span class="donation-tab"><router-link to="/grabpay"><a>GrabPay</a></router-link></span>
                    <span class="donation-tab"><router-link to="/favepay"><a>favePay</a></router-link></span>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  display:"options",
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
.donations #title {
    background-color: plum;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 6vw;
    padding: 2vw;
    width: 100%;
    display: inline-block;
}

/** header tabs */
span {
    padding: 3%;
    padding-top: 70px;
    display: inline-block;
}

a {
    color: #24305E;
    font-size: 3.5vw;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

/* add bolding to tabs that are hovered */
a:hover{
    text-decoration: none;
    font-weight: bold;
}

.router-link-active {
    font-weight: bold;
}
</style>
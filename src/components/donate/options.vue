<template>
    <div class="donations">
        <div id ="title">
            Donation Options
        </div>
        <div id="options">
            <nav>
                <div class="donation-tabs">
                    <span class="donation-tab"><router-link to="/paynow"><a>PayNow</a></router-link></span>
                    <span class="donation-tab"><router-link to="/favepay"><a>favePay</a></router-link></span>
                    <span class="donation-tab"><router-link to="/ezlink"><a>EZ-Link</a></router-link></span>
                    <span class="donation-tab"><router-link to="/wechat"><a>WeChat</a></router-link></span>
                    <span class="donation-tab"><a href='https://www.giving.sg/blossom-seeds-limited_6157389/journeymadepossible' target="_blank">Giving.sg</a></span>
                    <span class="donation-tab"><a href='https://secure.squarespace.com/checkout/donate?donatePageId=5ccbf66f9140b7ce1e9e94fc&ss_cid=46c03cf4-3d07-4a4a-9cab-ddc1c147716f&ss_cvisit=1589423561448&ss_cvr=5cc08caf-51d7-4849-8a1e-63f96f22400e%7C1549025908366%7C1589421114627%7C1589423560794%7C284' target="_blank">
                    All major credit cards^</a></span>
                </div>
            </nav>
        </div>
        <div id='disclaimer'>^ A transaction fee of 3% ~ 3.5% is being charged by the payment gateway</div>
    </div>
</template>

<script>
export default {
  name: 'App',
  display:"options",
  props: {
    msg: String
  },
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

#disclaimer {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 1.5vw;
}

.donations {
  background-color: #ebebeb;
  text-align: center;
}
</style>
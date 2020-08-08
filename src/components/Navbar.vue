<template>
    <div class="headerStyle">
        <nav>
            <img alt="Blossom Seeds Logo" src="../assets/blossom-logo.png" width="200" height="172">
            <div class="header-tabs">
                <span class="header-tab"><router-link to="/story"><a>Our Story</a></router-link></span>            
                <span class="header-tab"><router-link to="/donate"><a>Donate</a></router-link></span>
                <span class="header-tab"><router-link to="/contact"><a>Contact Us</a></router-link></span>
            </div>
        </nav>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretDown);

export default {
};
</script>

<style scoped>
/** main header style */
.headerStyle {
    overflow: hidden;
    background: lightgray;
    padding: 20px;
    text-align: center;
    align-content: center;
    padding-bottom: 10px;
}

img {
    float: left;
}

/** header tabs */
span {
    padding: 3%;
    padding-top: 70px;
    display: inline-block;
}

a {
    color: #24305E;
    font-size: 3vw;
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
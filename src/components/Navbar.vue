<template>
  <div class="headerStyle">
    <img id="logo" alt="Blossom Seeds Logo" src="../assets/blossom-logo.png" />
    <div id="header-nav">
      <nav>
        <div class="header-tabs">
          <span class="header-tab">
            <router-link to="/story">
              <a>
                <span id="text-our-story"></span>
              </a>
            </router-link>
          </span>
          <span class="header-tab">
            <router-link to="/donate">
              <a>
                <span id="text-donate"></span>
              </a>
            </router-link>
          </span>
          <span class="header-tab">
            <router-link to="/contact">
              <a>
                <span id="text-contact-us"></span>
              </a>
            </router-link>
          </span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
library.add(faCaretDown);

export default {};
</script>

<style scoped>
/** main header style */
.headerStyle {
  overflow: hidden;
  background: lightgray;
  padding: 1%;
  text-align: center;
  align-content: center;
  padding-bottom: 0%;
}

#header-nav {
  vertical-align: bottom;
}

.header-tabs {
  margin: auto;
  width: 70%;
  /* transform: translate(0%, 0%); */
  vertical-align: bottom;
  /* border: 3px solid green; */
  padding: 10px;
}

.header-tab {
  width: 15%;
  padding-left: 5%;
  padding-right: 5%;
}

#logo {
  float: left;
  width: 12%;
}

#donateButton {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  float: right;
  z-index: 100;
}

a {
  color: #24305e;
  font-size: 3vw;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

/* add bolding to tabs that are hovered */
a:hover {
  text-decoration: none;
  font-weight: bold;
}

.router-link-active {
  font-weight: bold;
}
</style>
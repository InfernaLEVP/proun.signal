<template>
  <div class="pLogo">
    <img src="/images/ProunLogoWhite.svg" alt="">
  </div>
  <Player />
</template>

<script>
import Player from './components/Player.vue'

export default {
  name: 'App',
  data() {
    return {
      user: undefined,
      currentResolution: undefined,
      currentRoom: undefined 
    }
  },
  components: {
    Player,
  },
  methods: {
    setUser(dat){
      this.user = dat;
      console.log(this.user);
    },
    getUser(){
      console.log(this.user);
    }
  }
}
</script>

<style>
/* #region App styles */
:root{
  --btn-opacity: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.pLogo{
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  z-index: 99;
  width: 38%;
  max-width: 38%;
  margin: 0 auto;
  display: flex;
  pointer-events: none;
  opacity: 0;

  transition: opacity 1.2s;
}
.pLogo img{
  max-width: 100%!important;
}
@media (max-width: 992px){
  .pLogo{
    width: 62%;
    max-width: initial;
  }
}
/* #endregion */

/*  #region Preloader Animation */
.loadContainer{
  position: fixed;
  width: 100vw;
  height: 100vh;
  /* background: black; */
  z-index: 999;
  transition: opacity .25s;
}
.loader {
  height: 5px;
  width: 0px;
  background: #fff;
  position: absolute;
  /* transition: opacity .25s; */
  bottom: 0;
  left: 0;
  /* transform: translateY(-50%);  */
}
/*  #endregion */

/*  #region UE Player restyle */
#playButton{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#videoPlayOverlay{
  background: #000;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s;
  position: relative;
}
#videoPlayOverlay:before{
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  z-index: 10;
  background: url(/images/play-background.jpg);
  background-size: cover;
  opacity: 0;
  transition: opacity 0.5s;
}
#videoPlayOverlay.ready:before{
  opacity: 1;
}
#playButton-image{
  opacity: var(--btn-opacity);
  transition: all 0.4s;
  transition-delay: 0.5s;
  z-index: 999;

  max-width: 241px;
  width: 5%;
}
#playButton-image path{
  transition: fill .08s ease-in;
}
#playButton-image:hover path{
  fill: grey;
}
#playButton{
  width: 100%;
}
#videoPlayOverlay{
  background: black;
}
#overlaySettings{
  text-align: left;
}
@media(max-width: 992px) {
  #playButton-image{
    max-width: initial;
    width: 25%;
  }
}
/*  #endregion */

</style>

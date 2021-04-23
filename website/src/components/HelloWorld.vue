<template>
  <div id="playerUI">
		<div id="player"></div>
		<div id="overlay" class="overlay">
			<div>
				<div id="qualityStatus" class="greyStatus"></div>
				<div id="overlayButton">+</div>
			</div>
			<div id="overlaySettings">
				<div id="KickOthers">
					<div class="settings-text">Kick all other players</div>
					<label class="btn-overlay">
						<input type="button" id="kick-other-players-button" class="overlay-button btn-flat" value="Kick">
					</label>
				</div>
                <div id="FillWindow">
                    <div class="settings-text">Enlarge Display to Fill Window</div>
                    <label class="tgl-switch">
                        <input type="checkbox" id="enlarge-display-to-fill-window-tgl" class="tgl tgl-flat" checked>
                        <div class="tgl-slider"></div>
                    </label>
                </div>
                <div id="QualityControlOwnership">
                    <div class="settings-text">Quality control ownership</div>
                    <label class="tgl-switch">
                        <input type="checkbox" id="quality-control-ownership-tgl" class="tgl tgl-flat">
                        <div class="tgl-slider"></div>
                    </label>
                </div>
				<div id="statsSetting"> 
					<div class="settings-text">Show Stats</div>
					<label class="tgl-switch">
						<input type="checkbox" id="show-stats-tgl" class="tgl tgl-flat" checked>
						<div class="tgl-slider"></div>
					</label>
					<div id="statsContainer">
						<div id="stats"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="logo">
			<img src="/images/ProunLogoWhite.svg" alt="">
		</div>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    load() //eslint-disable-line

    addResponseEventListener("auth", myHandleAuthResponse); //eslint-disable-line
	addResponseEventListener("locationChange", myHandleLocationResponse); //eslint-disable-line

	setTimeout(() => {
		try{
			if(window.gallery < 1){
				document.querySelector('#videoPlayOverlay').click();

				setTimeout(() => {

						window.prevW = window.innerWidth;

						setTimeout(() => {
							setInterval(() => {
								if(window.prevW !== window.innerWidth){
									setRes(window.innerWidth, window.innerHeight); //eslint-disable-line
									window.prevW = window.innerWidth;
								}
							}, 1000);
							setRes(window.innerWidth, window.innerHeight); //eslint-disable-line
						}, 4000);

				}, 600);
				window.gallery = 5;
			}
		}catch{} 	// eslint-disable-line
	}, 3500)

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#streamingVideo{
  position: static!important;
}
video{
	position: static!important;
}
</style>

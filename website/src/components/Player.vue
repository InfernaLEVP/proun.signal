<template>
  <div id="playerUI">
		<div id="player"></div>
		<div id="overlay" class="overlay">
			<div>
				<div id="qualityStatus" class="greyStatus">●</div>
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
	</div>
</template>

<script>
export default {
  name: 'Player',
  mounted() {
    load()

    addResponseEventListener("auth", myHandleAuthResponse);
	addResponseEventListener("locationChange", myHandleLocationResponse);

	setTimeout(() => {
		try{
			if(window.gallery < 1){

				setTimeout(() => {

						window.prevW = window.innerWidth;
						window.prevH = window.innerHeight;

						setTimeout(() => {
							setInterval(() => {
								if(window.prevW !== window.innerWidth || window.prevH !== window.innerHeight){
									setRes(window.innerWidth, window.innerHeight);
									window.prevW = window.innerWidth;
									window.prevH = window.innerHeight;
								}
							}, 1000);
							setRes(window.innerWidth, window.innerHeight);
						}, 4000);

				}, 600);
				window.gallery = 5;
			}
		}catch(e){
			console.log(e);
		}
	}, 3500)

  }
}
</script>

<style scoped>
#streamingVideo{
  position: static!important;
}
video{
	position: static!important;
}
</style>

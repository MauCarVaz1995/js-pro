import MediaPlayer from "./mediaplayer.js";
import AutoPlay from "./plugins/AutoPlay";

const video = document.querySelector("video");
const player = new MediaPlayer({el: video, plugins : [
    new AutoPlay()]});

const button = document.querySelector("button");
button.onclick = () => player.togglePlay();


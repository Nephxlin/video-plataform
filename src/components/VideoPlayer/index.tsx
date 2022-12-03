import { Media, Video } from "@vidstack/player-react";
import "@vidstack/player/hydrate.js";

interface VideoPlayerProps{
  srcPath: string
  posterImage:string
}

export default function VideoPlayer(props: VideoPlayerProps) {
  return (
    <Media>
      <Video fullscreen controls poster={props.posterImage}>
        <video
          controlsList="nodownload"
          src={props.srcPath}
          data-video="0"
        />
      </Video>
    </Media>
  );
}

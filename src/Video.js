import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

const Video = () => {
    const { id } = useParams();
    const [video, setVideo] = useState(null);

    useEffect(() => {
        fetch('http://192.168.1.133:4000/videos/' + id)
        .then(res => {
            return res.json();
        })
         .then(data => {
            console.log(data);
            setVideo(data);
        });
    }, [id]);

    const onKeyPress = useCallback((e) => {
        switch (e.key) {
            case "MediaPlayPause": case "Enter": case "Spacebar":
                if (e.target.paused) {
                    e.target.play();
                } else {
                    e.target.pause();
                }
                break;
            case "MediaRecord":
                e.target.webkitRequestFullScreen();
                break;
            case "MediaRewind": case "ArrowLeft":
                e.target.currentTime -= 10;
                break;
            case "MediaFastForward": case "ArrowRight":
                e.target.currentTime += 10;
                break;
            default:
                break;
        }

    }, []);
    
    // window.addEventListener('keydown', onKeyPress(document.getElementsByClassName('VideoDetails')));

    return ( 
        <div className='VideoDetails'>
             { video && <video className="video" onKeyDown={ (e) => onKeyPress(e) } src={ "http://192.168.1.133:4000" + video.path } height="100%" width="100%" controls /> }
        </div>
    );
}
 
export default Video;
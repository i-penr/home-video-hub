import { useCallback, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const VideoList = ({ videos }) => {

    const mainRef = useRef(null);

    function handleFocus() {
        mainRef.current && mainRef.current.focus();
    }

    useEffect(() => {
        handleFocus();
    }, [mainRef]);

    const onKeyPress = useCallback((e) => {
        const downKeys = ["ArrowDown", "MediaFastForward"];
        const upKeys = ["ArrowUp", "MediaRewind"];

        if (upKeys.includes(e.key) && e.target.id > 0) {
            document.getElementById(e.target.id - 1).focus();
            document.getElementById(e.target.id - 1).scrollIntoView({ behavior: "smooth", block: "center"});
        } else if (downKeys.includes(e.key) && e.target.id < videos.length-1) {
            document.getElementById(Number(e.target.id) + 1).focus();
            document.getElementById(Number(e.target.id) + 1).scrollIntoView({ behavior: "smooth", block: "center"});
        }

    }, [videos]);

        
    return (
        <div className="videoList">
            { videos.map((vid, index) => (
                <div className="seasonList" key={vid._id}>
                    { vid.episodeNumber === 1 && <h1>Temporada {vid.season}</h1> }
                    <Link id={ index } tabIndex="0" className="link" onKeyDown={(e) => onKeyPress(e)} ref={ index === 0 ? mainRef : null} to={ `/videos/${vid._id}` }>
                        <div className="videoPreview">
                            <h2>{ vid.name }</h2>
                            <h3>{ vid.season + "x" + vid.episodeNumber }</h3>
                            <p>{ vid.show }</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}
 
export default VideoList;
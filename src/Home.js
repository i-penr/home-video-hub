import React, { useEffect, useState } from 'react';
import VideoList from './VideoList';

function Home() {

  const [videos, setVideos] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://192.168.1.133:4000/videos")
    .then(res => {
      return res.json();
    })
    .then(data => {
      setIsLoaded(true);
      setVideos(data.sort((a, b) => {
        const keyA = Number(a.season);
        const keyB = Number(b.season);

        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      }));
    });
  }, []);

  return (
    <div className='Home'>
        <h1>Inicio</h1>
        { !isLoaded && <h3>Cargando...</h3>}
        { videos && <VideoList videos={ videos } /> }
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import backgroundImage from '../assets/background.png';
import './App.css';
import { VideoPlayerContainer } from './VideoPlayerContainer';

const HOST = 'http://localhost:3001';

/**
 * Video player: https://vimejs.com/components/providers/video
 */
export const App = () => {
    const [posterUrl, setPosterUrl] = useState<string>();

    const getVideoPoster = async () => {
        const res = await fetch(`${HOST}/segments-poster`);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        setPosterUrl(url);
    };

    useEffect(() => {
        getVideoPoster();
    }, []);

    return (
        <>
            <div className="image-container">
                <img className="image" src={backgroundImage} alt="some info" />
            </div>
            <VideoPlayerContainer title="Segments">
                <video poster={posterUrl} width="400" height="300" preload="auto" controls>
                    <source src={`${HOST}/segments-list`} type="application/x-mpegURL" />
                </video>
            </VideoPlayerContainer>

            <VideoPlayerContainer title="Chunks">
                <video width="400" height="300" controls>
                    <source src={`${HOST}/video-chunk`} type="video/mp4" />
                </video>
            </VideoPlayerContainer>

            <VideoPlayerContainer title="File">
                <video src={`${HOST}/video-file`} width="400" height="300" controls>
                    <source data-src={`${HOST}/video-file`} type="video/mp4" />
                </video>
            </VideoPlayerContainer>
        </>
    );
};

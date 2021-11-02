import React from 'react';

export const VideoPlayerContainer: React.FC<{ title: string }> = ({ title, children }) => {
    return (
        <div className="container">
            <h1 className="title">{title}</h1>
            <div className="player-container">
                {children}
            </div>
        </div>
    );
};

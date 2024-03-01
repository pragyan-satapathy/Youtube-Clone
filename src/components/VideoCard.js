import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info
    const { channelTitle, title, thumbnails } = snippet
    return (
        <div className='p-2 m-2 w-52 shadow-lg'>
            <img className='rounded-lg' alt='thumnail' src={thumbnails.medium.url} />
            <ul>
                <li className='font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    )
}

export default VideoCard
import React from 'react'
import './ImageFrame.css'

export default function ImageFrame({src}) {
    return (
        <div class="container">
            <div class="poster">
                <img src={src} />
            </div>
        </div>
    )
}
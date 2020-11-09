import React from 'react'
import './HeroSection.css'
import { Link } from 'react-router-dom'


export default function HeroSection() {
    return (
        <div className="hero-container">
            <h1>It is gone in a blink of a second.</h1>
            <p>Never forget the moments and save your video link here!</p>
            <div className="hero-btns">
                <button className="btn btn-primary btn--large btn--outline">
                    <Link to="/VideoForm" className="link-btn">
                    Share the link!
                    </Link>
                    </button>
            </div>
        </div>
    )
}

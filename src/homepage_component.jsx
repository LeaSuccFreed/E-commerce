import React from 'react';

import './Pages/homepage/homepage_style.scss'

const HomePage = () => (
    <div className="hompage">
        <div className='directory-menu'>
            <div className="menu-item">
                <div className="content">
                    <h1 className="title">HATS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">SNEAKERS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">WOMENS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>

            <div className="menu-item">
                <div className="content">
                    <h1 className="title">MENS</h1>
                    <span className="subtitle">Shop Now</span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePage;
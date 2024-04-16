import React from 'react';
import './MainCard.css';

function MainCard() {
    return (
        <div className="maincard-area">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6">
                    <div className='main-card' >
                    <div className="card-body">
                        <h1>Hai 1</h1>
                    </div>
                    </div>
                </div>
                <div className="col-10 col-lg-6  main-card-2">
                    <img src="./main-bnr-img.jpg" className='img-fluid main-card-image' alt="main-banner-img" />
                </div>
            </div>
        </div>
    )
}

export default MainCard
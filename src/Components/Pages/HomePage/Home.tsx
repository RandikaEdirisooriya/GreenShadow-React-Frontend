import React from 'react';
import './Home.css';
import HeaderContainer from '../../HeadersContainer/HeaderContainer';
import BodyContainer from '../../BodyContainer/BodyContainer';

function Home() {
    return (
        <div>
          
            <BodyContainer>
                <div className="content">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2>Home</h2>
                        <span id="current-time" className="header-time"></span>
                    </div>

                    {/* Glass Cards */}
                    <div className="glass-cards">
                        <div className="glass-card">
                            <h4 style={{ display: 'flex', alignItems: 'center', margin: '0', color: 'gold' }}>
                                Staff : <span id="staffcount" style={{ fontSize: '2.5rem', color: '#0cda67' }}>10</span>
                            </h4>
                        </div>
                        <div className="glass-card">
                            <h4 style={{ display: 'flex', alignItems: 'center', margin: '0', color: 'gold' }}>
                                Field : <span id="fieldcount" style={{ fontSize: '2.5rem', color: '#0cda67' }}>0</span>
                            </h4>
                        </div>
                        <div className="glass-card">
                            <h4 style={{ display: 'flex', alignItems: 'center', margin: '0', color: 'gold' }}>
                                Vehicle : <span id="vehiclecount" style={{ fontSize: '2.5rem', color: '#0cda67' }}>0</span>
                            </h4>
                        </div>
                        <div className="glass-card">
                            <h4 style={{ display: 'flex', alignItems: 'center', margin: '0', color: 'gold' }}>
                                Equipment : <span id="equipmentcount" style={{ fontSize: '2.5rem', color: '#0cda67' }}>0</span>
                            </h4>
                        </div>
                        <div className="glass-card">
                            <h4 style={{ display: 'flex', alignItems: 'center', margin: '0', color: 'gold' }}>
                                Crop : <span id="cropcount" style={{ fontSize: '2.5rem', color: '#0cda67' }}>0</span>
                            </h4>
                        </div>
                    </div>

                 
                </div>
            </BodyContainer>
        </div>
    );
}

export default Home;

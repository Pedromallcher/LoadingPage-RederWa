import React, { useState, useEffect } from 'react';
import Mobile from '../pages/mobile/HomePage/homePageMobile';
import Desktop from '../pages/desktop/HomePage/HomePageDesktop';

function HomePage() {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); 
    };

    useEffect(() => {
       
        handleResize(); 

        
        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? <Mobile /> : <Desktop />}
        </div>
    );
}

export default HomePage;

